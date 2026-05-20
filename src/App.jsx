import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const screenSrc = (fileName) => `${import.meta.env.BASE_URL}screens/${fileName}`;

const STORAGE_KEY = "awy-site-theme";

/** Public GitHub repo URL. Leave empty to hide the footer GitHub link. */
const GITHUB_URL = "";

const SUPPORT_LINK =
  "mailto:support@ljbbrands.com?subject=Awy%20Support";
const INVESTOR_LINK =
  "mailto:investors@ljbbrands.com?subject=Awy%20Investor%20Interest";
const COLLABORATE_LINK =
  "mailto:contact@ljbbrands.com?subject=Awy%20Collaboration";
const WAITLIST_MAILTO =
  "mailto:hello@ljbbrands.com?subject=Awy%20Waitlist";

const themes = [
  {
    id: "galaxy-aurora",
    label: "Galaxy Aurora",
    background:
      "linear-gradient(180deg, #03030A 0%, #080712 52%, #120D22 100%)",
    glow:
      "radial-gradient(circle at 18% 10%, rgba(124,58,237,0.18), transparent 24%), radial-gradient(circle at 76% 30%, rgba(168,85,247,0.12), transparent 28%), radial-gradient(circle at 50% 92%, rgba(88,28,135,0.16), transparent 30%)",
    accent: "#E879F9",
    accentSoft: "rgba(232,121,249,0.14)",
    accentBorder: "rgba(232,121,249,0.28)",
    accentText: "#F5D0FE",
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
      "linear-gradient(180deg, #03030A 0%, #090611 50%, #160D24 100%)",
    glow:
      "radial-gradient(circle at 25% 10%, rgba(124,58,237,0.26), transparent 22%), radial-gradient(circle at 75% 25%, rgba(167,139,250,0.18), transparent 24%), radial-gradient(circle at 50% 85%, rgba(192,132,252,0.14), transparent 26%)",
    accent: "#A78BFA",
    accentSoft: "rgba(167,139,250,0.14)",
    accentBorder: "rgba(167,139,250,0.26)",
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
      "linear-gradient(180deg, #03030A 0%, #060911 50%, #0B1020 100%)",
    glow:
      "radial-gradient(circle at 18% 18%, rgba(59,130,246,0.24), transparent 22%), radial-gradient(circle at 82% 28%, rgba(37,99,235,0.20), transparent 24%), radial-gradient(circle at 50% 82%, rgba(96,165,250,0.16), transparent 28%)",
    accent: "#60A5FA",
    accentSoft: "rgba(96,165,250,0.14)",
    accentBorder: "rgba(96,165,250,0.26)",
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
    label: "Solar Flare Orange",
    background:
      "linear-gradient(180deg, #040303 0%, #100908 54%, #1A0D0A 100%)",
    glow:
      "radial-gradient(circle at 22% 18%, rgba(251,146,60,0.22), transparent 22%), radial-gradient(circle at 78% 30%, rgba(239,68,68,0.16), transparent 24%), radial-gradient(circle at 50% 90%, rgba(255,180,90,0.18), transparent 24%)",
    accent: "#FDBA74",
    accentSoft: "rgba(253,186,116,0.14)",
    accentBorder: "rgba(253,186,116,0.28)",
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

const LEGACY_THEME_ID_MAP = {
  aurora: "galaxy-aurora",
  violet: "nebula-violet",
  cyan: "orbit-blue",
  sunset: "solar-flare-orange",
};

function resolveStoredThemeId(saved) {
  if (saved == null) return null;
  const raw = String(saved).trim();
  if (!raw) return null;
  if (themes.some((item) => item.id === raw)) return raw;
  const migrated = LEGACY_THEME_ID_MAP[raw];
  if (migrated && themes.some((item) => item.id === migrated)) return migrated;
  return null;
}

// Screenshot replacement map for Awy 1.1.0 (2):
// public/screens/01-home.png -> awy-home-presence-1102.png
// public/screens/04-profile.png -> awy-profile-shared-areas-1102.png
// public/screens/02-lounges.png -> awy-lounges-quiet-rooms-1102.png
// TODO: Add public/screens/awy-search-verified-signals-1102.png.
// public/screens/05-appearance.png -> awy-appearance-themes-1102.png
const screenshots = {
  presence: {
    label: "Presence",
    image: screenSrc("01-home.png"),
    alt: "Awy Home screen showing Live Presence and recent activity",
  },
  sharedAreas: {
    label: "Shared Areas",
    image: screenSrc("04-profile.png"),
    alt: "Awy Profile screen showing Shared Areas and consent-based spaces",
  },
  lounges: {
    label: "Lounges",
    image: screenSrc("02-lounges.png"),
    alt: "Awy Lounges screen showing quiet rooms and shared spaces",
  },
  search: {
    label: "Search",
    image: null,
    missingFile: "public/screens/awy-search-verified-signals-1102.png",
    alt: "Awy Search screen showing Verified Signals, Lounges, Strings, and People",
  },
  appearance: {
    label: "Appearance",
    image: screenSrc("05-appearance.png"),
    alt: "Awy Appearance screen showing theme and background settings",
  },
};

const showcaseSteps = [
  {
    id: "home",
    number: "01",
    title: "Presence",
    text: "Live activity, quiet awareness, and calmer visibility.",
    ...screenshots.presence,
  },
  {
    id: "profile",
    number: "02",
    title: "Shared Areas",
    text: "Personal spaces that open through consent-aware sharing.",
    ...screenshots.sharedAreas,
  },
  {
    id: "lounges",
    number: "03",
    title: "Lounges",
    text: "Quiet rooms for shared rhythm, people, groups, and communities.",
    ...screenshots.lounges,
  },
  {
    id: "search",
    number: "04",
    title: "Search",
    text: "Discovery built around Verified Signals, context, and trusted spaces.",
    ...screenshots.search,
  },
  {
    id: "appearance",
    number: "05",
    title: "Appearance",
    text: "Premium personalization, ambient backgrounds, and theme mode.",
    ...screenshots.appearance,
  },
];

const pillars = [
  "Private Social Space",
  "Consent-Based Visibility",
  "Designed to Reduce Noise",
  "Built for Calmer Communication",
];

const launchAccessCards = [
  {
    label: "Presence",
    title: "Connection has room to breathe.",
    text: "Awy centers presence, pacing, and intentional sharing instead of endless scrolling.",
  },
  {
    label: "Visibility",
    title: "Sharing is consent-aware by design.",
    text: "Visibility, media, and participation are framed around mutual comfort and clear context.",
  },
  {
    label: "Media",
    title: "Photos, videos, and voice memos belong in the conversation.",
    text: "Awy treats media as part of the sharing system without overstating unfinished layers.",
  },
];

const heroBenefits = ["Private Social Space", "Lounges", "Strings", "Pulse"];

const waitlistBenefits = [
  "Product Notes",
  "Release Timing",
  "Founder Updates",
];

const productSections = [
  {
    id: "presence",
    kicker: "Presence",
    headline: "Designed around presence.",
    copy:
      "See what matters without endless feeds, pressure loops, or constant noise. Awy helps people stay aware of shared activity without turning communication into consumption.",
    bullets: ["Live Presence", "Recent activity", "Gentle reminders", "Calm visibility"],
    screenshot: screenshots.presence,
  },
  {
    id: "shared-areas",
    kicker: "Shared Areas",
    headline: "Share intentionally.",
    copy:
      "Awy gives each person a space they control. Photos, posts, voice, videos, and personal context open based on consent, not pressure. Open what people choose to share.",
    bullets: ["Shared Areas", "Profile Note", "Consent-aware access", "Personal spaces"],
    screenshot: screenshots.sharedAreas,
    reverse: true,
  },
  {
    id: "lounges",
    kicker: "Lounges",
    headline: "Quiet rooms for shared rhythm.",
    copy:
      "Lounges are focused spaces for calmer conversation. They are built for people, groups, and communities that want presence without chaos.",
    bullets: ["Private Lounges", "Local Lounges", "Founder Lounge", "Pulse Lounge"],
    screenshot: screenshots.lounges,
  },
  {
    id: "strings",
    kicker: "Strings",
    headline: "One-to-one threads you hold dear.",
    copy:
      "Strings are intentional conversation threads for people and connections that deserve more care than a noisy inbox.",
    bullets: ["focused threads", "quieter replies", "personal rhythm", "intentional conversation"],
    screenshot: {
      label: "Strings",
      image: screenSrc("03-strings.png"),
      alt: "Awy Strings screen showing intentional conversation threads",
    },
    reverse: true,
  },
  {
    id: "search",
    kicker: "Verified Signals",
    headline: "Discovery built on trusted signals.",
    copy:
      "Search in Awy is designed around context, verified signals, Lounges, Strings, and people, not random algorithmic noise.",
    bullets: ["Verified Signals", "Lounges", "Strings", "People"],
    screenshot: screenshots.search,
  },
  {
    id: "appearance",
    kicker: "Appearance",
    headline: "A space that feels like yours.",
    copy:
      "Awy’s themes and visual system create a softer, more personal environment for communication through theme mode, ambient backgrounds, Galaxy Aurora, Nebula Violet, Orbit Blue, and Nova Glow when present.",
    bullets: ["theme mode", "ambient backgrounds", "Galaxy Aurora", "Nebula Violet"],
    screenshot: screenshots.appearance,
    reverse: true,
  },
];

export default function App() {
  const [themeId, setThemeId] = useState(themes[0].id);
  const [activeStep, setActiveStep] = useState(showcaseSteps[0].id);

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem(STORAGE_KEY);
      const resolved = resolveStoredThemeId(savedTheme);
      if (resolved) {
        setThemeId(resolved);
        if (savedTheme !== resolved) {
          window.localStorage.setItem(STORAGE_KEY, resolved);
        }
        return;
      }

      const randomTheme = themes[Math.floor(Math.random() * themes.length)];
      setThemeId(randomTheme.id);
      window.localStorage.setItem(STORAGE_KEY, randomTheme.id);
    } catch {
      setThemeId(themes[0].id);
    }
  }, []);

  const theme = useMemo(
    () => themes.find((item) => item.id === themeId) ?? themes[0],
    [themeId]
  );

  const activeShowcase = useMemo(
    () =>
      showcaseSteps.find((item) => item.id === activeStep) ?? showcaseSteps[0],
    [activeStep]
  );

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((item) => item.id === theme.id);
    const nextTheme = themes[(currentIndex + 1) % themes.length];

    setThemeId(nextTheme.id);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme.id);
    } catch {
      // no-op
    }
  };

  const scrollToSection = (sectionId) => (event) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0B0B14] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: theme.glow }}
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{ background: theme.background }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: theme.overlay }}
        />
      </div>

      <main id="top" className="relative px-6 py-8 sm:px-8 lg:px-10">
        <section className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid items-center gap-14 pb-24 pt-8 lg:grid-cols-[0.92fr_1.08fr]"
          >
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <div
                  className="inline-flex rounded-full border px-4 py-2 text-sm text-white/78 backdrop-blur-xl"
                  style={{
                    backgroundColor: theme.heroPillBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  Awy • {theme.label}
                </div>

                <div
                  className="inline-flex rounded-full border px-4 py-2 text-sm text-white/78 backdrop-blur-xl"
                  style={{
                    backgroundColor: theme.heroPillBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  Calm digital environment
                </div>

                <button
                  type="button"
                  onClick={cycleTheme}
                  className="rounded-full border px-4 py-2 text-sm text-white/88 backdrop-blur-xl transition hover:bg-white/10"
                  style={{
                    backgroundColor: theme.heroPillBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  Change Atmosphere
                </button>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Presence, not noise.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                Awy is a private social environment built around quiet spaces,
                shared rhythm, and consent-aware communication.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">
                A calm digital environment for intentional presence, trusted
                signals, and private shared spaces.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#waitlist"
                  onClick={scrollToSection("waitlist")}
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Join the Waitlist
                </a>

                <a
                  href="#presence"
                  onClick={scrollToSection("presence")}
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  style={{
                    backgroundColor: theme.heroPillBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  Explore Awy
                </a>

              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/54">
                {heroBenefits.map((item) => (
                  <span
                    key={item}
                    className="inline-flex rounded-full border px-3 py-1 backdrop-blur-xl"
                    style={{
                      backgroundColor: theme.heroPillBg,
                      borderColor: theme.cardBorder,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                {showcaseSteps.map((step) => {
                  const isActive = step.id === activeStep;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStep(step.id)}
                      className="flex w-full max-w-xl items-center gap-4 rounded-2xl border px-4 py-4 text-left backdrop-blur-xl transition"
                      style={{
                        backgroundColor: isActive
                          ? theme.accentSoft
                          : theme.panelBg,
                        borderColor: isActive
                          ? theme.accentBorder
                          : theme.cardBorder,
                      }}
                    >
                      <div
                        className="rounded-full border px-3 py-1 text-xs"
                        style={{
                          borderColor: isActive
                            ? theme.accentBorder
                            : theme.cardBorder,
                          color: isActive
                            ? theme.accentText
                            : "rgba(255,255,255,0.62)",
                        }}
                      >
                        {step.number}
                      </div>

                      <div>
                        <div className="text-base font-medium">{step.title}</div>
                        <div className="mt-1 text-sm text-white/60">
                          {step.text}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div
                className="mb-5 rounded-[1.5rem] border px-5 py-4 backdrop-blur-2xl"
                style={{
                  backgroundColor: theme.panelBg,
                  borderColor: theme.cardBorder,
                }}
              >
                <div
                  className="text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: theme.accentText }}
                >
                  {activeShowcase.number} • {activeShowcase.title}
                </div>
                <div className="mt-2 text-sm text-white/64">
                  {activeShowcase.text}
                </div>
              </div>

              <IPhoneShowcase theme={theme} step={activeShowcase} />
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-6xl pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div
                className="inline-flex rounded-full border px-3 py-1 text-xs"
                style={{
                  borderColor: theme.accentBorder,
                  backgroundColor: theme.accentSoft,
                  color: theme.accentText,
                }}
              >
                Product Positioning
              </div>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                A calm digital environment for intentional presence.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
                Awy is built around presence, shared rhythm, consent-aware
                visibility, quiet rooms, trusted signals, and private shared
                spaces.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  className="rounded-[1.5rem] border p-5 text-white/78 backdrop-blur-xl"
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                    boxShadow: `0 24px 60px ${theme.accentSoft}`,
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {productSections.map((section) => (
          <ProductSection key={section.id} section={section} theme={theme} />
        ))}

        <section id="updates" className="mx-auto max-w-6xl pb-24">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold">What’s coming</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
              Pulse will become Awy’s public conversation space, shaped by
              presence, trusted signals, and calmer discovery.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[1.75rem] border p-6 backdrop-blur-2xl shadow-2xl shadow-black/20"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">Private Access</h3>
                <p className="mt-2 max-w-2xl text-white/68">
                  Awy’s access path is intentional. Join the waitlist for
                  product notes, release timing, and next-step availability.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#waitlist"
                  onClick={scrollToSection("waitlist")}
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Join the Waitlist
                </a>

                <a
                  href={SUPPORT_LINK}
                  className="inline-flex rounded-full border px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  style={{
                    backgroundColor: theme.heroPillBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  Contact Support
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <div
                className="inline-flex rounded-full border px-3 py-1 text-xs text-white/65"
                style={{
                  borderColor: theme.cardBorder,
                  backgroundColor: theme.heroPillBg,
                }}
              >
                iOS • Private Access
              </div>
            </div>

            <p className="mt-4 text-sm text-white/50">
              Availability expands thoughtfully so Awy can stay focused on
              calmer communication.
            </p>
          </motion.div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {launchAccessCards.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-[1.75rem] border p-6 backdrop-blur-2xl shadow-2xl shadow-black/20"
                style={{
                  backgroundColor: theme.panelBg,
                  borderColor: theme.cardBorder,
                }}
              >
                <div
                  className="inline-flex rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: theme.accentBorder,
                    backgroundColor: theme.accentSoft,
                    color: theme.accentText,
                  }}
                >
                  {item.label}
                </div>

                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-white/68">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-6xl pb-24">
          <div
            className="relative overflow-hidden rounded-[2rem] border p-8 backdrop-blur-2xl shadow-2xl shadow-black/30"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: theme.accentSoft }}
            />
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div
                  className="inline-flex rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: theme.accentBorder,
                    backgroundColor: theme.accentSoft,
                    color: theme.accentText,
                  }}
                >
                  Waitlist
                </div>

                <h2 className="mt-5 text-3xl font-semibold">
                  A calmer way to stay connected.
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
                  Awy is being built for people who want communication to feel
                  more intentional, more private, and less exhausting.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {waitlistBenefits.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border px-4 py-4 text-sm text-white/72 backdrop-blur-xl"
                      style={{
                        backgroundColor: theme.cardBg,
                        borderColor: theme.cardBorder,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-6 max-w-lg text-sm leading-6 text-white/48">
                  No long survey, no friction. Just a clean way to stay close to
                  Awy as Lounges, Strings, and Pulse continue to mature.
                </p>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/48">
                  Prefer Email?{" "}
                  <a
                    href={WAITLIST_MAILTO}
                    className="text-white/70 underline decoration-white/25 underline-offset-4 transition hover:text-white"
                  >
                    hello@ljbbrands.com
                  </a>
                </p>
              </div>

              <motion.div
                className="rounded-[1.75rem] border p-6 backdrop-blur-2xl shadow-2xl shadow-black/20"
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.cardBorder,
                }}
              >
                <div>
                  <div className="text-sm font-medium text-white/78">
                    Waitlist Email
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/54">
                    Opens your email app to hello@ljbbrands.com with the subject
                    line prefilled. Send from the address you want on the list.
                  </p>
                </div>

                <a
                  href={WAITLIST_MAILTO}
                  className="mt-5 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Join the Waitlist
                </a>

                <div className="mt-4 min-h-[3.25rem]">
                  <div className="text-sm leading-6 text-white/46">
                    By emailing the waitlist, you’re opting into product
                    correspondence for Awy.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="privacy" className="mx-auto max-w-6xl pb-24">
          <div
            className="rounded-[1.75rem] border p-8 backdrop-blur-2xl shadow-2xl shadow-black/20"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
            <h2 className="text-3xl font-semibold">Privacy</h2>
            <p className="mt-4 max-w-4xl text-white/70">
              Awy is committed to respectful, privacy-conscious product design.
              As the platform evolves, a fuller privacy policy will explain what
              data is collected, how it is used, and what choices users have
              around visibility, consent, media, and participation.
            </p>
            <p className="mt-4 max-w-4xl text-white/62">
              This landing page may direct you to email the waitlist voluntarily;
              any address you send from may be used for product communication
              and access coordination.
            </p>
          </div>
        </section>

        <section id="terms" className="mx-auto max-w-6xl pb-24">
          <div
            className="rounded-[1.75rem] border p-8 backdrop-blur-2xl shadow-2xl shadow-black/20"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
            <h2 className="text-3xl font-semibold">Terms</h2>
            <p className="mt-4 max-w-4xl text-white/70">
              Awy’s features, flows, and visuals may continue to evolve.
              Information on this site is intended to communicate current
              direction, product focus, and availability interest rather than
              final product guarantees.
            </p>
            <p className="mt-4 max-w-4xl text-white/62">
              As the platform approaches broader release, a fuller Terms of Use
              document should define account expectations, acceptable use, and
              platform protections more formally.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl pb-12 text-center">
          <div
            className="rounded-[2rem] border px-8 py-12 backdrop-blur-2xl shadow-2xl shadow-black/30"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
            <div
              className="mx-auto inline-flex rounded-full border px-3 py-1 text-xs"
              style={{
                borderColor: theme.accentBorder,
                backgroundColor: theme.accentSoft,
                color: theme.accentText,
              }}
            >
              Presence
            </div>

            <h2 className="mt-5 text-3xl font-semibold">
              A calmer way to stay connected.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/72">
              Awy is being built for people who want communication to feel more
              intentional, more private, and less exhausting.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#waitlist"
                onClick={scrollToSection("waitlist")}
                className="inline-flex rounded-full bg-white px-8 py-4 text-base font-medium text-black transition hover:opacity-90"
              >
                Join the Waitlist
              </a>

              <a
                href={SUPPORT_LINK}
                className="inline-flex rounded-full border px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
                style={{
                  backgroundColor: theme.heroPillBg,
                  borderColor: theme.cardBorder,
                }}
              >
                Contact Support
              </a>

              <a
                href={INVESTOR_LINK}
                className="inline-flex rounded-full border px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
                style={{
                  backgroundColor: theme.heroPillBg,
                  borderColor: theme.cardBorder,
                }}
              >
                Investor Interest
              </a>

              <a
                href={COLLABORATE_LINK}
                className="inline-flex rounded-full border px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
                style={{
                  backgroundColor: theme.heroPillBg,
                  borderColor: theme.cardBorder,
                }}
              >
                Collaborate
              </a>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-6xl pb-10">
          <div
            className="flex flex-col gap-4 rounded-[1.5rem] border px-6 py-5 backdrop-blur-2xl md:flex-row md:items-center md:justify-between"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
            <div className="text-sm text-white/58">© 2026 Awy. At Your Pace.</div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
              {GITHUB_URL ? (
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
              ) : null}
              <a href={SUPPORT_LINK} className="transition hover:text-white">
                Support
              </a>
              <a
                href="#waitlist"
                onClick={scrollToSection("waitlist")}
                className="transition hover:text-white"
              >
                Waitlist
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ProductSection({ section, theme }) {
  return (
    <section id={section.id} className="mx-auto max-w-6xl pb-24">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 ${
          section.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <div
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            {section.kicker}
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            {section.headline}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
            {section.copy}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {section.bullets.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border px-4 py-3 text-sm text-white/74 backdrop-blur-xl"
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.cardBorder,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute inset-8 rounded-[3rem] blur-3xl"
            style={{ backgroundColor: theme.accentSoft }}
          />
          <div
            className="relative mx-auto max-w-[430px] rounded-[2.4rem] border p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl"
            style={{
              backgroundColor: theme.phoneShell,
              borderColor: theme.cardBorder,
            }}
          >
            {section.screenshot.image ? (
              <img
                src={section.screenshot.image}
                alt={section.screenshot.alt}
                className="block w-full rounded-[2rem] border"
                style={{ borderColor: theme.cardBorder }}
              />
            ) : (
              <AssetTodoCard screenshot={section.screenshot} theme={theme} />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AssetTodoCard({ screenshot, theme }) {
  return (
    <div
      className="flex min-h-[620px] flex-col justify-center rounded-[2rem] border p-8 text-center"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
      }}
      role="img"
      aria-label={screenshot.alt}
    >
      <div
        className="mx-auto inline-flex rounded-full border px-3 py-1 text-xs"
        style={{
          borderColor: theme.accentBorder,
          backgroundColor: theme.accentSoft,
          color: theme.accentText,
        }}
      >
        Screenshot TODO
      </div>
      <div className="mt-5 text-xl font-semibold">{screenshot.label}</div>
      <p className="mt-3 text-sm leading-6 text-white/58">
        Place the updated 1.1.0 (2) screenshot at{" "}
        <span className="text-white/76">{screenshot.missingFile}</span>.
      </p>
    </div>
  );
}

function IPhoneShowcase({ theme, step }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [step.id]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08 }}
      className="mx-auto w-full max-w-[430px]"
    >
      <div
        className="rounded-[3.1rem] border p-[10px] shadow-2xl shadow-black/40 backdrop-blur-2xl"
        style={{
          backgroundColor: theme.phoneShell,
          borderColor: "rgba(255,255,255,0.10)",
        }}
      >
        <div
          className="rounded-[2.65rem] border p-[10px]"
          style={{
            backgroundColor: "rgba(0,0,0,0.18)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="overflow-hidden rounded-[2.3rem] border"
            style={{
              backgroundColor: theme.phoneInner,
              borderColor: theme.cardBorder,
            }}
          >
            <AnimatePresence mode="wait">
              {imageError || !step.image ? (
                <motion.div
                  key={`${step.id}-fallback`}
                  initial={{ opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.28 }}
                  className="flex h-[860px] w-full flex-col items-center justify-center px-8 text-center"
                  style={{ backgroundColor: theme.cardBg }}
                >
                  <div className="text-xl font-semibold">{step.title}</div>
                  <div className="mt-3 text-white/60">{step.text}</div>
                  <div
                    className="mt-5 rounded-full border px-3 py-1 text-xs"
                    style={{
                      borderColor: theme.accentBorder,
                      backgroundColor: theme.accentSoft,
                      color: theme.accentText,
                    }}
                  >
                    Missing File: {step.missingFile ?? step.image}
                  </div>
                </motion.div>
              ) : (
                <motion.img
                  key={step.id}
                  src={step.image}
                  alt={step.alt}
                  initial={{ opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.28 }}
                  className="block w-full rounded-[2.3rem]"
                  onError={() => setImageError(true)}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
