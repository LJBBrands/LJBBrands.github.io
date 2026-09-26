import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";
import ProductMedia, {
  isPreframedDevice,
} from "../../src/components/ProductMedia";

beforeEach(() => {
  vi.stubGlobal("React", React);
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("ProductMedia presentation routing", () => {
  it("treats device and preframed as pre-framed captures", () => {
    expect(isPreframedDevice({ presentation: "device" })).toBe(true);
    expect(isPreframedDevice({ presentation: "preframed" })).toBe(true);
    expect(isPreframedDevice({ presentation: undefined })).toBe(false);
  });

  it("does not route pre-framed media through DeviceFrame", () => {
    const { container: device } = render(
      <ProductMedia
        screenshot={{
          src: "/projects/awy/current/home.png",
          alt: "Awy Home on iPhone",
          presentation: "device",
          width: 704,
          height: 1554,
        }}
      />,
    );
    expect(device.querySelector(".device-capture")).not.toBeNull();
    expect(device.querySelector(".device-frame")).toBeNull();

    const { container: alias } = render(
      <ProductMedia
        screenshot={{
          src: "/projects/awy/current/home.png",
          alt: "Awy Home on iPhone",
          presentation: "preframed",
          width: 704,
          height: 1554,
        }}
      />,
    );
    expect(alias.querySelector(".device-capture")).not.toBeNull();
    expect(alias.querySelector(".device-frame")).toBeNull();
  });

  it("keeps screen-only captures in DeviceFrame", () => {
    const { container } = render(
      <ProductMedia
        screenshot={{
          src: "/projects/awy/awy-lounge-car-culture-dark.jpg",
          alt: "Awy Car Culture Lounge in a dark theme",
        }}
      />,
    );

    expect(container.querySelector(".device-frame")).not.toBeNull();
    expect(container.querySelector(".device-capture")).toBeNull();
  });
});
