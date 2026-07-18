const screenSrc = (fileName) => `${import.meta.env.BASE_URL}screens/${fileName}`;

export const STORAGE_KEY = "awy-site-theme";

/** Public GitHub repo URL. Leave empty to hide the footer GitHub link. */
export const GITHUB_URL = "";

export const SUPPORT_LINK =
  "mailto:support@ljbbrands.com?subject=Awy%20Support";
export const WAITLIST_MAILTO =
  "mailto:hello@ljbbrands.com?subject=Awy%20Waitlist";

export const themes = [
  {
    id: "galaxy-aurora",
    label: "Galaxy Aurora",
    background:
      "linear-gradient(180deg, #05040B 0%, #10101F 44%, #24152D 100%)",
    glow:
      "radial-gradient(circle at 16% 12%, rgba(251,146,60,0.34), transparent 31%), radial-gradient(circle at 76% 22%, rgba(34,211,238,0.34), transparent 32%), radial-gradient(circle at 52% 84%, rgba(168,85,247,0.28), transparent 35%)",
    aura:
      "radial-gradient(circle at 12% 56%, rgba(253,186,116,0.16), transparent 34%), radial-gradient(circle at 88% 64%, rgba(56,189,248,0.20), transparent 32%), radial-gradient(circle at 42% 34%, rgba(216,180,254,0.14), transparent 34%)",
    accent: "#F0ABFC",
    accentSoft: "rgba(240,171,252,0.18)",
    accentBorder: "rgba(125,211,252,0.46)",
    accentText: "#FCE7F3",
    heroPillBg: "rgba(8,8,14,0.62)",
    cardBg: "rgba(10,10,18,0.58)",
    panelBg: "rgba(12,12,20,0.66)",
    cardBorder: "rgba(255,255,255,0.11)",
    overlay: "rgba(0,0,0,0.42)",
    phoneShell: "rgba(8,8,14,0.74)",
    phoneInner: "rgba(13,13,20,0.98)",
  },
  {
    id: "nebula-violet",
    label: "Nebula Violet",
    background:
      "linear-gradient(180deg, #03020A 0%, #100620 48%, #230C3B 100%)",
    glow:
      "radial-gradient(circle at 24% 12%, rgba(109,40,217,0.52), transparent 31%), radial-gradient(circle at 78% 28%, rgba(168,85,247,0.28), transparent 30%), radial-gradient(circle at 50% 88%, rgba(244,114,182,0.24), transparent 34%)",
    aura:
      "radial-gradient(circle at 12% 76%, rgba(76,29,149,0.32), transparent 34%), radial-gradient(circle at 86% 58%, rgba(236,72,153,0.16), transparent 32%)",
    accent: "#A78BFA",
    accentSoft: "rgba(167,139,250,0.20)",
    accentBorder: "rgba(167,139,250,0.50)",
    accentText: "#DDD6FE",
    heroPillBg: "rgba(15,10,28,0.28)",
    cardBg: "rgba(10,8,22,0.24)",
    panelBg: "rgba(10,8,22,0.22)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.46)",
    phoneShell: "rgba(18,12,28,0.58)",
    phoneInner: "rgba(20,16,34,0.96)",
  },
  {
    id: "orbit-blue",
    label: "Orbit Blue",
    background:
      "linear-gradient(180deg, #01040B 0%, #03142E 48%, #06214A 100%)",
    glow:
      "radial-gradient(circle at 18% 18%, rgba(37,99,235,0.52), transparent 31%), radial-gradient(circle at 82% 28%, rgba(34,211,238,0.34), transparent 32%), radial-gradient(circle at 48% 86%, rgba(14,165,233,0.30), transparent 34%)",
    aura:
      "radial-gradient(circle at 12% 70%, rgba(14,165,233,0.24), transparent 34%), radial-gradient(circle at 88% 64%, rgba(29,78,216,0.34), transparent 32%)",
    accent: "#60A5FA",
    accentSoft: "rgba(96,165,250,0.20)",
    accentBorder: "rgba(96,165,250,0.50)",
    accentText: "#BFDBFE",
    heroPillBg: "rgba(5,18,40,0.26)",
    cardBg: "rgba(5,18,40,0.22)",
    panelBg: "rgba(5,18,40,0.20)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.48)",
    phoneShell: "rgba(8,18,32,0.56)",
    phoneInner: "rgba(14,22,38,0.96)",
  },
  {
    id: "solar-flare-orange",
    label: "Solar Ember",
    background:
      "linear-gradient(180deg, #060302 0%, #1E0905 46%, #3A1406 100%)",
    glow:
      "radial-gradient(circle at 20% 18%, rgba(251,146,60,0.52), transparent 31%), radial-gradient(circle at 78% 28%, rgba(239,68,68,0.36), transparent 32%), radial-gradient(circle at 50% 88%, rgba(245,158,11,0.34), transparent 34%)",
    aura:
      "radial-gradient(circle at 12% 72%, rgba(253,186,116,0.22), transparent 34%), radial-gradient(circle at 88% 62%, rgba(220,38,38,0.24), transparent 32%)",
    accent: "#FDBA74",
    accentSoft: "rgba(253,186,116,0.20)",
    accentBorder: "rgba(253,186,116,0.52)",
    accentText: "#FFEDD5",
    heroPillBg: "rgba(28,10,8,0.26)",
    cardBg: "rgba(28,10,8,0.22)",
    panelBg: "rgba(28,10,8,0.20)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.5)",
    phoneShell: "rgba(32,14,10,0.56)",
    phoneInner: "rgba(28,16,18,0.96)",
  },
  {
    id: "alien-green",
    label: "Alien Green",
    background:
      "linear-gradient(180deg, #030403 0%, #06100B 54%, #08170F 100%)",
    glow:
      "radial-gradient(circle at 20% 22%, rgba(74,222,128,0.20), transparent 22%), radial-gradient(circle at 80% 28%, rgba(16,185,129,0.18), transparent 24%), radial-gradient(circle at 50% 85%, rgba(163,230,53,0.14), transparent 26%)",
    accent: "#86EFAC",
    accentSoft: "rgba(134,239,172,0.14)",
    accentBorder: "rgba(134,239,172,0.26)",
    accentText: "#DCFCE7",
    heroPillBg: "rgba(4,24,16,0.28)",
    cardBg: "rgba(4,24,16,0.22)",
    panelBg: "rgba(4,24,16,0.20)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.5)",
    phoneShell: "rgba(6,28,18,0.56)",
    phoneInner: "rgba(12,28,20,0.96)",
  },
  {
    id: "solar-yellow",
    label: "Solar Yellow",
    background:
      "linear-gradient(180deg, #040303 0%, #100C05 54%, #171106 100%)",
    glow:
      "radial-gradient(circle at 24% 20%, rgba(251,191,36,0.22), transparent 22%), radial-gradient(circle at 76% 26%, rgba(245,158,11,0.18), transparent 24%), radial-gradient(circle at 50% 88%, rgba(252,211,77,0.16), transparent 24%)",
    accent: "#FCD34D",
    accentSoft: "rgba(252,211,77,0.14)",
    accentBorder: "rgba(252,211,77,0.28)",
    accentText: "#FEF9C3",
    heroPillBg: "rgba(32,22,6,0.28)",
    cardBg: "rgba(32,22,6,0.22)",
    panelBg: "rgba(32,22,6,0.20)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.5)",
    phoneShell: "rgba(36,24,8,0.56)",
    phoneInner: "rgba(28,22,12,0.96)",
  },
  {
    id: "horizon-rose",
    label: "Horizon Rose",
    background:
      "linear-gradient(180deg, #040306 0%, #120814 54%, #1B0B19 100%)",
    glow:
      "radial-gradient(circle at 22% 18%, rgba(244,114,182,0.20), transparent 22%), radial-gradient(circle at 78% 30%, rgba(192,132,252,0.14), transparent 24%), radial-gradient(circle at 50% 86%, rgba(236,72,153,0.16), transparent 26%)",
    accent: "#F9A8D4",
    accentSoft: "rgba(249,168,212,0.14)",
    accentBorder: "rgba(249,168,212,0.26)",
    accentText: "#FCE7F3",
    heroPillBg: "rgba(36,12,28,0.26)",
    cardBg: "rgba(36,12,28,0.22)",
    panelBg: "rgba(36,12,28,0.20)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.48)",
    phoneShell: "rgba(40,14,30,0.56)",
    phoneInner: "rgba(30,16,26,0.96)",
  },
  {
    id: "deep-space-navy",
    label: "Deep Space Navy",
    background:
      "linear-gradient(180deg, #02030A 0%, #050814 54%, #0A0F1D 100%)",
    glow:
      "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 22%), radial-gradient(circle at 80% 24%, rgba(59,130,246,0.14), transparent 24%), radial-gradient(circle at 50% 88%, rgba(30,58,138,0.20), transparent 26%)",
    accent: "#818CF8",
    accentSoft: "rgba(129,140,248,0.14)",
    accentBorder: "rgba(129,140,248,0.26)",
    accentText: "#E0E7FF",
    heroPillBg: "rgba(6,12,28,0.30)",
    cardBg: "rgba(6,12,28,0.24)",
    panelBg: "rgba(6,12,28,0.22)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.40)",
    phoneShell: "rgba(8,14,32,0.58)",
    phoneInner: "rgba(14,18,36,0.96)",
  },
  {
    id: "luna-mist-grey",
    label: "Luna Mist Grey",
    background:
      "linear-gradient(180deg, #030306 0%, #0A0B10 54%, #12141A 100%)",
    glow:
      "radial-gradient(circle at 22% 20%, rgba(148,163,184,0.18), transparent 22%), radial-gradient(circle at 78% 28%, rgba(100,116,139,0.16), transparent 24%), radial-gradient(circle at 50% 88%, rgba(56,189,248,0.10), transparent 28%)",
    accent: "#94A3B8",
    accentSoft: "rgba(148,163,184,0.16)",
    accentBorder: "rgba(148,163,184,0.28)",
    accentText: "#E2E8F0",
    heroPillBg: "rgba(15,23,42,0.35)",
    cardBg: "rgba(15,23,42,0.28)",
    panelBg: "rgba(15,23,42,0.26)",
    cardBorder: "rgba(255,255,255,0.10)",
    overlay: "rgba(0,0,0,0.48)",
    phoneShell: "rgba(20,28,40,0.58)",
    phoneInner: "rgba(24,30,42,0.96)",
  },
  {
    id: "starlight-pink",
    label: "Starlight Pink",
    background:
      "linear-gradient(180deg, #040306 0%, #110713 54%, #1B0A1A 100%)",
    glow:
      "radial-gradient(circle at 24% 18%, rgba(236,72,153,0.22), transparent 22%), radial-gradient(circle at 76% 28%, rgba(217,70,239,0.18), transparent 24%), radial-gradient(circle at 50% 88%, rgba(244,114,182,0.16), transparent 24%)",
    accent: "#F472B6",
    accentSoft: "rgba(244,114,182,0.14)",
    accentBorder: "rgba(244,114,182,0.28)",
    accentText: "#FBCFE8",
    heroPillBg: "rgba(28,8,24,0.26)",
    cardBg: "rgba(28,8,24,0.22)",
    panelBg: "rgba(28,8,24,0.20)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.48)",
    phoneShell: "rgba(32,10,26,0.56)",
    phoneInner: "rgba(28,14,26,0.96)",
  },
];

