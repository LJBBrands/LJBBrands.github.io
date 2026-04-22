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
      "linear-gradient(180deg, #171B52 0%, #2A1F6D 26%, #582168 58%, #9F1F5D 82%, #D62D6E 100%)",
    glow:
      "radial-gradient(circle at top left, rgba(56,101,255,0.18), transparent 20%), radial-gradient(circle at 50% 15%, rgba(83,52,196,0.38), transparent 28%), radial-gradient(circle at 50% 48%, rgba(154,38,133,0.24), transparent 28%), radial-gradient(circle at 50% 82%, rgba(214,31,120,0.22), transparent 25%), radial-gradient(circle at 50% 100%, rgba(255,88,160,0.22), transparent 24%)",
    accent: "#E879F9",
    accentSoft: "rgba(232,121,249,0.14)",
    accentBorder: "rgba(232,121,249,0.28)",
    accentText: "#F5D0FE",
    heroPillBg: "rgba(0,0,0,0.20)",
    cardBg: "rgba(0,0,0,0.20)",
    panelBg: "rgba(0,0,0,0.18)",
    cardBorder: "rgba(255,255,255,0.08)",
    overlay: "rgba(0,0,0,0.35)",
    phoneShell: "rgba(10,10,18,0.55)",
    phoneInner: "rgba(18,18,28,0.96)",
  },
  {
    id: "nebula-violet",
    label: "Nebula Violet",
    background:
      "linear-gradient(180deg, #120A2E 0%, #241456 30%, #3B1868 58%, #5A2280 100%)",
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
    overlay: "rgba(0,0,0,0.36)",
    phoneShell: "rgba(18,12,28,0.58)",
    phoneInner: "rgba(20,16,34,0.96)",
  },
  {
    id: "orbit-blue",
    label: "Orbit Blue",
    background:
      "linear-gradient(180deg, #0A1A44 0%, #102E6E 32%, #1A3F8A 58%, #244798 88%, #1E3470 100%)",
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
    overlay: "rgba(0,0,0,0.34)",
    phoneShell: "rgba(8,18,32,0.56)",
    phoneInner: "rgba(14,22,38,0.96)",
  },
  {
    id: "solar-flare-orange",
    label: "Solar Flare Orange",
    background:
      "linear-gradient(180deg, #2A0F18 0%, #5C1A22 28%, #8B2818 52%, #C43A12 78%, #F97316 100%)",
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
    overlay: "rgba(0,0,0,0.36)",
    phoneShell: "rgba(32,14,10,0.56)",
    phoneInner: "rgba(28,16,18,0.96)",
  },
  {
    id: "alien-green",
    label: "Alien Green",
    background:
      "linear-gradient(180deg, #052E1F 0%, #064E3B 30%, #047857 58%, #22C55E 88%, #4ADE80 100%)",
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
    overlay: "rgba(0,0,0,0.32)",
    phoneShell: "rgba(6,28,18,0.56)",
    phoneInner: "rgba(12,28,20,0.96)",
  },
  {
    id: "solar-yellow",
    label: "Solar Yellow",
    background:
      "linear-gradient(180deg, #2A1F08 0%, #4A3410 28%, #7C5A12 52%, #B8860B 78%, #F59E0B 100%)",
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
    overlay: "rgba(0,0,0,0.34)",
    phoneShell: "rgba(36,24,8,0.56)",
    phoneInner: "rgba(28,22,12,0.96)",
  },
  {
    id: "horizon-rose",
    label: "Horizon Rose",
    background:
      "linear-gradient(180deg, #2A1024 0%, #4C1D3D 32%, #7A2E52 60%, #A8557A 88%, #D946A6 100%)",
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
    overlay: "rgba(0,0,0,0.34)",
    phoneShell: "rgba(40,14,30,0.56)",
    phoneInner: "rgba(30,16,26,0.96)",
  },
  {
    id: "deep-space-navy",
    label: "Deep Space Navy",
    background:
      "linear-gradient(180deg, #050A1A 0%, #0C1938 32%, #132347 58%, #1E3A5F 88%, #312E81 100%)",
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
      "linear-gradient(180deg, #0F172A 0%, #1E293B 35%, #334155 65%, #475569 92%, #64748B 100%)",
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
    overlay: "rgba(0,0,0,0.28)",
    phoneShell: "rgba(20,28,40,0.58)",
    phoneInner: "rgba(24,30,42,0.96)",
  },
  {
    id: "starlight-pink",
    label: "Starlight Pink",
    background:
      "linear-gradient(180deg, #1A0A24 0%, #3B0A3A 30%, #6B0D5C 58%, #9D174D 82%, #DB2777 100%)",
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
    overlay: "rgba(0,0,0,0.34)",
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
  if (!saved) return null;
  if (themes.some((item) => item.id === saved)) return saved;
  const migrated = LEGACY_THEME_ID_MAP[saved];
  if (migrated && themes.some((item) => item.id === migrated)) return migrated;
  return null;
}

