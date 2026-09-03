# Release

## Current production path

1. A human approves and merges a pull request into `main`
2. `.github/workflows/ci.yml` runs on `main`
3. `.github/workflows/deploy.yml` builds `dist` and deploys the Pages artifact

There is no separate staging host in this repository. `npm run preview` is local only.

## Human production approval

Production deployment approval is **human-only**. Agents must not:

- merge to `main` unless the human explicitly asked them to merge
- change Pages settings, the deploy workflow, or the `github-pages` environment
- claim the live site is updated without a visual check of the production URL

Recommended GitHub setting (human): protect the `github-pages` environment with required reviewers so a merge does not have to equal an immediate public release.

## What this phase does not change

- Custom domain / DNS
- Deploy provider
- Automatic deploy-on-`main` workflow contents, unless a human requests a protection change

## Verification before merge

```sh
npm run bootstrap
npm run ci
npm run build
npm run check:site
npm run test:e2e:webkit
```

Search source and `dist` for email addresses. The only allowed public address is `K.Bousquet92@pm.me`.
