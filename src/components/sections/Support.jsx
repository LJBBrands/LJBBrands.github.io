import SupportCard from "../SupportCard";

export default function Support({ theme }) {
  return (
    <section id="support" className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20">
      <SupportCard theme={theme} />
    </section>
  );
}
