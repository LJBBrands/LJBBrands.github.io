// Confirmed public support destination (Cash App / similar) not published yet.
// Until then, support inquiries use the public LJB contact email — do not invent payment URLs.

import { contactMailto, PUBLIC_EMAIL } from "./contact";

export const supportContent = {
  headline: "Support The Mission",
  copy: "Support helps move Awy forward, with a focus on thoughtful product development, accessibility, and a reliable experience for its community.",
  areas: ["Awy Development", "Accessibility", "Community Support"],
  inquiryMailto: contactMailto({ subject: "Support%20Request" }),
  inquiryAriaLabel: `Email LJB Media Group support at ${PUBLIC_EMAIL}`,
};
