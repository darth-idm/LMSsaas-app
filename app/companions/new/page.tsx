import { currentUser } from "@clerk/nextjs/server";
import CompanionForm from "@/components/ui/CompanionForm";

const NewCompanion = async () => {
  const user = await currentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New AI Companion
          </h1>
          <p className="text-gray-600">
            Build your personalized learning companion,{" "}
            {user?.firstName || "User"}.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <CompanionForm />
        </div>
      </div>
    </div>
  );
};

export default NewCompanion;
