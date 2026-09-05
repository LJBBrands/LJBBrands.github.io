# Development

## Toolchain

Pinned in `package.json` `engines`, `.nvmrc`, and `.node-version`:

- Node.js `24.19.0`
- npm `11.17.0`

Use a version manager so every local check and the production publisher use the
same toolchain.

## Standard commands

```sh
npm run doctor      # toolchain and required-file checks
npm run bootstrap   # doctor + npm ci
npm run lint
npm run test
npm run build
npm run check:core  # doctor, lint, format, tests, secret/SEO scans, npm audit
npm run check:site  # internal links + static HTML a11y (requires dist)
npm run preview
npm run browser:install:webkit
npm run test:e2e:webkit
npm run verify:local
```

`npm run verify:local` is the authoritative review gate. It runs the core checks,
creates a fresh production build, runs the WebKit smoke suite against that build,
and validates generated links and static accessibility. `npm run ci` is retained
only as a compatibility alias for `npm run check:core`.

## First-time setup

```sh
npm run bootstrap
npm run browser:install:webkit
```

The browser runtime is isolated under ignored `.cache/ms-playwright` so the
website check does not depend on a shared machine cache.

The WebKit test owns `127.0.0.1:4173` and refuses to reuse an existing preview,
which prevents stale local output from passing the browser check.

## Local loop

```sh
npm run dev
```

The app is a client-rendered SPA. Hash targets (`#contact`, `#projects`) are handled in `src/App.jsx`.

## Tests

- Unit: Vitest + Testing Library (`tests/unit`, `src/**/*.test.js`)
- E2E: Playwright WebKit (`tests/e2e/smoke.spec.js`)
- Lint: ESLint with `jsx-a11y`
- Format: Prettier

## Local validation policy

Development, testing, security scans, and browser smoke tests run on the local
machine. There is no pull-request or `main` push workflow. Record the result of
`npm run verify:local` in the pull request so review does not depend on remote
compute.

The manual Pages publisher is the deliberate exception: GitHub Pages requires a
hosted build artifact and deployment token. It repeats core, build, and static
site checks only during an explicitly approved production release.

## Do not

- Upgrade React, Tailwind, or Framer Motion for modernization alone
- Commit `dist/`, `.env`, or editor junk
- Change `.github/workflows/deploy.yml` unless a human asked
