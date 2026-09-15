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
  it("lists Awy as the only active app", () => {
    expect(getAppProjects().map((project) => project.name)).toEqual(["Awy"]);
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

  it("removes retired apps from lookup and public listings", () => {
    expect(getProjectById("arclia")).toBeNull();
    expect(getProjectById("arbor")).toBeNull();
  });

  it("preserves the active app icon card format", () => {
    const apps = getAppProjects();

    expect(
      apps.every((project) => project.visual?.cardStyle === "app-icon"),
    ).toBe(true);
    expect(
      apps.every((project) => project.visual?.logo || project.visual?.icon),
    ).toBe(true);
  });

  it("preserves the approved Awy icon", () => {
    const awy = getProjectById("awy");

    expect(awy?.visual?.icon).toMatch(/awy-app-icon-v3\.webp$/);
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
