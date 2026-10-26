import { attachSurfaceMedia } from "./awyProductMedia";
import { contactMailto } from "./contact";

const projectAsset = (projectId, fileName) =>
  `${import.meta.env.BASE_URL}projects/${projectId}/${fileName}`;

const airShot = (name, label, alt, group) => ({
  src: projectAsset("awy", `iphone-air-2026-10/${name}-840.webp`),
  srcSet: [420, 840]
    .map(
      (width) =>
        `${projectAsset("awy", `iphone-air-2026-10/${name}-${width}.webp`)} ${width}w`,
    )
    .join(", "),
  sizes: "(max-width: 405px) 74vw, 310px",
  label: `${label} · iPhone Air development preview`,
  alt,
  group,
  width: 840,
  height: 1824,
  preview: true,
});

/*
  Public Awy set only. Continue excluding Membership, Moderator Tools,
  unfinished billing, incomplete workflows, admin-heavy menus, and
  empty/unfinished states from the public site.
*/

export const projects = [
  {
    id: "awy",
    name: "Awy",
    group: "app",
    category: "Technology / Social Platform",
    preview:
      "A social app for private conversations, shared-interest Lounges, live presence, and profiles you can make your own.",
    description:
      "Awy is a social app for connection — private Strings, interest-based Lounges, live presence, and a profile you can make your own.",
    summary:
      "Explore Awy’s Home, Canvas, private Strings and shared-interest Lounges as the app takes shape.",
    status: null,
    highlights: [
      "Home",
      "Strings",
      "Lounges",
      "Live Presence",
      "Profiles",
      "Canvas",
    ],
    visual: {
      type: "screenshots",
      brand: "awy",
      cardStyle: "app-icon",
      icon: projectAsset("awy", "awy-app-icon-v3.webp"),
      logoAlt: "Awy social app icon",
      eyebrow: "Awy",
      badge: "Social Platform",
    },
    showcase: {
      slides: [
        {
          id: "community",
          eyebrow: "Lounges",
          title: "Find Your Community In Spaces",
          description:
            "Start in Spaces to discover Lounges around shared interests.",
          points: ["Spaces", "Lounges", "Shared interests"],
          image: airShot(
            "spaces",
            "Spaces — Find your community",
            "Awy Spaces on iPhone Air with Lounges and Ripple cards, plus Challenges and Events marked Planned",
            "Community",
          ),
        },
        {
          id: "home",
          eyebrow: "Home",
          title: "Your Starting Point",
          description:
            "Your profile, Connections, Statistics and Profile Studio sit above the Notification Hub, with Canvas in its own space below.",
          points: ["Your profile", "Notification Hub", "Separate Canvas"],
          image: airShot(
            "home",
            "Home — Your Space",
            "Awy Home on iPhone Air with profile, Connections, Statistics, Profile Studio, Notification Hub and a separate Canvas surface",
            "Home",
          ),
        },
        {
          id: "private-connection",
          eyebrow: "Strings",
          title: "A Place For Personal Conversations",
          description:
            "Strings bring Awy’s one-to-one conversations together in a dedicated space.",
          points: [
            "Private conversations",
            "Recent Strings",
            "A personal space",
          ],
          image: airShot(
            "strings",
            "Strings — Recent conversations",
            "Awy Strings list on iPhone Air with a recent private conversation and New String button",
            "Private Connection",
          ),
        },
        {
          id: "canvas",
          eyebrow: "Canvas",
          title: "Room To Express Yourself",
          description:
            "Canvas is your space for personal expression, with its own surface beneath Home.",
          points: ["Your Canvas", "Personal expression", "A space of your own"],
          image: airShot(
            "canvas",
            "Canvas — Your expression space",
            "Awy Canvas on iPhone Air beneath the Notification Hub, with an Express Yourself composer and management menu",
            "Canvas",
          ),
        },
      ].map((slide) => attachSurfaceMedia(slide)),
    },
    primaryAction: {
      label: "Email About Awy",
      href: contactMailto({ subject: "Awy%20Inquiry" }),
    },
    accent: "#B8A7FF",
  },
];

export function getAwyShowcaseSlides(project) {
  return project?.showcase?.slides ?? [];
}

export function getProjectById(id) {
  return projects.find((project) => project.id === id) ?? null;
}

/** Projects shown in the public Projects grid. */
export function getListedProjects() {
  return projects.filter((project) => project.listed !== false);
}

export function getAppProjects() {
  return getListedProjects().filter((project) => project.group === "app");
}

export const navItems = [
  { label: "Explore Awy", href: "#projects" },
  { label: "Questions", href: "#questions" },
  { label: "Join the Waitlist", href: "#get-involved" },
];
