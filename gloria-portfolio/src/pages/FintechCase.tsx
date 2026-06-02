import { caseStudies } from "../data/caseStudies";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

export default function FintechCase() {
  const caseData = caseStudies.find((item) => item.slug === "fintech");

  if (!caseData) {
    return <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white p-20">Case study unavailable.</div>;
  }

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-6 py-24 lg:px-10">
        <div className="max-w-6xl mx-auto mb-6">
          <BackButton />
        </div>
        <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto space-y-10">
          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Fintech Case Study</p>
            <h1 className="mt-4 text-6xl font-black text-gray-900 dark:text-white">{caseData.title}</h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">{caseData.solution}. This project centered on trust-first onboarding and reducing friction for high-intent finance users.</p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic max-w-3xl">{caseData.disclaimer}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {caseData.metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-8 shadow-lg">
                <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">{metric.label}</p>
                <p className="mt-4 text-4xl font-black text-[#D4AF37]">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-black p-10 shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Outcome</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{caseData.problem}</p>
            <p className="mt-4 text-xl font-semibold text-[#D4AF37]">Result: {caseData.result}</p>
          </div>

          <div className="text-gray-600 dark:text-gray-400 italic">{caseData.insight}</div>
        </motion.section>
      </main>
    </>
  );
}
