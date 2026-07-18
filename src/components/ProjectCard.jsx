import { motion, useReducedMotion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({
  project,
  theme,
  index = 0,
  onOpen,
  buttonRef,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="h-full"
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => onOpen(project.id)}
        aria-haspopup="dialog"
        className="group flex h-full min-h-[44px] w-full flex-col overflow-hidden rounded-[1.75rem] border text-left backdrop-blur-2xl transition hover:border-white/22 focus-visible:border-white/30"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div
          className="border-b px-4 pt-4 sm:px-5 sm:pt-5"
          style={{ borderColor: theme.cardBorder }}
          aria-hidden="true"
        >
          <ProjectVisual project={project} theme={theme} />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
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

          <h3 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/64">
            {project.preview}
          </p>

          <div className="mt-auto pt-6">
            <span className="inline-flex min-h-[44px] items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition group-hover:opacity-90">
              View Project
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
