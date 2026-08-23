function srgbChannel(value) {
  const channel = value / 255;
  return channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4;
}

export function relativeLuminance([r, g, b]) {
  return (
    0.2126 * srgbChannel(r) + 0.7152 * srgbChannel(g) + 0.0722 * srgbChannel(b)
  );
}

export function contrastRatio(foreground, background) {
  const first = relativeLuminance(foreground);
  const second = relativeLuminance(background);
  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);
  return (lighter + 0.05) / (darker + 0.05);
}

export function composeOnBackground(alpha, foreground = 255, background = 0) {
  return Math.round(foreground * alpha + background * (1 - alpha));
}

export function whiteAlphaOnBlack(alpha) {
  const value = composeOnBackground(alpha);
  return [value, value, value];
}
