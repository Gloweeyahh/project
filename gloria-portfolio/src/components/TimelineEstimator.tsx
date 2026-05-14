import { useState } from "react";

export default function TimelineEstimator() {
  const [pages, setPages] = useState(5);

  const weeks = Math.ceil(pages / 2);

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <h2 className="text-6xl font-bold mb-10 text-gray-900 dark:text-white">Delivery Timeline</h2>

      <input
        type="range"
        min="1"
        max="20"
        value={pages}
        onChange={(e) => setPages(Number(e.target.value))}
        className="w-full max-w-xl"
      />

      <p className="text-2xl mt-6">Pages: {pages}</p>
      <p className="text-4xl text-[#D4AF37] mt-4">{weeks} week(s)</p>
    </section>
  );
}
