/*
  Confirmed addresses kept internal / not for public UI:
  - backend@ljbbrands.com
  - review@ljbbrands.com
  - investors@ljbbrands.com
*/

export const primaryContact = {
  id: "general",
  label: "General Inquiries",
  email: "hello@ljbbrands.com",
  subject: "LJB%20Media%20Group%20Inquiry",
  ariaLabel: "Email General Inquiries",
  cta: "Send an Email",
};

export const departmentContacts = [
  {
    id: "business",
    label: "Business & Partnerships",
    email: "contact@ljbbrands.com",
    subject: "Business%20and%20Partnership%20Inquiry",
    ariaLabel: "Email Business and Partnerships",
  },
  {
    id: "podcast",
    label: "LJB Rewind & Podcast",
    email: "podcast@ljbbrands.com",
    subject: "LJB%20Rewind%20Inquiry",
    ariaLabel: "Email LJB Rewind and Podcast",
  },
  {
    id: "development",
    label: "Product Development",
    email: "dev@ljbbrands.com",
    subject: "Product%20Development%20Inquiry",
    ariaLabel: "Email Product Development",
  },
  {
    id: "support",
    label: "Customer Support",
    email: "support@ljbbrands.com",
    subject: "Support%20Request",
    ariaLabel: "Email Customer Support",
  },
];

export function contactMailto({ email, subject }) {
  return `mailto:${email}?subject=${subject}`;
}
