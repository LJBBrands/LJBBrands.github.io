import { PUBLIC_EMAIL } from "./contact";

export const interestOptions = [
  {
    id: "waitlist",
    label: "Waitlist",
    title: "Interested in trying Awy?",
    description: "Send a request to be considered for future access to Awy.",
    subject: "Awy waitlist request",
  },
  {
    id: "updates",
    label: "Updates",
    title: "Follow Awy’s progress.",
    description: "Request emails about Awy’s development and availability.",
    subject: "Awy updates request",
  },
  {
    id: "investor",
    label: "Investors & Partners",
    title: "Help support Awy’s next steps.",
    description:
      "Introduce yourself to discuss investment interest, partnerships, or ways to support the product.",
    subject: "Awy investor or partnership inquiry",
  },
];

export function buildInterestMailto({
  intent,
  name,
  email,
  organization = "",
  message = "",
  wantsUpdates = false,
}) {
  const option = interestOptions.find((item) => item.id === intent);
  if (!option) throw new Error("Choose a valid inquiry type.");
  const lines = [
    option.subject,
    "",
    `Name: ${name.trim()}`,
    `Reply email: ${email.trim()}`,
  ];
  if (intent === "investor" && organization.trim())
    lines.push(`Organization: ${organization.trim()}`);
  if (intent !== "investor")
    lines.push(`Awy update emails requested: ${wantsUpdates ? "Yes" : "No"}`);
  if (message.trim()) lines.push("", message.trim());
  return `mailto:${PUBLIC_EMAIL}?subject=${encodeURIComponent(option.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
