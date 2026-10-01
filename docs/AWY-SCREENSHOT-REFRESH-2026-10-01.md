# Awy screenshot and theme refresh — October 1, 2026

Owner-approved purple/blue theme and current app captures. Strings and the individual Lounge contain explicitly approved fictional demo conversations and are visibly labeled wherever shown. Original UI controls and colors are retained. The approved app icon is unchanged.

| Surface                   | Asset under `public/projects/awy/current/` | Content                                      |
| ------------------------- | ------------------------------------------ | -------------------------------------------- |
| Default hero              | `lounges-discovery.png`                    | Current Lounges discovery                    |
| Strings hero and story    | `strings-demo.png`                         | Labeled fictional Sunday-walk conversation   |
| Lounge story              | `lounge-demo.png`                          | Labeled fictional Local Hangout conversation |
| Home story                | `home-2026-10-01.png`                      | Current Home in a lime personalization theme |
| Appearance hero and story | `appearance.webp`                          | Current Appearance settings                  |
| Search media data         | `search.png`                               | Current Search entry screen                  |

All six captures are 943 × 2048. PNG assets preserve the supplied capture bytes; Appearance was losslessly converted with matching rendered pixels. Existing legacy assets remain preserved. No screenshot is presented as a different screen. Demo message content does not establish real room activity.

The release preserves the newer consumer navigation, ProductStory-first site structure, mobile scroll fixes, Formspree contract, and separate hero/story media mappings. No project-directory card is restored.

The palette uses dark navy, lavender, and light blue. Legal wording, contact mailbox, form endpoint, and analytics remain unchanged.

Kyle explicitly authorized committing, pushing, and publishing the completed website update. The normal release path is a reviewed CI run followed by merge to `main` and the manual GitHub Pages workflow. Dependency audit fixes are limited to compatible patch updates; no major dependency migration or check suppression is included.

Local release validation passed: full CI, production build, static links/accessibility, 48 unit tests, and 14 WebKit browser tests. Responsive captures were inspected at 390 × 844, 768 × 1024, 1280 × 800, and 390 × 560, with no missing images, horizontal overflow, or runtime errors. Both conversation captions remain visible, including the Strings hero choice.

The audit update changes only brace-expansion 1.1.18 to 1.1.21 in the lockfile, resolving the high-severity finding. Two moderate Vitest / @vitest/mocker development-tool findings remain because their fixes require a major migration. The existing high-severity audit threshold is unchanged and passes.
