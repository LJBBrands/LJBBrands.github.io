import { motion, useReducedMotion } from "framer-motion";
import { contactMailto } from "../data/contact";

function MailIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5 8 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactCard({ channel, theme, index = 0 }) {
  const reduceMotion = useReducedMotion();
  const mailto = contactMailto(channel);

  return (
    <motion.a
      href={mailto}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="group flex h-full min-h-[44px] flex-col rounded-[1.75rem] border p-5 backdrop-blur-2xl transition hover:border-white/22 hover:bg-white/[0.03] sm:p-6"
      style={{
        backgroundColor: theme.panelBg,
        borderColor: theme.cardBorder,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="inline-flex rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: theme.accentBorder,
            backgroundColor: theme.accentSoft,
            color: theme.accentText,
          }}
        >
          {channel.label}
        </span>
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-white/70 transition group-hover:text-white"
          style={{
            borderColor: theme.cardBorder,
            backgroundColor: theme.cardBg,
          }}
        >
          <MailIcon className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-4 text-base font-medium tracking-tight text-white">
        {channel.email}
      </div>
      <p className="mt-3 flex-1 text-sm leading-7 text-white/60">
        {channel.description}
      </p>
      <span className="mt-5 inline-flex min-h-[44px] items-center text-sm font-medium text-white/80 transition group-hover:text-white">
        Send Email
      </span>
    </motion.a>
  );
}
