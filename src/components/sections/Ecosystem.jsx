import { motion, useReducedMotion } from "framer-motion";
import { ecosystemSection, instagramProfile } from "../../data/ecosystem";
import SectionHeader from "../SectionHeader";

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Ecosystem({ theme }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="instagram"
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
      aria-labelledby="instagram-heading"
    >
      <SectionHeader
        theme={theme}
        kicker={ecosystemSection.kicker}
        title={ecosystemSection.title}
        description={ecosystemSection.description}
        titleId="instagram-heading"
      />

      <motion.a
        href={instagramProfile.href}
        aria-label={instagramProfile.ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="instagram-feature"
        style={{ borderColor: theme.cardBorder }}
      >
        <div className="instagram-feature__media" aria-hidden="true">
          <img
            src={instagramProfile.hero}
            alt=""
            width={1320}
            height={1030}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <div className="instagram-feature__shade" />
        </div>

        <div className="instagram-feature__content">
          <div className="instagram-feature__identity">
            <span className="instagram-feature__mark">
              <InstagramMark />
            </span>
            <span>
              <span className="instagram-feature__network">Instagram</span>
              <span className="instagram-feature__handle">
                {instagramProfile.handle}
              </span>
            </span>
          </div>

          <h3>{instagramProfile.title}</h3>
          <p>{instagramProfile.description}</p>

          <ul aria-label="Instagram topics">
            {instagramProfile.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>

          <span className="instagram-feature__cta">
            {instagramProfile.cta}
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M6.5 3.5H3.75A1.25 1.25 0 0 0 2.5 4.75v7.5A1.25 1.25 0 0 0 3.75 13.5h7.5a1.25 1.25 0 0 0 1.25-1.25V9.5M9.5 2.5h4v4M13.5 2.5 7.5 8.5"
                stroke="currentColor"
                strokeWidth="1.35"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </motion.a>
    </section>
  );
}
