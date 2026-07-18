import AtmosphereBackground from "./components/AtmosphereBackground";
import SiteNav from "./components/SiteNav";
import About from "./components/sections/About";
import AwyProject from "./components/sections/AwyProject";
import Contact from "./components/sections/Contact";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import LjbHero from "./components/sections/LjbHero";
import ProjectSpotlight from "./components/sections/ProjectSpotlight";
import SiteFooter from "./components/sections/SiteFooter";
import Support from "./components/sections/Support";
import { ljbTheme } from "./data/ljbTheme";
import { projectSpotlights } from "./data/projects";
import { useAtmosphereTheme } from "./hooks/useAtmosphereTheme";

export default function App() {
  const { theme: awyTheme, cycleTheme } = useAtmosphereTheme();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <AtmosphereBackground theme={ljbTheme} />

      <SiteNav theme={ljbTheme} />

      <main className="relative px-6 py-8 sm:px-8 lg:px-10">
        <LjbHero theme={ljbTheme} />

        <FeaturedProjects theme={ljbTheme} />

        <AwyProject theme={awyTheme} cycleTheme={cycleTheme} />

        {projectSpotlights.map((project) => (
          <ProjectSpotlight
            key={project.id}
            id={project.id}
            theme={ljbTheme}
            category={project.category}
            name={project.name}
            description={project.description}
            status={project.status}
          />
        ))}

        <About theme={ljbTheme} />
        <Support theme={ljbTheme} />
        <Contact theme={ljbTheme} />
        <SiteFooter theme={ljbTheme} />
      </main>
    </div>
  );
}
