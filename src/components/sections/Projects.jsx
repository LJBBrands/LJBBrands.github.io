import { useCallback, useRef, useState } from "react";
import {
  getAppProjects,
  getProjectById,
  getStudioProjects,
} from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectDialog from "../ProjectDialog";
import SectionHeader from "../SectionHeader";

export default function Projects({ theme }) {
  const [activeId, setActiveId] = useState(null);
  const triggerRefs = useRef({});
  const appProjects = getAppProjects();
  const studioProjects = getStudioProjects();

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
        kicker="Apps"
        title="Three Apps. Built With Purpose."
        description="Awy, Arclia, and Arbor each solve a different problem, with thoughtful design, practical utility, and people at the center."
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

      <div className="projects-subsection">
        <div className="projects-subsection__heading">
          <p>Independent Work</p>
          <h3>Apparel And Original Stories.</h3>
          <span>
            Personal projects with their own voice, developed with the same care
            as the product work.
          </span>
        </div>

        <div className="projects-grid projects-grid--studio">
          {studioProjects.map((project, index) => (
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
