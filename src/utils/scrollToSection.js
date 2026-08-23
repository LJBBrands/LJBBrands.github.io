import { getScrollBehavior } from "./prefersReducedMotion";

export function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: getScrollBehavior(),
    block: "start",
  });
}

export function handleSectionClick(sectionId) {
  return (event) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };
}
