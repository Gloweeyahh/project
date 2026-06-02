import { FormEvent, useState } from "react";
import { sendEmail } from "../lib/sendEmail";

export default function LeadQualifier() {
  const [businessType, setBusinessType] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [dreamWebsite, setDreamWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!businessType.trim() || !launchDate.trim() || !dreamWebsite.trim()) {
      setError("Please complete every field before submitting.");
      return;
    }

    setLoading(true);

    try {
      await sendEmail({
        subject: "New build request",
        html: `<h1>New build request</h1><p><strong>Business type:</strong> ${businessType}</p><p><strong>Launch date:</strong> ${launchDate}</p><p><strong>Dream website:</strong><br/>${dreamWebsite}</p>`,
      });

      setSubmitted(true);
      setBusinessType("");
      setLaunchDate("");
      setDreamWebsite("");
    } catch {
      setError("Unable to submit your request right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <h2 className="text-6xl font-bold mb-10 text-gray-900 dark:text-white">Start Your Build Request</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          <input
            placeholder="Your business type"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full p-5 rounded-2xl bg-white/90 dark:bg-slate-950 border border-gray-200/60 dark:border-white/30 shadow-sm focus:shadow-md focus:border-amber-400 transition-all"
          />
          <input
            placeholder="Target launch date"
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
            className="w-full p-5 rounded-2xl bg-white/90 dark:bg-slate-950 border border-gray-200/60 dark:border-white/30 shadow-sm focus:shadow-md focus:border-amber-400 transition-all"
          />
          <textarea
            placeholder="Describe your dream website"
            value={dreamWebsite}
            onChange={(e) => setDreamWebsite(e.target.value)}
            className="w-full p-5 rounded-2xl bg-white/90 dark:bg-slate-950 border border-gray-200/60 dark:border-white/30 shadow-sm focus:shadow-md focus:border-amber-400 transition-all h-40"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-2xl font-bold disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>
        </form>
      ) : (
        <div className="text-3xl text-[#D4AF37]">
          Request received. Let's build something iconic.
        </div>
      )}
    </section>
  );
}
