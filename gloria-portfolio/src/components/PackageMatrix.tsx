const packages = [
  {
    name: "Starter",
    price: "₦150k",
    features: ["Landing page", "Mobile responsive", "Fast delivery"],
  },
  {
    name: "Growth",
    price: "₦350k",
    features: ["5 pages", "Animations", "SEO structure", "Analytics"],
  },
  {
    name: "Authority",
    price: "₦700k",
    features: ["10+ pages", "Custom systems", "Funnels", "CMS"],
  },
];

export default function PackageMatrix() {
  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <h2 className="text-6xl font-bold mb-16">Choose Your Growth Tier</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="p-10 rounded-3xl bg-white dark:bg-slate-950 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 hover:border-amber-400/80 shadow-xl dark:shadow-black/50"
          >
            <h3 className="text-3xl font-bold mb-4">{pkg.name}</h3>
            <p className="text-[#D4AF37] text-2xl mb-6">{pkg.price}</p>
            <ul className="space-y-3 text-gray-700 dark:text-zinc-300">
              {pkg.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
