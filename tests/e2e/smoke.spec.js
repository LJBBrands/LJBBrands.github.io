import { expect, test } from "@playwright/test";

const VIEWPORTS = [
  { name: "phone", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
];

async function collectedCss(page) {
  return page.evaluate(() =>
    [...document.styleSheets]
      .flatMap((sheet) => {
        try {
          return [...sheet.cssRules].map((rule) => rule.cssText);
        } catch {
          return [];
        }
      })
      .join("\n"),
  );
}

test.describe("homepage smoke", () => {
  for (const viewport of VIEWPORTS) {
    test(`has no horizontal overflow at ${viewport.name} ${viewport.width}x${viewport.height}`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.goto("/");
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));

      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
    });
  }

  test("includes safe-area CSS for the header, menu, and dialog", async ({
    page,
  }) => {
    await page.goto("/");
    const css = await collectedCss(page);

    expect(css).toContain("safe-area-inset-top");
    expect(css).toContain("safe-area-inset-right");
    expect(css).toContain("safe-area-inset-bottom");
    expect(css).toContain("safe-area-inset-left");

    const headerPadding = await page
      .locator(".site-header")
      .evaluate((node) => getComputedStyle(node).paddingTop);
    expect(headerPadding).toMatch(/^\d+(\.\d+)?px$/);
  });

  test("uses instant section scrolling when reduced motion is requested", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    await page.evaluate(() => {
      window.__scrollBehaviors = [];
      const original = Element.prototype.scrollIntoView;
      Element.prototype.scrollIntoView = function scrollIntoViewSpy(options) {
        window.__scrollBehaviors.push(options);
        return original.call(this, options);
      };
    });

    await page.getByRole("link", { name: "Explore Projects" }).click();

    const behaviors = await page.evaluate(() => window.__scrollBehaviors);
    expect(
      behaviors.some((options) => options && options.behavior === "auto"),
    ).toBe(true);
  });
});

test.describe("mobile menu", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("opens, moves focus, restores the trigger, and keeps 44px targets", async ({
    page,
  }) => {
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toBeVisible();

    const menuBox = await menuButton.boundingBox();
    expect(menuBox?.width).toBeGreaterThanOrEqual(44);
    expect(menuBox?.height).toBeGreaterThanOrEqual(44);

    await menuButton.click();
    await expect(
      page.getByRole("navigation", { name: "Mobile" }),
    ).toBeVisible();
    await expect(page.locator("#mobile-nav a").first()).toBeFocused();

    const firstLinkBox = await page
      .locator("#mobile-nav a")
      .first()
      .boundingBox();
    expect(firstLinkBox?.height).toBeGreaterThanOrEqual(44);

    await page.keyboard.press("Escape");
    await expect(page.getByRole("navigation", { name: "Mobile" })).toHaveCount(
      0,
    );
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  });

  test("restores page scroll after the menu closes", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("heading", { name: "Three Products. Built With Purpose." })
      .scrollIntoViewIfNeeded();
    const before = await page.evaluate(() => window.scrollY);
    expect(before).toBeGreaterThan(50);

    await page
      .getByRole("button", { name: "Open menu" })
      .click({ force: true });
    await expect(
      page.getByRole("navigation", { name: "Mobile" }),
    ).toBeVisible();
    await page
      .getByRole("button", { name: "Close menu" })
      .click({ force: true });

    await page.waitForFunction(
      (expected) => Math.abs(window.scrollY - expected) < 2,
      before,
    );
  });
});

