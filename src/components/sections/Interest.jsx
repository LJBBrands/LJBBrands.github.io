import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { PUBLIC_EMAIL } from "../../data/contact";
import { buildInterestMailto, interestOptions } from "../../data/interest";

const inputClass =
  "mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white focus:border-white/70 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white/70";

export default function Interest({ theme }) {
  const [intent, setIntent] = useState("waitlist");
  const [draftReady, setDraftReady] = useState(false);
  const [draftHref, setDraftHref] = useState("");
  const option = interestOptions.find((item) => item.id === intent);

  function prepareDraft(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const href = buildInterestMailto({
      intent,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      organization: String(data.get("organization") || ""),
      message: String(data.get("message") || ""),
      wantsUpdates: data.get("updates") === "yes",
    });
    setDraftHref(href);
    setDraftReady(true);
  }

  return (
    <section
      id="get-involved"
      aria-labelledby="interest-heading"
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
    >
      <SectionHeader
        theme={theme}
        kicker="Get Involved"
        title="Be Part Of What’s Next."
        titleId="interest-heading"
        description="Interested in using Awy, hearing updates, or supporting its development? Choose the conversation you want to start."
      />
      <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.03] p-5 sm:p-8">
        <fieldset>
          <legend className="mb-3 text-base font-medium">
            I’m interested in
          </legend>
          <div className="flex flex-wrap gap-3">
            {interestOptions.map((item) => (
              <label
                key={item.id}
                className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-full border px-4 py-3 text-sm sm:text-base ${intent === item.id ? "border-white/70 bg-white/10 text-white" : "border-white/20 text-white/70"}`}
              >
                <input
                  type="radio"
                  name="interest"
                  value={item.id}
                  checked={intent === item.id}
                  onChange={() => {
                    setIntent(item.id);
                    setDraftReady(false);
                    setDraftHref("");
                  }}
                  className="h-4 w-4 accent-white"
                />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h3 className="text-2xl font-semibold">{option.title}</h3>
            <p className="mt-3 text-base leading-7 text-white/70">
              {option.description}
            </p>
            <p
              id="email-request-note"
              className="mt-5 text-sm leading-6 text-white/60"
            >
              Requests are handled by email for now. This form prepares a draft
              for you to send to {PUBLIC_EMAIL}. It does not submit your
              details, automatically subscribe you, or confirm a waitlist place.
            </p>
            <a
              href="/privacy/"
              className="mt-3 inline-flex min-h-[44px] items-center text-sm underline underline-offset-4"
            >
              Privacy Policy
            </a>
          </div>
          <form
            key={intent}
            onSubmit={prepareDraft}
            onChange={() => {
              setDraftReady(false);
              setDraftHref("");
            }}
            aria-label={`${option.label} inquiry`}
            aria-describedby="email-request-note"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Name <span className="text-white/60">(required)</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  maxLength={100}
                  className={inputClass}
                />
              </label>
              <label className="text-sm font-medium">
                Email <span className="text-white/60">(required)</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  maxLength={254}
                  className={inputClass}
                />
              </label>
            </div>
            {intent === "investor" && (
              <label className="mt-5 block text-sm font-medium">
                Organization <span className="text-white/60">(optional)</span>
                <input
                  name="organization"
                  autoComplete="organization"
                  maxLength={120}
                  className={inputClass}
                />
              </label>
            )}
            <label className="mt-5 block text-sm font-medium">
              {intent === "investor"
                ? "How would you like to support Awy?"
                : "Anything you’d like us to know?"}{" "}
              <span className="text-white/60">(optional)</span>
              <textarea
                name="message"
                rows={3}
                maxLength={600}
                className={inputClass}
                aria-describedby={
                  intent === "investor" ? "investor-note" : undefined
                }
              />
            </label>
            {intent === "investor" ? (
              <p
                id="investor-note"
                className="mt-2 text-sm leading-6 text-white/60"
              >
                Keep this to an introduction. Please don’t include confidential
                materials or financial account details.
              </p>
            ) : (
              <label className="mt-5 flex min-h-[44px] items-start gap-3 text-sm leading-6 text-white/80">
                <input
                  name="updates"
                  value="yes"
                  type="checkbox"
                  required={intent === "updates"}
                  className="mt-1 h-4 w-4 shrink-0 accent-white"
                />
                {intent === "updates"
                  ? "I’d like to request Awy development and availability emails. (Required)"
                  : "I’d also like to request Awy development and availability emails. (Optional)"}
              </label>
            )}
            <button
              type="submit"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-black"
            >
              Prepare Email Request
            </button>
            <div role="status" aria-live="polite">
              {draftReady && (
                <div className="mt-5 rounded-xl border border-white/20 p-4">
                  <p className="text-sm leading-6 text-white/80">
                    Your email draft is ready. Nothing has been sent or saved to
                    a subscriber list. Open it in your email app and send it to
                    complete your request.
                  </p>
                  <a
                    href={draftHref}
                    className="mt-3 inline-flex min-h-[44px] items-center text-base font-medium underline underline-offset-4"
                  >
                    Open Email Draft
                  </a>
                  <p className="mt-2 break-words text-sm leading-6 text-white/60">
                    No email app? Email {PUBLIC_EMAIL} with the subject “
                    {option.subject}”.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
