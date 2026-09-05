# Awy Social-App Legal Readiness Review

Date: September 5, 2026

Status: Draft for owner and qualified-counsel review

Scope: Awy Terms, privacy disclosures, social-safety operations, and a United States private beta

This is a product and legal-review aid, not legal advice or a certification of compliance. The revised Terms are a clearer social-app contract, but policy text cannot replace working product controls, documented operations, or advice from counsel familiar with Awy's launch markets.

## Verified Product Baseline

| Area                | Current evidence                                                                                                                                                                                                           | Drafting boundary                                                                                                                                 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Operator            | The website identifies Kyle D. Bousquet / LJB Media Group and uses `K.Bousquet92@pm.me`. Repository rules say LJB Media Group is not a filed LLC.                                                                          | Do not add “LLC,” a registered-office address, or another legal entity without owner confirmation.                                                |
| Audience and access | Current Awy code enforces 18+ signup eligibility. October private beta is planned.                                                                                                                                         | State 18+ and allow limited/private beta access; do not promise unrestricted public availability.                                                 |
| Accounts            | Current authentication uses email and password.                                                                                                                                                                            | Do not claim completed Sign in with Apple, App Attest, or production email-confirmation policy.                                                   |
| Social content      | Current architecture includes profiles and profile media, Pulse/shared content, one-to-one Strings, Lounges, reactions, replies, invitations, memberships, and media-bearing surfaces.                                     | Describe the categories without promising that every media, realtime, notification, or invitation path is production-verified.                    |
| Safety              | Client and service paths exist for reporting and blocking across several social surfaces. Two-account and report-parity verification remains incomplete.                                                                   | Reserve enforcement rights; do not promise universal pre-screening, 24/7 human moderation, guaranteed removal, or complete prevention of contact. |
| Deletion            | The intended path is an authenticated Edge Function that prepares database cleanup, handles shared-space ownership, removes storage, and deletes the authentication user. Disposable-account verification remains pending. | Say users can initiate deletion in Settings and reserve narrow lawful/safety retention; do not promise immediate removal from every backup.       |

Primary Awy evidence: `Docs/Engineering/Awy-iOS-Codebase-Map.md`, `Docs/Production/Awy-1.0.0-Production-Readiness-Tracker.md`, `Awy/Services/Auth/AuthSignupEligibility.swift`, `Awy/Services/Data/API/SafetyService.swift`, and `supabase/functions/delete-account/index.ts` in the Awy iOS repository. UI presence is not treated as proof of backend verification.

## Terms Revision Included in This Branch

The draft in `public/terms/index.html`:

- changes only the Terms date to September 5, 2026;
- keeps the operator and single approved public contact unchanged;
- adds assent, beta status, account security, and transfer restrictions;
- defines social and vehicle-related user content;
- adds a limited operational content license while leaving ownership with users;
- explains that invited or limited-audience communications are not guaranteed confidential or end-to-end encrypted;
- expands prohibited conduct to cover illegal content, child sexual exploitation, nonconsensual intimate imagery and digital forgeries, harassment, doxxing, infringement, scams, malware, scraping, control bypass, and enforcement evasion;
- adds driving and vehicle-media safety rules;
- clarifies reports, blocks, moderation, preservation, disclosures, and emergency limits without claiming universal monitoring;
- adds a general copyright-complaint route without claiming a registered DMCA agent;
- aligns deletion language with the intended in-app deletion path; and
- adds service, third-party, disclaimer, liability-limit, and change provisions for counsel to assess.

The draft deliberately does **not** select governing law, venue, arbitration, a class-action waiver, a damages cap, or an indemnity. Those choices depend on the confirmed operator, domicile, launch markets, risk tolerance, and qualified legal advice.

## Privacy Policy: Required Factual Review Before Editing

The Privacy Policy remains dated August 26, 2026 in this branch. Its current categories broadly acknowledge accounts, profiles, birthday/age eligibility, messages, uploads, reactions, memberships, reports, blocks, diagnostics, usage signals, notification tokens, and conditional purchases. A responsible update requires facts that are not yet settled or verified.

Before publishing a revised Privacy Policy, confirm and document:

