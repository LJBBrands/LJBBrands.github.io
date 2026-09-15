import SectionHeader from "../SectionHeader";

const questions = [
  {
    question: "What is Awy?",
    answer:
      "Awy is a private social environment built around presence, consent-aware sharing, and calmer communication. It brings private conversations and shared lounges into one place.",
  },
  {
    question: "What can I explore in the preview?",
    answer:
      "The interactive preview walks through live presence, profiles, privacy controls, and lounges. It shows the product experience; it does not create an Awy account.",
  },
  {
    question: "Who is Awy for?",
    answer:
      "Awy is for adults 18 and older who want more intentional ways to connect. See the Terms and Privacy Policy for details about using the app.",
  },
  {
    question: "Where can I ask about investing or partnerships?",
    answer:
      "Use the investor inquiry option below to introduce yourself and describe your interest in Awy. You can ask about the product, potential partnerships, or a conversation with the founder.",
  },
];

export default function Questions({ theme }) {
  return (
    <section
      id="questions"
      aria-labelledby="questions-heading"
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
    >
      <SectionHeader
        theme={theme}
        kicker="Questions"
        title="A Little More About Awy."
        titleId="questions-heading"
      />
      <div className="divide-y divide-white/10 border-y border-white/10">
        {questions.map(({ question, answer }) => (
          <details key={question} className="group py-1">
            <summary className="flex min-h-[56px] cursor-pointer items-center justify-between gap-6 py-4 text-base font-medium text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              {question}
              <span
                aria-hidden="true"
                className="text-xl text-white/60 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-5 pr-8 text-base leading-7 text-white/70">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
