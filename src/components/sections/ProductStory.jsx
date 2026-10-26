import ProductMedia from "../ProductMedia";
import { getSlideStoryImage } from "../../data/awyProductMedia";
import { getProjectById } from "../../data/projects";
import { handleSectionClick } from "../../utils/scrollToSection";

const chapters = [
  {
    id: "home",
    label: "HOME",
    title: "Your starting point in Awy.",
    description:
      "Your profile, Connections, Statistics and Profile Studio sit together above the Notification Hub. Canvas has its own space beneath them.",
    detail: "Your identity and activity, brought together.",
    link: "Stay connected",
  },
  {
    id: "community",
    label: "LOUNGES",
    title: "A place for what brings you together.",
    description:
      "Start in Spaces to discover Lounges around shared interests. Find a community where the conversation already has something in common.",
    detail: "Challenges and Events shown in the preview are marked Planned.",
    link: "Find your people",
  },
  {
    id: "private-connection",
    label: "STRINGS",
    title: "A place for personal conversations.",
    description:
      "Strings bring your one-to-one conversations together in a dedicated space, with recent conversations close at hand.",
    detail: "A quieter place to keep in touch.",
    link: "Connect on your terms",
  },
  {
    id: "canvas",
    label: "CANVAS",
    title: "A little room for self-expression.",
    description:
      "Canvas gives personal expression a place of its own beneath Home, with the composer and management menu together.",
    detail: "Your Canvas. Your space to express yourself.",
    link: "Explore your space",
  },
];

export default function ProductStory({ theme }) {
  const slides = getProjectById("awy").showcase.slides;
  return (
    <section
      className="product-story mx-auto max-w-6xl"
      aria-label="What you can do with Awy"
    >
      {chapters.map((chapter, index) => {
        const screenshot = getSlideStoryImage(
          slides.find((slide) => slide.id === chapter.id),
        );
        return (
          <article
            key={chapter.id}
            className={`story-chapter ${index % 2 ? "story-chapter--reverse" : ""} ${!screenshot ? "story-chapter--text" : ""}`}
          >
            <div className="story-chapter__copy">
              <p className="story-kicker" style={{ color: theme.accent }}>
                {String(index + 1).padStart(2, "0")} / {chapter.label}
              </p>
              <h2>{chapter.title}</h2>
              <p className="story-chapter__description">
                {chapter.description}
              </p>
              <p className="story-chapter__detail">{chapter.detail}</p>
              <a
                href="#get-involved"
                onClick={handleSectionClick("get-involved")}
                className="story-link"
              >
                {chapter.link} <span aria-hidden="true">↗</span>
              </a>
            </div>
            {screenshot ? (
              <div className="story-chapter__visual">
                <ProductMedia screenshot={screenshot} size="hero" caption />
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
