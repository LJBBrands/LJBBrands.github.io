import { useState } from "react";
import DeviceFrame from "./DeviceFrame";

const FRAME = "relative h-[210px] w-full overflow-hidden sm:h-[228px]";

function PreviewShell({ children, className = "" }) {
  return (
    <div className={`${FRAME} ${className}`} aria-hidden="true">
      {children}
    </div>
  );
}

function AwyScreenshotVisual({ visual }) {
  const { primary, left, right } = visual.card;

  return (
    <div className="awy-card-stage" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/20" />

      <div className="awy-card-phone awy-card-phone--left">
        <DeviceFrame screenshot={left} size="cardSide" decorative />
      </div>

      <div className="awy-card-phone awy-card-phone--right">
        <DeviceFrame screenshot={right} size="cardSide" decorative />
      </div>

      <div className="awy-card-phone awy-card-phone--center">
        <DeviceFrame screenshot={primary} size="card" decorative />
      </div>
    </div>
  );
}

function RewindBranded({ accent, theme }) {
  const bars = [22, 40, 28, 56, 34, 62, 44, 70, 38, 58, 30, 48, 36, 52];

  return (
    <PreviewShell className="px-5 py-5">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(217,255,154,0.12), transparent 42%), radial-gradient(circle at 82% 70%, rgba(255,255,255,0.04), transparent 40%)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
              Media
            </div>
            <div className="mt-1.5 text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
              LJB Rewind
            </div>
          </div>
          <div
            className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border"
            style={{ borderColor: theme.cardBorder, color: accent }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M9 7.5v9l8-4.5-8-4.5Z" />
            </svg>
          </div>
        </div>

        <div className="flex h-12 items-end gap-[3px]">
          {bars.map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-full"
              style={{
                height: `${height}%`,
                backgroundColor:
                  index % 4 === 0 ? `${accent}99` : "rgba(255,255,255,0.18)",
              }}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {["Podcast", "LIVE", "Unboxings", "LEGO", "Road Trips"].map(
            (label) => (
              <span
                key={label}
                className="rounded-full border px-2 py-0.5 text-[10px] text-white/55"
                style={{ borderColor: theme.cardBorder }}
              >
                {label}
              </span>
            )
          )}
        </div>
      </div>
    </PreviewShell>
  );
}

function Rt345lcEditorialChrome({ theme }) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between px-5 py-4">
      <div className="flex items-center justify-between">
        <span
          className="rounded-md border px-2 py-1 text-[10px] font-semibold tracking-[0.18em]"
          style={{ borderColor: theme.accentBorder, color: theme.accent }}
        >
          LJB
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">
          Automotive
        </span>
      </div>

      <div className="flex-1" aria-hidden="true" />

      <div className="text-[11px] font-medium tracking-[0.02em] text-white/70">
        Builds · Photography · Road Trips
      </div>
    </div>
  );
}

