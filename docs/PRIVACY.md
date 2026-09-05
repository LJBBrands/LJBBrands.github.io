# Privacy

This document is an engineering boundary, not a published legal policy. Do not treat it as legal review.

## Current public collection

The live site does not operate a server-side form. Contact uses `mailto:` to `K.Bousquet92@pm.me`. Whatever the visitor’s mail client sends is email, not an application database we control.

Do not add fields that collect:

- government IDs
- bank or brokerage account numbers
- exact personal net worth
- confidential portfolio companies
- documents that belong in a private data room

If an investor inquiry form is added later, keep it to necessary professional contact fields (name, organization, email, product of interest, short message). Optional role, stage, or check-size **ranges** are acceptable. Free-text should warn people not to paste confidential materials.

## Analytics

No analytics provider is configured in this repository. Adding one is a **human-only** operation: it needs a named tool, a data-retention note, and a consent/compliance decision before any script is shipped.

## Legal pages

`/privacy/` and `/terms/` are existing Awy-oriented pages. Replacing or publishing new legal policy is human-only. Agents may fix contact email consistency and broken links; they may not invent policy language.

## Repo hygiene

Do not commit personal exports, CRM lists, investor correspondence, or filled intake spreadsheets.
