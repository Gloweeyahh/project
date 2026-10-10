// (removed duplicate older HeroProof implementation)
export default function HeroProof() {
  const items = [
    { label: 'Projects delivered', value: '100+' },
    { label: 'Average conversion uplift', value: 'Avg +42%' },
    { label: 'Lighthouse top scores', value: '95+' },
    { label: 'Clients', value: 'Startups & SMEs' },
  ];

  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.label} className="rounded-2xl p-6 bg-white dark:bg-slate-950 border border-gray-200 dark:border-white/10 text-center shadow">
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">{it.label}</p>
            <p className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{it.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
