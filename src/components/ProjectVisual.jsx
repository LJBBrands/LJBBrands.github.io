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
          {["Podcast", "Gaming", "Unboxings", "LEGO", "Road Trips"].map(
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

function Rt345lcEditorialChrome({ theme, showTitle = false }) {
  return (
    <div className="relative z-10 flex h-full flex-col justify-between px-5 py-4">
      <div className="flex items-center justify-between">
        <span
          className="rounded-md border px-2 py-1 text-[10px] font-semibold tracking-[0.18em]"
          style={{ borderColor: theme.accentBorder, color: theme.accent }}
        >
          LJB
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
          Automotive
        </span>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center py-2">
        {showTitle ? (
          <div className="rt345lc-fallback__title">RT345LC</div>
        ) : null}
      </div>

      <div className="text-[11px] text-white/50">
        Builds · Photography · Road Trips
      </div>
    </div>
  );
}

function Rt345lcPhotoCover({ project, theme }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const hero = project.visual?.hero;
  const showPhoto = Boolean(hero) && !failed && loaded;
  const showFallback = !hero || failed || !loaded;

  return (
    <PreviewShell>
      {hero && !failed ? (
        <img
          src={hero}
          alt=""
          className="rt345lc-photo"
          loading="lazy"
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setFailed(true);
            setLoaded(false);
          }}
          style={{ opacity: showPhoto ? 1 : 0 }}
        />
      ) : null}

      {showPhoto ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-black/35" />
      ) : null}

      {showFallback ? (
        <div className="rt345lc-fallback" aria-hidden="true">
          <div className="rt345lc-fallback__lines" />
        </div>
      ) : null}

      <Rt345lcEditorialChrome theme={theme} showTitle={!showPhoto} />
    </PreviewShell>
  );
}

function GiveLoveBranded({ theme }) {
  return (
    <PreviewShell className="px-5 py-5">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.06), transparent 46%)",
        }}
      />
      <div className="relative flex h-full items-center justify-center">
        <div
          className="relative w-full max-w-[210px] rounded-[1.25rem] border px-5 py-6"
          style={{
            borderColor: theme.cardBorder,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          }}
        >
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40">
            <span>Label</span>
            <span>Ltd</span>
          </div>
          <div className="mt-4 text-center">
            <div className="text-xl font-semibold tracking-tight text-white">
              Give Love Co.
            </div>
            <div className="mt-2 text-[11px] text-white/50">
              Intentional apparel and limited drops
            </div>
          </div>
          <div className="mx-auto mt-5 h-px w-16 bg-white/20" />
          <div className="mt-4 flex justify-center gap-2">
            {["Preorder", "Hoodies", "Shirts"].map((item) => (
              <span
                key={item}
                className="rounded-full border px-2 py-0.5 text-[10px] text-white/50"
                style={{ borderColor: theme.cardBorder }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function ArborBranded({ accent, theme }) {
  const rows = [
    { label: "Scan", tone: accent },
    { label: "Preview", tone: "rgba(255,255,255,0.55)" },
    { label: "Organize", tone: "rgba(255,255,255,0.4)" },
  ];

  return (
    <PreviewShell className="px-5 py-5">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, rgba(184,255,90,0.10), transparent 40%)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              macOS Utility
            </div>
            <div className="mt-1 text-2xl font-semibold tracking-tight text-white">
              Arbor
            </div>
          </div>
          <span
            className="rounded-full border px-2.5 py-1 text-[10px] text-white/60"
            style={{ borderColor: theme.cardBorder }}
          >
            Local + External
          </span>
        </div>

        <div className="space-y-2">
          {rows.map((row, index) => (
            <div
              key={row.label}
              className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
              style={{
                borderColor: theme.cardBorder,
                backgroundColor: theme.cardBg,
                transform: `translateX(${index * 4}px)`,
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: row.tone }}
              />
              <span className="text-xs text-white/70">{row.label}</span>
              <span className="ml-auto h-1 w-12 rounded-full bg-white/12" />
            </div>
          ))}
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
  if (brand === "give-love-co") return <GiveLoveBranded theme={theme} />;
  if (brand === "arbor") return <ArborBranded accent={accent} theme={theme} />;
  return <PreviewShell />;
}

function HeroWithFallback({ project, theme }) {
  const [failed, setFailed] = useState(false);
  const { hero, alt, brand, coverStyle } = project.visual;

  if (brand === "rt345lc" || coverStyle === "automotive-editorial") {
    return <Rt345lcPhotoCover project={project} theme={theme} />;
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

export default function ProjectVisual({ project, theme }) {
  const visual = project.visual;

  if (visual?.type === "screenshots" && visual.card?.primary) {
    return <AwyScreenshotVisual visual={visual} />;
  }

  if (visual?.type === "branded") {
    return <HeroWithFallback project={project} theme={theme} />;
  }

  return <PreviewShell />;
}
