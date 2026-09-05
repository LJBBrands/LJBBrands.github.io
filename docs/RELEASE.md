# Release

## Current production path

1. Run `npm run verify:local` and record the successful local evidence
2. A human approves and merges the pull request into `main`
3. A human manually starts `.github/workflows/deploy.yml` from `main`
4. The workflow repeats core release-safety checks, builds `dist`, validates the
   static site, and deploys the Pages artifact

There is no separate staging host in this repository. `npm run preview` is local only.

There is no automatic pull-request or `main` push workflow. The production
workflow is retained because GitHub Pages publishing is coupled to a hosted
artifact and deployment token. It is not a routine development or test runner.

## Human production approval

Production deployment approval is **human-only**. Agents must not:

- merge to `main` unless the human explicitly asked them to merge
- dispatch the production deployment workflow
- change Pages settings, the deploy workflow, or the `github-pages` environment
- claim the live site is updated without a visual check of the production URL

Required GitHub settings (human):

- set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**, removing the legacy `gh-pages` publisher
- protect the `github-pages` environment with a required reviewer
- if `main` is protected, require human pull-request review and local verification
  evidence; do not require the removed `CI / check` job

## What this phase does not change

- Custom domain / DNS
- Deploy provider

## Verification before merge

```sh
npm run bootstrap
npm run verify:local
```

Search source and `dist` for email addresses. The only allowed public address is `K.Bousquet92@pm.me`.
