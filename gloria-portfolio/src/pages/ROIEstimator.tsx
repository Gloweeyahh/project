import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export default function ROIEstimator() {
  const [traffic, setTraffic] = useState(10000)
  const [conversion, setConversion] = useState(2)
  const [improved, setImproved] = useState(4)
  const [aov, setAov] = useState(50)

  const result = useMemo(() => {
    const currentRevenue = traffic * (conversion / 100) * aov
    const improvedRevenue = traffic * (improved / 100) * aov
    return {
      currentRevenue,
      improvedRevenue,
      uplift: improvedRevenue - currentRevenue,
    }
  }, [traffic, conversion, improved, aov])

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-black mb-8 text-gray-900 dark:text-white">
        ROI Estimator
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12">
        <section className="space-y-6">
          <Input label="Monthly Traffic" value={traffic} onChange={setTraffic} />
          <Input label="Current Conversion %" value={conversion} onChange={setConversion} />
          <Input label="Projected Conversion %" value={improved} onChange={setImproved} />
          <Input label="Average Order Value ($)" value={aov} onChange={setAov} />
        </section>

        <section className="rounded-3xl border border-gray-300 dark:border-white/20 p-10 bg-white dark:bg-slate-950 backdrop-blur-xl">
          <p className="text-gray-600 dark:text-gray-400">Current Revenue</p>
          <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">${result.currentRevenue.toLocaleString()}</h2>

          <p className="text-gray-600 dark:text-gray-400">Projected Revenue</p>
          <h2 className="text-5xl font-bold text-[#D4AF37] mb-8">${result.improvedRevenue.toLocaleString()}</h2>

          <p className="text-gray-600 dark:text-gray-400">Potential Uplift</p>
          <h2 className="text-6xl font-black text-green-500">+${result.uplift.toLocaleString()}</h2>
        </section>
      </div>
    </main>
  )
}

function Input({ label, value, onChange }: any) {
  return (
    <label className="block">
      <span className="block mb-2 text-gray-600 dark:text-gray-400">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-2xl bg-gray-100 dark:bg-slate-950 border border-gray-300 dark:border-white/20 px-4 py-4 text-gray-900 dark:text-white"
      />
    </label>
  )
}

