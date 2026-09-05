# Automation

## Local-first policy

Routine development, build, test, security, accessibility, and browser validation
runs on the local machine. This repository does not run a GitHub Actions workflow
on pull requests or pushes, and work should not be dispatched to cloud agents or
self-hosted runners.

GitHub remains the source backup, review surface, and production host. Production
publishing is the deliberate exception described below.

## Intended flow

```
Issue
  → agent-ready
  → local branch
  → implementation
  → npm run verify:local
  → record local evidence in the pull request
  → human approval
  → merge
  → human production approval
  → manual Pages deployment
```

## Complete local gate

`npm run verify:local` performs:

- pinned Node/npm verification
- ESLint and Prettier checks
- Vitest unit tests
- repository secret and public-email scan
- SEO source checks
- `npm audit --audit-level=high`
- a fresh production build
- Playwright WebKit smoke at phone, tablet, and desktop sizes
- generated-link and static accessibility checks

Run `npm run bootstrap` first on a new machine and install the isolated local
Playwright WebKit runtime once with `npm run browser:install:webkit`. The browser
is stored under ignored `.cache/`, not a shared system or cloud runner.

## Production publishing exception

`.github/workflows/deploy.yml` remains a manual, `main`-only workflow because
GitHub Pages needs a hosted artifact and GitHub-issued deployment token. It
repeats core checks, builds `dist`, validates the generated site, and publishes
the artifact. It has no pull-request or push trigger and must be started only
after explicit human publication approval.

Removing those hosted build steps would break the current Pages release path or
weaken the production gate, so they are intentionally retained. See
[RELEASE.md](./RELEASE.md).

## Required-check alignment

Verified on September 5, 2026: `main` has no branch protection, rulesets, or
required status checks. No repository setting depends on the removed `CI / check`
job. If branch protection is added later, require human pull-request review and
local verification evidence; do not require the deleted hosted check unless the
owner explicitly changes the local-only policy.

## Agent-ready criteria

Use the **Agent-ready** issue template. Work is ready only when it has one
testable outcome, named scope, human-only boundaries, acceptance checks, and no
missing facts the implementer would need to invent.

Pull requests should use `.github/PULL_REQUEST_TEMPLATE.md`. Agents must not
self-approve or merge to `main`.

## Future Playwright coverage

Current smoke covers overflow, reduced motion, mobile navigation, project
dialogs, public contact data, and the public portfolio. Add cases when new stable
surfaces exist, such as dedicated product pages or an operational form.
