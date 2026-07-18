import { navItems } from "../../data/projects";
import { handleSectionClick } from "../../utils/scrollToSection";

export default function SiteFooter({ theme }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-6xl pb-8">
      <div
        className="flex flex-col gap-5 rounded-[1.5rem] border px-5 py-5 backdrop-blur-2xl sm:px-6 md:flex-row md:items-center md:justify-between"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div>
          <div className="text-sm font-medium text-white/80">
            LJB Media Group
          </div>
          <div className="mt-1 text-sm text-white/50">
            © {year} LJB Media Group
          </div>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/70"
          aria-label="Footer"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleSectionClick(item.href.replace("#", ""))}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a href="/privacy/" className="transition hover:text-white">
            Privacy
          </a>
          <a href="/terms/" className="transition hover:text-white">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
