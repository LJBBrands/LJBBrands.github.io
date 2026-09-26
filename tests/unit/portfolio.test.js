import { describe, expect, it } from "vitest";
import { faqItems } from "../../src/data/awyContent";
import {
  getAppProjects,
  getListedProjects,
  getProjectById,
  navItems,
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

  it("uses consumer-facing Awy navigation", () => {
    expect(navItems).toEqual([
      { label: "Explore Awy", href: "#projects" },
      { label: "Questions", href: "#questions" },
      { label: "Join the Waitlist", href: "#get-involved" },
    ]);
  });

  it("does not market retired product pillars", () => {
    const awy = getProjectById("awy");
    const highlights = awy?.highlights ?? [];

    expect(highlights).toEqual([
      "Home",
      "Strings",
      "Lounges",
      "Live Presence",
      "Profiles",
      "Profile Studio",
    ]);
    expect(highlights).not.toEqual(
      expect.arrayContaining(["Shared Areas", "Verified Signals", "Pulse"]),
    );
  });

  it("uses pre-framed current Home and Studio captures", () => {
    const slides = getProjectById("awy")?.showcase?.slides ?? [];
    const home = slides.find((slide) => slide.id === "home");
    const studio = slides.find((slide) => slide.id === "personalization");
    const lounges = slides.find((slide) => slide.id === "community");
    const strings = slides.find((slide) => slide.id === "private-connection");

    expect(home?.image?.src).toMatch(/current\/home\.png$/);
    expect(home?.image?.presentation).toBe("device");
    expect(studio?.image?.src).toMatch(/current\/studio\.png$/);
    expect(studio?.image?.presentation).toBe("device");
    expect(lounges?.image?.src).toMatch(/awy-lounge-car-culture-dark\.jpg$/);
    expect(lounges?.image?.presentation).toBeUndefined();
    expect(strings?.image?.src).toMatch(
      /awy-string-privacy-controls-dark\.jpg$/,
    );
    expect(strings?.image?.presentation).toBeUndefined();
  });

  it("keeps parked FAQ copy aligned with current product language", () => {
    const text = faqItems
      .map((item) => `${item.question} ${item.answer}`)
      .join(" ");

    expect(text).not.toMatch(/Shared Areas|Verified Signals|\bPulse\b/);
  });
});
