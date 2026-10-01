# Architecture

The current site is a static Vite + React 18 application published to GitHub Pages. It is a single-page Awy consumer product website with a small set of static HTML pages.

This is **not** Website 2.0. Do not introduce a CMS, app server, or hosting migration here.

## Runtime

| Layer        | Choice                            | Notes                                    |
| ------------ | --------------------------------- | ---------------------------------------- |
| UI           | React 18                          | Existing component tree                  |
| Bundler      | Vite 8                            | `base: "/"`                              |
| Styling      | Tailwind 3 + `src/index.css`      | Dark tokens, safe-area, WebKit fallbacks |
| Motion       | Framer Motion 11                  | Must respect `prefers-reduced-motion`    |
| Hosting      | GitHub Pages via Actions artifact | Manual `workflow_dispatch` from `main`   |
| Public email | `dev.ljbmedia@gmail.com`          | Single source: `src/data/contact.js`     |
| Waitlist     | Formspree                         | Live POST to the existing endpoint       |

## Surfaces

- Homepage sections in `src/App.jsx`: Awy hero, **ProductStory** (primary product presentation), questions, Formspree waitlist/interest, contact/support, footer
- Hash targets: `#top`, `#projects`, `#questions`, `#get-involved`, `#contact`
- `ProjectCard`, `ProjectDialog`, `ProjectVisual`, and `AwyShowcase` remain in the tree as reusable components but are not mounted on the homepage
- Static pages: `public/privacy/`, `public/terms/`, `public/404.html`
- Public origin recorded in metadata: `https://ljbbrands.github.io/`

## Data

Product and contact copy live in `src/data/`. Do not treat that folder as a CMS. Do not commit investor decks, cap tables, or private forecasts.

## Product set

Awy is the sole public product on this site. The homepage is an Awy product site, not an LJB project directory. No other product, apparel, fiction, automotive, or social-profile sections are included.

## Out of scope for this architecture

- Authenticated investor portals
- Per-product marketing sites beyond the current Awy homepage
- Analytics SDKs
- Changing the Formspree endpoint or field contract without human approval
