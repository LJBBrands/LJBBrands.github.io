import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Interest from "../../src/components/sections/Interest";
import { buildInterestMailto } from "../../src/data/interest";
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
  it("encodes email content without turning input into mail headers", () => {
    const href = buildInterestMailto({
      intent: "investor",
      name: "A & B",
      email: PUBLIC_EMAIL,
      message: `Hello &bcc=${PUBLIC_EMAIL}\nThanks`,
    });
    const url = new URL(href);
    expect(url.pathname).toBe("K.Bousquet92@pm.me");
    expect([...url.searchParams.keys()]).toEqual(["subject", "body"]);
    expect(url.searchParams.get("body")).toContain(
      `Hello &bcc=${PUBLIC_EMAIL}\nThanks`,
    );
  });

  it("keeps waitlist requests separate from update consent", () => {
    render(<Interest theme={ljbTheme} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.checked).toBe(false);
    expect(checkbox.required).toBe(false);
    const form = screen.getByRole("form", { name: "Waitlist inquiry" });
    completeContact(form);
    fireEvent.submit(form);
    const draft = screen.getByRole("link", { name: "Open Email Draft" });
    expect(new URL(draft.href).searchParams.get("body")).toContain(
      "Awy update emails requested: No",
    );
    expect(screen.getByRole("status").textContent).toContain(
      "Nothing has been sent",
    );
  });

  it("requires explicit consent in updates mode", () => {
    render(<Interest theme={ljbTheme} />);
    fireEvent.click(screen.getByRole("radio", { name: "Updates" }));
    const form = screen.getByRole("form", { name: "Updates inquiry" });
    completeContact(form);
    expect(form.checkValidity()).toBe(false);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(form.checkValidity()).toBe(true);
  });

  it("clears stale drafts when visitor changes intent or edits a field", () => {
    render(<Interest theme={ljbTheme} />);
    const form = screen.getByRole("form", { name: "Waitlist inquiry" });
    completeContact(form);
    fireEvent.submit(form);
    fireEvent.change(form.elements.name, { target: { value: "Updated name" } });
    expect(screen.queryByRole("link", { name: "Open Email Draft" })).toBeNull();
    fireEvent.submit(form);
    fireEvent.click(
      screen.getByRole("radio", { name: "Investors & Partners" }),
    );
    expect(screen.queryByRole("link", { name: "Open Email Draft" })).toBeNull();
    expect(screen.queryByRole("checkbox")).toBeNull();
    expect(screen.getByRole("textbox", { name: /Organization/ })).toBeTruthy();
  });
});
