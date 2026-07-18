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
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="h-full"
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => onOpen(project.id)}
        aria-haspopup="dialog"
        className="group flex h-full min-h-[44px] w-full flex-col overflow-hidden rounded-[1.75rem] border text-left backdrop-blur-2xl transition hover:border-white/20 focus-visible:border-white/30"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div
          className="border-b"
          style={{ borderColor: theme.cardBorder }}
          aria-hidden="true"
        >
          <ProjectVisual project={project} theme={theme} />
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-5 sm:pb-5 sm:pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
              {project.category}
            </span>
            {project.status ? (
              <span
                className="inline-flex rounded-full border px-2.5 py-0.5 text-[11px] text-white/65"
                style={{ borderColor: theme.cardBorder }}
              >
                {project.status}
              </span>
            ) : null}
          </div>

          <h3 className="mt-2.5 text-[1.35rem] font-semibold tracking-tight text-white sm:text-[1.5rem]">
            {project.name}
          </h3>

          <p className="mt-2 text-[13px] leading-6 text-white/58 sm:text-sm sm:leading-6">
            {project.preview}
          </p>

          <div className="mt-auto pt-5">
            <span
              className="inline-flex min-h-[44px] items-center rounded-full border px-4 text-[13px] font-medium text-white/85 transition group-hover:border-white/30 group-hover:bg-white/[0.06] group-hover:text-white"
              style={{ borderColor: theme.cardBorder }}
            >
              View Project
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
