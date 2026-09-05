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
npm run ci
```

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `doctor`          | Node/npm pins and required files                    |
| `bootstrap`       | `doctor` + `npm ci`                                 |
| `lint`            | ESLint, including jsx-a11y                          |
| `test`            | Vitest unit tests                                   |
| `build`           | Production Vite build                               |
| `ci`              | doctor, lint, format, tests, security and SEO scans |
| `check:site`      | Internal links + static HTML a11y (needs `dist`)    |
| `test:e2e:webkit` | Playwright WebKit smoke                             |

```sh
npx playwright install --with-deps webkit
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
`.github/workflows/deploy.yml`. The repository owner must select GitHub Actions
as the sole Pages source and approve production publication. Agents do not deploy
or change Pages settings unless a human explicitly approves it.

Current public origin in metadata: `https://ljbbrands.github.io/`.
