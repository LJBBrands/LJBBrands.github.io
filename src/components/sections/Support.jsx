import { motion } from "framer-motion";
import { SUPPORT_MISSION_MAILTO } from "../../data/projects";

const fundedWork = [
  "Awy",
  "Arbor",
  "Podcast production",
  "Camera gear",
  "Automotive content",
  "Independent creative work",
];

export default function Support({ theme }) {
  return (
    <section id="support" className="mx-auto max-w-6xl scroll-mt-24 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border px-8 py-12 backdrop-blur-2xl sm:px-12"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl opacity-80"
          style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
        />

        <div className="relative max-w-3xl">
          <div
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            Support
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Support the Mission
          </h2>

          <p className="mt-4 text-lg leading-8 text-white/68">
            Support helps fund the independent work behind LJB Media Group —
            products in progress, media production, and the tools required to
            keep building with intention.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {fundedWork.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border px-4 py-3 text-sm text-white/74 backdrop-blur-xl"
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.cardBorder,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={SUPPORT_MISSION_MAILTO}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: theme.accent }}
            >
              Support the Mission
            </a>
            <span
              className="inline-flex items-center rounded-full border px-5 py-3 text-sm text-white/55"
              style={{ borderColor: theme.cardBorder }}
            >
              Cash App coming soon
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
