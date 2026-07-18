# LJB Media Group Website

## Scope

These instructions apply to the entire repository. Preserve and evolve the existing website; do not rebuild it or replace established patterns without an explicit request.

## Brand and visual direction

- The public parent brand is **LJB Media Group**.
- The public product name for the macOS file-organization tool is **Arbor**.
- Do not use the internal codenames **Atlas** or **Project Atlas** in any public-facing UI, navigation, metadata, alt text, status labels, or customer-facing copy.
- Prefer a card-driven interactive directory: concise hero, project grid with expandable details, compact About/Contact/Support.
- Keep the experience premium, cinematic, minimal, and handcrafted.
- Preserve the dark visual system with restrained white and neon-green accents.
- Avoid generic AI-style layouts, cheap gradients, excessive effects, visual clutter, and unnecessary rewrites.

## Engineering constraints

- Maintain the current technology stack and use the repository's existing tooling, conventions, and component patterns.
- Preserve existing animations, accessibility, SEO, performance, responsiveness, and production polish.
- Prefer focused, incremental changes over broad refactors.
- Reuse existing components, styles, tokens, and assets before introducing new ones.
- Do not change deployment configuration, deployment providers, domains, environment configuration, or publishing workflows unless explicitly requested.
- Do not publish or deploy the website unless explicitly requested.

## Required workflow

1. Inspect the relevant implementation, nearby components, styles, and project scripts before editing.
2. Keep changes scoped to the request and preserve unrelated user work.
3. Check responsive behavior and accessibility for affected UI.
4. Run relevant linting, type checks, and tests exposed by the existing project when practical.
5. Run the repository's existing production build command before reporting implementation work complete.
6. If the production build cannot run, report the exact blocker and do not claim the implementation is complete.

