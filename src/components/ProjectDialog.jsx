import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef } from "react";
import AwyProductStory from "./AwyProductStory";
import ProjectVisual from "./ProjectVisual";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ProjectDialog({ project, theme, open, onClose }) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 0);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = [
        ...panelRef.current.querySelectorAll(FOCUSABLE),
      ].filter((el) => !el.hasAttribute("disabled"));

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  const hasScreenshotGallery = project?.visual?.type === "screenshots";
  const accent = project?.accent || theme.accent;

  return (
    <AnimatePresence>
      {open && project ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-5 lg:p-8">
          <motion.button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-black/72 backdrop-blur-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            tabIndex={-1}
            initial={
              reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.985 }
            }
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-t-[1.75rem] border border-b-0 sm:max-h-[88vh] sm:rounded-[1.75rem] sm:border-b"
            style={{
              backgroundColor: "rgba(7,9,7,0.97)",
              borderColor: theme.cardBorder,
              boxShadow: `inset 0 1px 0 ${accent}22`,
            }}
          >
            <div
              className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b px-5 py-3.5 backdrop-blur-xl sm:px-8"
              style={{
                borderColor: theme.cardBorder,
                backgroundColor: "rgba(7,9,7,0.92)",
              }}
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
                    {project.category}
                  </span>
                  {project.status ? (
                    <span
                      className="rounded-full border px-2.5 py-0.5 text-[11px] text-white/65"
                      style={{ borderColor: theme.cardBorder }}
                    >
                      {project.status}
                    </span>
                  ) : null}
                </div>
                <h2
                  id={titleId}
                  className="mt-1 truncate text-xl font-semibold tracking-tight sm:text-2xl"
                >
                  {project.name}
                </h2>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border px-4 text-sm text-white/75 transition hover:bg-white/8 hover:text-white"
                style={{ borderColor: theme.cardBorder }}
              >
                Close
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain">
              {hasScreenshotGallery ? (
                <div className="px-5 pb-12 pt-6 sm:px-10 sm:pb-16 sm:pt-8 lg:px-12">
                  <AwyProductStory
                    project={project}
                    theme={theme}
                    descriptionId={descriptionId}
                  />
                </div>
              ) : (
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div
                    className="border-b p-5 sm:p-6 lg:border-b-0 lg:border-r"
                    style={{ borderColor: theme.cardBorder }}
                  >
                    <div
                      className="overflow-hidden rounded-[1.35rem] border"
                      style={{ borderColor: theme.cardBorder }}
                    >
                      <ProjectVisual project={project} theme={theme} />
                    </div>

                    {project.mediaReady ? (
                      <div
                        className="mt-4 rounded-[1.25rem] border px-4 py-4"
                        style={{ borderColor: theme.cardBorder }}
                      >
                        <div className="text-xs font-medium tracking-[0.04em] text-white/45">
                          Media Library
                        </div>
                        <p className="mt-2 text-sm leading-6 text-white/55">
                          Episode links, thumbnails, and watch destinations will
                          appear here when published.
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div className="p-5 sm:p-6">
                    <p
                      id={descriptionId}
                      className="text-sm leading-6 text-white/68 sm:text-[15px] sm:leading-7"
                    >
                      {project.description}
                    </p>

                    {project.summary ? (
                      <p
                        className="mt-4 rounded-[1.1rem] border px-4 py-3 text-sm leading-6 text-white/62"
                        style={{ borderColor: theme.cardBorder }}
                      >
                        {project.summary}
                      </p>
                    ) : null}

                    {project.highlights?.length ? (
                      <div className="mt-6">
                        <h3 className="text-xs font-medium tracking-[0.04em] text-white/45">
                          Highlights
                        </h3>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {project.highlights.map((item) => (
                            <li
                              key={item}
                              className="rounded-full border px-3 py-1.5 text-[13px] text-white/72"
                              style={{ borderColor: theme.cardBorder }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {project.primaryAction?.href ? (
                      <div className="mt-7">
                        <a
                          href={project.primaryAction.href}
                          target={
                            project.primaryAction.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            project.primaryAction.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className="inline-flex min-h-[44px] items-center rounded-full border px-5 text-sm font-medium text-white transition hover:bg-white/[0.06]"
                          style={{ borderColor: theme.cardBorder }}
                        >
                          {project.primaryAction.label}
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
