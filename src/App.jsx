import { useEffect } from "react";
import AtmosphereBackground from "./components/AtmosphereBackground";
import SiteNav from "./components/SiteNav";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Ecosystem from "./components/sections/Ecosystem";
import LjbHero from "./components/sections/LjbHero";
import Projects from "./components/sections/Projects";
import SiteFooter from "./components/sections/SiteFooter";
import Support from "./components/sections/Support";
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
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <AtmosphereBackground theme={ljbTheme} />

      <SiteNav theme={ljbTheme} />

      <main className="relative px-5 py-6 sm:px-8 lg:px-10">
        <LjbHero theme={ljbTheme} />
        <Projects theme={ljbTheme} />
        <Ecosystem theme={ljbTheme} />
        <About theme={ljbTheme} />
        <Contact theme={ljbTheme} />
        <Support theme={ljbTheme} />
      </main>

      <div className="relative px-5 pb-6 sm:px-8 lg:px-10">
        <SiteFooter theme={ljbTheme} />
      </div>
    </div>
  );
}
