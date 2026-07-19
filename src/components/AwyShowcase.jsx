import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import DeviceFrame from "./DeviceFrame";

function padIndex(value) {
  return String(value).padStart(2, "0");
}

export default function AwyShowcase({ slides = [], theme }) {
  const reduceMotion = useReducedMotion();
  const liveId = useId();
  const stageRef = useRef(null);
  const pointerStart = useRef(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = slides.length;
  const slide = slides[index] ?? null;
  const canPrev = index > 0;
  const canNext = index < total - 1;

  const goTo = useCallback(
    (nextIndex, dir = 0) => {
      if (!total) return;
      const clamped = Math.max(0, Math.min(total - 1, nextIndex));
      if (clamped === index) return;
      setDirection(dir || (clamped > index ? 1 : -1));
      setIndex(clamped);
    },
    [index, total]
  );

  const goPrev = useCallback(() => {
    if (canPrev) goTo(index - 1, -1);
  }, [canPrev, goTo, index]);

  const goNext = useCallback(() => {
    if (canNext) goTo(index + 1, 1);
  }, [canNext, goTo, index]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(0, -1);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(total - 1, 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, goTo, total]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const onWheel = (event) => {
      if (Math.abs(event.deltaX) < 24) return;
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      if (event.deltaX > 0) goNext();
      else goPrev();
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [goNext, goPrev]);

  const onPointerDown = (event) => {
    pointerStart.current = {
      x: event.clientX,
      y: event.clientY,
      pointerId: event.pointerId,
    };
  };

  const onPointerUp = (event) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start || start.pointerId !== event.pointerId) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.2) return;

    if (dx < 0) goNext();
    else goPrev();
  };

  if (!slide) return null;

  const duration = reduceMotion ? 0.12 : 0.32;

  return (
    <div className="awy-showcase">
      <div className="awy-showcase__layout">
        <div
          ref={stageRef}
          className="awy-showcase__stage"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            pointerStart.current = null;
          }}
        >
          <div className="awy-showcase__stage-glow" aria-hidden="true" />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              className="awy-showcase__device"
              custom={direction}
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction >= 0 ? 20 : -20 }
              }
              animate={{ opacity: 1, x: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction >= 0 ? -16 : 16 }
              }
              transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            >
              <DeviceFrame
                screenshot={slide.image}
                size="showcase"
                className="awy-showcase-device"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="awy-showcase__panel">
          <p className="awy-showcase__eyebrow">{slide.eyebrow}</p>
          <h3 className="awy-showcase__title">{slide.title}</h3>
          <p className="awy-showcase__description">{slide.description}</p>

          {slide.points?.length ? (
            <ul className="awy-showcase__points">
              {slide.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}

          <div className="awy-showcase__progress">
            <div className="awy-showcase__progress-meta">
              <span className="awy-showcase__count">
                {padIndex(index + 1)} / {padIndex(total)}
              </span>
              <span className="awy-showcase__progress-label">
                {slide.eyebrow}
              </span>
            </div>

            <div
              className="awy-showcase__dots"
              role="tablist"
              aria-label="Awy feature slides"
            >
              {slides.map((item, slideIndex) => {
                const active = slideIndex === index;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-label={`${item.eyebrow}: ${item.title}`}
                    aria-selected={active}
                    aria-current={active ? "true" : undefined}
                    className={`awy-showcase__dot${
                      active ? " awy-showcase__dot--active" : ""
                    }`}
                    style={
                      active
                        ? { color: theme.accent || "#B8FF5A" }
                        : undefined
                    }
                    onClick={() =>
                      goTo(slideIndex, slideIndex > index ? 1 : -1)
                    }
                  />
                );
              })}
            </div>

            <div className="awy-showcase__controls">
              <button
                type="button"
                className="awy-showcase__nav"
                aria-label="Previous Awy feature"
                disabled={!canPrev}
                onClick={goPrev}
                style={{ borderColor: theme.cardBorder }}
              >
                Previous
              </button>
              <button
                type="button"
                className="awy-showcase__nav"
                aria-label="Next Awy feature"
                disabled={!canNext}
                onClick={goNext}
                style={{ borderColor: theme.cardBorder }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="awy-showcase__thumbs" aria-label="Feature previews">
        {slides.map((item, slideIndex) => {
          const active = slideIndex === index;
          return (
            <button
              key={`thumb-${item.id}`}
              type="button"
              className={`awy-showcase__thumb${
                active ? " awy-showcase__thumb--active" : ""
              }`}
              aria-label={`Show ${item.title}`}
              aria-current={active ? "true" : undefined}
              style={{ borderColor: theme.cardBorder }}
              onClick={() => goTo(slideIndex, slideIndex > index ? 1 : -1)}
            >
              <img
                src={item.image.src}
                alt=""
                draggable={false}
                loading="lazy"
              />
            </button>
          );
        })}
      </div>

      <div id={liveId} className="sr-only" aria-live="polite" aria-atomic="true">
        {slide.title}. {slide.description}
      </div>
    </div>
  );
}
