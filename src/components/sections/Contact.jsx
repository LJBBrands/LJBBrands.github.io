import { motion } from "framer-motion";
import { CONTACT_EMAIL, contactChannels } from "../../data/projects";

export default function Contact({ theme }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 pb-24">
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
          Contact
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Start a conversation.
        </h2>
        <p className="mt-4 text-lg leading-8 text-white/64">
          Reach LJB Media Group at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white transition hover:opacity-80"
            style={{ color: theme.accent }}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactChannels.map((channel, index) => (
          <motion.a
            key={channel.id}
            href={`mailto:${CONTACT_EMAIL}?subject=${channel.subject}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="rounded-[1.75rem] border p-6 backdrop-blur-2xl transition hover:border-white/20 hover:bg-white/[0.04]"
            style={{
              backgroundColor: theme.panelBg,
              borderColor: theme.cardBorder,
            }}
          >
            <div className="text-lg font-semibold tracking-tight">
              {channel.label}
            </div>
            <p className="mt-2 text-sm text-white/55">{CONTACT_EMAIL}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