const showcaseSteps = [
  {
    id: "home",
    number: "01",
    title: "Home",
    text: "Your notification hub for updates, presence, and activity.",
    image: screenSrc("01-home.png"),
  },
  {
    id: "lounges",
    number: "02",
    title: "Lounges",
    text: "Shared spaces built for presence, discovery, and low-pressure interaction.",
    image: screenSrc("02-lounges.png"),
  },
  {
    id: "strings",
    number: "03",
    title: "Strings",
    text: "Private conversation designed to feel calmer, clearer, and more intentional.",
    image: screenSrc("03-strings.png"),
  },
  {
    id: "profile",
    number: "04",
    title: "Profile",
    text: "An expressive identity layer built around updates, music, and personal presence.",
    image: screenSrc("04-profile.png"),
  },
  {
    id: "appearance",
    number: "05",
    title: "Appearance",
    text: "Theme modes make the app feel personal, dynamic, and visually aligned with the user.",
    image: screenSrc("05-appearance.png"),
  },
];

const pillars = [
  "Avatar-First",
  "Consent-Based",
  "No Addictive Feeds",
  "Built-In Closure",
];

const adaptiveCards = [
  {
    title: "Profile",
    text: "Users shape how they appear through identity, updates, music, and everyday presence.",
    type: "profile",
  },
  {
    title: "Appearance Modes",
    text: "Awy adapts visually through curated themes: Galaxy Aurora, Nebula Violet, Orbit Blue, Solar Flare Orange, Alien Green, Solar Yellow, Horizon Rose, Deep Space Navy, Luna Mist Grey, and Starlight Pink.",
    type: "appearance",
  },
  {
    title: "Home Hub",
    text: "Notifications, pings, mentions, and consent updates stay organized in one calm place.",
    type: "home",
  },
];

const launchAccessCards = [
  {
    label: "Identity",
    title: "Theme rotation is part of the product feel.",
    text: "Ten app-identical themes shape how Awy presents itself across the landing experience.",
  },
  {
    label: "Surface Area",
    title: "Core screens are visible and grounded.",
    text: "Home, Lounges, Strings, Profile, and Appearance are already shown in the live showcase.",
  },
  {
    label: "Launch Readiness",
    title: "Early access stays waitlist-first.",
    text: "Join the waitlist for consideration. Approved testers receive the TestFlight link privately by email.",
  },
];

const heroBenefits = ["Waitlist-First Access", "Invite-Only Beta", "Calm Product Updates"];

