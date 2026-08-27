export const PUBLIC_EMAIL = "K.Bousquet92@pm.me";

export const primaryContact = {
  id: "general",
  email: PUBLIC_EMAIL,
  subject: "LJB%20Media%20Group%20Inquiry",
  ariaLabel: `Email LJB Media Group at ${PUBLIC_EMAIL}`,
  cta: "Email LJB Media Group",
};

export function contactMailto({
  email = PUBLIC_EMAIL,
  subject,
} = primaryContact) {
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${subject}`;
}
