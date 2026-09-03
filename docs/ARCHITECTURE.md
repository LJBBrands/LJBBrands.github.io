# Architecture

The current site is a static Vite + React 18 application published to GitHub Pages. It is a single-page marketing site with a small set of static HTML pages.

This is **not** Website 2.0. Do not introduce a CMS, app server, or hosting migration here.

## Runtime

| Layer        | Choice                            | Notes                                    |
| ------------ | --------------------------------- | ---------------------------------------- |
| UI           | React 18                          | Existing component tree                  |
| Bundler      | Vite 8                            | `base: "/"`                              |
| Styling      | Tailwind 3 + `src/index.css`      | Dark tokens, safe-area, WebKit fallbacks |
| Motion       | Framer Motion 11                  | Must respect `prefers-reduced-motion`    |
| Hosting      | GitHub Pages via Actions artifact | Deploy workflow runs on push to `main`   |
| Public email | `K.Bousquet92@pm.me`              | Single source: `src/data/contact.js`     |

## Surfaces

- Homepage sections in `src/App.jsx`: hero, projects, destinations, about, contact, support, footer
- Project details: in-page dialog (`ProjectDialog`), not separate product routes
- Static pages: `public/privacy/`, `public/terms/`, `public/404.html`
- Public origin recorded in metadata: `https://ljbbrands.github.io/`

## Data

Product and contact copy live in `src/data/`. Do not treat that folder as a CMS. Do not commit investor decks, cap tables, or private forecasts.

## Intended product set

Awy, Arclia, and Arbor are the intended technology products and lead the public Projects section as a distinct three-app group. Independent apparel and fiction work follow in a separate studio group. Automotive updates are represented by the dedicated Instagram feature rather than a standalone product page.

## Out of scope for this architecture

- Authenticated investor portals
- Server-side form handling
- Waitlists, CRM, or analytics SDKs
- Per-product marketing sites
