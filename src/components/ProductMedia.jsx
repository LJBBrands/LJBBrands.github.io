import DeviceFrame from "./DeviceFrame";
import { isPreframedPresentation } from "../data/awyProductMedia";
import { useImageFallback } from "../hooks/useImageFallback";

function resolveSrc(screenshot) {
  return screenshot?.src || screenshot?.image || "";
}

/**
 * Pre-framed captures already include iPhone chrome.
 * `presentation: "device"` is the live value used by current Home/Studio.
 * `presentation: "preframed"` is an accepted alias. Neither path uses DeviceFrame.
 */
export function isPreframedDevice(screenshot) {
  return isPreframedPresentation(screenshot?.presentation);
}

function PreframedDevice({
  screenshot,
  size,
  caption,
  priority,
  decorative,
  className,
}) {
  const src = resolveSrc(screenshot);
  const [failed, markFailed] = useImageFallback(src);
  const alt = decorative ? "" : screenshot?.alt || screenshot?.label || "";
  const width = screenshot?.width || 704;
  const height = screenshot?.height || 1554;

  return (
    <figure className={`device-stage ${className}`.trim()}>
      <div className={`device-capture device-capture--${size}`}>
        {src && !failed ? (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            draggable={false}
            onError={markFailed}
          />
        ) : (
          <div
            className="device-capture__fallback"
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

export default function ProductMedia({
  screenshot,
  size = "hero",
  caption = false,
  priority = false,
  decorative = false,
  className = "",
}) {
  if (!isPreframedDevice(screenshot)) {
    return (
      <DeviceFrame
        screenshot={screenshot}
        size={size}
        caption={caption}
        priority={priority}
        decorative={decorative}
        className={className}
      />
    );
  }

  return (
    <PreframedDevice
      screenshot={screenshot}
      size={size}
      caption={caption}
      priority={priority}
      decorative={decorative}
      className={className}
    />
  );
}
