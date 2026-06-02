import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { sendEmail } from '../lib/sendEmail'
import BackButton from "../components/BackButton";

export default function ROIEstimator() {
  const [traffic, setTraffic] = useState(10000)
  const [conversion, setConversion] = useState(2)
  const [improved, setImproved] = useState(4)
  const [aov, setAov] = useState(50)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
      <div className="max-w-6xl mx-auto mb-6">
        <BackButton />
      </div>
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

          <div className="mt-10 space-y-4">
            <label className="block">
              <span className="block mb-2 text-gray-600 dark:text-gray-400">Send estimate to email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setStatus('idle')
                  setError('')
                }}
                placeholder="your@email.com"
                className="w-full rounded-2xl bg-gray-100 dark:bg-slate-950 border border-gray-300 dark:border-white/20 px-4 py-4 text-gray-900 dark:text-white"
              />
            </label>

            {status === 'error' && <p className="text-sm text-red-500">{error}</p>}
            {status === 'sent' && <p className="text-sm text-green-500">Estimate sent successfully.</p>}

            <button
              type="button"
              onClick={async () => {
                setError('')
                if (!email.includes('@')) {
                  setError('Please enter a valid email address.')
                  setStatus('error')
                  return
                }

                setLoading(true)

                try {
                  await sendEmail({
                    subject: 'ROI Estimate request',
                    html: `<h1>ROI Estimate</h1><p><strong>Monthly traffic:</strong> ${traffic}</p><p><strong>Current conversion:</strong> ${conversion}%</p><p><strong>Projected conversion:</strong> ${improved}%</p><p><strong>Average order value:</strong> $${aov}</p><p><strong>Current revenue:</strong> $${result.currentRevenue.toLocaleString()}</p><p><strong>Projected revenue:</strong> $${result.improvedRevenue.toLocaleString()}</p><p><strong>Uplift:</strong> $${result.uplift.toLocaleString()}</p>`,
                    to: email,
                  })
                  setStatus('sent')
                } catch {
                  setError('Unable to send estimate. Try again later.')
                  setStatus('error')
                } finally {
                  setLoading(false)
                }
              }}
              disabled={loading}
              className="w-full rounded-3xl bg-yellow-400 px-6 py-4 font-bold text-black transition disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Email this estimate'}
            </button>
          </div>
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

