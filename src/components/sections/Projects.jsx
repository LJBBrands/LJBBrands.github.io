import { useCallback, useRef, useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectDialog from "../ProjectDialog";
import SectionHeader from "../SectionHeader";

export default function Projects({ theme }) {
  const [activeId, setActiveId] = useState(null);
  const triggerRefs = useRef({});

  const activeProject =
    projects.find((project) => project.id === activeId) ?? null;

  const openProject = useCallback((id) => {
    setActiveId(id);
  }, []);

  const closeProject = useCallback(() => {
    const returningId = activeId;
    setActiveId(null);
    window.requestAnimationFrame(() => {
      triggerRefs.current[returningId]?.focus();
    });
  }, [activeId]);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20">
      <SectionHeader
        theme={theme}
        kicker="Projects"
        title="Explore the LJB ecosystem"
        description="Preview each part of the company, then open a project for highlights, selected visuals, and next steps."
      />

      <div className="grid items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
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
