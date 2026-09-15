import { describe, expect, it } from "vitest";
import {
  getAppProjects,
  getListedProjects,
  getProjectById,
} from "../../src/data/projects";

describe("public portfolio", () => {
  it("lists Awy as the only active app", () => {
    expect(getAppProjects().map((project) => project.name)).toEqual(["Awy"]);
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

  it("has no other projects in the public directory", () => {
    expect(getListedProjects().map((project) => project.id)).toEqual(["awy"]);
  });
});
