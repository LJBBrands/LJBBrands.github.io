import { motion, useReducedMotion } from "framer-motion";

export default function TeamMemberCard({ member, theme, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="flex h-full flex-col rounded-[1.75rem] border p-6 backdrop-blur-2xl"
      style={{
        backgroundColor: theme.panelBg,
        borderColor: theme.cardBorder,
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="relative h-16 w-16 overflow-hidden rounded-full border-2"
          style={{ borderColor: theme.accentBorder }}
        >
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-sm font-semibold"
              style={{
                backgroundColor: theme.accentSoft,
                color: theme.accent,
              }}
              aria-hidden="true"
            >
              {member.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold tracking-tight">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-white/60">{member.title}</p>
        </div>
      </div>

      {member.description ? (
        <p className="mt-4 text-sm leading-7 text-white/64">
          {member.description}
        </p>
      ) : null}

      {member.projects?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {member.projects.map((project) => (
            <span
              key={project}
              className="rounded-full border px-3 py-1 text-xs text-white/70"
              style={{ borderColor: theme.cardBorder }}
            >
              {project}
            </span>
          ))}
        </div>
      ) : null}

      {member.link ? (
        <a
          href={member.link}
          className="mt-5 inline-flex min-h-[44px] items-center text-sm text-white/75 transition hover:text-white"
          target={member.link.startsWith("http") ? "_blank" : undefined}
          rel={member.link.startsWith("http") ? "noreferrer" : undefined}
        >
          Connect
        </a>
      ) : null}
    </motion.article>
  );
}
