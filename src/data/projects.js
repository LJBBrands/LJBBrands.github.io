import { screenshots } from "./awyContent";

export const featuredProjects = [
  {
    id: "awy",
    name: "Awy",
    category: "Technology",
    description:
      "A private social environment built around presence, shared rhythm, quiet spaces, and consent-aware communication.",
    cta: "Learn More",
    href: "#awy",
    preview: "awy",
    previewScreens: [
      screenshots.homePresence01,
      screenshots.profileSharedAreas01,
      screenshots.lounges01,
    ],
  },
  {
    id: "ljb-rewind",
    name: "LJB Rewind",
    category: "Media",
    description: "Podcasts.\nGaming.\nLEGO.\nUnboxings.\nRoad Trips.",
    cta: "Watch",
    href: "#ljb-rewind",
    preview: "media",
    accent: "#D9FF9A",
  },
  {
    id: "rt345lc",
    name: "RT345LC",
    category: "Automotive",
    description: "Photography.\nAutomotive builds.\nRoad trips.\nSponsors.",
    cta: "Explore",
    href: "#rt345lc",
    preview: "auto",
    accent: "#F2F2F2",
  },
  {
    id: "give-love-co",
    name: "Give Love Co.",
    category: "Apparel",
    description: "Minimal clothing.\nPreorder drops.\nIndependent brand.",
    cta: "Explore",
    href: "#give-love-co",
    preview: "apparel",
    accent: "#F5F5F5",
  },
  {
    id: "arbor",
    name: "Arbor",
    category: "Software / File Organization",
    description:
      "A macOS file-organization tool built to help people scan, preview, and safely organize files across local and external storage.",
    cta: null,
    status: "In Development",
    href: "#arbor",
    preview: "arbor",
    accent: "#B8FF5A",
  },
];

/** Non-Awy projects rendered as compact homepage spotlights. */
export const projectSpotlights = featuredProjects.filter(
  (project) => project.id !== "awy"
);

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Awy", href: "#awy" },
  { label: "Give Love Co.", href: "#give-love-co" },
  { label: "LJB Rewind", href: "#ljb-rewind" },
  { label: "RT345LC", href: "#rt345lc" },
  { label: "Arbor", href: "#arbor" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#support" },
];

export const contactChannels = [
  {
    id: "general",
    label: "General",
    subject: "General%20Inquiry",
  },
  {
    id: "business",
    label: "Business",
    subject: "Business%20Inquiry",
  },
  {
    id: "partnerships",
    label: "Partnerships",
    subject: "Partnerships",
  },
  {
    id: "sponsors",
    label: "Sponsors",
    subject: "Sponsorship%20Inquiry",
  },
  {
    id: "media",
    label: "Media",
    subject: "Media%20Inquiry",
  },
];

export const CONTACT_EMAIL = "contact@ljbbrands.com";

// Cash App handle not published yet — Support CTA uses mailto until then.
export const SUPPORT_MISSION_MAILTO =
  "mailto:support@ljbbrands.com?subject=Support%20the%20Mission";
