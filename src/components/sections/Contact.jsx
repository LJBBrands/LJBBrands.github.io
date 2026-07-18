import { publicContactChannels } from "../../data/contact";
import ContactCard from "../ContactCard";
import SectionHeader from "../SectionHeader";

export default function Contact({ theme }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20">
      <SectionHeader
        theme={theme}
        kicker="Contact"
        title="Start a conversation"
        description="Choose the inbox that matches your inquiry. Each card opens a direct email with a useful subject line."
      />

      <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {publicContactChannels.map((channel, index) => (
          <ContactCard
            key={channel.id}
            channel={channel}
            theme={theme}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
