import { screenshots } from "./awyContent";

export const projects = [
  {
    id: "awy",
    name: "Awy",
    category: "Technology / Social Platform",
    preview:
      "A private social environment built around presence, shared rhythm, quiet spaces, and consent-aware communication.",
    description:
      "Awy is a private social environment designed for intentional presence, consent-aware sharing, and calmer communication — without turning connection into consumption.",
    status: null,
    highlights: [
      "Presence",
      "Shared Areas",
      "Strings",
      "Lounges",
      "Verified Signals",
      "Personalization",
    ],
    visualType: "awy",
    images: [
      screenshots.homePresence01,
      screenshots.profileSharedAreas01,
      screenshots.lounges01,
      screenshots.strings01,
      screenshots.search01,
      screenshots.appearance01,
    ],
    primaryAction: null,
    accent: "#B8FF5A",
  },
  {
    id: "ljb-rewind",
    name: "LJB Rewind",
    category: "Media / Entertainment",
    preview:
      "Podcasts, gaming, unboxings, LEGO builds, road trips, and behind-the-scenes stories.",
    description:
      "LJB Rewind is the media arm of LJB Media Group — long-form and short-form storytelling across podcasts, gaming, builds, travel, and behind-the-scenes moments.",
    status: null,
    highlights: [
      "Podcast",
      "Gaming",
      "Unboxings",
      "LEGO Builds",
      "Road Trips",
      "Behind the Scenes",
    ],
    visualType: "media",
    images: [],
    // Future: primaryAction with confirmed watch destination + thumbnail assets
    primaryAction: null,
    accent: "#D9FF9A",
  },
  {
    id: "rt345lc",
    name: "RT345LC",
    category: "Automotive / Visual Storytelling",
    preview:
      "Automotive builds, photography, road trips, collaborations, and long-form project stories.",
    description:
      "RT345LC focuses on automotive culture through photography, builds, road trips, and long-form project storytelling.",
    status: null,
    highlights: [
      "Automotive Builds",
      "Photography",
      "Road Trips",
      "Project Stories",
      "Future Partnerships",
    ],
    visualType: "auto",
    images: [],
    primaryAction: null,
    accent: "#F2F2F2",
  },
  {
    id: "give-love-co",
    name: "Give Love Co.",
    category: "Apparel / Limited Drops",
    preview:
      "An independent clothing brand centered on intentional designs, preorder drops, and limited releases.",
    description:
      "Give Love Co. is an independent apparel brand built around intentional designs, preorder drops, and limited releases.",
    status: null,
    highlights: [
      "Preorder Drops",
      "Limited Releases",
      "Hoodies",
      "Shirts",
      "Special Editions",
    ],
    visualType: "apparel",
    images: [],
    primaryAction: null,
    accent: "#F5F5F5",
  },
  {
    id: "arbor",
    name: "Arbor",
    category: "Software / File Organization",
    preview:
      "A macOS file-organization tool built to help people scan, preview, and safely organize files across local and external storage.",
    description:
      "Arbor helps people scan, preview, and safely organize files across local and external storage — with controls designed to keep organization deliberate and reversible.",
    status: "In Development",
    highlights: [
      "Local File Scanning",
      "Preview Before Execution",
      "Safe Organization",
      "External Storage Support",
      "File-Safety Controls",
    ],
    visualType: "arbor",
    images: [],
    primaryAction: null,
    accent: "#B8FF5A",
  },
];

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#support" },
];
