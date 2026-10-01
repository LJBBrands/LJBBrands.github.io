import ProductStory from "./ProductStory";
import SectionHeader from "../SectionHeader";

export default function Projects({ theme }) {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
    >
      <SectionHeader
        theme={theme}
        kicker="Explore Awy"
        title="Here’s what connection looks like."
        description="Take a closer look at the spaces, conversations, and choices inside Awy."
      />

      <ProductStory theme={theme} />
    </section>
  );
}
