
import { FormEvent, useState } from "react";
import BrowserMockup from "../components/ui/BrowserMockup";
import { sendEmail } from "../lib/sendEmail";
import BackButton from "../components/BackButton";

const steps = [
  {
    title: "Enter your email",
    description: "Capture confidence early with a simple, familiar start screen."
  },
  {
    title: "Verify with trust cues",
    description: "Show security, social proof, and progress before asking for sensitive details."
  },
  {
    title: "Complete onboarding",
    description: "Confirm the account, deliver the next experience, and keep users moving."
  }
];

export default function FintechOnboarding() {
  const [activeStep, setActiveStep] = useState(1);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await sendEmail({
        subject: "Fintech onboarding request",
        html: `<h1>Fintech onboarding request</h1><p><strong>Email:</strong> ${email}</p><p><strong>Selected step:</strong> ${steps[activeStep - 1].title}</p><p><strong>Note:</strong> The user is interested in a trust-first onboarding review.</p>`,
      });

      setSubmitted(true);
      setEmail("");
    } catch {
      setError("Unable to send your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-gray-900 dark:text-white px-6 py-16 lg:px-10">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="max-w-5xl mx-auto px-6 pt-0 lg:px-0">
          <BackButton />
        </div>
        <section className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Fintech onboarding</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">From sign-up friction to trust-first activation</h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A clean onboarding experience that feels secure, fast, and premium for finance customers.
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <BrowserMockup>
            <div className="h-[520px] px-6 py-8 bg-white dark:bg-slate-950 rounded-[2rem] shadow-2xl">
              <div className="mb-10 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">Onboarding preview</p>
                <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">NeoBank signup flow</h2>
              </div>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className={`rounded-3xl border p-6 shadow-lg transition ${activeStep === index + 1 ? "border-yellow-400 bg-yellow-50 dark:bg-slate-900" : "border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950"}`}
                  >
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">Step {index + 1}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </BrowserMockup>

          <div className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-10 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Interactive demo</p>
            <h2 className="mt-4 text-4xl font-black text-gray-900 dark:text-white">Build a better starter flow</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Move users through the first moment with a confident, low-friction experience that earns trust before asking for payments.</p>

            <div className="mt-10 space-y-4">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index + 1)}
                  className={`w-full rounded-3xl border px-6 py-4 text-left transition ${activeStep === index + 1 ? "border-yellow-400 bg-yellow-50 dark:bg-slate-900" : "border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950"}`}
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">Step {index + 1}</p>
                  <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{step.title}</p>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300">Work email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@business.com"
                  className="mt-2 w-full rounded-3xl border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-slate-900 px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-3xl bg-[#D4AF37] px-6 py-4 font-bold text-black transition hover:bg-yellow-500 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Claim onboarding review"}
              </button>

              {error && <p className="text-sm text-red-500">{error}</p>}
              {submitted && <p className="text-sm text-green-500">Thanks — your request was sent successfully.</p>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
