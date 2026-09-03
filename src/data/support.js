// Confirmed public support destination (Cash App / similar) not published yet.
// Until then, support inquiries use the public LJB contact email — do not invent payment URLs.

import { contactMailto, PUBLIC_EMAIL } from "./contact";

export const supportContent = {
  headline: "Support The Mission",
  copy: "Support helps fund independent apps, AI learning tools, apparel, original stories, and future LJB creative work — from careful product development to limited releases and long-form storytelling.",
  areas: [
    "App Development",
    "AI Learning",
    "Apparel Projects",
    "Books & Story Worlds",
    "Future Creative Projects",
  ],
  inquiryMailto: contactMailto({ subject: "Support%20Request" }),
  inquiryAriaLabel: `Email LJB Media Group support at ${PUBLIC_EMAIL}`,
};