export const ATMOSPHERE_THEME_IDS = [
  "galaxy-aurora",
  "nebula-violet",
  "orbit-blue",
  "solar-flare-orange",
];

const LEGACY_THEME_ID_MAP = {
  aurora: "galaxy-aurora",
  violet: "nebula-violet",
  cyan: "orbit-blue",
  sunset: "solar-flare-orange",
};

export function resolveStoredThemeId(saved) {
  if (saved == null) return null;
  const raw = String(saved).trim();
  if (!raw) return null;
  if (ATMOSPHERE_THEME_IDS.includes(raw)) return raw;
  const migrated = LEGACY_THEME_ID_MAP[raw];
  if (migrated && ATMOSPHERE_THEME_IDS.includes(migrated)) return migrated;
  return null;
}

const screenshotAsset = (fileName, label, alt) => ({
  label,
  image: screenSrc(fileName),
  missingFile: `public/screens/${fileName}`,
  alt,
});

export const screenshots = {
  homePresence01: screenshotAsset(
    "awy-home-presence-01.jpg",
    "Presence 01",
    "Awy Home screen showing Live Presence and recent activity"
  ),
  homePresence02: screenshotAsset(
    "awy-home-presence-02.jpg",
    "Presence 02",
    "Awy Home screen showing quiet activity and calm visibility"
  ),
  profileSharedAreas01: screenshotAsset(
    "awy-profile-shared-areas-01.jpg",
    "Shared Areas 01",
    "Awy Profile screen showing Shared Areas and consent-based spaces"
  ),
  profileSharedAreas02: screenshotAsset(
    "awy-profile-shared-areas-02.jpg",
    "Shared Areas 02",
    "Awy Profile screen showing personal context and shared spaces"
  ),
  strings01: screenshotAsset(
    "awy-strings-01.jpg",
    "Strings 01",
    "Awy Strings screen showing intentional conversation threads"
  ),
  strings02: screenshotAsset(
    "awy-strings-02.jpg",
    "Strings 02",
    "Awy Strings screen showing quieter replies and personal rhythm"
  ),
  lounges01: screenshotAsset(
    "awy-lounges-support-lounge-01.jpg",
    "Supporter Lounge",
    "Awy Lounges screen showing the Supporter Lounge"
  ),
  lounges02: screenshotAsset(
    "awy-lounges-main-02.jpg",
    "Lounge Overview",
    "Awy Lounges screen showing the Lounge Overview"
  ),
  search01: screenshotAsset(
    "awy-search-verified-signals-01.jpg",
    "Verified Signals",
    "Awy Search screen showing Verified Signals, Lounges, Strings, and People"
  ),
  appearance01: screenshotAsset(
    "awy-appearance-themes-01.jpg",
    "Appearance",
    "Awy Appearance screen showing theme and background settings"
  ),
};

