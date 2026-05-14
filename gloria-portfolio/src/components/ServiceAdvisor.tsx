import { useState } from "react";

const recommendations = {
  startup: "🚀 Best fit: Conversion-focused SaaS landing page + onboarding UX",
  educator: "🎓 Best fit: Premium course platform + payment funnel",
  brand: "✨ Best fit: Authority website + storytelling funnel",
  ecommerce: "🛒 Best fit: Product storytelling + optimized checkout",
};

export default function ServiceAdvisor() {
  const [result, setResult] = useState("");

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <h2 className="text-6xl font-bold mb-10 text-gray-900 dark:text-white">Find Your Best Build</h2>
      <p className="text-gray-700 dark:text-zinc-400 text-xl mb-10 max-w-3xl">
        Tell me what kind of business you run and I'll guide you to the most profitable website structure.
      </p>

      <div className="flex flex-wrap gap-4 mb-10">
        {Object.keys(recommendations).map((key) => (
          <button
            key={key}
            onClick={() => setResult(recommendations[key as keyof typeof recommendations])}
            className="px-6 py-4 rounded-2xl bg-white/90 dark:bg-slate-950 border border-gray-200/50 dark:border-white/20 hover:border-amber-400 shadow-sm hover:shadow-md transition-all"
          >
            {key}
          </button>
        ))}
      </div>

      {result && (
        <div className="p-8 rounded-3xl bg-white/95 dark:bg-slate-950 backdrop-blur-xl border border-amber-200/70 dark:border-amber-400/60 shadow-2xl text-xl text-gray-900 dark:text-zinc-100">
          {result}
        </div>
      )}
    </section>
  );
}
