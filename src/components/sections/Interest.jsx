import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { PUBLIC_EMAIL } from "../../data/contact";
import { FORMSPREE_ENDPOINT, interestOptions } from "../../data/interest";

const inputClass =
  "mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white focus:border-white/70 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white/70";

export default function Interest({ theme }) {
  const [intent, setIntent] = useState("waitlist");
  const [status, setStatus] = useState("idle");
  const option = interestOptions.find((item) => item.id === intent);

  async function submitRequest(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (status === "sending" || !form.reportValidity()) return;
    const data = new FormData(form);
    data.set("interest", intent);
    data.set("subject", option.subject);
    data.set("updates_consent", data.get("updates") === "yes" ? "yes" : "no");
    data.delete("updates");
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
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
        <fieldset disabled={status === "sending"}>
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
                    setStatus("idle");
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
              id="signup-note"
              className="mt-5 text-sm leading-6 text-white/60"
            >
              Your details are sent to Awy through Formspree and stored for us
              to manage your request. Update emails are optional unless you
              choose Updates. Joining the waitlist does not create an Awy
              account or guarantee access.
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
            onSubmit={submitRequest}
            onChange={() => {
              if (status !== "sending") setStatus("idle");
            }}
            aria-label={`${option.label} inquiry`}
            aria-describedby="signup-note"
            aria-busy={status === "sending"}
          >
            <fieldset disabled={status === "sending"}>
              <legend className="sr-only">Your contact details</legend>
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
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
                  Keep this to an introduction. Please don’t include
                  confidential materials or financial account details.
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
                disabled={status === "sending"}
                className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-black"
              >
                {status === "sending" ? "Sending…" : "Submit Request"}
              </button>
            </fieldset>
            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="mt-5 rounded-xl border border-white/20 p-4 text-sm leading-6">
                  Thanks! Your request has been received.
                  {intent === "waitlist" &&
                    " We’ve recorded your interest in future access to Awy."}
                  {intent === "updates" &&
                    " We’ve recorded your request for Awy updates."}
                  {intent === "investor" &&
                    " We’ll review your introduction and follow up by email."}
                </p>
              )}
            </div>
            {status === "error" && (
              <p
                role="alert"
                className="mt-5 rounded-xl border border-white/20 p-4 text-sm leading-6"
              >
                We couldn’t confirm your submission. Your details are still
                here. Please try again, or email{" "}
                <a className="underline" href={`mailto:${PUBLIC_EMAIL}`}>
                  {PUBLIC_EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