export const heroScreenshots = [
  screenshots.homePresence01,
  screenshots.profileSharedAreas01,
  screenshots.lounges01,
];

export const heroBenefits = ["Private Social Space", "Lounges", "Strings", "Pulse"];

export const productSections = [
  {
    id: "presence",
    kicker: "Presence",
    headline: "Designed around presence.",
    copy:
      "See what matters without endless feeds, pressure loops, or constant noise. Awy helps people stay aware of shared activity without turning communication into consumption.",
    bullets: ["Live Presence", "Recent Activity", "Gentle Reminders", "Calm Visibility"],
    screenshots: [screenshots.homePresence01, screenshots.homePresence02],
  },
  {
    id: "shared-areas",
    kicker: "Shared Areas",
    headline: "Share intentionally.",
    copy:
      "Awy gives each person a space they control. Photos, posts, voice, videos, and personal context open based on consent, not pressure. Open what people choose to share.",
    bullets: ["Shared Areas", "Profile Note", "Consent-Aware Access", "Personal Spaces"],
    screenshots: [
      screenshots.profileSharedAreas01,
      screenshots.profileSharedAreas02,
    ],
    reverse: true,
  },
  {
    id: "strings",
    kicker: "Strings",
    headline: "One-to-one threads you hold dear.",
    copy:
      "Strings are intentional conversation threads for people and connections that deserve more care than a noisy inbox.",
    bullets: ["Focused Threads", "Quieter Replies", "Personal Rhythm", "Intentional Conversation"],
    screenshots: [screenshots.strings01, screenshots.strings02],
    reverse: true,
  },
  {
    id: "lounges",
    kicker: "Lounges",
    headline: "Quiet rooms for shared rhythm.",
    copy:
      "Lounges are focused spaces for calmer conversation. They are built for people, groups, and communities that want presence without chaos.",
    bullets: ["Private Lounges", "Local Lounges", "Supporter Lounge", "Pulse Lounge"],
    screenshots: [screenshots.lounges01, screenshots.lounges02],
  },
  {
    id: "search",
    kicker: "Verified Signals",
    headline: "Discovery built on trusted signals.",
    copy:
      "Search in Awy is designed around context, verified signals, Lounges, Strings, and people, not random algorithmic noise.",
    bullets: ["Verified Signals", "Lounges", "Strings", "People"],
    screenshots: [screenshots.search01],
  },
  {
    id: "appearance",
    kicker: "Appearance",
    headline: "A space that feels like yours.",
    copy:
      "Awy’s themes and visual system create a softer, more personal environment for communication through theme mode, ambient backgrounds, Galaxy Aurora, Nebula Violet, Orbit Blue, and Nova Glow when present.",
    bullets: ["Theme Mode", "Ambient Backgrounds", "Galaxy Aurora", "Nebula Violet"],
    screenshots: [screenshots.appearance01],
    reverse: true,
  },
];

