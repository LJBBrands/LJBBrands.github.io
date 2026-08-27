// Confirmed public support destination (Cash App / similar) not published yet.
// Until then, support inquiries use the public LJB contact email — do not invent payment URLs.

import { contactMailto, PUBLIC_EMAIL } from "./contact";

export const supportContent = {
  headline: "Support the Mission",
  copy: "Support helps fund independent software, media, books, automotive storytelling, and future LJB creative projects — from product development and podcast production to apparel and long-form creative work.",
  areas: [
    "Software Development",
    "Media Production",
    "Books & Story Worlds",
    "Future Creative Projects",
    "Automotive Content",
    "Apparel Projects",
  ],
  inquiryMailto: contactMailto({ subject: "Support%20Request" }),
  inquiryAriaLabel: `Email LJB Media Group support at ${PUBLIC_EMAIL}`,
};
