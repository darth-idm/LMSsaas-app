import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { getRecentSessions } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const user = await currentUser();
  const companions = await getAllCompanions({
    limit: 3,
    userId: user?.id,
  });
  const recentSessionsCompanions = await getRecentSessions(10);

  // Deduplicate recent sessions by companion ID to prevent duplicate keys
  const uniqueRecentSessions = recentSessionsCompanions.filter(
    (companion, index, self) =>
      index === self.findIndex((c) => c.id === companion.id)
  );

  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={`popular-${companion.id}`}
            {...companion}
            color={getSubjectColor(companion.subject)}
            bookmarked={companion.bookmarked || false}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={uniqueRecentSessions}
          classNames="w-2/3 max-lg:w-full"
          keyPrefix="recent-"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
