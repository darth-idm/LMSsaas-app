import { currentUser } from "@clerk/nextjs/server";

const Subscription = async () => {
  const user = await currentUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Subscription Management
        </h1>
        <p className="text-gray-600">
          Manage your subscription and billing, {user?.firstName || "User"}.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Current Plan</h2>
          <div className="border rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Free Plan</span>
              <span className="text-green-600 font-semibold">$0/month</span>
            </div>
            <p className="text-gray-600 text-sm">
              Basic access to AI companions with limited interactions
            </p>
          </div>

          <h3 className="text-lg font-semibold mb-4">Upgrade Options</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Pro Plan</span>
                <span className="text-blue-600 font-semibold">$19/month</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Unlimited AI companion interactions and advanced features
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Upgrade to Pro
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-purple-500 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Enterprise Plan</span>
                <span className="text-purple-600 font-semibold">$99/month</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Advanced analytics, team management, and priority support
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
