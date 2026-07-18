import { motion } from "framer-motion";
import ScreenshotCard from "./ScreenshotCard";
import { handleSectionClick } from "../utils/scrollToSection";

function AbstractPreview({ project, theme }) {
  const accent = project.accent || theme.accent;

  if (project.preview === "media") {
    return (
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden">
        <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-white/10" />
        <div className="relative flex w-full max-w-[220px] flex-col gap-2.5 px-2">
          {[0.92, 0.74, 0.58].map((width, index) => (
            <div
              key={width}
              className="h-3 rounded-full border"
              style={{
                width: `${width * 100}%`,
                borderColor: theme.cardBorder,
                background:
                  index === 0
                    ? `linear-gradient(90deg, ${accent}33, transparent)`
                    : theme.cardBg,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.preview === "auto") {
    return (
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-x-8 bottom-16 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}55, transparent)`,
          }}
        />
        <div
          className="relative h-24 w-44 rounded-[2rem] border"
          style={{
            borderColor: theme.cardBorder,
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          }}
        />
      </div>
    );
  }

  if (project.preview === "apparel") {
    return (
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden">
        <div
          className="h-36 w-28 rounded-[1.5rem] border"
          style={{
            borderColor: theme.cardBorder,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
          }}
        />
      </div>
    );
  }

  if (project.preview === "arbor") {
    return (
      <div className="relative flex h-[260px] items-center justify-center overflow-hidden">
        <div className="relative flex w-[180px] flex-col gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
              style={{
                borderColor: theme.cardBorder,
                backgroundColor: theme.cardBg,
                transform: `translateX(${index * 6}px)`,
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: index === 0 ? accent : "rgba(255,255,255,0.28)" }}
              />
              <span className="h-1.5 flex-1 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-[260px] items-center justify-center overflow-hidden">
      <div
        className="flex h-28 w-28 items-center justify-center rounded-[1.75rem] border text-2xl font-semibold tracking-tight"
        style={{
          borderColor: theme.cardBorder,
          backgroundColor: theme.cardBg,
          color: accent,
        }}
      >
        {project.name.slice(0, 1)}
      </div>
    </div>
  );
}

function PreviewSurface({ project, theme }) {
  if (project.preview === "awy" && project.previewScreens?.length) {
    return (
      <div className="relative mx-auto h-[260px] w-full max-w-[280px] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-8 top-10 h-32 rounded-full blur-3xl opacity-80"
          style={{ backgroundColor: theme.accentSoft }}
        />
        <div className="absolute left-1/2 top-3 z-10 w-[56%] -translate-x-1/2">
          <ScreenshotCard
            screenshot={project.previewScreens[0]}
            theme={theme}
            compact
          />
        </div>
        <div className="absolute left-1 top-14 w-[40%] -rotate-6 opacity-85">
          <ScreenshotCard
            screenshot={project.previewScreens[1]}
            theme={theme}
            compact
          />
        </div>
        <div className="absolute right-1 top-16 w-[40%] rotate-6 opacity-85">
          <ScreenshotCard
            screenshot={project.previewScreens[2]}
            theme={theme}
            compact
          />
        </div>
      </div>
    );
  }

  return <AbstractPreview project={project} theme={theme} />;
}

export default function ProjectCard({ project, theme, index = 0 }) {
  const sectionId = project.href.replace("#", "");

  return (
    <motion.article
      id={`${project.id}-card`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border backdrop-blur-2xl transition hover:border-white/20"
      style={{
        backgroundColor: theme.panelBg,
        borderColor: theme.cardBorder,
      }}
    >
      <div
        className="border-b px-5 pt-5"
        style={{ borderColor: theme.cardBorder }}
      >
        <PreviewSurface project={project} theme={theme} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            {project.category}
          </span>
          {project.status ? (
            <span
              className="inline-flex rounded-full border px-3 py-1 text-xs text-white/70"
              style={{
                borderColor: theme.cardBorder,
                backgroundColor: theme.cardBg,
              }}
            >
              {project.status}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-white/64">
          {project.description}
        </p>

        <div className="mt-auto pt-6">
          {project.cta ? (
            <a
              href={project.href}
              onClick={handleSectionClick(sectionId)}
              className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              {project.cta}
            </a>
          ) : (
            <a
              href={project.href}
              onClick={handleSectionClick(sectionId)}
              className="inline-flex rounded-full border px-5 py-2.5 text-sm text-white/72 transition hover:bg-white/5 hover:text-white"
              style={{ borderColor: theme.cardBorder }}
            >
              View details
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
