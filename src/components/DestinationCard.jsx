import { motion, useReducedMotion } from "framer-motion";
import DestinationIcon from "./DestinationIcon";
import { handleSectionClick } from "../utils/scrollToSection";

export default function DestinationCard({ destination, theme, index = 0 }) {
  const reduceMotion = useReducedMotion();
  const isHash = destination.href?.startsWith("#");
  const isExternal = Boolean(destination.external);

  return (
    <motion.a
      href={destination.href}
      aria-label={destination.ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onClick={
        isHash
          ? handleSectionClick(destination.href.replace("#", ""))
          : undefined
      }
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="destination-card group"
      style={{
        backgroundColor: theme.panelBg,
        borderColor: theme.cardBorder,
      }}
    >
      <span
        className="destination-card__icon"
        style={{
          borderColor: theme.cardBorder,
          color: theme.accent,
        }}
      >
        <DestinationIcon name={destination.icon} />
      </span>

      <h3 className="destination-card__title">{destination.name}</h3>
      <p className="destination-card__copy">{destination.description}</p>

      <span
        className="destination-card__cta"
        style={{ borderColor: theme.cardBorder }}
      >
        {destination.cta}
      </span>
    </motion.a>
  );
}
