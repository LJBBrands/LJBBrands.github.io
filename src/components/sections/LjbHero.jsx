import { motion, useReducedMotion } from "framer-motion";
import DeviceFrame from "../DeviceFrame";
import { getProjectById } from "../../data/projects";
import { handleSectionClick } from "../../utils/scrollToSection";

export default function LjbHero({ theme }) {
  const reduceMotion = useReducedMotion();
  const awy = getProjectById("awy");

  return (
    <section
      id="top"
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 pt-24 sm:pb-20 sm:pt-28"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
      >
        <div className="min-w-0">
          <p
            className="text-sm font-medium tracking-[0.16em]"
            style={{ color: theme.accent }}
          >
            AWY
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            More presence.
            <span className="block" style={{ color: theme.accent }}>
              Less pressure.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            A private social environment for intentional connection. Share on
            your terms, find your people, and make room for quieter moments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={handleSectionClick("projects")}
              className="inline-flex min-h-[44px] items-center rounded-full bg-white px-6 py-3 text-base font-medium text-black transition hover:opacity-90"
            >
              Explore Awy
            </a>
            <a
              href="#get-involved"
              onClick={handleSectionClick("get-involved")}
              className="inline-flex min-h-[44px] items-center rounded-full border px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
              style={{ borderColor: theme.cardBorder }}
            >
              Waitlist &amp; Updates
            </a>
          </div>
          <p className="mt-8 text-sm leading-6 text-white/55">
            Presence. Private conversations. Lounges.
          </p>
        </div>
        <div className="min-w-0" aria-label="A look inside Awy">
          <DeviceFrame
            screenshot={awy.visual.card.primary}
            size="hero"
            caption
          />
        </div>
      </motion.div>
    </section>
  );
}
