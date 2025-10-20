import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const MyJourney = async () => {
  const user = await currentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Learning Journey
            </h1>
            <p className="text-gray-600">
              Track your progress and achievements, {user?.firstName || "User"}.
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Learning Progress</h3>
          <p className="text-gray-600">
            Track your AI companion interactions and learning milestones.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Achievements</h3>
          <p className="text-gray-600">
            View your learning badges and accomplishments.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Study History</h3>
          <p className="text-gray-600">
            Review your past learning sessions and topics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
