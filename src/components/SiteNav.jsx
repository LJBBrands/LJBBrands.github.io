import { useEffect, useState } from "react";
import { navItems } from "../data/projects";
import { handleSectionClick } from "../utils/scrollToSection";

export default function SiteNav({ theme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const onNavClick = (href) => (event) => {
    handleSectionClick(href.replace("#", ""))(event);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "backdrop-blur-2xl" : ""
      }`}
      style={{
        backgroundColor:
          scrolled || open ? "rgba(0,0,0,0.78)" : "transparent",
        borderBottom:
          scrolled || open
            ? `1px solid ${theme.cardBorder}`
            : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
        <a
          href="#top"
          onClick={onNavClick("#top")}
          className="flex min-w-0 items-center gap-3"
          aria-label="LJB Media Group home"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-xs font-semibold tracking-wide"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accent,
            }}
          >
            LJB
          </span>
          <span className="truncate text-sm font-medium tracking-tight text-white/92 sm:text-base">
            LJB Media Group
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavClick(item.href)}
              className="rounded-full px-3 py-2 text-sm text-white/68 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border px-4 py-2 text-sm text-white/88 transition hover:bg-white/10 md:hidden"
          style={{
            backgroundColor: theme.heroPillBg,
            borderColor: theme.cardBorder,
          }}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t px-5 py-4 md:hidden"
          style={{ borderColor: theme.cardBorder }}
          aria-label="Mobile"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onNavClick(item.href)}
                className="rounded-2xl px-4 py-3 text-base text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
