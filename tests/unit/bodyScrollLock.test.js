import { afterEach, describe, expect, it } from "vitest";
import {
  getBodyScrollLockCount,
  lockBodyScroll,
  resetBodyScrollLockForTests,
  skipNextBodyScrollRestore,
  unlockBodyScroll,
} from "../../src/utils/bodyScrollLock";

function mockScrollPosition(value) {
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    writable: true,
    value,
  });
  window.scrollTo = (_x, y) => {
    window.scrollY = typeof _x === "object" ? (_x.top ?? 0) : y;
  };
}

afterEach(() => {
  resetBodyScrollLockForTests();
  document.body.removeAttribute("style");
  document.documentElement.removeAttribute("style");
  mockScrollPosition(0);
});

describe("bodyScrollLock", () => {
  it("locks the body once and restores the original scroll position", () => {
    mockScrollPosition(240);
    const release = lockBodyScroll();

    expect(getBodyScrollLockCount()).toBe(1);
    expect(document.body.dataset.bodyScrollLocked).toBe("true");
    expect(document.body.style.position).toBe("fixed");
    expect(document.body.style.top).toBe("-240px");

    release();

    expect(getBodyScrollLockCount()).toBe(0);
    expect(document.body.dataset.bodyScrollLocked).toBeUndefined();
    expect(document.body.style.position).toBe("");
    expect(window.scrollY).toBe(240);
  });

  it("reference-counts overlapping locks from menu and dialog", () => {
    const first = lockBodyScroll();
    const second = lockBodyScroll();

    expect(getBodyScrollLockCount()).toBe(2);
    first();
    expect(getBodyScrollLockCount()).toBe(1);
    expect(document.body.dataset.bodyScrollLocked).toBe("true");
    second();
    expect(getBodyScrollLockCount()).toBe(0);
    expect(document.body.dataset.bodyScrollLocked).toBeUndefined();
  });

  it("ignores extra unlocks after the lock is released", () => {
    lockBodyScroll();
    unlockBodyScroll();
    unlockBodyScroll();
    expect(getBodyScrollLockCount()).toBe(0);
  });

  it("can skip restoring scroll when a menu link navigates away", () => {
    mockScrollPosition(240);
    lockBodyScroll();
    window.scrollY = 0;
    skipNextBodyScrollRestore();
    unlockBodyScroll();

    expect(document.body.dataset.bodyScrollLocked).toBeUndefined();
    expect(document.body.style.position).toBe("");
    expect(window.scrollY).toBe(0);

    mockScrollPosition(180);
    lockBodyScroll();
    window.scrollY = 0;
    unlockBodyScroll();
    expect(window.scrollY).toBe(180);
  });
});
