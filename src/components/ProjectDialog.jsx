import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef } from "react";
import ScreenshotCard from "./ScreenshotCard";

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

  return (
    <AnimatePresence>
      {open && project ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Close project details"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
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
              reduceMotion
                ? false
                : { opacity: 0, y: 28, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.98 }
            }
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[1.75rem] border border-b-0 sm:max-h-[86vh] sm:rounded-[1.75rem] sm:border-b"
            style={{
              backgroundColor: "rgba(8,10,8,0.96)",
              borderColor: theme.cardBorder,
            }}
          >
            <div
              className="flex items-start justify-between gap-4 border-b px-5 py-4 sm:px-6"
              style={{ borderColor: theme.cardBorder }}
            >
              <div className="min-w-0">
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
                <h2
                  id={titleId}
                  className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
                >
                  {project.name}
                </h2>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border px-4 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                style={{ borderColor: theme.cardBorder }}
              >
                Close
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
              <p
                id={descriptionId}
                className="max-w-2xl text-base leading-7 text-white/70"
              >
                {project.description}
              </p>

              {project.highlights?.length ? (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-white/80">
                    Highlights
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border px-4 py-3 text-sm text-white/72"
                        style={{
                          borderColor: theme.cardBorder,
                          backgroundColor: theme.cardBg,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.images?.length ? (
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-white/80">
                    Selected views
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.images.slice(0, 6).map((shot) => (
                      <ScreenshotCard
                        key={shot.missingFile}
                        screenshot={shot}
                        theme={theme}
                        compact
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {project.primaryAction?.href ? (
                <div className="mt-8">
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
                    className="inline-flex min-h-[44px] items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    {project.primaryAction.label}
                  </a>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
