import { motion, useReducedMotion } from "framer-motion";
import {
  contactMailto,
  departmentContacts,
  primaryContact,
} from "../../data/contact";

function CtaArrow() {
  return (
    <svg
      className="contact-cta__arrow"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact({ theme }) {
  const reduceMotion = useReducedMotion();
  const primaryMailto = contactMailto(primaryContact);

  return (
    <section
      id="contact"
      className="contact-section mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: reduceMotion ? 0 : 0.45 }}
        className="contact-editorial"
        style={{ borderColor: theme.cardBorder }}
      >
        <div className="contact-editorial__glow" aria-hidden="true" />
        <div
          className="contact-editorial__accent"
          style={{ backgroundColor: theme.accent }}
          aria-hidden="true"
        />

        <div className="contact-editorial__main">
          <div className="contact-copy">
            <p className="contact-copy__eyebrow">Contact</p>
            <h2 id="contact-heading" className="contact-copy__headline">
              Start a Conversation.
            </h2>
            <p className="contact-copy__support">
              Questions, collaborations, partnerships, and project inquiries are
              welcome.
            </p>
          </div>

          <div className="contact-primary-action">
            <a
              href={primaryMailto}
              aria-label={primaryContact.ariaLabel}
              className="contact-primary-action__email"
            >
              {primaryContact.email}
            </a>
            <a
              href={primaryMailto}
              aria-label={primaryContact.ariaLabel}
              className="contact-cta"
              style={{
                borderColor: theme.accentBorder,
                backgroundColor: theme.accent,
                color: "#061006",
              }}
            >
              <span>{primaryContact.cta}</span>
              <CtaArrow />
            </a>
          </div>
        </div>

        <nav
          className="contact-secondary-links"
          aria-label="Department contacts"
        >
          {departmentContacts.map((department, index) => (
            <span key={department.id} className="contact-secondary-item">
              {index > 0 ? (
                <span className="contact-secondary-sep" aria-hidden="true">
                  ·
                </span>
              ) : null}
              <a
                href={contactMailto(department)}
                aria-label={department.ariaLabel}
                className="contact-secondary-link"
              >
                <span className="contact-secondary-link__label">
                  <span className="contact-secondary-link__full">
                    {department.label}
                  </span>
                  <span className="contact-secondary-link__short">
                    {department.shortLabel}
                  </span>
                </span>
                <span className="contact-secondary-link__email">
                  {department.email}
                </span>
              </a>
            </span>
          ))}
        </nav>
      </motion.div>
    </section>
  );
}
