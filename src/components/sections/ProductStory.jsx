import ProductMedia from "../ProductMedia";
import { getSlideStoryImage } from "../../data/awyProductMedia";
import { getProjectById } from "../../data/projects";
import { handleSectionClick } from "../../utils/scrollToSection";

const chapters = [
  {
    id: "community",
    label: "LOUNGES",
    title: "A place for what brings you together.",
    description:
      "Explore Lounges around shared interests. Step into a space where the conversation already has something in common.",
    detail: "From a favorite hobby to a community you care about.",
    link: "Find your people",
  },
  {
    id: "private-connection",
    label: "STRINGS",
    title: "Conversations with boundaries you choose.",
    description:
      "Strings are Awy’s one-to-one conversations. Keep connection personal with privacy controls you can see and understand.",
    detail: "Your conversations. Your choices about sharing.",
    link: "Connect on your terms",
  },
  {
    id: "home",
    label: "HOME",
    title: "Your starting point in Awy.",
    description:
      "Home brings your profile, notification shortcuts, and Top Lounges together so you can get to what you need next.",
    detail: "Quick access into conversations, Lounges, and Profile Studio.",
    link: "Stay connected",
  },
  {
    id: "personalization",
    label: "YOUR SPACE",
    title: "Make yourself at home.",
    description:
      "Give your profile an atmosphere that feels like you. Explore Awy’s personalization through Profile Studio.",
    detail: "A personal space with room for your identity.",
    link: "Make Awy yours",
  },
];

export default function ProductStory({ theme }) {
  const slides = getProjectById("awy").showcase.slides;
  return (
    <section
      className="product-story mx-auto max-w-6xl"
      aria-label="What you can do with Awy"
    >
      {chapters.map((chapter, index) => (
        <article
          key={chapter.id}
          className={`story-chapter ${index % 2 ? "story-chapter--reverse" : ""}`}
        >
          <div className="story-chapter__copy">
            <p className="story-kicker" style={{ color: theme.accent }}>
              {String(index + 1).padStart(2, "0")} / {chapter.label}
            </p>
            <h2>{chapter.title}</h2>
            <p className="story-chapter__description">{chapter.description}</p>
            <p className="story-chapter__detail">{chapter.detail}</p>
            <a
              href="#get-involved"
              onClick={handleSectionClick("get-involved")}
              className="story-link"
            >
              {chapter.link} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="story-chapter__visual">
            <ProductMedia
              screenshot={getSlideStoryImage(
                slides.find((slide) => slide.id === chapter.id),
              )}
              size="hero"
              caption
            />
          </div>
        </article>
      ))}
    </section>
  );
}
