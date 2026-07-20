import { motion, useReducedMotion } from "framer-motion";
import {
  contactMailto,
  departmentContacts,
  primaryContact,
} from "../../data/contact";

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 opacity-50 transition group-hover:opacity-90 group-focus-visible:opacity-90"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.4"
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
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
      aria-labelledby="contact-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4 }}
        className="contact-card"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div className="contact-intro">
          <div
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            Contact
          </div>
          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Let’s Talk
          </h2>
          <p className="mt-3 max-w-md text-base leading-7 text-white/64 sm:text-lg sm:leading-8">
            Questions, collaborations, project inquiries, or general conversation
            — reach the right part of LJB Media Group below.
          </p>
        </div>

        <div className="contact-directory">
          <div
            className="contact-primary"
            style={{ borderColor: theme.cardBorder }}
          >
            <div className="min-w-0">
              <div className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">
                {primaryContact.label}
              </div>
              <a
                href={primaryMailto}
                aria-label={primaryContact.ariaLabel}
                className="mt-2 block break-all text-xl font-semibold tracking-tight text-white transition hover:text-white/90 sm:text-2xl"
              >
                {primaryContact.email}
              </a>
            </div>
            <a
              href={primaryMailto}
              aria-label={primaryContact.ariaLabel}
              className="contact-primary__cta"
              style={{
                borderColor: theme.accentBorder,
                backgroundColor: theme.accentSoft,
                color: theme.accentText,
              }}
            >
              {primaryContact.cta}
            </a>
          </div>

          <ul className="contact-departments" style={{ borderColor: theme.cardBorder }}>
            {departmentContacts.map((department) => (
              <li key={department.id}>
                <a
                  href={contactMailto(department)}
                  aria-label={department.ariaLabel}
                  className="contact-department"
                  style={{ borderColor: theme.cardBorder }}
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-white/90">
                      {department.label}
                    </span>
                    <span className="mt-0.5 block break-all text-sm text-white/50">
                      {department.email}
                    </span>
                  </span>
                  <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
