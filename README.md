# LJB Media Group

Public website for **LJB Media Group** — an independent company building technology, media, automotive stories, apparel, and creative experiences as one connected ecosystem.

The public product name for the macOS file-organization tool is **Arbor**.

## Requirements

This repository pins:

- **Node.js** `24.19.0` (see `.nvmrc` / `.node-version`)
- **npm** `11.17.0` (see `packageManager` in `package.json`)

Use a version manager (`nvm`, `fnm`, or `n`) so the local toolchain matches CI.

## Scripts

```sh
npm ci
npm run dev
npm run lint
npm run format:check
npm run test
npm run build
npm run preview
npm run test:e2e:webkit
```

- `lint` — ESLint
- `format:check` / `format` — Prettier
- `test` — Vitest unit tests
- `test:e2e` / `test:e2e:webkit` — Playwright browser smoke tests

Install the WebKit browser once after `npm ci`:

```sh
npx playwright install --with-deps webkit
```

## Deployment

Production publishing uses **GitHub Actions** with an artifact-based GitHub Pages deploy (`.github/workflows/deploy.yml`). The manual `gh-pages` npm script is not part of this repository.

Enabling GitHub Pages from the Actions artifact is a repository setting and is not changed by this codebase.

## Browser support

See [docs/browser-support.md](docs/browser-support.md) for the declared Safari/iOS policy, viewport and safe-area behavior, and remaining device checks.

Contrast measurements and any intentionally deferred WCAG AA items are recorded in [docs/accessibility-contrast.md](docs/accessibility-contrast.md).
