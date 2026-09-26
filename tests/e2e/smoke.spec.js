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

    await page
      .locator(".visual-hero")
      .getByRole("link", { name: "Explore Awy" })
      .click();

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
      .getByRole("heading", { name: "Here’s what connection looks like." })
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

test.describe("product presentation", () => {
  test("shows ProductStory and keeps the project-directory card retired", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Here’s what connection looks like." }),
    ).toBeVisible();
    await expect(
      page.getByRole("region", { name: "What you can do with Awy" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "A place for what brings you together.",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Your starting point in Awy." }),
    ).toBeVisible();
    await expect(page.getByText("03 / HOME")).toBeVisible();
    await expect(
      page.locator(".story-kicker", { hasText: "LIVE PRESENCE" }),
    ).toHaveCount(0);
    await expect(
      page.getByRole("img", {
        name: "Awy Home on iPhone, showing profile shortcuts, notification shortcuts, and Top Lounges",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", {
        name: "Awy Profile Studio on iPhone, with accent colors and profile presets",
      }),
    ).toBeVisible();
    await expect(page.locator(".product-story .device-capture")).toHaveCount(2);
    await expect(page.locator(".product-story .device-frame")).toHaveCount(2);

    await expect(
      page.getByRole("button", { name: "View Awy project" }),
    ).toHaveCount(0);
    await expect(page.getByText("Explore The App Preview")).toHaveCount(0);
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });
});

test.describe("consumer navigation", () => {
  test("desktop nav reaches Questions and the waitlist", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(nav.getByRole("link", { name: "Explore Awy" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Questions" })).toBeVisible();
    await expect(
      nav.getByRole("link", { name: "Join the Waitlist" }),
    ).toBeVisible();
    await expect(nav.getByRole("link", { name: "Investors" })).toHaveCount(0);

    await nav.getByRole("link", { name: "Questions" }).click();
    await expect(
      page.getByRole("heading", { name: "A Little More About Awy." }),
    ).toBeInViewport();

    await nav.getByRole("link", { name: "Join the Waitlist" }).click();
    await expect(
      page.getByRole("form", { name: "Waitlist inquiry" }),
    ).toBeInViewport();
  });

  test("mobile menu reaches Questions and the waitlist", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = page.getByRole("navigation", { name: "Mobile" });
    await expect(menu.getByRole("link", { name: "Explore Awy" })).toBeVisible();
    await expect(menu.getByRole("link", { name: "Questions" })).toBeVisible();
    await expect(
      menu.getByRole("link", { name: "Join the Waitlist" }),
    ).toBeVisible();

    await menu.getByRole("link", { name: "Questions" }).click();
    await expect(menu).toHaveCount(0);
    await expect(
      page.getByRole("heading", { name: "A Little More About Awy." }),
    ).toBeInViewport();

    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("navigation", { name: "Mobile" })
      .getByRole("link", { name: "Join the Waitlist" })
      .click();
    await expect(
      page.getByRole("heading", { name: "Be Part Of What’s Next." }),
    ).toBeInViewport();
    await expect(
      page.getByRole("form", { name: "Waitlist inquiry" }),
    ).toBeVisible();
  });
});

const PUBLIC_EMAIL = "dev.ljbmedia@gmail.com";

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
        .getByRole("link", { name: `Contact Awy at ${PUBLIC_EMAIL}` })
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
        name: `Contact Awy at ${PUBLIC_EMAIL}`,
      }),
    ).toHaveAttribute(
      "href",
      new RegExp(`^mailto:${PUBLIC_EMAIL.replaceAll(".", "\\.")}`),
    );

    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    expect(jsonLd).toContain(`"email": "${PUBLIC_EMAIL}"`);
    expect(jsonLd).toContain("SoftwareApplication");
    expect(jsonLd).toContain('"name": "Awy"');
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
    await expect(
      page.getByText("Last updated: September 5, 2026"),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: PUBLIC_EMAIL }).first(),
    ).toHaveAttribute("href", `mailto:${PUBLIC_EMAIL}`);
  });
});

test.describe("legal page metadata", () => {
  test("declares self-referential canonical URLs on privacy and terms", async ({
    page,
  }) => {
    await page.goto("/privacy/");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://ljbbrands.github.io/privacy/",
    );

    await page.goto("/terms/");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://ljbbrands.github.io/terms/",
    );
  });
});

test("hero screen choices work with the keyboard and preserve waitlist navigation", async ({
  page,
}) => {
  await page.goto("/");
  const choices = page.getByRole("group", { name: "Explore Awy screens" });
  const conversations = choices.getByRole("button", {
    name: "Your conversations",
  });
  await conversations.focus();
  await page.keyboard.press("Enter");
  await expect(conversations).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#hero-screen img")).toHaveAttribute(
    "alt",
    "Awy String privacy controls in a dark theme",
  );
  await expect(page.locator("#hero-screen .device-frame")).toHaveCount(1);

  const home = choices.getByRole("button", { name: "Home" });
  await home.click();
  await expect(home).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#hero-screen img")).toHaveAttribute(
    "alt",
    "Awy Home on iPhone, showing profile shortcuts, notification shortcuts, and Top Lounges",
  );
  await expect(page.locator("#hero-screen img")).toHaveAttribute(
    "src",
    /current\/home\.png$/,
  );
  await expect(page.locator("#hero-screen .device-capture")).toHaveCount(1);
  await expect(page.locator("#hero-screen .device-frame")).toHaveCount(0);
  await page
    .locator(".visual-hero")
    .getByRole("link", { name: "Join the Waitlist" })
    .click();
  await expect(
    page.getByRole("form", { name: "Waitlist inquiry" }),
  ).toBeVisible();
});
