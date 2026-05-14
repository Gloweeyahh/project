import { motion } from 'framer-motion'

const checks = [
  'Hero communicates offer in 3 seconds',
  'CTA visible above the fold',
  'Core Web Vitals optimized',
  'Trust signals positioned before objection points',
  'Mobile checkout friction reduced',
  'Typography hierarchy conversion-led',
]

export default function AuditExperience() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-6 py-24">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-6xl font-black mb-10 text-gray-900 dark:text-white">
        Premium Website Audit
      </motion.h1>

      <div className="grid gap-6">
        {checks.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950 p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl text-gray-900 dark:text-white">{item}</p>
              <span className="text-[#D4AF37]">✓</span>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

