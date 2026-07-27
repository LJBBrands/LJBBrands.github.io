import { destinations, ecosystemSection } from "../../data/ecosystem";
import DestinationCard from "../DestinationCard";
import SectionHeader from "../SectionHeader";

export default function Ecosystem({ theme }) {
  return (
    <section
      id="ecosystem"
      className="mx-auto max-w-6xl scroll-mt-24 pb-16 sm:pb-20"
      aria-labelledby="ecosystem-heading"
    >
      <SectionHeader
        theme={theme}
        kicker={ecosystemSection.kicker}
        title={ecosystemSection.title}
        description={ecosystemSection.description}
        titleId="ecosystem-heading"
      />

      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            theme={theme}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
