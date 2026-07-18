import { motion, useReducedMotion } from "framer-motion";
import { buildAwyStory } from "../data/projects";
import DeviceFrame from "./DeviceFrame";

export default function AwyProductStory({ project, theme, descriptionId }) {
  const reduceMotion = useReducedMotion();
  const sections = buildAwyStory(project);
  const heroShot =
    project.visual?.gallery?.find(
      (item) => item.label === "Home — Live Presence"
    ) || project.visual?.card?.primary;

  return (
    <div className="awy-story">
      <section className="awy-story__intro">
        <div className="awy-story__intro-copy">
          <p
            id={descriptionId}
            className="awy-story__lede"
          >
            {project.description}
          </p>
          {project.summary ? (
            <p className="awy-story__summary">{project.summary}</p>
          ) : null}
          {project.highlights?.length ? (
            <ul className="awy-story__chips">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="awy-story__chip"
                  style={{ borderColor: theme.cardBorder }}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {heroShot ? (
          <div className="awy-story__intro-device">
            <DeviceFrame screenshot={heroShot} size="hero" />
          </div>
        ) : null}
      </section>

      <div className="awy-story__chapters">
        {sections.map((section, index) => (
          <motion.section
            key={section.group}
            className={`awy-story__chapter ${
              section.reverse ? "awy-story__chapter--reverse" : ""
            }`}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
          >
            <div className="awy-story__copy">
              <p className="awy-story__eyebrow">{section.title}</p>
              <h3 className="awy-story__headline">{section.headline}</h3>
              <p className="awy-story__body">{section.body}</p>
            </div>

            <div
              className={
                section.items.length > 1
                  ? "awy-story__devices awy-story__devices--pair"
                  : "awy-story__devices awy-story__devices--solo"
              }
            >
              {section.items.map((shot) => (
                <DeviceFrame
                  key={shot.src}
                  screenshot={shot}
                  size="gallery"
                  caption
                />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
