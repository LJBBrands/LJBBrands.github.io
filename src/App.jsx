import AtmosphereBackground from "./components/AtmosphereBackground";
import SiteNav from "./components/SiteNav";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import LjbHero from "./components/sections/LjbHero";
import Projects from "./components/sections/Projects";
import SiteFooter from "./components/sections/SiteFooter";
import Support from "./components/sections/Support";
import { ljbTheme } from "./data/ljbTheme";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <AtmosphereBackground theme={ljbTheme} />

      <SiteNav theme={ljbTheme} />

      <main className="relative px-5 py-6 sm:px-8 lg:px-10">
        <LjbHero theme={ljbTheme} />
        <Projects theme={ljbTheme} />
        <About theme={ljbTheme} />
        <Contact theme={ljbTheme} />
        <Support theme={ljbTheme} />
        <SiteFooter theme={ljbTheme} />
      </main>
    </div>
  );
}
