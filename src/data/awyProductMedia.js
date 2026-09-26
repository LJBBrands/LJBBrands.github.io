/**
 * Homepage product-media contract for Awy.
 *
 * `presentation: "device"` means the file already includes iPhone chrome
 * (pre-framed). ProductMedia must NOT wrap those assets in DeviceFrame.
 * `presentation: "preframed"` is an accepted alias for the same path.
 *
 * Reserved current-capture paths are documented here for drop-in. Do not
 * point rendered `src` at them until the derived files exist.
 */

export const AWY_PREFRAMED_PRESENTATIONS = Object.freeze([
  "device",
  "preframed",
]);

export const AWY_CURRENT_ASSET_CONTRACT = Object.freeze({
  width: 704,
  height: 1554,
  presentation: "device",
  directory: "current/",
});

export const AWY_RESERVED_CURRENT_ASSETS = Object.freeze({
  loungesDiscovery: Object.freeze({
    file: "current/lounges-discovery.png",
    label: "Lounges",
    alt: "Awy Lounges discovery showing live and featured communities.",
    slideId: "community",
    field: "heroImage",
    surfaces: Object.freeze(["hero"]),
  }),
  loungeOrlandoDemo: Object.freeze({
    file: "current/lounge-orlando-demo.png",
    label: "Orlando Attractions",
    alt: "Illustrative Awy Lounge conversation in Orlando Attractions.",
    slideId: "community",
    field: "storyImage",
    surfaces: Object.freeze(["story"]),
  }),
  stringsDemo: Object.freeze({
    file: "current/strings-demo.png",
    label: "Strings",
    alt: "Illustrative private conversation in Awy Strings.",
    slideId: "private-connection",
    field: "heroImage",
    sharedField: "storyImage",
    surfaces: Object.freeze(["hero", "story"]),
  }),
});

export const AWY_STRINGS_DEMO_COPY = Object.freeze({
  peerName: "Riley",
  peerHandle: "@demo.riley",
  messages: Object.freeze([
    Object.freeze({
      speaker: "Riley",
      text: "You still thinking about Saturday?",
    }),
    Object.freeze({
      speaker: "You",
      text: "Yeah, I’m in. What time are you heading over?",
    }),
    Object.freeze({ speaker: "Riley", text: "Probably around 6." }),
    Object.freeze({
      speaker: "You",
      text: "Perfect. Send me a message when you’re leaving.",
    }),
    Object.freeze({ speaker: "Riley", text: "Will do." }),
  ]),
});

export const AWY_LOUNGE_DEMO_COPY = Object.freeze({
  title: "Orlando Attractions",
  messages: Object.freeze([
    Object.freeze({
      speaker: "Maya",
      text: "Anyone going to the parks this weekend?",
    }),
    Object.freeze({
      speaker: "Jordan",
      text: "Thinking about Saturday morning.",
    }),
    Object.freeze({
      speaker: "Alex",
      text: "Same — probably starting at Islands.",
    }),
    Object.freeze({
      speaker: "Maya",
      text: "Nice. I’m trying to get there before it gets busy.",
    }),
    Object.freeze({ speaker: "Jordan", text: "Early crew it is." }),
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
