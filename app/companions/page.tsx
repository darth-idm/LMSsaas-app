import { currentUser } from "@clerk/nextjs/server";
import CompanionsList from "@/components/CompanionsList";

const CompanionsLibrary = async () => {
  const user = await currentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AI Companions Library
        </h1>
        <p className="text-gray-600">
          Welcome back, {user?.firstName || "User"}! Explore your AI learning
          companions.
        </p>
      </div>

      <CompanionsList title="Your AI Companions" />
    </div>
  );
};

export default CompanionsLibrary;
