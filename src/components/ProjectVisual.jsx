import { useImageFallback } from "../hooks/useImageFallback";

function AppIconVisual({ project, theme, size = "card" }) {
  const logo =
    project.visual?.logo || project.visual?.icon || project.visual?.hero;
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

      <div className="project-app-icon-frame">
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
    </div>
  );
}

export default function ProjectVisual({ project, theme, size = "card" }) {
  return <AppIconVisual project={project} theme={theme} size={size} />;
}
