import { footerPlatformLinks } from "../../data/ecosystem";
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
          <a
            href="mailto:hello@ljbbrands.com?subject=LJB%20Media%20Group%20Inquiry"
            aria-label="Email LJB Media Group at hello@ljbbrands.com"
            className="mt-2 inline-block text-sm text-white/55 transition hover:text-white"
          >
            hello@ljbbrands.com
          </a>
          <nav
            className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/55"
            aria-label="Platform destinations"
          >
            {footerPlatformLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-label={link.ariaLabel}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
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
