import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";
import DestinationIcon from "./DestinationIcon";
import { handleSectionClick } from "../utils/scrollToSection";

function ExternalIndicator() {
  return (
    <svg
      className="destination-card__external"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 3.5H3.75A1.25 1.25 0 0 0 2.5 4.75v7.5A1.25 1.25 0 0 0 3.75 13.5h7.5a1.25 1.25 0 0 0 1.25-1.25V9.5M9.5 2.5h4v4M13.5 2.5 7.5 8.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const DestinationCard = forwardRef(function DestinationCard(
  { destination, theme, index = 0, className = "", onOpenProject },
  ref
) {
  const reduceMotion = useReducedMotion();
  const isExternal = Boolean(destination.external);
  const isHash = destination.action === "hash";
  const isProject = destination.action === "project";

  const sharedMotion = {
    initial: reduceMotion ? false : { opacity: 0, y: 12 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.35, delay: index * 0.03 },
  };

  const cardStyle = {
    backgroundColor: theme.panelBg,
    borderColor: theme.cardBorder,
  };

  const content = (
    <>
      <span
        className="destination-card__icon"
        style={{
          borderColor: theme.cardBorder,
          color: theme.accent,
        }}
      >
        <DestinationIcon name={destination.icon} />
      </span>

      <h3 className="destination-card__title">{destination.title}</h3>
      <p className="destination-card__copy">{destination.description}</p>

      <span
        className="destination-card__cta"
        style={{ borderColor: theme.cardBorder }}
      >
        <span>{destination.cta}</span>
        {isExternal ? <ExternalIndicator /> : null}
      </span>
    </>
  );

  if (isProject) {
    return (
      <motion.button
        ref={ref}
        type="button"
        aria-label={destination.ariaLabel}
        aria-haspopup="dialog"
        onClick={() => onOpenProject?.(destination.projectId)}
        {...sharedMotion}
        className={`destination-card group ${className}`.trim()}
        style={cardStyle}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={destination.href}
      aria-label={destination.ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={
        isHash
          ? handleSectionClick(destination.href.replace("#", ""))
          : undefined
      }
      {...sharedMotion}
      className={`destination-card group ${className}`.trim()}
      style={cardStyle}
    >
      {content}
    </motion.a>
  );
});

export default DestinationCard;
