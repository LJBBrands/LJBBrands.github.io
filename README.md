# LJB Media Group

Public website for **LJB Media Group**.

Intended technology products: **Awy**, **Arclia**, and **Arbor**. The public name for the macOS file-organization tool is **Arbor**. Unshipped product names are not added to the live UI until copy and assets are approved.

## Toolchain

- **Node.js** `24.19.0` (`.nvmrc` / `.node-version`)
- **npm** `11.17.0` (`packageManager` in `package.json`)

## Standard commands

```sh
npm run doctor
npm run bootstrap
npm run lint
npm run test
npm run build
npm run verify:local
```

| Command                  | What it does                                                         |
| ------------------------ | -------------------------------------------------------------------- |
| `doctor`                 | Node/npm pins and required files                                     |
| `bootstrap`              | `doctor` + reproducible `npm ci` install                             |
| `lint`                   | ESLint, including jsx-a11y                                           |
| `test`                   | Vitest unit tests                                                    |
| `build`                  | Production Vite build                                                |
| `check:core`             | Toolchain, lint, format, unit, secret, SEO, and dependency checks    |
| `check:site`             | Internal links + static HTML a11y (needs `dist`)                     |
| `browser:install:webkit` | Install the isolated local WebKit test runtime                       |
| `test:e2e:webkit`        | Fresh production build + Playwright WebKit smoke                     |
| `verify:local`           | Complete local gate: core checks, build, WebKit smoke, and static QA |

`npm run ci` remains a compatibility alias for `npm run check:core`; it does
not start or depend on a hosted CI service.

```sh
npm run browser:install:webkit
```

## Docs

- [Architecture](docs/ARCHITECTURE.md)
- [Development](docs/DEVELOPMENT.md)
- [Security](docs/SECURITY.md)
- [Privacy](docs/PRIVACY.md)
- [Automation](docs/AUTOMATION.md)
- [Release](docs/RELEASE.md)
- [Roadmap](docs/ROADMAP.md)
- [Browser support](docs/browser-support.md)
- [Contrast](docs/accessibility-contrast.md)

## Deployment

Production publishing uses the manually dispatched GitHub Actions workflow in
`.github/workflows/deploy.yml`. Routine pull-request and push validation is local
and has no GitHub Actions trigger. The deployment workflow still builds and
checks the release artifact on a GitHub-hosted runner because GitHub Pages needs
that artifact and its deployment token. It runs only after a human explicitly
starts a production release.

Agents do not deploy or change Pages settings unless a human explicitly approves
it. See [Automation](docs/AUTOMATION.md) and [Release](docs/RELEASE.md).

Current public origin in metadata: `https://ljbbrands.github.io/`.
