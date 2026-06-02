import { useState } from "react";

export default function TimelineEstimator() {
  const [pages, setPages] = useState(5);
  const weeks = 2 + Math.ceil(pages / 2);

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl font-bold mb-6 text-gray-900 dark:text-white">Delivery Timeline</h2>
        <p className="text-lg text-gray-700 dark:text-zinc-400 mb-10">
          Estimate a reasonable delivery window based on the number of pages in your project.
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
            <p className="text-xl">Pages: {pages}</p>
            <p className="text-4xl font-semibold text-[#D4AF37]">{weeks} week{weeks === 1 ? "" : "s"}</p>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Timeline includes discovery, design, development, review, and launch preparation. Complex systems or additional integrations may require a longer schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