export const faqItems = [
  {
    question: "What is Awy?",
    answer:
      "Awy is a private social environment built around presence, quiet spaces, shared rhythm, and consent-aware communication.",
  },
  {
    question: "How is Awy different from a regular social app?",
    answer:
      "Awy is designed to reduce noise instead of increase it. It focuses on intentional sharing, calmer communication, trusted signals, and spaces that feel more personal.",
  },
  {
    question: "What are Lounges?",
    answer:
      "Lounges are quiet shared rooms for people, groups, and communities. They are built for focused connection without the chaos of constant feeds or crowded group chats.",
  },
  {
    question: "What are Strings?",
    answer:
      "Strings are intentional one-to-one conversation threads for people and connections that deserve more care than a noisy inbox.",
  },
  {
    question: "What are Shared Areas?",
    answer:
      "Shared Areas are personal spaces that open around what someone chooses to share. They are designed around consent-aware visibility and intentional access.",
  },
  {
    question: "What is Pulse?",
    answer:
      "Pulse will become Awy’s public conversation space — a calmer layer for broader discovery and shared context.",
  },
  {
    question: "What are Verified Signals?",
    answer:
      "Verified Signals help make discovery feel more trusted and contextual. They support finding people, Lounges, Strings, and shared spaces with more intention.",
  },
  {
    question: "Is Awy public yet?",
    answer:
      "Awy is currently being prepared for wider availability. Join the waitlist for product notes, release timing, and next-step availability.",
  },
  {
    question: "Does Awy replace messaging apps?",
    answer:
      "Awy is not trying to recreate a noisy inbox. It is being built as a calmer social environment for presence, shared spaces, and more intentional communication.",
  },
  {
    question: "Why is Awy built around consent-aware sharing?",
    answer:
      "Awy is designed so personal spaces feel more controlled and intentional. People should be able to choose what they share, where it appears, and who can access it.",
  },
];
