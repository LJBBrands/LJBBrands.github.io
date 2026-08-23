import { describe, expect, it } from "vitest";
import { setInert } from "../../src/utils/setInert";

describe("setInert", () => {
  it("marks a container inert and restores it", () => {
    const root = document.createElement("div");
    const button = document.createElement("button");
    button.textContent = "Open";
    root.append(button);
    document.body.append(root);

    setInert(root, true);
    expect(root.inert || root.getAttribute("aria-hidden")).toBeTruthy();

    setInert(root, false);
    expect(root.inert).toBeFalsy();
    expect(root.getAttribute("aria-hidden")).toBeNull();
    root.remove();
  });
});
