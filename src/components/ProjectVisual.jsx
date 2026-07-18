import ScreenshotCard from "./ScreenshotCard";

function AbstractVisual({ visualType, accent, theme }) {
  if (visualType === "media") {
    return (
      <div className="relative flex h-[200px] items-center justify-center overflow-hidden sm:h-[220px]">
        <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-white/10" />
        <div className="relative flex h-12 w-[70%] items-end justify-between gap-1">
          {[28, 52, 36, 68, 44, 60, 32, 54, 40, 62, 30, 48].map((height, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full"
              style={{
                height: `${height}%`,
                backgroundColor: i % 3 === 0 ? `${accent}88` : "rgba(255,255,255,0.18)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (visualType === "auto") {
    return (
      <div className="relative flex h-[200px] items-center justify-center overflow-hidden sm:h-[220px]">
        <div
          className="absolute inset-x-10 bottom-[4.5rem] h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}66, transparent)`,
          }}
        />
        <div
          className="relative h-20 w-40 rounded-[2rem] border sm:h-24 sm:w-44"
          style={{
            borderColor: theme.cardBorder,
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))",
          }}
        />
      </div>
    );
  }

  if (visualType === "apparel") {
    return (
      <div className="relative flex h-[200px] items-center justify-center overflow-hidden sm:h-[220px]">
        <div
          className="h-32 w-24 rounded-[1.4rem] border sm:h-36 sm:w-28"
          style={{
            borderColor: theme.cardBorder,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
          }}
        />
        <div
          className="absolute h-px w-16"
          style={{ backgroundColor: `${accent}55` }}
        />
      </div>
    );
  }

  if (visualType === "arbor") {
    return (
      <div className="relative flex h-[200px] items-center justify-center overflow-hidden sm:h-[220px]">
        <div className="relative flex w-[170px] flex-col gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
              style={{
                borderColor: theme.cardBorder,
                backgroundColor: theme.cardBg,
                transform: `translateX(${index * 6}px)`,
              }}
            >
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{
                  backgroundColor:
                    index === 0 ? accent : "rgba(255,255,255,0.28)",
                }}
              />
              <span className="h-1.5 flex-1 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-[200px] items-center justify-center overflow-hidden sm:h-[220px]">
      <div
        className="h-24 w-24 rounded-[1.5rem] border"
        style={{ borderColor: theme.cardBorder, backgroundColor: theme.cardBg }}
      />
    </div>
  );
}

export default function ProjectVisual({ project, theme, compact = true }) {
  if (project.visualType === "awy" && project.images?.length) {
    const shots = project.images.slice(0, 3);
    return (
      <div className="relative mx-auto h-[200px] w-full max-w-[260px] overflow-hidden sm:h-[220px]">
        <div
          className="pointer-events-none absolute inset-x-8 top-8 h-28 rounded-full blur-3xl opacity-70"
          style={{ backgroundColor: theme.accentSoft }}
        />
        <div className="absolute left-1/2 top-2 z-10 w-[54%] -translate-x-1/2">
          <ScreenshotCard screenshot={shots[0]} theme={theme} compact={compact} />
        </div>
        {shots[1] ? (
          <div className="absolute left-0 top-12 w-[38%] -rotate-6 opacity-90">
            <ScreenshotCard
              screenshot={shots[1]}
              theme={theme}
              compact={compact}
            />
          </div>
        ) : null}
        {shots[2] ? (
          <div className="absolute right-0 top-14 w-[38%] rotate-6 opacity-90">
            <ScreenshotCard
              screenshot={shots[2]}
              theme={theme}
              compact={compact}
            />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <AbstractVisual
      visualType={project.visualType}
      accent={project.accent || theme.accent}
      theme={theme}
    />
  );
}
