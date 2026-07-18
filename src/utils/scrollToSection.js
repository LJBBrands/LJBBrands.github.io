export function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function handleSectionClick(sectionId) {
  return (event) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };
}
