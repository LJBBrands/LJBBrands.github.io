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
        storyImage: { src: "/projects/awy/current/lounge-orlando-demo.png" },
      },
    );

    expect(getSlideHeroImage(split).src).toMatch(/lounges-discovery\.png$/);
    expect(getSlideStoryImage(split).src).toMatch(/lounge-orlando-demo\.png$/);
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

  it("keeps current Home and Studio wired to the existing pre-framed captures", () => {
    const home = slideById("home");
    const studio = slideById("personalization");

    expect(getSlideHeroImage(home).src).toMatch(/current\/home\.png$/);
    expect(getSlideStoryImage(home).src).toMatch(/current\/home\.png$/);
    expect(getSlideHeroImage(home).presentation).toBe("device");
    expect(getSlideStoryImage(studio).src).toMatch(/current\/studio\.png$/);
    expect(getSlideHeroImage(studio).src).toMatch(/current\/studio\.png$/);
    expect(getSlideStoryImage(studio).presentation).toBe("device");
  });

  it("keeps interim Lounge and Strings srcs on existing files until drop-in", () => {
    const lounges = slideById("community");
    const strings = slideById("private-connection");
    const reserved = reservedCurrentAssetFiles();

    expect(getSlideHeroImage(lounges).src).toMatch(
      /awy-lounge-car-culture-dark\.jpg$/,
    );
    expect(getSlideStoryImage(lounges).src).toMatch(
      /awy-lounge-car-culture-dark\.jpg$/,
    );
    expect(getSlideHeroImage(strings).src).toMatch(
      /awy-string-privacy-controls-dark\.jpg$/,
    );
    expect(getSlideStoryImage(strings).src).toBe(
      getSlideHeroImage(strings).src,
    );

    for (const file of reserved) {
      expect(getSlideHeroImage(lounges).src).not.toContain(file);
      expect(getSlideStoryImage(lounges).src).not.toContain(file);
      expect(getSlideHeroImage(strings).src).not.toContain(file);
      expect(existsSync(join(publicAwy, file))).toBe(false);
    }
  });

  it("reserves the approved alt text for the future current captures", () => {
    expect(AWY_RESERVED_CURRENT_ASSETS.loungesDiscovery.alt).toBe(
      "Awy Lounges discovery showing live and featured communities.",
    );
    expect(AWY_RESERVED_CURRENT_ASSETS.loungeOrlandoDemo.alt).toBe(
      "Illustrative Awy Lounge conversation in Orlando Attractions.",
    );
    expect(AWY_RESERVED_CURRENT_ASSETS.stringsDemo.alt).toBe(
      "Illustrative private conversation in Awy Strings.",
    );
    expect(AWY_RESERVED_CURRENT_ASSETS.loungeOrlandoDemo.alt).not.toMatch(
      /real users|active users|live conversation/i,
    );
    expect(AWY_RESERVED_CURRENT_ASSETS.stringsDemo.alt).not.toMatch(
      /real users|active users|live conversation/i,
    );
    expect(AWY_STRINGS_DEMO_COPY.peerHandle).toBe("@demo.riley");
    expect(AWY_LOUNGE_DEMO_COPY.title).toBe("Orlando Attractions");
  });

  it("documents the Home/Studio pre-framed pixel contract", () => {
    expect(AWY_CURRENT_ASSET_CONTRACT).toMatchObject({
      width: 704,
      height: 1554,
      presentation: "device",
    });
    expect(isPreframedPresentation("device")).toBe(true);
    expect(isPreframedPresentation("preframed")).toBe(true);
    expect(isPreframedPresentation(undefined)).toBe(false);
  });
});
