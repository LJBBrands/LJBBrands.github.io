import { useEffect } from "react";
import AtmosphereBackground from "./components/AtmosphereBackground";
import SiteNav from "./components/SiteNav";
import Contact from "./components/sections/Contact";
import LjbHero from "./components/sections/LjbHero";
import Interest from "./components/sections/Interest";
import Questions from "./components/sections/Questions";
import Projects from "./components/sections/Projects";
import SiteFooter from "./components/sections/SiteFooter";
import { ljbTheme } from "./data/ljbTheme";
import { scrollToSection } from "./utils/scrollToSection";

export default function App() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return undefined;

    const timer = window.setTimeout(() => {
      scrollToSection(hash);
    }, 50);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="site-shell min-h-screen bg-black text-white">
      <div id="site-content">
        <AtmosphereBackground theme={ljbTheme} />

        <SiteNav theme={ljbTheme} />

        <div id="site-main">
          <main className="relative px-5 py-6 sm:px-8 lg:px-10">
            <LjbHero theme={ljbTheme} />
            <Projects theme={ljbTheme} />
            <Questions theme={ljbTheme} />
            <Interest theme={ljbTheme} />
            <Contact theme={ljbTheme} />
          </main>

          <div className="site-end relative px-5 pb-6 sm:px-8 lg:px-10">
            <SiteFooter theme={ljbTheme} />
          </div>
        </div>
      </div>
    </div>
  );
}
