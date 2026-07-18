import { motion } from "framer-motion";
import ScreenshotCluster from "./ScreenshotCluster";

export default function ProductSection({ section, theme }) {
  const isSingle = section.screenshots.length === 1;

  return (
    <section id={section.id} className="mx-auto max-w-6xl pb-20">
      <div
        className={`grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] ${
          section.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <div
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            {section.kicker}
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            {section.headline}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
            {section.copy}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {section.bullets.map((item) => (
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute inset-8 rounded-[3rem] blur-3xl"
            style={{ backgroundColor: theme.accentSoft }}
          />
          <div
            className={`relative mx-auto w-full ${
              isSingle ? "max-w-[400px]" : "max-w-[580px]"
            }`}
            style={{
              filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.45))",
            }}
          >
            <ScreenshotCluster screenshots={section.screenshots} theme={theme} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