const waitlistBenefits = [
  "Early Access Notes",
  "Launch Timing Updates",
  "Direct Product Progress",
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
                  Invite-Only Beta
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
                  Change Theme
                </button>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Connection at your pace.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                Awy is a calmer social product built around presence, readiness,
                and mutual progression.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">
                A live product showcase and a waitlist path into the private beta.
                No public install links—access is intentional.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#waitlist"
                  onClick={scrollToSection("waitlist")}
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Join Waitlist
                </a>

                <a
                  href={SUPPORT_LINK}
                  className="inline-flex rounded-full border px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  style={{
                    backgroundColor: theme.heroPillBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  Contact Support
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

        <section className="mx-auto max-w-6xl pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <h2 className="text-3xl font-semibold">Why Awy feels different</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
                Designed to reduce pressure, reward clarity, and make progression
                feel intentional instead of performative.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border p-5 text-white/78 backdrop-blur-xl"
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl pb-24">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold">
              Built around how people show up
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
              Awy is not just about messaging. It adapts to mood, pacing, and the
              kind of presence users want to bring into the experience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {adaptiveCards.map((card) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
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
                  {card.title}
                </div>

                <div className="mt-5">
                  <CardVisual type={card.type} theme={theme} />
                </div>

                <p className="mt-5 text-white/68">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl pb-24">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold">About Awy</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
              Awy exists to make digital connection feel slower, safer, and more
              intentional.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border p-6 backdrop-blur-2xl shadow-2xl shadow-black/20"
              style={{
                backgroundColor: theme.panelBg,
                borderColor: theme.cardBorder,
              }}
            >
              <h3 className="text-xl font-semibold">What Awy is for</h3>
              <p className="mt-3 text-white/68">
                A social experience built around readiness, mutual progression,
                and more grounded interaction.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[1.75rem] border p-6 backdrop-blur-2xl shadow-2xl shadow-black/20"
              style={{
                backgroundColor: theme.panelBg,
                borderColor: theme.cardBorder,
              }}
            >
              <h3 className="text-xl font-semibold">Why it matters</h3>
              <p className="mt-3 text-white/68">
                Most apps optimize for speed and attention. Awy is built to
                support pacing, comfort, and more meaningful outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="updates" className="mx-auto max-w-6xl pb-24">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold">Product Updates</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
              Follow launch readiness, feature maturity, and waitlist movement as
              Awy progresses from showcase to private beta.
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
                <h3 className="text-xl font-semibold">Private Beta (Waitlist)</h3>
                <p className="mt-2 max-w-2xl text-white/68">
                  Beta access is waitlist-only. There is no public install link on
                  this site. Approved testers receive the TestFlight link manually
                  by email after review.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#waitlist"
                  onClick={scrollToSection("waitlist")}
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Join Waitlist
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
                iOS • TestFlight (Invite Only)
              </div>
            </div>

            <p className="mt-4 text-sm text-white/50">
              Early access is limited. Invites expand gradually from the waitlist.
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
            className="rounded-[2rem] border p-8 backdrop-blur-2xl shadow-2xl shadow-black/30"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
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
                  Join the Awy Waitlist
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
                  A direct line for early access, launch timing, and thoughtful
                  product updates.
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
                  This is a launch-facing waitlist. No long survey, no friction —
                  just a clean way to stay close to the product.
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
                  Join Waitlist
                </a>

                <div className="mt-4 min-h-[3.25rem]">
                  <div className="text-sm leading-6 text-white/46">
                    By emailing the waitlist, you’re opting into launch and
                    product correspondence for Awy.
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
              around visibility and participation.
            </p>
            <p className="mt-4 max-w-4xl text-white/62">
              This landing page may direct you to email the waitlist voluntarily;
              any address you send from may be used for launch communication and
              early access coordination.
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
              Awy is currently presented as an active build in progress. Features,
              flows, and visuals may continue to evolve. Information on this site
              is intended to communicate direction, progress, and launch interest
              rather than final product guarantees.
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
              Stay Close
            </div>

            <h2 className="mt-5 text-3xl font-semibold">
              Choose how you want to stay close to Awy.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/72">
              Join the waitlist, reach support, start an investor conversation, or
              explore collaboration.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#waitlist"
                onClick={scrollToSection("waitlist")}
                className="inline-flex rounded-full bg-white px-8 py-4 text-base font-medium text-black transition hover:opacity-90"
              >
                Join Waitlist
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

function CardVisual({ type, theme }) {
  if (type === "profile") {
    return (
      <div
        className="rounded-2xl border p-4"
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: `1px solid ${theme.cardBorder}`,
            }}
          >
            K
          </div>

          <div>
            <div className="font-medium">Kyle</div>
            <div className="text-sm text-white/55">@Kyle • Orlando, FL</div>
          </div>
        </div>

        <div className="mt-4 text-sm text-white/58">Music • Posts • Presence</div>
      </div>
    );
  }

  if (type === "appearance") {
    const gradients = [
      "linear-gradient(180deg, #4754ff 0%, #8d34bf 55%, #ff5ea8 100%)",
      "linear-gradient(180deg, #3b1f6b 0%, #6b21a8 55%, #9333ea 100%)",
      "linear-gradient(180deg, #0c2a6b 0%, #1d4ed8 55%, #2563eb 100%)",
      "linear-gradient(180deg, #7c2d12 0%, #ea580c 55%, #f97316 100%)",
      "linear-gradient(180deg, #064e3b 0%, #059669 55%, #4ade80 100%)",
      "linear-gradient(180deg, #422006 0%, #b45309 55%, #fbbf24 100%)",
      "linear-gradient(180deg, #4a044e 0%, #9d174d 55%, #ec4899 100%)",
      "linear-gradient(180deg, #020617 0%, #1e3a8a 55%, #312e81 100%)",
      "linear-gradient(180deg, #0f172a 0%, #334155 55%, #94a3b8 100%)",
      "linear-gradient(180deg, #500724 0%, #be185d 55%, #f472b6 100%)",
    ];

    const labels = [
      "Galaxy Aurora",
      "Nebula Violet",
      "Orbit Blue",
      "Solar Flare Orange",
      "Alien Green",
      "Solar Yellow",
      "Horizon Rose",
      "Deep Space Navy",
      "Luna Mist Grey",
      "Starlight Pink",
    ];

    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {labels.map((label, index) => (
          <div key={label} className="min-w-0">
            <div
              className="h-16 rounded-2xl border"
              style={{
                background: gradients[index],
                borderColor: theme.cardBorder,
              }}
            />
            <div className="mt-2 text-xs leading-4 text-white/55">{label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl border p-4"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
      }}
    >
      <div className="flex items-center gap-2">
        {["All", "Pings", "Consent"].map((label, index) => (
          <div
            key={label}
            className="rounded-full px-3 py-1 text-xs"
            style={{
              backgroundColor:
                index === 0 ? theme.accentSoft : "rgba(255,255,255,0.06)",
              border: `1px solid ${
                index === 0 ? theme.accentBorder : theme.cardBorder
              }`,
              color:
                index === 0 ? theme.accentText : "rgba(255,255,255,0.7)",
            }}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-white/56">
        One calm place for updates, mentions, and consent activity.
      </div>
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
              {imageError ? (
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
                    Missing File: {step.image}
                  </div>
                </motion.div>
              ) : (
                <motion.img
                  key={step.id}
                  src={step.image}
                  alt={step.title}
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
