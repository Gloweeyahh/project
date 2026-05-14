import { useParams } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import { motion } from 'framer-motion'

export default function CaseStudyPage() {
  const { slug } = useParams()

  const caseData = caseStudies.find(c => c.slug === slug)

  if (!caseData) {
    return <div className="text-gray-900 dark:text-white p-20">Case not found</div>
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-6 py-24">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-black mb-10 text-gray-900 dark:text-white"
      >
        {caseData.title}
      </motion.h1>

      {/* PROBLEM / SOLUTION */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16">
        <Block title="Problem" text={caseData.problem} />
        <Block title="Solution" text={caseData.solution} />
      </div>

      {/* METRICS */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {caseData.metrics.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950"
          >
            <p className="text-gray-600 dark:text-gray-400">{m.label}</p>
            <h3 className="text-3xl font-bold text-[#D4AF37]">
              {m.value}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* RESULT */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4 text-[#D4AF37]">
          {caseData.result}
        </h2>
      </div>

      {/* INSIGHT */}
      <div className="max-w-xl text-gray-600 dark:text-gray-400 italic">
        {caseData.insight}
      </div>

    </main>
  )
}

function Block({ title, text }: any) {
  return (
    <div className="p-8 rounded-3xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950">
      <h3 className="text-xl mb-2 text-[#D4AF37]">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </div>
  )
}
