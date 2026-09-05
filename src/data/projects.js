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
  {
    id: "arclia",
    name: "Arclia",
    group: "app",
    category: "Education / AI Learning",
    preview:
      "An AI academy for beginner through advanced learners, combining guided courses with a hands-on sandbox.",
    description:
      "Arclia helps people learn AI with greater clarity and confidence. Guided courses support beginners and advanced learners, while a hands-on sandbox provides space to explore, practice, and become more comfortable using AI.",
    summary:
      "Learn the concepts, practice them safely, and build practical confidence at your own pace.",
    status: "In Development",
    highlights: [
      "Beginner to Advanced",
      "Guided AI Courses",
      "Hands-on Sandbox",
      "Practical Learning",
      "Build Confidence",
    ],
    visual: {
      type: "branded",
      brand: "arclia",
      cardStyle: "app-icon",
      coverStyle: "app-icon",
      logo: projectAsset("arclia", "arclia-app-icon.webp"),
      logoAlt: "Arclia AI learning app icon",
      hero: projectAsset("arclia", "arclia-app-icon.webp"),
      alt: "Arclia AI learning app icon",
      eyebrow: "Arclia",
      badge: "Courses + Sandbox",
    },
    primaryAction: {
      label: "Email About Arclia",
      href: contactMailto({ subject: "Arclia%20Inquiry" }),
    },
    accent: "#8EEBFF",
  },
  {
    id: "arbor",
    name: "Arbor",
    group: "app",
    category: "Software / File Organization",
    preview:
      "A macOS file-organization tool built to help people scan, preview, and safely organize files across local and external storage.",
    description:
      "Arbor helps people scan local and external storage, preview proposed organization, and organize files safely — with recovery and verification controls designed to keep organization deliberate and reversible.",
    status: "In Development",
    highlights: [
      "Scan Local and External Storage",
      "Preview Proposed Organization",
      "Organize Files Safely",
      "Recovery and Verification",
      "macOS Utility",
    ],
    visual: {
      type: "branded",
      brand: "arbor",
      cardStyle: "app-icon",
      coverStyle: "app-icon",
      logo: projectAsset("arbor", "arbor-folder-app-icon.webp"),
      logoAlt: "Arbor macOS app icon",
      hero: projectAsset("arbor", "arbor-folder-app-icon.webp"),
      alt: "Arbor macOS app icon",
      eyebrow: "Arbor",
      badge: "macOS Utility",
    },
    primaryAction: {
      label: "Email About Arbor",
      href: contactMailto({ subject: "Arbor%20Inquiry" }),
    },
    accent: "#B8FF5A",
  },
  {
    id: "give-love-co",
    name: "Give Love Co.",
    group: "studio",
    category: "Apparel / Limited Drops",
    preview:
      "A personal apparel project built around kindness, connection, and a limited Fall 2026 release.",
    description:
      "Give Love Co. is a personal apparel project from LJB Media Group, created around simple messages worth carrying into everyday life: give love, be kind, embrace peace, and spread joy.",
    summary:
      "Hoodies and shirts arrive in a limited Fall 2026 drop. Release details will be shared when the collection is ready.",
    status: "Coming Fall 2026",
    highlights: [
      "Limited Drop",
      "Hoodies",
      "Shirts",
      "Give Love",
      "Be Kind",
      "Embrace Peace",
      "Spread Joy",
    ],
    visual: {
      type: "branded",
      brand: "give-love-co",
      coverStyle: "logo-panel",
      logo: projectAsset("give-love-co", "give-love-co-logo.webp"),
      hero: projectAsset("give-love-co", "give-love-apparel-v2.webp"),
      alt: "Give Love Co. hoodie and T-shirt in a studio product photograph",
      dropLabel: "COMING FALL 2026 · LIMITED DROP",
    },
    primaryAction: {
      label: "Contact Give Love Co.",
      href: contactMailto({ subject: "Give%20Love%20Co.%20Inquiry" }),
    },
    accent: "#F5F5F5",
  },
  {
    id: "hemlock-hollow",
    name: "Hemlock Hollow",
    group: "studio",
    category: "Novel / Mystery Thriller",
    preview:
      "A woman returns home after new evidence surfaces in her twin sister’s disappearance, uncovering buried secrets beneath Hemlock Hollow.",
    description:
      "After years away, Veronica returns to Hemlock Hollow when new evidence surfaces in the disappearance of her twin sister, Lena. A cryptic letter, a gold necklace, and a trail through the town’s lakeside secrets pull her into a mystery shaped by silence, power, and the people determined to keep the truth buried.",
    summary: "A small town with a dark secret.",
    status: "In Development",
    highlights: [
      "Family",
      "Disappearance",
      "Buried Secrets",
      "Small-Town Power",
      "Memory",
      "Guilt",
      "Truth",
    ],
    visual: {
      type: "branded",
      brand: "hemlock-hollow",
      coverStyle: "cinematic-environment",
      hero: projectAsset("hemlock-hollow", "hemlock-hollow-hero.webp"),
      alt: "Secluded luxury mansion in wooded hills at blue hour for Hemlock Hollow",
    },
    primaryAction: {
      label: "Follow the Story",
      href: "#contact",
    },
    accent: "#C8D4C0",
  },
  {
    id: "film-project",
    name: "Film Project",
    group: "studio",
    category: "Film / Screenplay",
    preview: "Screenplay in development. More details coming soon.",
    description:
      "A screenplay is being developed as a potential film project. The title and story details will be shared only when they are ready.",
    summary: "Screenplay in development. More details coming soon.",
    status: "In Development",
    highlights: ["Screenplay", "Early Development", "More Details Coming Soon"],
    visual: {
      type: "branded",
      brand: "film-project",
      coverStyle: "screenplay-placeholder",
      alt: "Film Project screenplay in development",
    },
    primaryAction: {
      label: "Follow the Project",
      href: "#contact",
    },
    accent: "#D9C8A8",
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

export function getStudioProjects() {
  return getListedProjects().filter((project) => project.group === "studio");
}

export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Instagram", href: "#instagram" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#support" },
];
