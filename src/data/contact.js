export const PUBLIC_EMAIL = "K.Bousquet92@pm.me";

export const primaryContact = {
  id: "general",
  email: PUBLIC_EMAIL,
  subject: "Awy%20Inquiry",
  ariaLabel: `Contact Awy at ${PUBLIC_EMAIL}`,
  cta: "Contact Awy",
};

export function contactMailto({
  email = PUBLIC_EMAIL,
  subject,
} = primaryContact) {
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${subject}`;
}
