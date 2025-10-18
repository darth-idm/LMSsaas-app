import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          companionId="1"
          subject="Science"
          topic="Neural Network of the Brain"
          name="Neura the Brainy Explorer"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          companionId="2"
          subject="Science"
          topic="Neural Network of the Brain"
          name="Neura the Brainy Explorer"
          color="#E5D0FF"
          duration={45}
        />
        <CompanionCard
          companionId="3"
          subject="Science"
          topic="Neural Network of the Brain"
          name="Neura the Brainy Explorer"
          color="#E5D0FF"
          duration={45}
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
