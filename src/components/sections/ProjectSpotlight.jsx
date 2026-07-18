import { motion } from "framer-motion";

export default function ProjectSpotlight({
  id,
  theme,
  category,
  name,
  description,
  status,
}) {
  const lines = description.includes("\n")
    ? description.split("\n").filter(Boolean)
    : null;

  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-[2rem] border p-8 backdrop-blur-2xl sm:p-10"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div
          className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full blur-3xl opacity-70"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        />

        <div className="relative max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <div
              className="inline-flex rounded-full border px-3 py-1 text-xs"
              style={{
                borderColor: theme.accentBorder,
                backgroundColor: theme.accentSoft,
                color: theme.accentText,
              }}
            >
              {category}
            </div>
            {status ? (
              <div
                className="inline-flex rounded-full border px-3 py-1 text-xs text-white/70"
                style={{
                  borderColor: theme.cardBorder,
                  backgroundColor: theme.cardBg,
                }}
              >
                {status}
              </div>
            ) : null}
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            {name}
          </h2>

          {lines ? (
            <ul className="mt-5 space-y-2 text-lg leading-8 text-white/68">
              {lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-lg leading-8 text-white/68">{description}</p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
