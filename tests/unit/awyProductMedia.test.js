import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  AWY_CURRENT_ASSET_CONTRACT,
  attachSurfaceMedia,
  getSlideHeroImage,
  getSlideStoryImage,
  isPreframedPresentation,
} from "../../src/data/awyProductMedia";
import { getProjectById } from "../../src/data/projects";

describe("Awy product media contract", () => {
  it("preserves separate hero and story media support", () => {
    const heroImage = { src: "/hero.webp" };
    const storyImage = { src: "/story.webp" };
    const slide = attachSurfaceMedia({}, { heroImage, storyImage });
    expect(getSlideHeroImage(slide)).toBe(heroImage);
    expect(getSlideStoryImage(slide)).toBe(storyImage);
  });
  it("provides authentic, correctly sized previews with responsive assets", () => {
    for (const slide of getProjectById("awy").showcase.slides) {
      const shot = getSlideStoryImage(slide);
      expect(shot.src).toMatch(/iphone-air-2026-10\/[a-z]+-840\.webp$/);
      expect(shot).toMatchObject({ width: 840, height: 1824, preview: true });
      expect(shot.demo).toBeUndefined();
      expect(shot.label).toContain("iPhone Air development preview");
      expect(shot.alt).toContain("iPhone Air");
      for (const candidate of shot.srcSet.split(", ")) {
        const [src, width] = candidate.split(" ");
        expect(["420w", "840w"]).toContain(width);
        expect(existsSync(join(process.cwd(), "public", src))).toBe(true);
      }
      expect(getSlideHeroImage(slide)).toBe(shot);
    }
  });
  it("excludes unfinished features and edited demo screenshots", () => {
    expect(JSON.stringify(getProjectById("awy"))).not.toMatch(
      /guest posts|all themes|unlimited themes|no second approval|voice memo|strings-demo|lounge-demo|current\//i,
    );
    expect(getProjectById("awy").showcase.slides.map((s) => s.id)).toEqual([
      "community",
      "home",
      "canvas",
    ]);
  });
  it("preserves screen dimensions and legacy framing support", () => {
    expect(AWY_CURRENT_ASSET_CONTRACT).toMatchObject({
      width: 840,
      height: 1824,
      presentation: "screen",
    });
    expect(isPreframedPresentation("device")).toBe(true);
    expect(isPreframedPresentation("preframed")).toBe(true);
    expect(isPreframedPresentation(undefined)).toBe(false);
  });
});
