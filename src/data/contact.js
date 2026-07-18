/*
  Confirmed addresses (internal / not for public UI):
  - backend@ljbbrands.com
  - review@ljbbrands.com
*/

export const contactChannels = [
  {
    id: "general",
    label: "General Inquiries",
    email: "hello@ljbbrands.com",
    description:
      "Questions about LJB Media Group, its projects, and general information.",
    subject: "General%20Inquiry",
    public: true,
  },
  {
    id: "business",
    label: "Business Inquiries",
    email: "contact@ljbbrands.com",
    description:
      "Business discussions, collaborations, company communication, and professional opportunities.",
    subject: "Business%20Inquiry",
    public: true,
  },
  {
    id: "podcast",
    label: "Podcast & LJB Rewind",
    email: "podcast@ljbbrands.com",
    description:
      "Podcast guests, LJB Rewind opportunities, interviews, appearances, and media discussions.",
    subject: "LJB%20Rewind%20Inquiry",
    public: true,
  },
  {
    id: "development",
    label: "Technology & Development",
    email: "dev@ljbbrands.com",
    description:
      "Awy, Arbor, software development, APIs, technical partnerships, and engineering discussions.",
    subject: "Technology%20and%20Development%20Inquiry",
    public: true,
  },
  {
    id: "support",
    label: "Product Support",
    email: "support@ljbbrands.com",
    description:
      "Help with LJB Media Group products, services, access, and customer support.",
    subject: "Product%20Support%20Request",
    public: true,
  },
  {
    id: "investors",
    label: "Investor Relations",
    email: "investors@ljbbrands.com",
    description: "Investor communications for LJB Media Group.",
    subject: "Investor%20Inquiry",
    public: false,
  },
];

export const publicContactChannels = contactChannels.filter(
  (channel) => channel.public
);

export function contactMailto(channel) {
  return `mailto:${channel.email}?subject=${channel.subject}`;
}
