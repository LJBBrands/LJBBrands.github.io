import { describe, expect, it } from "vitest";
import { contrastRatio, whiteAlphaOnBlack } from "../../src/utils/contrast";

describe("muted text contrast", () => {
  it("records the previous failing small-text alphas", () => {
    expect(contrastRatio(whiteAlphaOnBlack(0.38), [0, 0, 0])).toBeLessThan(4.5);
    expect(contrastRatio(whiteAlphaOnBlack(0.42), [0, 0, 0])).toBeLessThan(4.5);
    expect(contrastRatio(whiteAlphaOnBlack(0.45), [7, 9, 7])).toBeLessThan(4.5);
  });

  it("meets WCAG AA for the corrected 0.52 muted token", () => {
    expect(contrastRatio(whiteAlphaOnBlack(0.52), [0, 0, 0])).toBeGreaterThan(
      4.5,
    );
    expect(contrastRatio(whiteAlphaOnBlack(0.52), [7, 9, 7])).toBeGreaterThan(
      4.5,
    );
  });

  it("leaves existing body muted tokens passing", () => {
    expect(contrastRatio(whiteAlphaOnBlack(0.55), [0, 0, 0])).toBeGreaterThan(
      4.5,
    );
    expect(contrastRatio(whiteAlphaOnBlack(0.64), [0, 0, 0])).toBeGreaterThan(
      4.5,
    );
  });
});
