import { motion } from "framer-motion";
import { handleSectionClick } from "../../utils/scrollToSection";

export default function LjbHero({ theme }) {
  return (
    <section id="top" className="mx-auto max-w-6xl pb-16 pt-28 sm:pb-20 sm:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-[2.5rem] border px-6 py-12 backdrop-blur-2xl sm:px-12 sm:py-16"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl opacity-80"
          style={{ backgroundColor: theme.accentSoft }}
        />
        <div
          className="pointer-events-none absolute -bottom-28 left-10 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255,255,255,0.035)" }}
        />

        <div className="relative max-w-4xl">
          <div
            className="inline-flex rounded-full border px-3 py-1.5 text-xs tracking-[0.18em] text-white/72 sm:text-sm"
            style={{
              backgroundColor: theme.heroPillBg,
              borderColor: theme.cardBorder,
            }}
          >
            LJB MEDIA GROUP
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Media.</span>
            <span className="block">Technology.</span>
            <span className="block">Stories.</span>
            <span className="mt-2 block" style={{ color: theme.accent }}>
              Built with purpose.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            LJB Media Group is an independent technology, media, automotive, and
            creator company building products, platforms, stories, and experiences
            with intention.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={handleSectionClick("projects")}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Explore Projects
            </a>
            <a
              href="#ljb-rewind"
              onClick={handleSectionClick("ljb-rewind")}
              className="inline-flex rounded-full border px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              style={{
                backgroundColor: theme.heroPillBg,
                borderColor: theme.cardBorder,
              }}
            >
              Watch LJB Rewind
            </a>
            <a
              href="#support"
              onClick={handleSectionClick("support")}
              className="inline-flex rounded-full border px-6 py-3 text-sm font-medium transition hover:bg-white/10"
              style={{
                backgroundColor: theme.accentSoft,
                borderColor: theme.accentBorder,
                color: theme.accentText,
              }}
            >
              Support the Mission
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
