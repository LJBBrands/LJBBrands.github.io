const projectAsset = (projectId, fileName) =>
  `${import.meta.env.BASE_URL}projects/${projectId}/${fileName}`;

const awyShot = (fileName, label, alt, group) => ({
  src: projectAsset("awy", fileName),
  label,
  alt,
  group,
});

/*
  Public Awy set only. Installed but excluded from the public site:
  - awy-lounge-owner-controls-dark.jpg
  - awy-lounge-safety-controls-dark.jpg
  Also continue excluding Membership, Moderator Tools, unfinished billing,
  incomplete workflows, admin-heavy menus, and empty/unfinished states.
*/

/*
  RT345LC visual: owner Charger photograph at
  public/projects/rt345lc/rt345lc-hero.webp
  (side or front three-quarter, cinematic crop).
  Until present, the card uses a neutral automotive panel — no vehicle SVG.
*/

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
          "awy-card-home-dark.jpg",
          "Home — Live Presence",
          "Awy Home screen showing Live Presence in a dark theme",
          "Presence"
        ),
        left: awyShot(
          "awy-card-profile-dark.jpg",
          "Profile — Overview",
          "Awy Profile screen in a dark theme",
          "Identity"
        ),
        right: awyShot(
          "awy-card-lounges-aurora.jpg",
          "Lounges — Featured Lounges",
          "Awy Featured Lounges screen with Aurora theme accent",
          "Community"
        ),
      },
    },
    showcase: {
      slides: [
        {
          id: "presence",
          eyebrow: "Presence",
          title: "Live Presence",
          description:
            "See what is active now without turning connection into an endless feed.",
          points: ["Live status", "Shared rhythm", "No feed pressure"],
          image: awyShot(
            "awy-home-live-presence-dark.jpg",
            "Home — Live Presence",
            "Awy Home Live Presence in a dark theme",
            "Presence"
          ),
        },
        {
          id: "activity",
          eyebrow: "Activity",
          title: "A Calmer Activity View",
          description:
            "Recent activity stays organized around meaningful interactions rather than engagement pressure.",
          points: ["Meaningful updates", "Clear context", "Less noise"],
          image: awyShot(
            "awy-home-activity-dark.jpg",
            "Home — Activity",
            "Awy Home activity overview in a dark theme",
            "Presence"
          ),
        },
        {
          id: "identity",
          eyebrow: "Identity",
          title: "Your Space",
          description:
            "A personal profile built around identity, availability, and intentional sharing.",
          points: ["Identity", "Availability", "Intentional sharing"],
          image: awyShot(
            "awy-profile-overview-dark.jpg",
            "Profile — Overview",
            "Awy Profile overview in a dark theme",
            "Identity"
          ),
        },
        {
          id: "create",
          eyebrow: "Create",
          title: "Share With Intention",
          description:
            "Choose the right format for the moment without being pushed into a single posting pattern.",
          points: ["Format choice", "Moment-first", "No single pattern"],
          image: awyShot(
            "awy-profile-create-menu-dark.jpg",
            "Profile — Create Menu",
            "Awy Profile create menu in a dark theme",
            "Identity"
          ),
        },
        {
          id: "private-connection",
          eyebrow: "Private Connection",
          title: "Consent-Aware Conversations",
          description:
            "Private connections include clear boundaries and controls that remain understandable.",
          points: ["Clear boundaries", "Privacy controls", "Understandable"],
          image: awyShot(
            "awy-string-privacy-controls-dark.jpg",
            "String — Privacy Controls",
            "Awy String privacy controls in a dark theme",
            "Private Connection"
          ),
        },
        {
          id: "lounges",
          eyebrow: "Lounges",
          title: "Spaces With Purpose",
          description:
            "Join communities organized around interests, support, location, and shared rhythm.",
          points: ["Interests", "Support", "Shared rhythm"],
          image: awyShot(
            "awy-lounges-featured-aurora.jpg",
            "Lounges — Featured Lounges",
            "Awy Featured Lounges with Aurora theme accent",
            "Community"
          ),
        },
        {
          id: "community",
          eyebrow: "Community",
          title: "Communities That Feel Alive",
          description:
            "Lounges give hobbies and shared interests a focused place to develop.",
          points: ["Focused rooms", "Shared interests", "Living spaces"],
          image: awyShot(
            "awy-lounge-car-culture-dark.jpg",
            "Lounge — Car Culture",
            "Awy Car Culture Lounge in a dark theme",
            "Community"
          ),
        },
        {
          id: "personalization",
          eyebrow: "Personalization",
          title: "Make Awy Yours",
          description:
            "Personalization adds atmosphere and identity without compromising clarity.",
          points: ["Atmosphere", "Identity", "Clarity first"],
          image: awyShot(
            "awy-profile-studio-aurora.jpg",
            "Profile Studio",
            "Awy Profile Studio with Aurora theme accent",
            "Personalization"
          ),
        },
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
      // Preferred: owner Charger photo (side or front 3/4). See asset note above.
      hero: projectAsset("rt345lc", "rt345lc-hero.webp"),
      alt: "RT345LC project vehicle",
      coverStyle: "automotive-editorial",
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

export function getAwyShowcaseSlides(project) {
  return project?.showcase?.slides ?? [];
}

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#support" },
];
