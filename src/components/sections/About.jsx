import { motion } from "framer-motion";

const points = [
  {
    title: "What we are",
    copy:
      "LJB Media Group is an independent technology, media, automotive, and creator company. We build products, platforms, stories, and experiences with intention.",
  },
  {
    title: "Why we exist",
    copy:
      "To create work that feels purposeful — quieter products, clearer stories, and creator-led brands that do not chase noise for attention.",
  },
  {
    title: "Long-term vision",
    copy:
      "A connected ecosystem where software, media, apparel, and automotive culture reinforce each other — each project strong alone, stronger together.",
  },
  {
    title: "How it connects",
    copy:
      "Awy shapes presence. Arbor organizes local and external storage. LJB Rewind and RT345LC tell the story. Give Love Co. carries the culture. Support fuels the whole mission.",
  },
];

export default function About({ theme }) {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="mb-10 max-w-2xl"
      >
        <div
          className="inline-flex rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: theme.accentBorder,
            backgroundColor: theme.accentSoft,
            color: theme.accentText,
          }}
        >
          About
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Built as one house of work.
        </h2>
        <p className="mt-4 text-lg leading-8 text-white/64">
          Every project under LJB Media Group shares the same standard: craft,
          clarity, and purpose.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {points.map((point, index) => (
          <motion.article
            key={point.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="rounded-[1.75rem] border p-6 backdrop-blur-2xl"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
            <h3 className="text-lg font-semibold tracking-tight">{point.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/64">{point.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
