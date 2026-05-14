import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnalyticsHQ() {
  const [range, setRange] = useState('30d')

  const data = useMemo(() => {
    return {
      revenue: 124500,
      conversions: 4.3,
      bounce: 32,
      growth: 18,
      chart: [10, 20, 18, 30, 45, 40, 60, 75, 70, 90, 120],
    }
  }, [range])

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-6 py-24">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-6xl font-black text-gray-900 dark:text-white">Analytics HQ</h1>

        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="bg-gray-100 dark:bg-slate-950 border border-gray-300 dark:border-white/20 rounded-xl px-4 py-2 text-gray-900 dark:text-white"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>
      </div>

      {/* METRICS GRID */}
      <section className="grid md:grid-cols-4 gap-6 mb-16">
        <Metric title="Revenue" value={`$${data.revenue.toLocaleString()}`} />
        <Metric title="Conversion Rate" value={`${data.conversions}%`} />
        <Metric title="Bounce Rate" value={`${data.bounce}%`} />
        <Metric title="Growth" value={`+${data.growth}%`} highlight />
      </section>

      {/* CHART */}
      <section className="rounded-3xl border border-gray-300 dark:border-white/20 p-10 bg-white dark:bg-slate-950 backdrop-blur-xl mb-16">
        <h2 className="text-2xl mb-6 text-gray-600 dark:text-gray-400">Revenue Trend</h2>

        <div className="flex items-end gap-3 h-60">
          {data.chart.map((value, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ delay: i * 0.05 }}
              className="w-full bg-gradient-to-t from-[#D4AF37] to-yellow-400 rounded-t-xl"
            />
          ))}
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="grid lg:grid-cols-2 gap-8">
        <Insight
          title="Conversion Insight"
          text="Users drop at onboarding friction points. Simplifying forms could unlock +32% uplift."
        />

        <Insight
          title="Revenue Opportunity"
          text="Increasing AOV by $10 yields additional $45,000 monthly revenue."
        />
      </section>

    </main>
  )
}

function Metric({ title, value, highlight }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl border border-gray-300 dark:border-white/20 p-6 bg-white dark:bg-slate-950"
    >
      <p className="text-gray-600 dark:text-gray-400 mb-2">{title}</p>
      <h3 className={`text-3xl font-bold ${highlight ? 'text-[#D4AF37]' : 'text-gray-900 dark:text-white'}`}>
        {value}
      </h3>
    </motion.div>
  )
}

function Insight({ title, text }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-gray-300 dark:border-white/20 p-8 bg-white dark:bg-slate-950"
    >
      <h3 className="text-xl mb-3 text-[#D4AF37]">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </motion.div>
  )
}

