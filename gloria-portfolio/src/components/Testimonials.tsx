export default function Testimonials() {
  const data = [
    "Gloria turned our MVP into a conversion machine.",
    "Our users stayed longer the week she redesigned it.",
    "The site looked so premium investors mentioned it.",
  ];

  return (
    <section className="py-32 px-10 bg-white dark:bg-black">
      <h2 className="text-5xl font-bold mb-16 text-gray-900 dark:text-white">
        Founder <span className="text-yellow-400">Proof</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-3xl bg-white dark:bg-slate-950 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 hover:shadow-2xl transition-all"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-8">"{item}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
