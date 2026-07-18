import { useEffect, useState } from "react";
import AssetTodoCard from "./AssetTodoCard";

function resolveSrc(screenshot) {
  return screenshot?.src || screenshot?.image || "";
}

export default function ScreenshotCard({
  screenshot,
  theme,
  compact = false,
  caption = false,
}) {
  const [imageError, setImageError] = useState(false);
  const src = resolveSrc(screenshot);

  useEffect(() => {
    setImageError(false);
  }, [src]);

  if (!src || imageError) {
    return (
      <div className={caption ? "space-y-2" : undefined}>
        <AssetTodoCard
          screenshot={{
            ...screenshot,
            alt: screenshot.alt || screenshot.label || "Screenshot",
            label: screenshot.label || "Preview",
          }}
          theme={theme}
          compact={compact}
        />
        {caption && screenshot.label ? (
          <p className="px-1 text-xs text-white/50">{screenshot.label}</p>
        ) : null}
      </div>
    );
  }

  return (
    <figure className={caption ? "space-y-2" : undefined}>
      <div
        className={`rounded-[1.65rem] border shadow-xl shadow-black/35 backdrop-blur-xl ${
          compact ? "p-1.5" : "p-2"
        }`}
        style={{
          backgroundColor: "rgba(12,14,12,0.72)",
          borderColor: "rgba(255,255,255,0.14)",
        }}
      >
        <img
          src={src}
          alt={screenshot.alt || screenshot.label || ""}
          className="block w-full rounded-[1.35rem] object-cover object-top"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      </div>
      {caption && screenshot.label ? (
        <figcaption className="px-1 text-xs text-white/50">
          {screenshot.label}
        </figcaption>
      ) : null}
    </figure>
  );
}
