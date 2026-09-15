import { describe, expect, it } from "vitest";
import {
  contactMailto,
  primaryContact,
  PUBLIC_EMAIL,
} from "../../src/data/contact";
import { getListedProjects } from "../../src/data/projects";

describe("public contact email", () => {
  it("exposes only the approved Proton address", () => {
    expect(PUBLIC_EMAIL).toBe("dev.ljbmedia@gmail.com");
    expect(primaryContact.email).toBe(PUBLIC_EMAIL);
    expect(contactMailto(primaryContact)).toContain(`mailto:${PUBLIC_EMAIL}`);
  });

  it("routes project email actions through the approved address", () => {
    const mailtos = getListedProjects()
      .map((project) => project.primaryAction?.href)
      .filter((href) => href?.startsWith("mailto:"));

    expect(mailtos.length).toBeGreaterThan(0);
    for (const href of mailtos) {
      expect(href.startsWith(`mailto:${PUBLIC_EMAIL}`)).toBe(true);
    }
  });
});
