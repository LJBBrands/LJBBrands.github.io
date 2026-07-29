/*
  Central destination URLs for the public LJB Media Group ecosystem.
  Confirmed public profiles only — do not invent unverified destination URLs.
*/

export const destinationUrls = {
  instagram: "https://www.instagram.com/rt345lc/",
  kick: "https://kick.com/ljbrewind",
  github: "https://github.com/LJBBrands",
  support: "#support",
};

export const ecosystemSection = {
  kicker: "Destinations",
  title: "Explore the Ecosystem.",
  description:
    "Follow, watch LIVE, read, contribute, and support the projects that make up LJB Media Group.",
};

/**
 * @typedef {"camera" | "live" | "book" | "code" | "spark"} DestinationIconName
 * @typedef {"external" | "hash" | "project"} DestinationAction
 */

/** @type {Array<{
 *  id: string,
 *  title: string,
 *  description: string,
 *  cta: string,
 *  href: string | null,
 *  external: boolean,
 *  icon: DestinationIconName,
 *  action: DestinationAction,
 *  projectId?: string,
 *  ariaLabel: string,
 * }>} */
export const destinations = [
  {
    id: "instagram",
    title: "Instagram",
    description:
      "Follow RT345LC, behind-the-scenes updates, project moments, short-form content, and announcements for upcoming LIVE sessions.",
    cta: "Follow on Instagram",
    href: destinationUrls.instagram,
    external: true,
    icon: "camera",
    action: "external",
    ariaLabel: "Open RT345LC on Instagram",
  },
  {
    id: "kick",
    title: "Kick",
    description:
      "Watch LJB Rewind LIVE for podcasts, LEGO builds, unboxings, community conversations, development sessions, and project updates.",
    cta: "Watch LIVE on Kick",
    href: destinationUrls.kick,
    external: true,
    icon: "live",
    action: "external",
    ariaLabel: "Open LJB Rewind LIVE on Kick",
  },
  {
    id: "hemlock-hollow",
    title: "Hemlock Hollow",
    description:
      "A woman returns home after new evidence surfaces in her twin sister’s disappearance, uncovering secrets buried beneath Hemlock Hollow.",
    cta: "Explore the Story",
    href: null,
    external: false,
    icon: "book",
    action: "project",
    projectId: "hemlock-hollow",
    ariaLabel: "Explore the Hemlock Hollow story",
  },
  {
    id: "github",
    title: "GitHub",
    description:
      "Explore public repositories, open-source work, development progress, and technical projects from LJB Media Group.",
    cta: "View GitHub",
    href: destinationUrls.github,
    external: true,
    icon: "code",
    action: "external",
    ariaLabel: "Open LJB Brands on GitHub",
  },
  {
    id: "support",
    title: "Support the Mission",
    description:
      "Help support independent software, media, books, automotive storytelling, and future LJB creative projects.",
    cta: "Support LJB",
    href: destinationUrls.support,
    external: false,
    icon: "spark",
    action: "hash",
    ariaLabel: "Support the LJB Media Group mission",
  },
];

/** Destinations surfaced inside the LJB Rewind project dialog. */
export const rewindDialogDestinations = [
  {
    id: "instagram",
    title: "Instagram",
    description:
      "Short-form content, project updates, announcements, clips, automotive content, and notices for upcoming LIVE sessions.",
    cta: "Follow on Instagram",
    href: destinationUrls.instagram,
    icon: "camera",
    external: true,
    ariaLabel: "Open RT345LC on Instagram",
  },
  {
    id: "kick",
    title: "Kick",
    description:
      "Full LIVE podcasts, LEGO builds, unboxings, community discussions, development sessions, and long-form broadcasts.",
    cta: "Watch LIVE on Kick",
    href: destinationUrls.kick,
    icon: "live",
    external: true,
    ariaLabel: "Open LJB Rewind LIVE on Kick",
  },
];

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
    id: "kick",
    label: "Kick",
    href: destinationUrls.kick,
    external: true,
    ariaLabel: "Open LJB Rewind LIVE on Kick",
  },
  {
    id: "github",
    label: "GitHub",
    href: destinationUrls.github,
    external: true,
    ariaLabel: "Open LJB Brands on GitHub",
  },
];

export function getDestinationById(id) {
  return destinations.find((item) => item.id === id) ?? null;
}

export function getDestinationGridItemClass(index, total) {
  const classes = ["destination-grid-item"];

  // Desktop: first three share a 3-col row; final two share a full-width 2-col row.
  if (total === 5 && index >= 3) {
    classes.push("destination-grid-item--desktop-half");
  }

  // Tablet: odd final card spans the full row.
  if (total % 2 === 1 && index === total - 1) {
    classes.push("destination-grid-item--tablet-full");
  }

  return classes.join(" ");
}
