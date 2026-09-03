/*
  Central destination URLs for the public LJB Media Group ecosystem.
  Confirmed public profiles only — do not invent unverified destination URLs.
*/

export const destinationUrls = {
  instagram: "https://www.instagram.com/rt345lc/",
  github: "https://github.com/LJBBrands",
};

export const ecosystemSection = {
  kicker: "Instagram",
  title: "A Personal Look Behind the Work.",
  description:
    "Cars, creative projects, and the everyday progress behind LJB Media Group — shared personally on Instagram.",
};

export const instagramProfile = {
  handle: "@RT345LC",
  href: destinationUrls.instagram,
  title: "Cars, projects, and the story behind the work.",
  description:
    "Follow along for automotive photography, behind-the-scenes project updates, creative work, and a more personal view of what is being built at LJB Media Group.",
  cta: "Follow on Instagram",
  ariaLabel: "Open RT345LC on Instagram",
  hero: `${import.meta.env.BASE_URL}projects/rt345lc/rt345lc-hero.webp`,
  topics: ["Automotive", "Behind the Scenes", "Project Updates"],
};

/** Restrained footer platform links. */
export const footerPlatformLinks = [
  {
    id: "instagram",
    label: "Instagram",
    href: destinationUrls.instagram,
    external: true,
    ariaLabel: "Open RT345LC on Instagram",
  },
  {
    id: "github",
    label: "GitHub",
    href: destinationUrls.github,
    external: true,
    ariaLabel: "Open LJB Brands on GitHub",
  },
];
