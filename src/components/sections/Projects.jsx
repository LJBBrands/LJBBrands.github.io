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
