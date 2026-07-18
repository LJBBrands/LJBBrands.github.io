import { useEffect, useState } from "react";

function resolveSrc(screenshot) {
  return screenshot?.src || screenshot?.image || "";
}

export default function DeviceFrame({
  screenshot,
  size = "gallery",
  caption = false,
  decorative = false,
  className = "",
}) {
  const [failed, setFailed] = useState(false);
  const src = resolveSrc(screenshot);
  const alt = decorative ? "" : screenshot?.alt || screenshot?.label || "";

  useEffect(() => {
    setFailed(false);
  }, [src]);

  const frameClass =
    size === "showcase"
      ? "device-frame device-frame--showcase"
      : size === "hero"
        ? "device-frame device-frame--hero"
        : size === "card"
          ? "device-frame device-frame--card"
          : size === "cardSide"
            ? "device-frame device-frame--card-side"
            : "device-frame device-frame--gallery";

  return (
    <figure className={`device-stage ${className}`.trim()}>
      <div className={frameClass}>
        {src && !failed ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            draggable={false}
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="device-frame__fallback"
            role={decorative ? undefined : "img"}
            aria-label={decorative ? undefined : alt || "Preview unavailable"}
            aria-hidden={decorative || undefined}
          >
            <span>Preview unavailable</span>
          </div>
        )}
      </div>
      {caption && screenshot?.label ? (
        <figcaption className="device-caption">{screenshot.label}</figcaption>
      ) : null}
    </figure>
  );
}
