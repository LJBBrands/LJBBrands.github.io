import { cleanup, fireEvent, render } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, describe, expect, it } from "vitest";
import { useImageFallback } from "../../src/hooks/useImageFallback";

afterEach(() => {
  cleanup();
});

function FallbackImage({ src }) {
  const [failed, markFailed] = useImageFallback(src);

  if (failed) {
    return createElement("div", null, "Preview unavailable");
  }

  return createElement("img", {
    alt: "Project visual",
    src,
    onError: markFailed,
  });
}

describe("useImageFallback", () => {
  it("resets failure state when the image source changes", () => {
    const { rerender, queryByAltText, queryByText } = render(
      createElement(FallbackImage, { src: "/broken.webp" }),
    );

    fireEvent.error(queryByAltText("Project visual"));
    expect(queryByText("Preview unavailable")).toBeTruthy();

    rerender(createElement(FallbackImage, { src: "/recovered.webp" }));
    expect(queryByAltText("Project visual")).toBeTruthy();
    expect(queryByText("Preview unavailable")).toBeNull();
  });
});
