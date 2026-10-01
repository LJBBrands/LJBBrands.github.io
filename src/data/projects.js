import { attachSurfaceMedia } from "./awyProductMedia";
import { contactMailto } from "./contact";

const projectAsset = (projectId, fileName) =>
  `${import.meta.env.BASE_URL}projects/${projectId}/${fileName}`;

const awyShot = (fileName, label, alt, group) => ({
  src: projectAsset("awy", fileName),
  label,
  alt,
  group,
  width: 943,
  height: 2048,
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
      "What you can do in Awy: talk in Strings, join Lounges, see who’s around, and shape your space in Appearance settings.",
    status: null,
    highlights: [
      "Home",
      "Strings",
      "Lounges",
      "Live Presence",
      "Profiles",
      "Appearance",
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
          id: "lounges",
          eyebrow: "Lounges",
          title: "Spaces With Purpose",
          description:
            "Explore public, professional, and private Lounges around shared interests and community.",
          points: ["Shared interests", "Featured spaces", "Your communities"],
          image: awyShot(
            "current/lounges-discovery.png",
            "Lounges — Discovery",
            "Awy Lounges discovery with categories and a featured Support Lounge in a blue and violet theme",
            "Community",
          ),
        },
        {
          id: "private-connection",
          eyebrow: "Strings",
          title: "Conversations On Your Terms",
          description:
            "Strings give one-to-one conversations a personal space, with boundaries and sharing choices close at hand.",
          points: [
            "Personal conversations",
            "Clear boundaries",
            "Intentional connection",
          ],
          image: {
            ...awyShot(
              "current/strings-demo.png",
              "Strings — Demo conversation",
              "Awy Strings with a fictional Sunday-walk conversation between Jamie and Alex; demo content",
              "Private Connection",
            ),
            demo: true,
          },
        },
        {
          id: "community",
          eyebrow: "Community",
          title: "A Place To Come Together",
          description:
            "Give shared interests and local conversations a focused place to develop in a Lounge.",
          points: [
            "Focused rooms",
            "Shared interests",
            "Community conversations",
          ],
          image: {
            ...awyShot(
              "current/lounge-demo.png",
              "Lounge — Demo conversation",
              "Awy Local Hangout Lounge with a fictional Sunday-walk conversation; demo content",
              "Community",
            ),
            demo: true,
          },
        },
        {
          id: "discovery",
          eyebrow: "Search",
          title: "Find Your People And Places",
          description:
            "Search for people, visible Lounges, and your Strings from one starting point.",
          points: ["Awy Tags", "Lounges", "Strings"],
          image: awyShot(
            "current/search.png",
            "Search — People, Lounges, and Strings",
            "Awy Search with Awy Tags, Lounges, Strings, and Support shortcuts in a blue and violet theme",
            "Discovery",
          ),
        },
        {
          id: "home",
          eyebrow: "Home",
          title: "Your Starting Point",
          description:
            "Your profile, notifications, conversations, and Lounges are close at hand from Home.",
          points: ["Profile shortcuts", "Notifications", "Your Lounges"],
          image: awyShot(
            "current/home-2026-10-01.png",
            "Home — Your Space",
            "Awy Home with profile shortcuts, notifications, and top Lounges in a lime theme",
            "Home",
          ),
        },
        {
          id: "personalization",
          eyebrow: "Appearance",
          title: "Make Awy Yours",
          description:
            "Choose your theme mode and background to give Awy an atmosphere that feels like you.",
          points: ["Theme mode", "Background choices", "Personal atmosphere"],
          image: awyShot(
            "current/appearance.webp",
            "Appearance — Theme and Background",
            "Awy Appearance settings showing theme modes and background choices in a dark cosmic theme",
            "Personalization",
          ),
        },
      ].map((slide) =>
        attachSurfaceMedia(
          slide,
          slide.id === "community"
            ? {
                storyImage: slide.image,
                heroImage: awyShot(
                  "current/lounges-discovery.png",
                  "Lounges — Discovery",
                  "Awy Lounges discovery with categories and a featured Support Lounge in a blue and violet theme",
                  "Community",
                ),
              }
            : {},
        ),
      ),
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
