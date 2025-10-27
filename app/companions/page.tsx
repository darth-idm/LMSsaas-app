import { getAllCompanions } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { currentUser } from "@clerk/nextjs/server";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const user = await currentUser();
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({
    subject,
    topic,
    userId: user?.id,
  });

  console.log(companions);

  return (
    <main>
      <section className="home-flex justify-between gap-4 max-sm:flex-col">
        <h1>Companions Library</h1>
        <div className="flex items-center gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
            bookmarked={companion.bookmarked || false}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
