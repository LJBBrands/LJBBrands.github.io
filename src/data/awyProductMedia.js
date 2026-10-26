/**
 * Homepage product-media contract for Awy.
 *
 * `presentation: "device"` means the file already includes iPhone chrome
 * (pre-framed). ProductMedia must NOT wrap those assets in DeviceFrame.
 * `presentation: "preframed"` is an accepted alias for the same path.
 *
 * Current device captures are screen-only. Legacy pre-framed media
 * remains supported, while hero and story may use separate assets.
 */

export const AWY_PREFRAMED_PRESENTATIONS = Object.freeze([
  "device",
  "preframed",
]);

export const AWY_CURRENT_ASSET_CONTRACT = Object.freeze({
  width: 840,
  height: 1824,
  presentation: "screen",
  directory: "iphone-air-2026-10/",
});

export function isPreframedPresentation(presentation) {
  return AWY_PREFRAMED_PRESENTATIONS.includes(presentation);
}

export function getSlideHeroImage(slide) {
  return slide?.heroImage || slide?.image || null;
}

export function getSlideStoryImage(slide) {
  return slide?.storyImage || slide?.heroImage || slide?.image || null;
}

export function attachSurfaceMedia(slide, surfaces = {}) {
  const heroImage =
    surfaces.heroImage ?? slide.heroImage ?? slide.image ?? null;
  const storyImage =
    surfaces.storyImage ?? slide.storyImage ?? heroImage ?? slide.image ?? null;

  return {
    ...slide,
    heroImage,
    storyImage,
    image: slide.image ?? storyImage ?? heroImage,
  };
}
