import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Interest from "../../src/components/sections/Interest";
import { FORMSPREE_ENDPOINT } from "../../src/data/interest";
import { PUBLIC_EMAIL } from "../../src/data/contact";
import { ljbTheme } from "../../src/data/ljbTheme";

// The pinned Vitest transform uses classic JSX; production Vite uses automatic JSX.
beforeEach(() => {
  vi.stubGlobal("React", React);
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

function completeContact(form) {
  fireEvent.change(form.elements.name, { target: { value: "A Reader" } });
  fireEvent.change(form.elements.email, {
    target: { value: PUBLIC_EMAIL },
  });
}

describe("interest requests", () => {
  it("submits waitlist details without opting into updates and waits for acceptance", async () => {
    let resolve;
    const request = vi.fn(
      () =>
        new Promise((done) => {
          resolve = done;
        }),
    );
    vi.stubGlobal("fetch", request);
    render(<Interest theme={ljbTheme} />);
    const form = screen.getByRole("form", { name: "Waitlist inquiry" });
    completeContact(form);
    fireEvent.submit(form);
    expect(request).toHaveBeenCalledTimes(1);
    const [url, options] = request.mock.calls[0];
    expect(url).toBe(FORMSPREE_ENDPOINT);
    expect(options.method).toBe("POST");
    expect(options.body.get("interest")).toBe("waitlist");
    expect(options.body.get("updates_consent")).toBe("no");
    expect(screen.getByRole("button", { name: "Sending…" }).disabled).toBe(
      true,
    );
    expect(screen.getByRole("status").textContent).toBe("");
    fireEvent.submit(form);
    expect(request).toHaveBeenCalledTimes(1);
    resolve({ ok: true });
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain("received"),
    );
    expect(form.elements.email.value).toBe("");
  });

  it("requires explicit consent in updates mode and sends it", async () => {
    const request = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", request);
    render(<Interest theme={ljbTheme} />);
    fireEvent.click(screen.getByRole("radio", { name: "Updates" }));
    const form = screen.getByRole("form", { name: "Updates inquiry" });
    completeContact(form);
    fireEvent.submit(form);
    expect(request).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.submit(form);
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain("received"),
    );
    expect(request.mock.calls[0][1].body.get("updates_consent")).toBe("yes");
  });

  it.each(["rejected", "network"])(
    "preserves details after a %s failure and allows retry",
    async (failure) => {
      const request = vi.fn();
      if (failure === "network")
        request.mockRejectedValueOnce(new Error("offline"));
      else request.mockResolvedValueOnce({ ok: false, status: 422 });
      request.mockResolvedValueOnce({ ok: true });
      vi.stubGlobal("fetch", request);
      render(<Interest theme={ljbTheme} />);
      const form = screen.getByRole("form", { name: "Waitlist inquiry" });
      completeContact(form);
      fireEvent.submit(form);
      await screen.findByRole("alert");
      expect(form.elements.email.value).toBe(PUBLIC_EMAIL);
      expect(screen.getByRole("status").textContent).toBe("");
      fireEvent.submit(form);
      await waitFor(() =>
        expect(screen.getByRole("status").textContent).toContain("received"),
      );
    },
  );

  it("keeps investor introductions separate from newsletter consent", async () => {
    const request = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", request);
    render(<Interest theme={ljbTheme} />);
    fireEvent.click(
      screen.getByRole("radio", { name: "Investors & Partners" }),
    );
    const form = screen.getByRole("form", {
      name: "Investors & Partners inquiry",
    });
    completeContact(form);
    fireEvent.change(form.elements.organization, {
      target: { value: "A partner" },
    });
    expect(screen.queryByRole("checkbox")).toBeNull();
    fireEvent.submit(form);
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain("received"),
    );
    expect(request.mock.calls[0][1].body.get("organization")).toBe("A partner");
    expect(request.mock.calls[0][1].body.get("updates_consent")).toBe("no");
    fireEvent.click(screen.getByRole("radio", { name: "Waitlist" }));
    expect(screen.getByRole("status").textContent).toBe("");
  });
});
