import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  AWY_CURRENT_ASSET_CONTRACT,
  AWY_LOUNGE_DEMO_COPY,
  AWY_RESERVED_CURRENT_ASSETS,
  AWY_STRINGS_DEMO_COPY,
  attachSurfaceMedia,
  getSlideHeroImage,
  getSlideStoryImage,
  isPreframedPresentation,
  reservedCurrentAssetFiles,
} from "../../src/data/awyProductMedia";
import { getProjectById } from "../../src/data/projects";

const publicAwy = join(process.cwd(), "public/projects/awy");

function slideById(id) {
  return getProjectById("awy")?.showcase?.slides.find(
    (slide) => slide.id === id,
  );
}

describe("Awy product media contract", () => {
  it("lets Lounge use different hero and story assets", () => {
    const split = attachSurfaceMedia(
      { id: "community" },
      {
        heroImage: { src: "/projects/awy/current/lounges-discovery.png" },
        storyImage: { src: "/projects/awy/current/lounge-demo.png" },
      },
    );

    expect(getSlideHeroImage(split).src).toMatch(/lounges-discovery\.png$/);
    expect(getSlideStoryImage(split).src).toMatch(/lounge-demo\.png$/);
    expect(getSlideHeroImage(split).src).not.toBe(
      getSlideStoryImage(split).src,
    );
  });

  it("lets Strings share one asset across hero and story", () => {
    const shared = {
      src: "/projects/awy/current/strings-demo.png",
      alt: AWY_RESERVED_CURRENT_ASSETS.stringsDemo.alt,
    };
    const strings = attachSurfaceMedia(
      { id: "private-connection" },
      { heroImage: shared, storyImage: shared },
    );

    expect(getSlideHeroImage(strings)).toBe(getSlideStoryImage(strings));
    expect(getSlideHeroImage(strings).src).toMatch(/strings-demo\.png$/);
  });

  it("uses current Home and Appearance screen captures", () => {
    const home = slideById("home");
    const studio = slideById("personalization");

    expect(getSlideHeroImage(home).src).toMatch(
      /current\/home-2026-10-01\.png$/,
    );
    expect(getSlideStoryImage(home).src).toMatch(
      /current\/home-2026-10-01\.png$/,
    );
    expect(getSlideHeroImage(home).width).toBe(943);
    expect(getSlideStoryImage(studio).src).toMatch(
      /current\/appearance\.webp$/,
    );
    expect(getSlideHeroImage(studio).src).toMatch(/current\/appearance\.webp$/);
    expect(getSlideStoryImage(studio).width).toBe(943);
  });

  it("uses separate current Lounge surfaces and labeled Strings demos", () => {
    const lounges = slideById("community");
    const strings = slideById("private-connection");
    expect(getSlideHeroImage(lounges).src).toMatch(
      /current\/lounges-discovery\.png$/,
    );
    expect(getSlideStoryImage(lounges).src).toMatch(
      /current\/lounge-demo\.png$/,
    );
    expect(getSlideHeroImage(strings).src).toMatch(
      /current\/strings-demo\.png$/,
    );
    expect(getSlideStoryImage(strings)).toBe(getSlideHeroImage(strings));
    expect(getSlideStoryImage(lounges).demo).toBe(true);
    expect(getSlideHeroImage(strings).demo).toBe(true);
    for (const file of reservedCurrentAssetFiles()) {
      expect(existsSync(join(publicAwy, file))).toBe(true);
    }
  });

  it("describes the actual current captures and approved fictional content", () => {
    expect(AWY_RESERVED_CURRENT_ASSETS.loungesDiscovery.alt).toBe(
      "Awy Lounges discovery with categories and a featured Support Lounge in a blue and violet theme",
    );
    expect(AWY_RESERVED_CURRENT_ASSETS.loungeDemo.alt).toBe(
      "Awy Local Hangout Lounge with a fictional Sunday-walk conversation; demo content",
    );
    expect(AWY_RESERVED_CURRENT_ASSETS.stringsDemo.alt).toBe(
      "Awy Strings with a fictional Sunday-walk conversation between Jamie and Alex; demo content",
    );
    expect(AWY_RESERVED_CURRENT_ASSETS.loungeDemo.alt).not.toMatch(
      /real users|active users|live conversation/i,
    );
    expect(AWY_RESERVED_CURRENT_ASSETS.stringsDemo.alt).not.toMatch(
      /real users|active users|live conversation/i,
    );
    expect(AWY_STRINGS_DEMO_COPY.peerHandle).toBe("@jamie_demo");
    expect(AWY_LOUNGE_DEMO_COPY.title).toBe("Local Hangout");
  });

  it("documents current dimensions and preserves legacy framing support", () => {
    expect(AWY_CURRENT_ASSET_CONTRACT).toMatchObject({
      width: 943,
      height: 2048,
      presentation: "screen",
    });
    expect(isPreframedPresentation("device")).toBe(true);
    expect(isPreframedPresentation("preframed")).toBe(true);
    expect(isPreframedPresentation(undefined)).toBe(false);
  });
});
