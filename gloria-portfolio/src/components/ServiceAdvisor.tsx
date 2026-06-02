import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const options = [
  {
    id: "startup",
    title: "SaaS & Product Launch",
    description:
      "Build a high-conversion product experience that turns early users into signups and keeps onboarding friction low.",
    recommendation: "Best fit: landing page + signature dashboard experience.",
    nextStep: "Explore a proposal that balances growth, product clarity, and UX speed.",
  },
  {
    id: "course",
    title: "Course & Membership",
    description:
      "Create a premium course platform with curriculum previews, enrollment flow, and trust-building content.",
    recommendation: "Best fit: course platform + enrollment funnel.",
    nextStep: "View the course proposal for student-focused onboarding and checkout.",
  },
  {
    id: "brand",
    title: "Creator & Authority Brand",
    description:
      "Position your personal brand with memorable storytelling, service pages, and premium trust signals.",
    recommendation: "Best fit: branded website + authority storytelling.",
    nextStep: "Check the authority website proposal for lead generation and brand credibility.",
  },
  {
    id: "ecommerce",
    title: "Ecommerce & Product Sales",
    description:
      "Design a product-first experience that makes discovery, browsing, and checkout feel effortless.",
    recommendation: "Best fit: ecommerce storefront + optimized checkout.",
    nextStep: "See the ecommerce proposal for conversion-driven product pages.",
  },
];

export default function ServiceAdvisor() {
  const [selected, setSelected] = useState(options[0].id);
  const current = useMemo(
    () => options.find((option) => option.id === selected) ?? options[0],
    [selected]
  );

  return (
    <section className="py-40 px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-6xl font-bold text-gray-900 dark:text-white">Find Your Best Build</h2>
          <p className="mt-6 text-xl text-gray-700 dark:text-zinc-400 max-w-3xl">
            Choose the business type that matches your goal and get a tailored recommendation for the strongest website structure.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-12">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`rounded-3xl p-6 text-left transition-all border ${selected === option.id ? "border-amber-400 bg-amber-50 dark:bg-amber-500/10" : "border-gray-200 dark:border-white/10 bg-white/90 dark:bg-slate-950"} hover:shadow-xl`}
            >
              <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">{option.title}</p>
              <p className="mt-4 text-lg leading-7 text-gray-800 dark:text-gray-200">{option.description}</p>
            </button>
          ))}
        </div>

        <div className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 p-10 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Recommended build</p>
          <h3 className="mt-4 text-4xl font-semibold text-gray-900 dark:text-white">{current.title}</h3>
          <p className="mt-6 text-lg text-gray-700 dark:text-slate-300 leading-8">{current.recommendation}</p>
          <p className="mt-4 text-gray-600 dark:text-slate-400 leading-7">{current.nextStep}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/proposals"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-8 py-4 font-semibold transition hover:bg-slate-800"
            >
              Explore full proposals
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-gray-900 bg-white text-gray-900 px-8 py-4 font-semibold transition hover:bg-gray-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Book a strategy review
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
