import { describe, expect, it } from "vitest";
import { ljbTheme } from "../../src/data/ljbTheme";
import { composeOnBackground, contrastRatio } from "../../src/utils/contrast";

const rgb = (hex) =>
  [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16));
const surfaces = ["#070A18", "#0C1024", "#130E28", "#0A0D1C"];

describe("Awy purple and blue contrast", () => {
  it("keeps accent copy, focus rings, and muted small text legible on navy surfaces", () => {
    for (const surface of surfaces) {
      const background = rgb(surface);
      expect(
        contrastRatio(rgb(ljbTheme.accent), background),
      ).toBeGreaterThanOrEqual(4.5);
      expect(
        contrastRatio(rgb(ljbTheme.accentText), background),
      ).toBeGreaterThanOrEqual(4.5);
      const muted = background.map((channel) =>
        composeOnBackground(0.52, 255, channel),
      );
      expect(contrastRatio(muted, background)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it("keeps dark CTA text legible at both ends of the violet-blue gradient", () => {
    for (const background of [ljbTheme.accent, "#80CAFF"]) {
      expect(
        contrastRatio(rgb("#0A1024"), rgb(background)),
      ).toBeGreaterThanOrEqual(4.5);
    }
  });
});
