import DeviceFrame from "./DeviceFrame";
import { useImageFallback } from "../hooks/useImageFallback";

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

      {visual.icon ? (
        <img
          src={visual.icon}
          alt=""
          width={1024}
          height={1024}
          className="awy-card-app-icon"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ) : null}

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

function GiveLoveLogoVisual({ project, theme, size = "card" }) {
  const logo = project.visual?.logo || project.visual?.hero;
  const [failed, markFailed] = useImageFallback(logo);
  const alt = project.visual?.alt || "Give Love Co. official wordmark logo";
  const shellClass =
    size === "dialog"
      ? "give-love-shell give-love-shell--dialog"
      : "give-love-shell";

  if (!logo || failed) {
    return (
      <div
        className={`${shellClass} relative overflow-hidden`}
        aria-hidden="true"
      >
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
        className="give-love-garment give-love-garment--hoodie"
        aria-hidden="true"
      >
        <span>GIVE LOVE</span>
      </div>
      <div
        className="give-love-garment give-love-garment--shirt"
        aria-hidden="true"
      >
        <span>BE KIND</span>
      </div>
      <span className="give-love-drop-label">{project.visual?.dropLabel}</span>
      <div
        className="give-love-panel"
        style={{ borderColor: theme.cardBorder }}
      >
        <img
          src={logo}
          alt={size === "dialog" ? alt : ""}
          width={1200}
          height={630}
          className="give-love-logo"
          loading={size === "dialog" ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          onError={markFailed}
        />
      </div>
    </div>
  );
}

function AppIconVisual({ project, theme, size = "card" }) {
  const logo = project.visual?.logo || project.visual?.hero;
  const [failed, markFailed] = useImageFallback(logo);
  const alt = project.visual?.logoAlt || `${project.name} app icon`;
  const brand = project.visual?.brand || "app";
  const shellClass =
    size === "dialog"
      ? `app-icon-shell app-icon-shell--${brand} app-icon-shell--dialog`
      : `app-icon-shell app-icon-shell--${brand}`;

  if (!logo || failed) {
    return (
      <div
        className={`${shellClass} relative overflow-hidden`}
        aria-hidden="true"
      >
        <div className="app-icon-shell__glow" />
      </div>
    );
  }

  return (
    <div className={`${shellClass} relative overflow-hidden`}>
      <div className="app-icon-shell__glow" aria-hidden="true" />
      <div className="app-icon-shell__vignette" aria-hidden="true" />

      <div className="app-icon-shell__chrome">
        <span className="app-icon-shell__eyebrow">
          {project.visual?.eyebrow}
        </span>
        <span
          className="app-icon-shell__badge"
          style={{ borderColor: theme.cardBorder }}
        >
          {project.visual?.badge}
        </span>
      </div>

      <img
        src={logo}
        alt={size === "dialog" ? alt : ""}
        width={1024}
        height={1024}
        className="project-app-icon"
        loading={size === "dialog" ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        onError={markFailed}
      />
    </div>
  );
}

function HemlockEditorialChrome({ theme }) {
  return (
    <div className="hemlock-shell__chrome">
      <div className="hemlock-shell__chrome-top">
        <span
          className="hemlock-shell__badge"
          style={{ borderColor: theme.accentBorder, color: theme.accent }}
        >
          LJB
        </span>
        <span className="hemlock-shell__eyebrow">Novel</span>
      </div>
      <div className="hemlock-shell__footer">Every town buries something.</div>
    </div>
  );
}

function HemlockAtmosphere({ project, theme, size = "card" }) {
  const hero = project.visual?.hero;
  const [failed, markFailed] = useImageFallback(hero);
  const alt =
    project.visual?.alt ||
    "Secluded luxury mansion in wooded hills at blue hour";
  const shellClass =
    size === "dialog" ? "hemlock-shell hemlock-shell--dialog" : "hemlock-shell";

  if (!hero || failed) {
    return (
      <div
        className={`${shellClass} relative overflow-hidden`}
        aria-hidden="true"
      >
        <div className="hemlock-shell__fallback" />
        <HemlockEditorialChrome theme={theme} />
      </div>
    );
  }

  return (
    <div className={`${shellClass} relative overflow-hidden`}>
      <img
        src={hero}
        alt={size === "dialog" ? alt : ""}
        width={1536}
        height={1024}
        className="hemlock-shell__photo"
        loading={size === "dialog" ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        onError={markFailed}
      />
      <div className="hemlock-shell__shade" aria-hidden="true" />
      <div className="hemlock-shell__vignette" aria-hidden="true" />
      <div aria-hidden={size !== "dialog" ? true : undefined}>
        <HemlockEditorialChrome theme={theme} />
      </div>
    </div>
  );
}

function getBrandedFallback(project, theme) {
  const brand = project.visual?.brand;

  if (brand === "give-love-co") {
    return <GiveLoveLogoVisual project={project} theme={theme} />;
  }
  if (brand === "arbor" || brand === "arclia") {
    return <AppIconVisual project={project} theme={theme} />;
  }
  if (brand === "hemlock-hollow") {
    return <HemlockAtmosphere project={project} theme={theme} />;
  }
  return <PreviewShell />;
}

function HeroWithFallback({ project, theme, size = "card" }) {
  const { hero, alt, brand, coverStyle } = project.visual;
  const [failed, markFailed] = useImageFallback(hero);

  if (brand === "give-love-co" || coverStyle === "logo-panel") {
    return <GiveLoveLogoVisual project={project} theme={theme} size={size} />;
  }

  if (brand === "arbor" || brand === "arclia" || coverStyle === "app-icon") {
    return <AppIconVisual project={project} theme={theme} size={size} />;
  }

  if (brand === "hemlock-hollow" || coverStyle === "cinematic-environment") {
    return <HemlockAtmosphere project={project} theme={theme} size={size} />;
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
        onError={markFailed}
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
