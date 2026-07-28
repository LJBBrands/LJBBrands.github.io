/*
  Central destination URLs for the public LJB Media Group ecosystem.
  Confirmed public profiles only — do not invent unverified destination URLs.
*/

export const destinationUrls = {
  youtube: "https://www.youtube.com/@LJBRewind",
  kick: "https://kick.com/ljbrewind",
  twitch: "https://www.twitch.tv/ljbrewind",
  github: "https://github.com/LJBBrands",
  support: "#support",
};

export const ecosystemSection = {
  kicker: "Destinations",
  title: "Explore the Ecosystem.",
  description:
    "Watch, read, stream, contribute, and follow the projects that make up LJB Media Group.",
};

/**
 * @typedef {"play" | "live" | "chat" | "book" | "code" | "spark"} DestinationIconName
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
    id: "youtube",
    title: "YouTube",
    description:
      "Watch podcasts, builds, reviews, road trips, unboxings, LEGO projects, and behind-the-scenes stories.",
    cta: "Watch on YouTube",
    href: destinationUrls.youtube,
    external: true,
    icon: "play",
    action: "external",
    ariaLabel: "Open LJB Rewind on YouTube",
  },
  {
    id: "kick",
    title: "Kick",
    description:
      "Join live conversations, community hangouts, development sessions, and real-time updates.",
    cta: "Watch Live",
    href: destinationUrls.kick,
    external: true,
    icon: "live",
    action: "external",
    ariaLabel: "Open LJB Rewind on Kick",
  },
  {
    id: "twitch",
    title: "Twitch",
    description:
      "Watch gaming streams, community nights, creator sessions, and future GTA VI content.",
    cta: "Watch on Twitch",
    href: destinationUrls.twitch,
    external: true,
    icon: "chat",
    action: "external",
    ariaLabel: "Open LJB Rewind on Twitch",
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
      "Help support independent software, media, books, and the next generation of LJB creative projects.",
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
    id: "youtube",
    title: "YouTube",
    cta: "YouTube",
    href: destinationUrls.youtube,
    icon: "play",
    external: true,
    ariaLabel: "Open LJB Rewind on YouTube",
  },
  {
    id: "kick",
    title: "Kick",
    cta: "Kick",
    href: destinationUrls.kick,
    icon: "live",
    external: true,
    ariaLabel: "Open LJB Rewind on Kick",
  },
  {
    id: "twitch",
    title: "Twitch",
    cta: "Twitch",
    href: destinationUrls.twitch,
    icon: "chat",
    external: true,
    ariaLabel: "Open LJB Rewind on Twitch",
  },
];

export function getDestinationById(id) {
  return destinations.find((item) => item.id === id) ?? null;
}
