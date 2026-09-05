# LJB Media Group Website

These instructions apply to the entire repository.

## Scope

Preserve and evolve the existing website. Do not rebuild it, replace the stack, or begin **Website 2.0** unless a human explicitly requests that work.

This is the public corporate/investor-facing site for **LJB Media Group**.

## Brand

- The public parent brand is **LJB Media Group**. It is not a filed LLC; do not append “LLC” or represent it as a registered entity.
- Intended technology products: **Awy**, **Arclia**, and **Arbor**.
- The public product name for the macOS file-organization tool is **Arbor**.
- Do not add **Arclia** (or any unshipped product) to public UI, metadata, or navigation until copy and assets are approved.
- Do not use the internal codenames **Atlas** or **Project Atlas** in public-facing UI, navigation, metadata, alt text, status labels, or customer-facing copy.
- Keep the existing dark visual system with restrained white and neon-green accents.
- Prefer focused, incremental changes over redesigns.

## Engineering standard

Write professional, human-maintainable frontend code.

Do not ship:

- AI slop, dead components, duplicate CSS, or meaningless abstractions
- fake data, fake investor metrics, fake testimonials, or fake team members
- placeholder links or forms presented as operational
- client-exposed secrets
- inaccessible interactive elements
- unnecessary animation or dependency churn
- inflated marketing claims

## Human-only operations

Agents must not do these without explicit written approval:

- production secrets
- domain / DNS changes
- production form-backend credentials
- public investor financial claims
- legal-policy publication
- analytics provider changes
- production deployment approval
- Website 2.0 architecture migration
- publishing unconfirmed company mailboxes
- merging to `main` unless a human explicitly asked for that merge

## Agent-ready work

An issue is agent-ready only when it has:

1. A single, testable outcome
2. In-scope files or surfaces
3. Out-of-scope / human-only items named
4. Acceptance checks (lint, tests, build, and any UI/a11y notes)
5. No requirement to invent product facts, metrics, or legal text

If those are missing, stop and report the gap. Do not guess.

## Privacy and security

- The only published email is `K.Bousquet92@pm.me` until a human confirms company mailboxes.
- Collect only necessary contact fields. Do not commit investor materials, decks, or data-room files.
- Do not put API keys, signing secrets, Apple Team IDs, or environment credentials in frontend code.
- Do not present `mailto:` or an unfinished form as a secure submission backend.

## Stack

Keep React 18, Vite 8, Tailwind 3, and Framer Motion 11 unless a human approves a change. Node `24.19.0` and npm `11.17.0` are pinned.

## Required workflow

1. Inspect the relevant implementation before editing.
2. Keep the change scoped. Preserve unrelated work.
3. Check accessibility and responsive behavior for affected UI.
4. Run `npm run verify:local` before requesting review when practical.
5. If the production build cannot run, report the blocker and do not claim the work is complete.
6. Do not deploy or change GitHub Pages settings unless explicitly requested.

Routine build, test, security, and browser validation runs locally. Do not add
pull-request or push-triggered cloud CI, cloud agents, or self-hosted runners.
The manual GitHub Pages workflow is the production publisher and is the only
approved GitHub-hosted build path.
