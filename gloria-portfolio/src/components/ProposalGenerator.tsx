import { useState } from "react";

export default function ProposalGenerator() {
  const [service, setService] = useState("Landing Page");
  const [generated, setGenerated] = useState(false);

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <h2 className="text-6xl font-bold mb-10 text-gray-900 dark:text-white">Instant Proposal Draft</h2>

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="p-4 rounded-2xl bg-white/90 dark:bg-slate-950 border border-gray-200/50 dark:border-white/20 shadow-sm"
      >
        <option>Landing Page</option>
        <option>Course Platform</option>
        <option>Business Website</option>
        <option>SaaS Dashboard</option>
      </select>

      <button
        onClick={() => setGenerated(true)}
        className="ml-4 bg-[#D4AF37] text-black px-6 py-4 rounded-2xl font-bold"
      >
        Generate
      </button>

      {generated && (
        <div className="mt-10 p-8 rounded-3xl bg-white/95 dark:bg-slate-950 backdrop-blur-xl border border-amber-200/60 dark:border-amber-500/50 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{service} Proposal</h3>
          <p className="text-gray-800 dark:text-zinc-200 leading-8">
            Scope includes premium UI design, frontend engineering,
            performance optimization, responsive systems, and conversion-focused interactions.
          </p>
        </div>
      )}
    </section>
  );
}
