import { contactMailto } from "./contact";

const projectAsset = (projectId, fileName) =>
  `${import.meta.env.BASE_URL}projects/${projectId}/${fileName}`;

const awyShot = (fileName, label, alt, group) => ({
  src: projectAsset("awy", fileName),
  label,
  alt,
  group,
});

/*
  Public Awy set only. Continue excluding Membership, Moderator Tools,
  unfinished billing, incomplete workflows, admin-heavy menus, and
  empty/unfinished states from the public site.
*/

export const projects = [
  {
    id: "awy",
    name: "Awy",
    group: "app",
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
      brand: "awy",
      cardStyle: "app-icon",
      icon: projectAsset("awy", "awy-app-icon-v3.webp"),
      logoAlt: "Awy social app icon",
      eyebrow: "Awy",
      badge: "Social Platform",
      card: {
        primary: awyShot(
          "awy-card-home-dark.jpg",
          "Home — Live Presence",
          "Awy Home screen showing Live Presence in a dark theme",
          "Presence",
        ),
        left: awyShot(
          "awy-card-profile-dark.jpg",
          "Profile — Overview",
          "Awy Profile screen in a dark theme",
          "Identity",
        ),
        right: awyShot(
          "awy-card-lounges-aurora.jpg",
          "Lounges — Featured Lounges",
          "Awy Featured Lounges screen with Aurora theme accent",
          "Community",
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
            "Presence",
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
            "Presence",
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
            "Identity",
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
            "Identity",
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
            "Private Connection",
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
            "Community",
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
            "Community",
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
            "Personalization",
          ),
        },
      ],
    },
    primaryAction: {
      label: "Email About Awy",
      href: contactMailto({ subject: "Awy%20Inquiry" }),
    },
    accent: "#B8FF5A",
  },
];

export function getAwyShowcaseSlides(project) {
  return project?.showcase?.slides ?? [];
}

export function getProjectById(id) {
  return projects.find((project) => project.id === id) ?? null;
}

/** Projects shown in the public Projects grid. */
export function getListedProjects() {
  return projects.filter((project) => project.listed !== false);
}

export function getAppProjects() {
  return getListedProjects().filter((project) => project.group === "app");
}

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Inside Awy", href: "#projects" },
  { label: "Contact & Support", href: "#contact" },
];
