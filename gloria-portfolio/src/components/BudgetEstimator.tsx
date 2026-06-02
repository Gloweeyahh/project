import { useMemo, useState } from "react";

export default function BudgetEstimator() {
  const [pages, setPages] = useState(5);
  const estimate = useMemo(() => pages * 45000, [pages]);

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl font-bold mb-6">Project Budget Estimate</h2>
        <p className="text-lg text-gray-700 dark:text-zinc-400 mb-10 max-w-2xl">
          Use the page range below to see an approximate investment guideline. Final pricing depends on design complexity, integrations, and launch requirements.
        </p>

        <div className="space-y-6">
          <input
            type="range"
            min="1"
            max="20"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="w-full"
          />

          <div className="flex flex-wrap gap-6 items-center">
            <p className="text-xl">Estimated pages: {pages}</p>
            <p className="text-xl text-[#D4AF37] font-semibold">Starting budget: ₦{estimate.toLocaleString()}</p>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is a ballpark estimate. A custom brief will reveal the final scope, integrations, and launch support required.
          </p>
        </div>
      </div>
    </section>
  );
}
