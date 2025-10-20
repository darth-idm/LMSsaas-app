import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

interface CompanionSessionProps {
  params: {
    id: string;
  };
}

const CompanionSession = async ({ params }: CompanionSessionProps) => {
  const user = await currentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              AI Companion Session
            </h1>
            <p className="text-gray-600">
              Learning session with your AI companion,{" "}
              {user?.firstName || "User"}.
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">
              Companion ID: {params.id}
            </h2>
            <p className="text-gray-600 mb-6">
              Your AI learning session will start here. This is where
              you&apos;ll interact with your personalized AI companion.
            </p>
            <div className="space-y-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Start Learning Session
              </button>
              <div className="text-sm text-gray-500">
                <p>Features coming soon:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Real-time AI conversation</li>
                  <li>Interactive learning modules</li>
                  <li>Progress tracking</li>
                  <li>Personalized feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanionSession;
