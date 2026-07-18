const projectAsset = (projectId, fileName) =>
  `${import.meta.env.BASE_URL}projects/${projectId}/${fileName}`;

const awyShot = (fileName, label, alt, group) => ({
  src: projectAsset("awy", fileName),
  label,
  alt,
  group,
});

export const projects = [
  {
    id: "awy",
    name: "Awy",
    category: "Technology / Social Platform",
    preview:
      "A private social environment built around presence, shared rhythm, quiet spaces, and consent-aware communication.",
    description:
      "Awy is a private social environment designed for intentional presence, consent-aware sharing, and calmer communication — without turning connection into consumption.",
    summary:
      "What makes Awy different: quieter spaces, consent-aware sharing, and presence without feed pressure.",
    status: null,
    highlights: [
      "Presence",
      "Shared Areas",
      "Strings",
      "Lounges",
      "Verified Signals",
      "Personalization",
    ],
    visual: {
      type: "screenshots",
      card: {
        primary: awyShot(
          "awy-card-home-live-presence.jpg",
          "Home Live Presence",
          "Awy Home screen showing Live Presence",
          "Presence"
        ),
        left: awyShot(
          "awy-card-profile-create-menu.jpg",
          "Profile Create Menu",
          "Awy Profile create menu",
          "Identity"
        ),
        right: awyShot(
          "awy-card-lounges-featured.jpg",
          "Featured Lounges",
          "Awy Featured Lounges screen",
          "Community"
        ),
      },
      gallery: [
        awyShot(
          "awy-profile-overview.jpg",
          "Profile Overview",
          "Awy profile overview",
          "Identity"
        ),
        awyShot(
          "awy-profile-create-menu.jpg",
          "Profile Create Menu",
          "Awy profile create menu",
          "Identity"
        ),
        awyShot(
          "awy-shared-profile.jpg",
          "Shared Profile",
          "Awy shared profile view",
          "Identity"
        ),
        awyShot(
          "awy-connect-as.jpg",
          "Connect As",
          "Awy Connect As screen",
          "Identity"
        ),
        awyShot(
          "awy-home-live-presence.jpg",
          "Home Live Presence",
          "Awy Home Live Presence",
          "Presence"
        ),
        awyShot(
          "awy-home-activity-overview.jpg",
          "Home Activity Overview",
          "Awy Home activity overview",
          "Presence"
        ),
        awyShot(
          "awy-strings-list.jpg",
          "Strings List",
          "Awy Strings list",
          "Private Connections"
        ),
        awyShot(
          "awy-string-conversation.jpg",
          "String Conversation",
          "Awy String conversation",
          "Private Connections"
        ),
        awyShot(
          "awy-string-controls.jpg",
          "String Controls",
          "Awy String controls",
          "Private Connections"
        ),
        awyShot(
          "awy-lounges-featured.jpg",
          "Featured Lounges",
          "Awy Featured Lounges",
          "Community"
        ),
        awyShot(
          "awy-lounge-entry.jpg",
          "Lounge Entry",
          "Awy Lounge entry",
          "Community"
        ),
        awyShot(
          "awy-pulse-lounge-controls.jpg",
          "Pulse Lounge Controls",
          "Awy Pulse Lounge controls",
          "Community"
        ),
        awyShot(
          "awy-search-discovery.jpg",
          "Search Discovery",
          "Awy Search discovery",
          "Discovery and Control"
        ),
        awyShot(
          "awy-settings-overview.jpg",
          "Settings Overview",
          "Awy Settings overview",
          "Discovery and Control"
        ),
        awyShot(
          "awy-appearance-themes.jpg",
          "Appearance Themes",
          "Awy Appearance themes",
          "Discovery and Control"
        ),
      ],
    },
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
      "LJB Rewind is the media arm of LJB Media Group — storytelling across podcasts, gaming, builds, travel, and behind-the-scenes moments.",
    status: null,
    highlights: [
      "Podcast",
      "Gaming",
      "Unboxings",
      "LEGO Builds",
      "Road Trips",
      "Behind the Scenes",
    ],
    visual: {
      type: "branded",
      brand: "rewind",
      hero: projectAsset("ljb-rewind", "ljb-rewind-hero.webp"),
      alt: "LJB Rewind media preview",
    },
    mediaReady: true,
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
    visual: {
      type: "branded",
      brand: "rt345lc",
      hero: projectAsset("rt345lc", "rt345lc-hero.webp"),
      alt: "RT345LC project vehicle",
    },
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
    visual: {
      type: "branded",
      brand: "give-love-co",
      hero: projectAsset("give-love-co", "give-love-co-hero.webp"),
      alt: "Give Love Co. apparel preview",
    },
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
    visual: {
      type: "branded",
      brand: "arbor",
      hero: projectAsset("arbor", "arbor-hero.webp"),
      alt: "Arbor file organization preview",
    },
    primaryAction: null,
    accent: "#B8FF5A",
  },
];

export const GALLERY_GROUP_ORDER = [
  "Identity",
  "Presence",
  "Private Connections",
  "Community",
  "Discovery and Control",
];

export function groupGallery(gallery = []) {
  const groups = new Map();

  for (const item of gallery) {
    const key = item.group || "Gallery";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }

  return GALLERY_GROUP_ORDER.filter((name) => groups.has(name)).map(
    (name) => ({
      name,
      items: groups.get(name),
    })
  );
}

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#support" },
];
