import { motion } from "framer-motion";
import { featuredProjects } from "../../data/projects";
import ProjectCard from "../ProjectCard";

export default function FeaturedProjects({ theme }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl pb-24">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="mb-10 max-w-2xl"
      >
        <div
          className="inline-flex rounded-full border px-3 py-1 text-xs"
          style={{
            borderColor: theme.accentBorder,
            backgroundColor: theme.accentSoft,
            color: theme.accentText,
          }}
        >
          Featured Projects
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          One ecosystem. Many crafts.
        </h2>
        <p className="mt-4 text-lg leading-8 text-white/64">
          Premium previews of the work shaping LJB Media Group — products,
          media, apparel, automotive, and software.
        </p>
      </motion.div>

      <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            theme={theme}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
