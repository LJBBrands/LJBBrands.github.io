import { aboutCompany, aboutSection, teamMembers } from "../../data/team";
import SectionHeader from "../SectionHeader";
import TeamMemberCard from "../TeamMemberCard";

export default function About({ theme }) {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20">
      <SectionHeader
        theme={theme}
        kicker="About"
        title={aboutSection.title}
        description={aboutSection.supporting}
      />

      <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article
          className="flex h-full flex-col rounded-[1.75rem] border p-6 backdrop-blur-2xl md:col-span-2 xl:col-span-2"
          style={{
            backgroundColor: theme.panelBg,
            borderColor: theme.cardBorder,
          }}
        >
          <div
            className="inline-flex w-fit rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            {aboutCompany.subtitle}
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">
            {aboutCompany.title}
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/64 sm:text-base sm:leading-8">
            {aboutCompany.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {aboutCompany.projects.map((project) => (
              <span
                key={project}
                className="rounded-full border px-3 py-1 text-xs text-white/70"
                style={{ borderColor: theme.cardBorder }}
              >
                {project}
              </span>
            ))}
          </div>
        </article>

        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            theme={theme}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
