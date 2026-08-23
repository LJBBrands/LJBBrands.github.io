import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getScrollBehavior,
  prefersReducedMotion,
} from "../../src/utils/prefersReducedMotion";
import { scrollToSection } from "../../src/utils/scrollToSection";

afterEach(() => {
  vi.unstubAllGlobals();
});

function stubMotionPreference(matches) {
  vi.stubGlobal("matchMedia", (query) => ({
    matches: query.includes("prefers-reduced-motion") ? matches : false,
    media: query,
    addEventListener() {},
    removeEventListener() {},
  }));
}

describe("prefersReducedMotion", () => {
  it("uses instant scrolling when reduced motion is requested", () => {
    stubMotionPreference(true);
    expect(prefersReducedMotion()).toBe(true);
    expect(getScrollBehavior()).toBe("auto");
  });

  it("keeps smooth scrolling when reduced motion is not requested", () => {
    stubMotionPreference(false);
    expect(getScrollBehavior()).toBe("smooth");
  });

  it("passes the reduced-motion behavior into scrollIntoView", () => {
    stubMotionPreference(true);
    const scrollIntoView = vi.fn();
    const element = { scrollIntoView };
    vi.spyOn(document, "getElementById").mockReturnValue(element);

    scrollToSection("projects");

    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: "auto",
      block: "start",
    });
  });
});
