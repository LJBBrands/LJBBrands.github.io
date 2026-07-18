import { motion, useReducedMotion } from "framer-motion";
import { handleSectionClick } from "../../utils/scrollToSection";

export default function LjbHero({ theme }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="mx-auto max-w-6xl pb-12 pt-24 sm:pb-14 sm:pt-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border px-6 py-10 backdrop-blur-2xl sm:px-10 sm:py-12"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl opacity-70"
          style={{ backgroundColor: theme.accentSoft }}
        />

        <div className="relative max-w-3xl">
          <p className="text-sm font-medium tracking-[0.16em] text-white/60">
            LJB MEDIA GROUP
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block">Media.</span>
            <span className="block">Technology.</span>
            <span className="block">Stories.</span>
            <span className="mt-1 block" style={{ color: theme.accent }}>
              Built with purpose.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            LJB Media Group is an independent company building technology, media,
            automotive stories, apparel, and creative experiences as one connected
            ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={handleSectionClick("projects")}
              className="inline-flex min-h-[44px] items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Explore Projects
            </a>
            <a
              href="#about"
              onClick={handleSectionClick("about")}
              className="inline-flex min-h-[44px] items-center rounded-full border px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              style={{
                backgroundColor: theme.heroPillBg,
                borderColor: theme.cardBorder,
              }}
            >
              About LJB
            </a>
            <a
              href="#contact"
              onClick={handleSectionClick("contact")}
              className="inline-flex min-h-[44px] items-center rounded-full border px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              style={{
                backgroundColor: theme.heroPillBg,
                borderColor: theme.cardBorder,
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
