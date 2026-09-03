# Security

## Public site threat model

This repository ships a static marketing site. There is no authenticated session and no trusted server of our own. Anything in `src/`, `public/`, or `index.html` is public.

## Must never appear in the repo or client bundle

- API keys, tokens, private keys, or `.env` files
- Form-provider secrets
- Apple Team IDs, signing certificates, or bundle-identifier internals unless a human proves they are required and public
- Supabase service-role keys or project secrets
- Investor decks, cap tables, valuations, or data-room files

## Contact

The only published inbox is `K.Bousquet92@pm.me` (`src/data/contact.js`). Company addresses stay unpublished until a human confirms they exist.

`mailto:` is not a secure intake system. Do not describe it as one.

## Automated checks

- `npm run check:secrets` scans tracked source for high-risk patterns and unexpected email addresses
- CI runs that scan on every pull request and on `main`
- CI runs `npm audit --audit-level=high`
- Enable Dependency graph, then GitHub Dependency Review, plus Secret Protection / push protection (human GitHub-settings steps). This repository is public; Dependency graph does not require GitHub Advanced Security here, but the official review action still fails until the graph is enabled.

## Dependency changes

Do not add packages without a concrete need. High-severity dependency review findings must be resolved or explicitly waived by a human.
