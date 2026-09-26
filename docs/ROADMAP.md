# Roadmap

This is a planning document. It is not permission to implement Website 2.0.

## Now — Awy consumer product site

The public site is an Awy product website on the current Vite/React/Tailwind/Framer Motion stack.

Shipped public work includes the recovered visual redesign, ProductStory as the primary product presentation, a live Formspree waitlist, contact via `dev.ljbmedia@gmail.com`, and the toolchain from the WebKit/contact merge. Production deploy remains a manual GitHub Actions gate from `main`.

Active redesign branch for this work: `codex/awy-visual-walkthrough`. Current screenshots are still being reviewed and replaced separately. Do not wire `public/projects/awy/current/` into DeviceFrame until that review lands.

## Next — scoped interim improvements (not 2.0)

Only with an agent-ready issue and human approval:

- Screenshot replacement and DeviceFrame presentation decisions
- Accurate status for Awy as the sole public product, without fake launch claims
- Company mailboxes, after they exist
- Custom domain, after DNS is approved

## Later — Website 2.0

A purpose-built corporate/product/investor site. Evaluated later, not built in this automation phase.

Possible 2.0 structure: Home, Awy, About, Investors, Contact, Privacy, Terms.

Possible 2.0 capabilities (none are automatically required): secure inquiry handling, CRM, privacy-first analytics, demo hosting, controlled material requests, CMS.

Leave GitHub Pages until a concrete requirement (auth, server-side forms, CMS workflow, or compliance) forces a move.

## Explicitly not this phase

- Replacing React, Vite, Tailwind, or Framer Motion
- Hosting migration
- Publishing legal policies
- Public financial claims
- Merging or deploying this redesign without an explicit human request
