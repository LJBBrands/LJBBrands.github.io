import { describe, expect, it } from "vitest";
import {
  getAppProjects,
  getListedProjects,
  getProjectById,
  getStudioProjects,
} from "../../src/data/projects";
import {
  destinationUrls,
  footerPlatformLinks,
  instagramProfile,
} from "../../src/data/ecosystem";

describe("public portfolio", () => {
  it("leads with the three approved apps", () => {
    expect(getAppProjects().map((project) => project.name)).toEqual([
      "Awy",
      "Arclia",
      "Arbor",
    ]);
    expect(getStudioProjects().map((project) => project.name)).toEqual([
      "Give Love Co.",
      "Hemlock Hollow",
    ]);
  });

  it("removes retired standalone media and automotive projects", () => {
    const ids = getListedProjects().map((project) => project.id);

    expect(ids).not.toContain("ljb-rewind");
    expect(ids).not.toContain("rt345lc");
  });

  it("describes Arclia as an AI academy with guided learning and a sandbox", () => {
    const arclia = getProjectById("arclia");

    expect(arclia?.status).toBe("In Development");
    expect(arclia?.description).toMatch(/AI|artificial intelligence/i);
    expect(arclia?.description).toMatch(/sandbox/i);
    expect(arclia?.highlights).toContain("Beginner to Advanced");
  });

  it("publishes the approved Give Love Co. Fall 2026 drop", () => {
    const giveLove = getProjectById("give-love-co");

    expect(giveLove?.status).toBe("Coming Fall 2026");
    expect(giveLove?.visual?.dropLabel).toBe("COMING FALL 2026 · LIMITED DROP");
    expect(giveLove?.highlights).toEqual(
      expect.arrayContaining(["Hoodies", "Shirts", "Limited Drop"]),
    );
  });

  it("uses Instagram as the only public social platform", () => {
    expect(instagramProfile.href).toBe("https://www.instagram.com/rt345lc/");
    expect(destinationUrls).not.toHaveProperty("kick");
    expect(footerPlatformLinks.map((link) => link.id)).toEqual([
      "instagram",
      "github",
    ]);
  });
});
