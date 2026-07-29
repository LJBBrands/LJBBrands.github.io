import { useCallback, useRef, useState } from "react";
import {
  destinations,
  ecosystemSection,
  getDestinationGridItemClass,
} from "../../data/ecosystem";
import { getProjectById } from "../../data/projects";
import DestinationCard from "../DestinationCard";
import ProjectDialog from "../ProjectDialog";
import SectionHeader from "../SectionHeader";

export default function Ecosystem({ theme }) {
  const [activeId, setActiveId] = useState(null);
  const triggerRefs = useRef({});
  const visibleCount = destinations.length;

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
    <section
      id="ecosystem"
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
      aria-labelledby="ecosystem-heading"
    >
      <SectionHeader
        theme={theme}
        kicker={ecosystemSection.kicker}
        title={ecosystemSection.title}
        description={ecosystemSection.description}
        titleId="ecosystem-heading"
      />

      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            theme={theme}
            index={index}
            className={getDestinationGridItemClass(index, visibleCount)}
            onOpenProject={openProject}
            ref={
              destination.action === "project"
                ? (node) => {
                    if (destination.projectId) {
                      triggerRefs.current[destination.projectId] = node;
                    }
                  }
                : undefined
            }
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
