import { motion, useReducedMotion } from "framer-motion";
import { supportContent } from "../data/support";

export default function SupportCard({ theme }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-[1.75rem] border p-6 backdrop-blur-2xl sm:p-8"
      style={{
        backgroundColor: theme.panelBg,
        borderColor: theme.cardBorder,
      }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-70"
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

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {supportContent.headline}
        </h2>
        <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
          {supportContent.copy}
        </p>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {supportContent.areas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border px-4 py-3 text-sm text-white/72"
              style={{
                borderColor: theme.cardBorder,
                backgroundColor: theme.cardBg,
              }}
            >
              {area}
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={supportContent.inquiryMailto}
            className="inline-flex min-h-[44px] items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Contact about support
          </a>
          <p className="text-sm text-white/50">
            Direct contribution links will be published when available.
          </p>
        </div>
      </div>
    </motion.article>
  );
}
