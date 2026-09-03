# Development

## Toolchain

Pinned in `package.json` `engines`, `.nvmrc`, and `.node-version`:

- Node.js `24.19.0`
- npm `11.17.0`

Use a version manager so the local toolchain matches CI.

## Standard commands

```sh
npm run doctor      # toolchain and required-file checks
npm run bootstrap   # doctor + npm ci
npm run lint
npm run test
npm run build
npm run ci          # doctor, lint, format, unit tests, secret scan, SEO scan
npm run check:site  # internal links + static HTML a11y (requires dist)
npm run preview
npm run test:e2e:webkit
```

`npm run ci` does not build. Run `npm run build` and `npm run check:site` before claiming site-output work is complete.

## First-time setup

```sh
npm run bootstrap
npx playwright install --with-deps webkit
```

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

## Do not

- Upgrade React, Tailwind, or Framer Motion for modernization alone
- Commit `dist/`, `.env`, or editor junk
- Change `.github/workflows/deploy.yml` unless a human asked
