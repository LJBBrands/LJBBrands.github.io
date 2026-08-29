import { useImageFallback } from "../hooks/useImageFallback";

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
  const src = resolveSrc(screenshot);
  const [failed, markFailed] = useImageFallback(src);
  const alt = decorative ? "" : screenshot?.alt || screenshot?.label || "";

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
            width={706}
            height={1536}
            loading="lazy"
            draggable={false}
            onError={markFailed}
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
