import { describe, expect, it } from "vitest";
import { PUBLIC_EMAIL } from "../../src/data/contact";
import {
  checkRequiredFiles,
  checkPinnedVersions,
} from "../../scripts/doctor.mjs";
import { checkSeoSources } from "../../scripts/check-seo.mjs";
import { scanText } from "../../scripts/check-secrets.mjs";
import { checkStaticPage } from "../../scripts/check-a11y.mjs";

describe("autonomy foundation", () => {
  it("keeps the published inbox and toolchain pins", () => {
    expect(PUBLIC_EMAIL).toBe("K.Bousquet92@pm.me");
    expect(checkRequiredFiles()).toEqual([]);
    expect(checkPinnedVersions()).toEqual([]);
  });

  it("enforces homepage SEO structure and the public email", () => {
    expect(checkSeoSources()).toEqual([]);
  });

  it("flags unexpected emails and ignores the published inbox", () => {
    expect(scanText(`contact ${PUBLIC_EMAIL}`, "src/data/contact.js")).toEqual(
      [],
    );
    expect(scanText("hello@not-ljb.example", "src/data/contact.js")[0]).toMatch(
      /unexpected email/,
    );
  });

  it("requires a main landmark and one h1 on static legal HTML", () => {
    const html =
      '<html lang="en"><head><title>Privacy</title></head><body><main><h1>Privacy</h1></main></body></html>';
    expect(checkStaticPage(html, "dist/privacy/index.html")).toEqual([]);
    expect(
      checkStaticPage(
        "<html><title>x</title><h1>a</h1><h1>b</h1>",
        "dist/x.html",
      ).length,
    ).toBeGreaterThan(0);
  });
});