test.describe("project dialog", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("contains focus, handles Escape, and restores the trigger", async ({
    page,
  }) => {
    await page.goto("/");

    const trigger = page.getByRole("button", { name: "View Awy project" });
    await trigger.click();

    const dialog = page.getByRole("dialog", { name: "Awy" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("button", { name: "Close" })).toBeFocused();

    await page.keyboard.press("Tab");
    const focusStayedInside = await page.evaluate(() => {
      const panel = document.querySelector('[role="dialog"]');
      return Boolean(panel && panel.contains(document.activeElement));
    });
    expect(focusStayedInside).toBe(true);

    const siteIsInert = await page.evaluate(() => {
      const site = document.getElementById("site-content");
      return Boolean(
        site?.inert || site?.getAttribute("aria-hidden") === "true",
      );
    });
    expect(siteIsInert).toBe(true);

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await expect(trigger).toBeFocused();
  });

  test("restores page scroll after the dialog closes", async ({ page }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "View Awy project" });
    await trigger.scrollIntoViewIfNeeded();
    const before = await page.evaluate(() => window.scrollY);
    expect(before).toBeGreaterThan(50);

    await trigger.click({ force: true });
    await expect(page.getByRole("dialog", { name: "Awy" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);

    const after = await page.evaluate(() => window.scrollY);
    expect(after).toBeGreaterThan(50);
    expect(Math.abs(after - before)).toBeLessThan(80);
  });

  test("stays usable in a short mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 560 });
    await page.goto("/");
    await page.getByRole("button", { name: "View Awy project" }).click();

    const dialog = page.getByRole("dialog", { name: "Awy" });
    await expect(dialog).toBeVisible();

    const box = await dialog.boundingBox();
    expect(box).toBeTruthy();
    expect(box.height).toBeLessThanOrEqual(568);
    expect(box.y).toBeGreaterThanOrEqual(-1);
    expect(box.y + box.height).toBeLessThanOrEqual(568);

    const body = dialog.locator(".project-dialog__body");
    await expect(body).toBeVisible();
    await body.evaluate((node) => {
      node.scrollTop = 80;
    });
    await expect(dialog.getByRole("button", { name: "Close" })).toBeVisible();
    await dialog.getByRole("button", { name: "Close" }).click();
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });
});

const PUBLIC_EMAIL = "K.Bousquet92@pm.me";

test.describe("public contact", () => {
  test("shows the approved email in contact, footer, and metadata", async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    await page.goto("/");
    await expect(
      page
        .getByRole("link", { name: `Email LJB Media Group at ${PUBLIC_EMAIL}` })
        .first(),
    ).toBeVisible();
    await expect(page.locator(".contact-primary-action__email")).toHaveText(
      PUBLIC_EMAIL,
    );
    await expect(
      page.locator(".contact-primary-action__email"),
    ).toHaveAttribute(
      "href",
      new RegExp(`^mailto:${PUBLIC_EMAIL.replaceAll(".", "\\.")}`),
    );
    await expect(
      page.getByRole("navigation", { name: "Department contacts" }),
    ).toHaveCount(0);

    const footer = page.locator("footer");
    await expect(footer.getByText(PUBLIC_EMAIL, { exact: true })).toBeVisible();
    await expect(
      footer.getByRole("link", {
        name: `Email LJB Media Group at ${PUBLIC_EMAIL}`,
      }),
    ).toHaveAttribute(
      "href",
      new RegExp(`^mailto:${PUBLIC_EMAIL.replaceAll(".", "\\.")}`),
    );

    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    expect(jsonLd).toContain(`"email": "${PUBLIC_EMAIL}"`);
    expect(jsonLd).not.toMatch(/@ljbbrands\.com/);
    expect(errors).toEqual([]);
  });

  test("uses the approved email on privacy and terms pages", async ({
    page,
  }) => {
    await page.goto("/privacy/");
    await expect(page.getByText("Last updated: August 26, 2026")).toBeVisible();
    await expect(
      page.getByRole("link", { name: PUBLIC_EMAIL }).first(),
    ).toHaveAttribute("href", `mailto:${PUBLIC_EMAIL}`);

    await page.goto("/terms/");
    await expect(page.getByText("Last updated: August 26, 2026")).toBeVisible();
    await expect(
      page.getByRole("link", { name: PUBLIC_EMAIL }).first(),
    ).toHaveAttribute("href", `mailto:${PUBLIC_EMAIL}`);
  });
});