1. The exact legal operator name, business address if legally required, domicile, and U.S. beta states.
2. Every production data field, including whether full birth date or only an eligibility result is retained.
3. Whether server logs retain IP address, device identifiers, crash data, performance data, search history, or product-interaction events.
4. Which permissions and data leave the device: camera, photo/video library, microphone/audio, precise or coarse location, music data, contacts, notifications, and clipboard.
5. Every processor and recipient, including authentication, database, storage, notification, analytics, customer-support, moderation, and purchase providers.
6. The audience and disclosure rules for profiles, vehicle details, Pulse/shared content, Strings, Lounges, invitations, presence, and media.
7. A written retention schedule by data category, including active accounts, deleted accounts, reports, blocks, security logs, backups, copyright records, and legally preserved content.
8. Verified deletion timing and what happens to shared-space ownership, recipient copies, storage objects, logs, reports, and backups.
9. Whether Awy sells, shares, licenses, or uses data for targeted advertising or cross-app tracking. Do not state “we never sell” or “we do not track” until production vendors and business practices are confirmed.
10. User-rights intake and verification for access, correction, deletion, portability, restriction, objection, appeal, and consent withdrawal where applicable.
11. State-specific privacy rights, regulator complaint rights, and any notices or appeal rights required in the U.S. beta states.
12. Whether non-account reporters may submit safety, copyright, or intimate-image removal requests and how those records are protected.

