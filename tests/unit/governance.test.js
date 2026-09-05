import { describe, expect, it } from "vitest";
import { PUBLIC_EMAIL } from "../../src/data/contact";
import {
  PUBLIC_EMAIL as scriptEmail,
  readRepoFile,
} from "../../scripts/lib/repo.mjs";
import {
  checkEnvironmentFiles,
  checkRequiredFiles,
  checkPinnedVersions,
} from "../../scripts/doctor.mjs";
import { checkSeoSources } from "../../scripts/check-seo.mjs";
import { scanText } from "../../scripts/check-secrets.mjs";
import { checkStaticPage } from "../../scripts/check-a11y.mjs";

describe("autonomy foundation", () => {
  it("keeps the published inbox and toolchain pins", () => {
    expect(PUBLIC_EMAIL).toBe("K.Bousquet92@pm.me");
    expect(scriptEmail).toBe(PUBLIC_EMAIL);
    expect(checkRequiredFiles()).toEqual([]);
    expect(checkPinnedVersions()).toEqual([]);
  });

  it("rejects local environment variants but permits a documented example", () => {
    expect(
      checkEnvironmentFiles([
        ".env",
        ".env.local",
        "config/.env.production",
        ".env.example",
      ]),
    ).toEqual([
      "Do not keep environment file .env in the workspace",
      "Do not keep environment file .env.local in the workspace",
      "Do not keep environment file config/.env.production in the workspace",
    ]);
  });

  it("requires a human-merge pull request template", () => {
    const template = readRepoFile(".github/PULL_REQUEST_TEMPLATE.md");
    expect(template).toMatch(/human must approve and merge/i);
    expect(template).toMatch(/K\.Bousquet92@pm\.me/);
  });

  it("keeps production deployment manual, main-only, and commit-pinned", () => {
    const workflow = readRepoFile(".github/workflows/deploy.yml");
    const actionRefs = [...workflow.matchAll(/uses:\s+\S+@(\S+)/g)].map(
      (match) => match[1],
    );

    expect(workflow).toMatch(/workflow_dispatch:/);
    expect(workflow).not.toMatch(/\n\s+push:/);
    expect(workflow).toContain("github.ref == 'refs/heads/main'");
    expect(actionRefs).toHaveLength(4);
    for (const ref of actionRefs) {
      expect(ref).toMatch(/^[0-9a-f]{40}$/);
    }
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

  it("keeps the social-app Terms current without silently redating Privacy", () => {
    const terms = readRepoFile("public/terms/index.html");
    const privacy = readRepoFile("public/privacy/index.html");

    expect(terms).toContain("Last updated: September 5, 2026");
    expect(terms).toContain("Prohibited Content and Conduct");
    expect(terms).toContain("Reports, Blocks, and Moderation");
    expect(terms).toContain("Copyright Complaints");
    expect(terms).toContain("Account Deletion and Termination");
    expect(privacy).toContain("Last updated: August 26, 2026");
    expect(privacy).not.toContain("Last updated: September 5, 2026");
  });
});
