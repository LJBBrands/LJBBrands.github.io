import DeviceFrame from "./DeviceFrame";

/**
 * Back-compat wrapper. Prefer DeviceFrame directly for dialog/gallery stages.
 * size: hero | gallery | card | cardSide
 */
export default function ScreenshotCard({
  screenshot,
  compact = false,
  caption = false,
  size,
  decorative = false,
  className = "",
}) {
  const resolvedSize = size || (compact ? "gallery" : "hero");

  return (
    <DeviceFrame
      screenshot={screenshot}
      size={resolvedSize}
      caption={caption}
      decorative={decorative}
      className={className}
    />
  );
}
