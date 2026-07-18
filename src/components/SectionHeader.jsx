import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeader({
  theme,
  kicker,
  title,
  description,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className={`mb-8 max-w-2xl sm:mb-10 ${className}`}
    >
      {kicker ? (
        <div
          className="inline-flex rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: theme.accentBorder,
            backgroundColor: theme.accentSoft,
            color: theme.accentText,
          }}
        >
          {kicker}
        </div>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          kicker ? "mt-4" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-white/64 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
