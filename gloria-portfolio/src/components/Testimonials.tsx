import { Link } from "react-router-dom";

export default function Testimonials() {
  const data = [
    {
      quote: "Gloria turned our MVP into a conversion machine.",
      name: "Amaka N.",
      title: "Founder, ScaleUp Finance",
      to: "/case-study/fintech",
    },
    {
      quote: "Our users stayed longer the week she redesigned it.",
      name: "Tunde O.",
      title: "Founder, Retail Pulse",
      to: "/case-study/ecommerce",
    },
    {
      quote: "The site looked so premium investors mentioned it.",
      name: "Chioma I.",
      title: "Founder, MetricFlow",
      to: "/case-study/saas",
    },
  ];

  return (
    <section className="py-32 px-10 bg-white dark:bg-black">
      <h2 className="text-5xl font-bold mb-16 text-gray-900 dark:text-white">
        Founder <span className="text-yellow-400">Proof</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="p-8 rounded-3xl bg-white dark:bg-slate-950 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 hover:shadow-2xl transition-all"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-8">"{item.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
