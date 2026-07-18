import { motion } from "framer-motion";
import {
  SUPPORT_LINK,
  WAITLIST_MAILTO,
  faqItems,
  heroBenefits,
  heroScreenshots,
  productSections,
} from "../../data/awyContent";
import { handleSectionClick } from "../../utils/scrollToSection";
import HeroShowcase from "../HeroShowcase";
import ProductSection from "../ProductSection";

export default function AwyProject({ theme, cycleTheme }) {
  return (
    <section id="awy" className="relative scroll-mt-24 pb-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -mx-6 overflow-hidden rounded-[2.5rem] sm:-mx-8 lg:-mx-10"
      >
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{ background: theme.background }}
        />
        <div
          className="absolute inset-0 opacity-90 transition-all duration-700"
          style={{ backgroundImage: theme.glow }}
        />
        <div
          className="absolute inset-0 blur-2xl transition-all duration-700"
          style={{ backgroundImage: theme.aura }}
        />
        <div
          className="absolute inset-0 transition-colors duration-700"
          style={{ backgroundColor: theme.overlay }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl pb-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-4 flex flex-wrap items-center gap-3"
        >
          <div
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            Featured Project · Technology
          </div>
          <div className="text-sm text-white/50">Awy inside LJB Media Group</div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid items-center gap-12 pb-20 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div>
            <div className="mb-5 flex max-w-full flex-wrap items-center gap-2 sm:gap-3">
              <div
                className="inline-flex shrink-0 whitespace-nowrap rounded-full border px-3 py-2 text-xs text-white/78 backdrop-blur-xl sm:px-4 sm:text-sm"
                style={{
                  backgroundColor: theme.heroPillBg,
                  borderColor: theme.cardBorder,
                }}
              >
                Awy • {theme.label}
              </div>

              <div
                className="inline-flex shrink-0 whitespace-nowrap rounded-full border px-3 py-2 text-xs text-white/78 backdrop-blur-xl sm:px-4 sm:text-sm"
                style={{
                  backgroundColor: theme.heroPillBg,
                  borderColor: theme.cardBorder,
                }}
              >
                Calm digital environment
              </div>

              <button
                type="button"
                onClick={cycleTheme}
                className="inline-flex shrink-0 whitespace-nowrap rounded-full border px-3 py-2 text-xs text-white/88 backdrop-blur-xl transition hover:bg-white/10 sm:px-4 sm:text-sm"
                style={{
                  backgroundColor: theme.heroPillBg,
                  borderColor: theme.cardBorder,
                }}
              >
                Change Atmosphere
              </button>
            </div>

            <h2 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Presence, not noise.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
              Awy is a private social environment built around quiet spaces,
              shared rhythm, and consent-aware communication.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">
              A calm digital environment for intentional presence, trusted
              signals, and private shared spaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                onClick={handleSectionClick("waitlist")}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Join the Waitlist
              </a>

              <a
                href="#presence"
                onClick={handleSectionClick("presence")}
                className="inline-flex rounded-full border px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                style={{
                  backgroundColor: theme.heroPillBg,
                  borderColor: theme.cardBorder,
                }}
              >
                Explore Awy
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-white/54">
              {heroBenefits.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border px-3 py-1 backdrop-blur-xl"
                  style={{
                    backgroundColor: theme.heroPillBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
              {[
                "Presence",
                "Shared Areas",
                "Lounges",
                "Strings",
                "Verified Signals",
                "Pulse",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border px-4 py-3 text-sm text-white/68 backdrop-blur-xl"
                  style={{
                    backgroundColor: theme.panelBg,
                    borderColor: theme.cardBorder,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <HeroShowcase screenshots={heroScreenshots} theme={theme} />
        </motion.div>
      </div>

      <div className="relative">
        {productSections.map((section) => (
          <ProductSection key={section.id} section={section} theme={theme} />
        ))}
      </div>

      <section id="pulse" className="relative mx-auto max-w-6xl pb-16">
        <div
          className="rounded-[2rem] border p-8 backdrop-blur-2xl shadow-2xl shadow-black/20"
          style={{
            backgroundColor: theme.panelBg,
            borderColor: theme.cardBorder,
          }}
        >
          <div
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            Pulse
          </div>
          <h3 className="mt-5 text-3xl font-semibold sm:text-4xl">
            A public layer with a calmer rhythm.
          </h3>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
            Pulse will become Awy’s public conversation space.
          </p>
        </div>
      </section>

      <section id="faq" className="relative mx-auto max-w-6xl pb-16">
        <div className="mb-8">
          <div
            className="inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            FAQ
          </div>
          <h3 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Frequently asked questions.
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border p-5 backdrop-blur-2xl"
              style={{
                backgroundColor: theme.panelBg,
                borderColor: theme.cardBorder,
              }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-white">
                <span>{item.question}</span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none text-white/70 transition group-open:rotate-45"
                  style={{
                    borderColor: theme.cardBorder,
                    backgroundColor: theme.cardBg,
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-white/62">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="waitlist" className="relative mx-auto max-w-5xl pb-16 text-center">
        <div
          className="relative overflow-hidden rounded-[2rem] border px-8 py-12 backdrop-blur-2xl shadow-2xl shadow-black/30"
          style={{
            backgroundColor: theme.panelBg,
            borderColor: theme.cardBorder,
          }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
            style={{ backgroundColor: theme.accentSoft }}
          />
          <div
            className="mx-auto inline-flex rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: theme.accentBorder,
              backgroundColor: theme.accentSoft,
              color: theme.accentText,
            }}
          >
            Waitlist
          </div>
          <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold sm:text-4xl">
            A calmer way to stay connected.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/70">
            Join the waitlist for product notes, release timing, and next-step
            availability.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WAITLIST_MAILTO}
              className="inline-flex rounded-full bg-white px-8 py-4 text-base font-medium text-black transition hover:opacity-90"
            >
              Join the Waitlist
            </a>

            <a
              href={SUPPORT_LINK}
              className="inline-flex rounded-full border px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
              style={{
                backgroundColor: theme.heroPillBg,
                borderColor: theme.cardBorder,
              }}
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
