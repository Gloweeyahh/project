import { useState } from "react";

export default function BudgetEstimator() {
  const [pages, setPages] = useState(5);
  const [price, setPrice] = useState(0);

  function calculate() {
    const estimate = pages * 45000;
    setPrice(estimate);
  }

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <h2 className="text-6xl font-bold mb-10">Instant Project Estimate</h2>

      <div className="max-w-xl space-y-6">
        <input
          type="range"
          min="1"
          max="20"
          value={pages}
          onChange={(e) => setPages(Number(e.target.value))}
          className="w-full"
        />

        <p className="text-xl">Pages: {pages}</p>

        <button
          onClick={calculate}
          className="bg-[#D4AF37] text-black px-8 py-4 rounded-2xl font-bold"
        >
          Calculate Estimate
        </button>

        {price > 0 && (
          <div className="text-4xl font-bold text-[#D4AF37]">
            ₦{price.toLocaleString()}
          </div>
        )}
      </div>
    </section>
  );
}