function Rt345lcPhotoCover({ project, theme, size = "card" }) {
  const [failed, setFailed] = useState(false);
  const hero = project.visual?.hero;
  const alt =
    project.visual?.alt || "Front view of the green RT345LC performance sedan";
  const shellClass =
    size === "dialog" ? "rt345lc-shell rt345lc-shell--dialog" : "rt345lc-shell";

  if (!hero || failed) {
    return (
      <div className={`${shellClass} relative overflow-hidden`} aria-hidden="true">
        <div className="rt345lc-fallback">
          <div className="rt345lc-fallback__lines" />
        </div>
        <Rt345lcEditorialChrome theme={theme} />
      </div>
    );
  }

  return (
    <div className={`${shellClass} relative overflow-hidden`}>
      <img
        src={hero}
        alt={size === "dialog" ? alt : ""}
        className="rt345lc-photo"
        loading={size === "dialog" ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        onError={() => setFailed(true)}
      />
      <div className="rt345lc-photo__shade" aria-hidden="true" />
      <div className="rt345lc-photo__vignette" aria-hidden="true" />
      <div className="rt345lc-photo__glow" aria-hidden="true" />
      <div aria-hidden={size !== "dialog" ? true : undefined}>
        <Rt345lcEditorialChrome theme={theme} />
      </div>
    </div>
  );
}

function GiveLoveLogoVisual({ project, theme, size = "card" }) {
  const [failed, setFailed] = useState(false);
  const logo = project.visual?.logo || project.visual?.hero;
  const alt =
    project.visual?.alt || "Give Love Co. official wordmark logo";
  const shellClass =
    size === "dialog"
      ? "give-love-shell give-love-shell--dialog"
      : "give-love-shell";

  if (!logo || failed) {
    return (
      <div className={`${shellClass} relative overflow-hidden`} aria-hidden="true">
        <div className="give-love-shell__glow" />
        <div className="give-love-panel give-love-panel--fallback" />
      </div>
    );
  }

  return (
    <div className={`${shellClass} relative overflow-hidden`}>
      <div className="give-love-shell__glow" aria-hidden="true" />
      <div className="give-love-shell__vignette" aria-hidden="true" />
      <div
        className="give-love-panel"
        style={{ borderColor: theme.cardBorder }}
      >
        <img
          src={logo}
          alt={size === "dialog" ? alt : ""}
          className="give-love-logo"
          loading={size === "dialog" ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          onError={() => setFailed(true)}
        />
      </div>
    </div>
  );
}

function ArborIconVisual({ project, theme, size = "card" }) {
  const [failed, setFailed] = useState(false);
  const logo = project.visual?.logo || project.visual?.hero;
  const alt = project.visual?.logoAlt || "Arbor macOS app icon";
  const shellClass =
    size === "dialog" ? "arbor-shell arbor-shell--dialog" : "arbor-shell";

  if (!logo || failed) {
    return (
      <div className={`${shellClass} relative overflow-hidden`} aria-hidden="true">
        <div className="arbor-shell__glow" />
      </div>
    );
  }

  return (
    <div className={`${shellClass} relative overflow-hidden`}>
      <div className="arbor-shell__glow" aria-hidden="true" />
      <div className="arbor-shell__vignette" aria-hidden="true" />

      <div className="arbor-shell__chrome">
        <span className="arbor-shell__eyebrow">macOS Utility</span>
        <span
          className="arbor-shell__badge"
          style={{ borderColor: theme.cardBorder }}
        >
          Local + External
        </span>
      </div>

      <img
        src={logo}
        alt={size === "dialog" ? alt : ""}
        className="arbor-app-icon"
        loading={size === "dialog" ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function HemlockBranded({ theme }) {
  return (
    <PreviewShell className="px-5 py-5">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 22% 18%, rgba(200,212,192,0.10), transparent 42%), radial-gradient(circle at 78% 78%, rgba(255,255,255,0.04), transparent 40%), linear-gradient(180deg, rgba(8,10,8,0.2), rgba(0,0,0,0.55))",
        }}
      />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
            Fiction
          </div>
          <div className="mt-1.5 text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem]">
            Hemlock Hollow
          </div>
          <p className="mt-2 max-w-[16rem] text-[12px] leading-5 text-white/55">
            A small town with a dark secret.
          </p>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div
            className="flex h-11 w-9 items-center justify-center rounded-md border"
            style={{ borderColor: theme.cardBorder, color: "rgba(200,212,192,0.9)" }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M5.5 5.75h5.2c1.4 0 2.55 1.15 2.55 2.55v10.2c0-.97-.78-1.75-1.75-1.75H5.5V5.75Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 5.75h-5.2c-1.4 0-2.55 1.15-2.55 2.55v10.2c0-.97.78-1.75 1.75-1.75H18.5V5.75Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-wrap justify-end gap-1.5">
            {["Mystery", "Family", "Secrets"].map((label) => (
              <span
                key={label}
                className="rounded-full border px-2 py-0.5 text-[10px] text-white/55"
                style={{ borderColor: theme.cardBorder }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function getBrandedFallback(project, theme) {
  const accent = project.accent || theme.accent;
  const brand = project.visual?.brand;

  if (brand === "rewind") return <RewindBranded accent={accent} theme={theme} />;
  if (brand === "rt345lc") return <Rt345lcPhotoCover project={project} theme={theme} />;
  if (brand === "give-love-co") {
    return <GiveLoveLogoVisual project={project} theme={theme} />;
  }
  if (brand === "arbor") {
    return <ArborIconVisual project={project} theme={theme} />;
  }
  if (brand === "hemlock-hollow") return <HemlockBranded theme={theme} />;
  return <PreviewShell />;
}

function HeroWithFallback({ project, theme, size = "card" }) {
  const [failed, setFailed] = useState(false);
  const { hero, alt, brand, coverStyle } = project.visual;

  if (brand === "rt345lc" || coverStyle === "automotive-editorial") {
    return <Rt345lcPhotoCover project={project} theme={theme} size={size} />;
  }

  if (brand === "give-love-co" || coverStyle === "logo-panel") {
    return <GiveLoveLogoVisual project={project} theme={theme} size={size} />;
  }

  if (brand === "arbor" || coverStyle === "app-icon") {
    return <ArborIconVisual project={project} theme={theme} size={size} />;
  }

  if (!hero || failed) {
    return getBrandedFallback(project, theme);
  }

  return (
    <PreviewShell>
      <img
        src={hero}
        alt={alt || project.name}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/15" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div
          className="mb-2 inline-flex rounded-md border px-2 py-1 text-[10px] font-semibold tracking-[0.16em]"
          style={{ borderColor: theme.accentBorder, color: theme.accent }}
        >
          LJB
        </div>
        <div className="text-xl font-semibold tracking-tight text-white">
          {project.name}
        </div>
      </div>
    </PreviewShell>
  );
}

export default function ProjectVisual({ project, theme, size = "card" }) {
  const visual = project.visual;

  if (visual?.type === "screenshots" && visual.card?.primary) {
    return <AwyScreenshotVisual visual={visual} />;
  }

  if (visual?.type === "branded") {
    return <HeroWithFallback project={project} theme={theme} size={size} />;
  }

  return <PreviewShell />;
}