Apple requires App Store privacy disclosures to include data collected by the developer and integrated third parties, remain accurate as practices change, and identify private messages as text-message data. Compare the final inventory against [Apple's App Privacy Details guidance](https://developer.apple.com/app-store/app-privacy-details/) before submission.

## Critical Product and Operational Launch Gates

| Gate                               | Required outcome                                                                                                                                                                                                                             | Current position                                                                                                                                                                                                   |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Objectionable-content filtering    | Implement and verify a method that prevents or filters prohibited user-generated content appropriate to each text/media surface.                                                                                                             | Not established as production-verified. Apple Guideline 1.2 requires filtering in addition to reports and blocks.                                                                                                  |
| Reporting and blocking             | Every user/content surface must have reachable reporting and blocking, correct backend authorization, useful confirmation/error states, and two-account tests.                                                                               | Paths exist; cross-surface and backend parity remain incomplete.                                                                                                                                                   |
| Timely moderation                  | Create an owned queue, severity levels, evidence-preservation rules, response targets, escalation, decision logging, and staffing/coverage plan.                                                                                             | No basis to promise 24/7 review or guaranteed timing. A workable beta runbook is still required.                                                                                                                   |
| Nonconsensual intimate imagery     | Publish a clear, conspicuous removal process accessible to non-account holders; issue request IDs; validate requests; remove covered content and known identical copies within 48 hours; preserve a secure audit trail.                      | Missing as a verified operational process. This is a U.S. launch blocker if Awy is a covered platform under the TAKE IT DOWN Act. Do not ask victims to email the image itself through an insecure `mailto:` link. |
| Child sexual exploitation response | Prohibit the conduct; restrict access to trained personnel; preserve material only as legally required; maintain a CyberTipline/law-enforcement escalation runbook; obtain counsel on provider status and reporting duties.                  | Terms prohibition added. Operational and legal-response procedure not verified.                                                                                                                                    |
| Account deletion                   | Verify full in-app initiation against a disposable account: authentication record, database rows, shared ownership, media storage, notifications, tokens, and confirmation. State the actual completion time and narrowly defined retention. | Intended implementation exists; end-to-end proof is pending.                                                                                                                                                       |
| Versioned legal acceptance         | Present Terms and Privacy before account creation, store accepted versions/time/user, fail closed when documents cannot load, and require reacceptance when legally necessary.                                                               | Legal-version work is active in Awy; production behavior must be verified against the exact published versions.                                                                                                    |
| 18+ enforcement                    | Validate date handling, impossible/future dates, underage rejection, timezone boundaries, account recovery, and existing-account migration. Decide what happens when underage use is suspected.                                              | Code-level eligibility exists; production age-assurance policy and launch-market sufficiency need review.                                                                                                          |
| Data map and App Store disclosures | Produce a production data-flow inventory, vendor list, retention schedule, permission matrix, App Privacy answers, and matching Privacy Policy.                                                                                              | Current Privacy language is broad and conditional; exact production facts remain unsettled.                                                                                                                        |
| Security and abuse prevention      | Verify RLS/storage authorization, rate limits, session revocation, credential recovery, secret separation, media validation, malicious-link handling, audit logs, and incident response.                                                     | Several production backend and two-account validation gates remain open in Awy's tracker.                                                                                                                          |

Apple's [App Review Guideline 1.2](https://developer.apple.com/app-store/review/guidelines/) requires UGC/social apps to provide objectionable-material filtering, offensive-content reporting with timely responses, abusive-user blocking, and published contact information. Apple's [account-deletion guidance](https://developer.apple.com/support/offering-account-deletion-in-your-app/) requires account-creating apps to let all users initiate deletion in-app and expects associated user-generated content to be deleted unless law requires retention.

The FTC's [TAKE IT DOWN Act guidance](https://www.ftc.gov/business-guidance/resources/complying-take-it-down-act) says covered social, messaging, image/video, and similar platforms must provide a clear notice-and-removal process and remove covered nonconsensual intimate imagery and known identical copies within 48 hours of a valid request. Federal law also creates reporting duties for qualifying providers that obtain actual knowledge of apparent child sexual exploitation; counsel should apply [18 U.S.C. § 2258A](https://uscode.house.gov/view.xhtml?req=%28title%3A18+section%3A2258A+edition%3Aprelim%29) to Awy's actual service model.

## Important Follow-Up Work

- Create public Community Guidelines that translate the Terms categories into examples and explain reportable conduct.
- Give users understandable enforcement notices and a support path to question mistakes.
- Build privacy and safety defaults for profiles, Lounge discovery, presence, invitations, location, notifications, and media.
- Establish a formal data-subject-request workflow with identity verification, deadlines, decision records, and deletion/export tooling.
- Establish a security-incident and breach-response plan with owners, vendor contacts, evidence handling, notification analysis, and tabletop testing.
- Reconcile Terms, Privacy, in-app legal copy, App Store metadata, permission prompts, support URLs, and App Privacy answers before every release.
- Decide whether to seek U.S. DMCA safe-harbor protection. A general copyright inbox is not a substitute for registering and maintaining a designated agent.
- Maintain a moderation metrics log suitable for operational review and any jurisdiction-specific transparency reporting.

The [U.S. Copyright Office](https://www.copyright.gov/dmca-directory/) explains that a provider seeking relevant DMCA safe-harbor protection must both publish designated-agent information and register the same information with the Copyright Office. The current draft makes no claim that this has been completed.

## Owner and Counsel Decisions

1. What exact person or legal entity will contract with Awy users at beta and at public launch? Where is that operator domiciled?
2. Which U.S. states will receive the private beta and TestFlight build?
3. Should governing law and venue be the operator's domicile? Does counsel recommend arbitration, a class-action waiver, an informal-dispute period, indemnity, or a monetary liability cap?
4. Will Awy remain strictly 18+? If so, what age-assurance and underage-removal process is proportionate in each launch market?
5. Does Awy do business in California, and do CalOPPA, CCPA/CPRA, or other state privacy-law duties apply now or under expected growth? Counsel should document the conclusion rather than rely on a startup-size assumption.
6. Will Awy offer paid subscriptions, creator monetization, tips, advertising, sponsorships, or promoted content? How will deletion interact with billing?
7. Are precise/coarse location, nearby discovery, music integrations, contacts, or biometric data in the beta build? What stays on-device versus reaching a server?
8. Which vendors and subprocessors receive production data, in which regions, under what contracts, and for how long?
9. What content-moderation coverage can the operator actually sustain during beta, including urgent safety reports and 48-hour intimate-image requests?
10. Who is authorized to handle copyright notices, intimate-image requests, CyberTipline reports, subpoenas, preservation requests, and law-enforcement emergencies?
11. Will the operator register a DMCA designated agent, and can the required public legal name, physical address, phone number, and email be published and kept current?
12. What records must survive account deletion, why, who can access them, and for exactly how long?
13. Does private beta access require separate tester confidentiality, feedback ownership, or pre-release-risk terms beyond these public Terms?

International rollout is outside this review. Reassess privacy, platform-safety, age, and consumer-law requirements before making Awy available outside the United States.

For U.S. privacy and security, the FTC advises app developers to collect only needed data, accurately disclose practices, honor user choices, secure retained data, and dispose of data that is no longer needed. See [Marketing Your Mobile App](https://www.ftc.gov/business-guidance/resources/marketing-your-mobile-app-get-it-right-start) and [App Developers: Start with Security](https://www.ftc.gov/business-guidance/resources/app-developers-start-security).

## Exact Review and Publication Dependency

1. Owner and counsel review the exact Terms diff and answer the operator, domicile, age-policy, U.S. beta-state, moderation-coverage, and emergency-intake questions above.
2. Awy's legal document registry must use the canonical URLs `https://ljbbrands.github.io/terms/` and `https://ljbbrands.github.io/privacy/`, with Terms version `2026-09-05` and Privacy version `2026-08-26` unless a separate Privacy revision is approved.
3. Verify that signup displays the full current documents, records both accepted versions, prevents signup when consent cannot be recorded, and does not accept an older cached Terms version.
4. Publish this Terms revision only after protected owner approval. Then verify the live date, headings, contact email, canonical URL, and mobile rendering before enabling beta signup against version `2026-09-05`.
5. Keep the beta limited to the United States until a separate market review is completed.

Minimum Privacy recommendation: the August 26 policy is broad enough to leave unchanged for this Terms-only review, but it should not be treated as final for beta until the factual inventory above is completed. If that inventory confirms vehicle metadata, profile/vehicle photos or videos, audio messages, processors, or audience disclosures not clearly covered by the current text, prepare and approve a separate Privacy diff and give it its own new date. Do not silently redraft or redate Privacy as part of publishing these Terms.
