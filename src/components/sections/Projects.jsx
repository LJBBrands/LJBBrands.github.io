import { useCallback, useRef, useState } from "react";
import { getAppProjects, getProjectById } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectDialog from "../ProjectDialog";
import SectionHeader from "../SectionHeader";

export default function Projects({ theme }) {
  const [activeId, setActiveId] = useState(null);
  const triggerRefs = useRef({});
  const appProjects = getAppProjects();

  const activeProject = activeId ? getProjectById(activeId) : null;

  const openProject = useCallback((id) => {
    setActiveId(id);
  }, []);

  const closeProject = useCallback(() => {
    const returningId = activeId;
    setActiveId(null);
    window.requestAnimationFrame(() => {
      triggerRefs.current[returningId]?.focus({ preventScroll: true });
    });
  }, [activeId]);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
    >
      <SectionHeader
        theme={theme}
        kicker="Inside Awy"
        title="Connection, On Your Terms."
        description="Explore presence, private conversations, and lounges through the Awy app preview."
      />

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        {[
          [
            "Presence",
            "See what is active now and connect around a shared moment, without an endless feed.",
          ],
          [
            "Private Conversations",
            "Share with intention, with clear boundaries and controls for your connections.",
          ],
          [
            "Lounges",
            "Find spaces organized around shared interests, community, and quieter conversation.",
          ],
        ].map(([title, description]) => (
          <article key={title} className="border-t border-white/15 pt-5">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-base leading-7 text-white/70">
              {description}
            </p>
          </article>
        ))}
      </div>
      <div className="projects-grid projects-grid--apps">
        {appProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            theme={theme}
            index={index}
            onOpen={openProject}
            buttonRef={(node) => {
              triggerRefs.current[project.id] = node;
            }}
          />
        ))}
      </div>

      <ProjectDialog
        project={activeProject}
        theme={theme}
        open={Boolean(activeProject)}
        onClose={closeProject}
      />
    </section>
  );
}
