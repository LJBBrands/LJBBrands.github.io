import ScreenshotCard from "./ScreenshotCard";

export default function HeroShowcase({ screenshots, theme }) {
  return (
    <div className="relative mx-auto min-h-[610px] w-full max-w-[610px]">
      <div
        className="pointer-events-none absolute inset-x-8 top-14 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: theme.accentSoft }}
      />

      <div className="grid gap-5 sm:hidden">
        {screenshots.map((shot) => (
          <ScreenshotCard key={shot.missingFile} screenshot={shot} theme={theme} />
        ))}
      </div>

      <div className="relative hidden min-h-[610px] sm:block">
        <div className="absolute left-0 top-16 w-[40%] -rotate-6">
          <ScreenshotCard screenshot={screenshots[1]} theme={theme} compact />
        </div>
        <div className="absolute left-[29%] top-0 z-10 w-[44%]">
          <ScreenshotCard screenshot={screenshots[0]} theme={theme} />
        </div>
        <div className="absolute bottom-1 right-0 w-[40%] rotate-6">
          <ScreenshotCard screenshot={screenshots[2]} theme={theme} compact />
        </div>
      </div>
    </div>
  );
}
