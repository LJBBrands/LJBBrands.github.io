# Release

## Current production path

1. A human approves and merges a pull request into `main`
2. `.github/workflows/ci.yml` runs on `main`
3. A human manually starts `.github/workflows/deploy.yml` from `main`
4. The workflow re-runs quality checks, builds `dist`, validates the static site, and deploys the Pages artifact

There is no separate staging host in this repository. `npm run preview` is local only.

## Human production approval

Production deployment approval is **human-only**. Agents must not:

- merge to `main` unless the human explicitly asked them to merge
- dispatch the production deployment workflow
- change Pages settings, the deploy workflow, or the `github-pages` environment
- claim the live site is updated without a visual check of the production URL

Required GitHub settings (human):

- set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, removing the legacy `gh-pages` publisher
- protect the `github-pages` environment with a required reviewer
- protect `main` and require the CI `check`

## What this phase does not change

- Custom domain / DNS
- Deploy provider

## Verification before merge

```sh
npm run bootstrap
npm run ci
npm run build
npm run check:site
npm run test:e2e:webkit
```

Search source and `dist` for email addresses. The only allowed public address is `K.Bousquet92@pm.me`.
