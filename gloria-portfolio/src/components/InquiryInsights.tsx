export default function InquiryInsights() {
  const stats = [
    { label: "Most Requested", value: "Course Platforms" },
    { label: "Avg Budget", value: "₦420k" },
    { label: "Fastest Closing", value: "Landing Pages" },
  ];

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <h2 className="text-6xl font-bold mb-16 text-gray-900 dark:text-white">Market Demand Signals</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-10 rounded-3xl bg-white dark:bg-slate-950 backdrop-blur-xl border border-gray-200/40 dark:border-white/20 hover:border-amber-400/70 shadow-lg group-hover:shadow-2xl transition-all"
          >
            <p className="text-gray-700 dark:text-zinc-400 mb-4">{stat.label}</p>
            <h3 className="text-3xl font-bold text-[#D4AF37]">{stat.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
