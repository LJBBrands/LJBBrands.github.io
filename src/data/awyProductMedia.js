/**
 * Homepage product-media contract for Awy.
 *
 * `presentation: "device"` means the file already includes iPhone chrome
 * (pre-framed). ProductMedia must NOT wrap those assets in DeviceFrame.
 * `presentation: "preframed"` is an accepted alias for the same path.
 *
 * Current approved captures are screen-only. Legacy pre-framed media
 * remains supported, while hero and story may use separate assets.
 */

export const AWY_PREFRAMED_PRESENTATIONS = Object.freeze([
  "device",
  "preframed",
]);

export const AWY_CURRENT_ASSET_CONTRACT = Object.freeze({
  width: 943,
  height: 2048,
  presentation: "screen",
  directory: "current/",
});

export const AWY_RESERVED_CURRENT_ASSETS = Object.freeze({
  loungesDiscovery: Object.freeze({
    file: "current/lounges-discovery.png",
    label: "Lounges — Discovery",
    alt: "Awy Lounges discovery with categories and a featured Support Lounge in a blue and violet theme",
    slideId: "community",
    field: "heroImage",
    surfaces: Object.freeze(["hero"]),
  }),
  loungeDemo: Object.freeze({
    file: "current/lounge-demo.png",
    label: "Lounge — Demo conversation",
    alt: "Awy Local Hangout Lounge with a fictional Sunday-walk conversation; demo content",
    slideId: "community",
    field: "storyImage",
    surfaces: Object.freeze(["story"]),
  }),
  stringsDemo: Object.freeze({
    file: "current/strings-demo.png",
    label: "Strings — Demo conversation",
    alt: "Awy Strings with a fictional Sunday-walk conversation between Jamie and Alex; demo content",
    slideId: "private-connection",
    field: "heroImage",
    sharedField: "storyImage",
    surfaces: Object.freeze(["hero", "story"]),
  }),
});

export const AWY_STRINGS_DEMO_COPY = Object.freeze({
  peerName: "Jamie",
  peerHandle: "@jamie_demo",
  messages: Object.freeze([
    Object.freeze({
      speaker: "Alex",
      text: "Hey! Up for a quiet walk on Sunday?",
    }),
    Object.freeze({
      speaker: "Jamie",
      text: "Sounds good. Shall we meet at the park?",
    }),
    Object.freeze({
      speaker: "Alex",
      text: "Perfect. Around 5 PM works for me!",
    }),
    Object.freeze({ speaker: "Jamie", text: "Lovely. See you there!" }),
  ]),
});

export const AWY_LOUNGE_DEMO_COPY = Object.freeze({
  title: "Local Hangout",
  messages: Object.freeze([
    Object.freeze({
      speaker: "Jamie",
      text: "Anyone up for a quiet walk this weekend?",
    }),
    Object.freeze({
      speaker: "Alex",
      text: "Sunday sounds lovely. Maybe the park?",
    }),
    Object.freeze({
      speaker: "Sam",
      text: "Count me in. No rush, just fresh air.",
    }),
  ]),
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

export function reservedCurrentAssetFiles() {
  return Object.values(AWY_RESERVED_CURRENT_ASSETS).map((asset) => asset.file);
}
