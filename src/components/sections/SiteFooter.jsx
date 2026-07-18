import { GITHUB_URL, SUPPORT_LINK } from "../../data/awyContent";
import { handleSectionClick } from "../../utils/scrollToSection";

export default function SiteFooter({ theme }) {
  return (
    <footer className="mx-auto max-w-6xl pb-10">
      <div
        className="flex flex-col gap-4 rounded-[1.5rem] border px-6 py-5 backdrop-blur-2xl md:flex-row md:items-center md:justify-between"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.cardBorder,
        }}
      >
        <div className="text-sm text-white/58">
          © 2026 LJB Media Group. Built with purpose.
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
          {GITHUB_URL ? (
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          ) : null}
          <a
            href="#support"
            onClick={handleSectionClick("support")}
            className="transition hover:text-white"
          >
            Support
          </a>
          <a href={SUPPORT_LINK} className="transition hover:text-white">
            Awy Support
          </a>
          <a href="/privacy/" className="transition hover:text-white">
            Privacy
          </a>
          <a href="/terms/" className="transition hover:text-white">
            Terms
          </a>
          <a
            href="#contact"
            onClick={handleSectionClick("contact")}
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
