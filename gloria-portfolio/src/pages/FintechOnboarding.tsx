import BrowserMockup from "../components/ui/BrowserMockup";

export default function FintechOnboarding() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-gray-900 dark:text-white px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent mb-6">
            Fintech Onboarding Redesign
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reduced friction in signup flow using trust-first UI architecture. +67% signups.
          </p>
        </div>
        <BrowserMockup>
          <div className="p-6 h-[500px] flex items-center justify-center bg-white dark:bg-black">
            {/* Simplified demo preview - React component would need vite alias fix */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">NeoBank Onboarding Flow</h2>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center p-4 bg-white/70 dark:bg-slate-950 rounded-2xl shadow-lg">
                  <span className="text-2xl mr-4">✉️</span>
                  <div>
                    <h3 className="font-semibold">Step 1: Connect Email</h3>
                    <p className="text-sm text-gray-500">Enter your email address</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/70 dark:bg-slate-950 rounded-2xl shadow-lg">
                  <span className="text-2xl mr-4">🛡️</span>
                  <div>
                    <h3 className="font-semibold">Step 2: Verify Identity</h3>
                    <p className="text-sm text-gray-500">Trust signals + security</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white/70 dark:bg-slate-950 rounded-2xl shadow-lg">
                  <span className="text-2xl mr-4">✅</span>
                  <div>
                    <h3 className="font-semibold">Step 3: Success!</h3>
                    <p className="text-sm text-gray-500">Account ready in 45s</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-2xl font-bold text-2xl">
                +67% Signups
              </div>
            </div>
          </div>
        </BrowserMockup>
      </div>
    </div>
  );
}
