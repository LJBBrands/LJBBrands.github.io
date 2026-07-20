/*
  Confirmed addresses kept internal / not for public UI:
  - backend@ljbbrands.com
  - review@ljbbrands.com
  - investors@ljbbrands.com
*/

export const primaryContact = {
  id: "general",
  email: "hello@ljbbrands.com",
  subject: "LJB%20Media%20Group%20Inquiry",
  ariaLabel: "Email LJB Media Group at hello@ljbbrands.com",
  cta: "Email LJB Media Group",
};

export const departmentContacts = [
  {
    id: "business",
    label: "Business & Partnerships",
    shortLabel: "Business",
    email: "contact@ljbbrands.com",
    subject: "Business%20and%20Partnership%20Inquiry",
    ariaLabel: "Email Business and Partnerships",
  },
  {
    id: "podcast",
    label: "LJB Rewind",
    shortLabel: "LJB Rewind",
    email: "podcast@ljbbrands.com",
    subject: "LJB%20Rewind%20Inquiry",
    ariaLabel: "Email LJB Rewind",
  },
  {
    id: "development",
    label: "Development",
    shortLabel: "Development",
    email: "dev@ljbbrands.com",
    subject: "Product%20Development%20Inquiry",
    ariaLabel: "Email Development",
  },
  {
    id: "support",
    label: "Support",
    shortLabel: "Support",
    email: "support@ljbbrands.com",
    subject: "Support%20Request",
    ariaLabel: "Email Support",
  },
];

export function contactMailto({ email, subject }) {
  return `mailto:${email}?subject=${subject}`;
}
