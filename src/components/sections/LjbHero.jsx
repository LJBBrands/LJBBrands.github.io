import { useState } from "react";
import ProductMedia from "../ProductMedia";
import { getSlideHeroImage } from "../../data/awyProductMedia";
import { getProjectById } from "../../data/projects";
import { handleSectionClick } from "../../utils/scrollToSection";

export default function LjbHero({ theme }) {
  const slides = getProjectById("awy").showcase.slides;
  const choices = ["community", "private-connection", "personalization"].map(
    (id) => slides.find((slide) => slide.id === id),
  );
  const [selected, setSelected] = useState(0);
  const labels = ["Find your people", "Your conversations", "Make it yours"];
  return (
    <section id="top" className="visual-hero mx-auto max-w-6xl scroll-mt-24">
      <div className="visual-hero__intro">
        <p className="story-kicker" style={{ color: theme.accent }}>
          A SOCIAL APP FOR CONNECTION
        </p>
        <h1>
          Your people.
          <br />
          Your conversations.
          <br />
          <span style={{ color: theme.accent }}>Your space.</span>
        </h1>
        <p className="visual-hero__description">
          Private conversations, shared-interest Lounges, and live presence. Awy
          brings your connections together in one place.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#get-involved"
            onClick={handleSectionClick("get-involved")}
            className="story-cta"
          >
            Join the Waitlist <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#projects"
            onClick={handleSectionClick("projects")}
            className="story-link"
          >
            Explore Awy <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="mt-6 text-sm text-white/60">
          More presence. Less pressure.
        </p>
      </div>
      <div className="visual-hero__product">
        <div id="hero-screen" className="visual-hero__phone" aria-live="polite">
          <ProductMedia
            screenshot={getSlideHeroImage(choices[selected])}
            size="hero"
            priority
          />
        </div>
        <div
          className="visual-hero__choices"
          role="group"
          aria-label="Explore Awy screens"
        >
          {choices.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-pressed={selected === index}
              aria-controls="hero-screen"
              onClick={() => setSelected(index)}
            >
              {labels[index]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
