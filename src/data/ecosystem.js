/*
  Central destination URLs for the public LJB Media Group ecosystem.
  Update href values here when official channel pages are published.
  Do not invent unverified social profile URLs.
*/

export const destinationUrls = {
  youtube: "mailto:hello@ljbbrands.com?subject=LJB%20YouTube%20Inquiry",
  kick: "mailto:hello@ljbbrands.com?subject=LJB%20Kick%20Inquiry",
  twitch: "mailto:hello@ljbbrands.com?subject=LJB%20Twitch%20Inquiry",
  hemlockHollow: "mailto:hello@ljbbrands.com?subject=Hemlock%20Hollow%20Inquiry",
  github: "https://github.com/LJBBrands",
  support: "#support",
  podcast: "mailto:podcast@ljbbrands.com?subject=LJB%20Rewind%20Podcast%20Inquiry",
};

export const ecosystemSection = {
  kicker: "Destinations",
  title: "Explore the Ecosystem.",
  description:
    "Watch, read, stream, contribute, and follow the projects that make up LJB Media Group.",
};

/**
 * @typedef {"play" | "live" | "chat" | "book" | "code" | "spark" | "mic"} DestinationIcon
 */

/** @type {Array<{
 *  id: string,
 *  name: string,
 *  description: string,
 *  cta: string,
 *  href: string,
 *  icon: DestinationIcon,
 *  external?: boolean,
 *  ariaLabel: string,
 * }>} */
export const destinations = [
  {
    id: "youtube",
    name: "YouTube",
    description:
      "Watch builds, podcasts, reviews, road trips, behind-the-scenes content, and future documentaries.",
    cta: "Watch on YouTube",
    href: destinationUrls.youtube,
    icon: "play",
    external: destinationUrls.youtube.startsWith("http"),
    ariaLabel: "Watch LJB Media Group on YouTube",
  },
  {
    id: "kick",
    name: "Kick",
    description:
      "Live streams, community hangouts, software development, and real-time discussions.",
    cta: "Watch Live",
    href: destinationUrls.kick,
    icon: "live",
    external: destinationUrls.kick.startsWith("http"),
    ariaLabel: "Watch LJB Media Group live on Kick",
  },
  {
    id: "twitch",
    name: "Twitch",
    description:
      "Gaming, GTA VI, community nights, and live creator content.",
    cta: "Watch on Twitch",
    href: destinationUrls.twitch,
    icon: "chat",
    external: destinationUrls.twitch.startsWith("http"),
    ariaLabel: "Watch LJB Media Group on Twitch",
  },
  {
    id: "hemlock-hollow",
    name: "Hemlock Hollow",
    description:
      "Explore the world, story, characters, and future releases of the Hemlock Hollow universe.",
    cta: "Read More",
    href: destinationUrls.hemlockHollow,
    icon: "book",
    external: destinationUrls.hemlockHollow.startsWith("http"),
    ariaLabel: "Learn more about Hemlock Hollow",
  },
  {
    id: "github",
    name: "GitHub",
    description:
      "Browse public repositories, open-source projects, development progress, and technical work.",
    cta: "View GitHub",
    href: destinationUrls.github,
    icon: "code",
    external: true,
    ariaLabel: "View LJB Media Group on GitHub",
  },
  {
    id: "support",
    name: "Support the Mission",
    description:
      "Help support independent software, media, books, and future creative projects.",
    cta: "Support LJB",
    href: destinationUrls.support,
    icon: "spark",
    external: false,
    ariaLabel: "Support the LJB Media Group mission",
  },
];

/** Destinations surfaced inside the LJB Rewind project dialog. */
export const rewindDialogDestinations = [
  {
    id: "youtube",
    name: "YouTube",
    cta: "YouTube",
    href: destinationUrls.youtube,
    icon: "play",
    external: destinationUrls.youtube.startsWith("http"),
    ariaLabel: "Open LJB Rewind on YouTube",
  },
  {
    id: "podcast",
    name: "Podcast",
    cta: "Podcast",
    href: destinationUrls.podcast,
    icon: "mic",
    external: destinationUrls.podcast.startsWith("http"),
    ariaLabel: "Contact about the LJB Rewind podcast",
  },
  {
    id: "kick",
    name: "Kick",
    cta: "Kick",
    href: destinationUrls.kick,
    icon: "live",
    external: destinationUrls.kick.startsWith("http"),
    ariaLabel: "Open LJB Rewind on Kick",
  },
  {
    id: "twitch",
    name: "Twitch",
    cta: "Twitch",
    href: destinationUrls.twitch,
    icon: "chat",
    external: destinationUrls.twitch.startsWith("http"),
    ariaLabel: "Open LJB Rewind on Twitch",
  },
];

export function getDestinationById(id) {
  return destinations.find((item) => item.id === id) ?? null;
}
