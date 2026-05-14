import { useState } from "react";

export default function LeadQualifier() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <h2 className="text-6xl font-bold mb-10 text-gray-900 dark:text-white">Start Your Build Request</h2>

      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="max-w-2xl space-y-6"
        >
          <input
            placeholder="Your business type"
            className="w-full p-5 rounded-2xl bg-white/90 dark:bg-slate-950 border border-gray-200/60 dark:border-white/30 shadow-sm focus:shadow-md focus:border-amber-400 transition-all"
          />
          <input
            placeholder="Target launch date"
            className="w-full p-5 rounded-2xl bg-white/90 dark:bg-slate-950 border border-gray-200/60 dark:border-white/30 shadow-sm focus:shadow-md focus:border-amber-400 transition-all"
          />
          <textarea
            placeholder="Describe your dream website"
            className="w-full p-5 rounded-2xl bg-white/90 dark:bg-slate-950 border border-gray-200/60 dark:border-white/30 shadow-sm focus:shadow-md focus:border-amber-400 transition-all h-40"
          />
          <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-2xl font-bold">
            Submit Request
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
