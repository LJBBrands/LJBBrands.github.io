import { useCallback, useRef, useState } from "react";
import { getListedProjects, getProjectById } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectDialog from "../ProjectDialog";
import SectionHeader from "../SectionHeader";

const DESKTOP_ROW = 3;
const TABLET_ROW = 2;

function getProjectGridItemClass(index, total) {
  const classes = ["project-grid-item"];

  if (total % DESKTOP_ROW === 2) {
    if (index === total - 2) classes.push("project-grid-item--desktop-last-left");
    if (index === total - 1) classes.push("project-grid-item--desktop-last-right");
  }

  if (total % TABLET_ROW === 1 && index === total - 1) {
    classes.push("project-grid-item--tablet-last-center");
  }

  return classes.join(" ");
}

export default function Projects({ theme }) {
  const [activeId, setActiveId] = useState(null);
  const triggerRefs = useRef({});
  const listedProjects = getListedProjects();
  const visibleCount = listedProjects.length;

  const activeProject = activeId ? getProjectById(activeId) : null;

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
        title="Explore the LJB Ecosystem"
        description="Preview each part of the company, then open a project for highlights, selected visuals, and next steps."
      />

      <div className="projects-grid">
        {listedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            theme={theme}
            index={index}
            className={getProjectGridItemClass(index, visibleCount)}
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
