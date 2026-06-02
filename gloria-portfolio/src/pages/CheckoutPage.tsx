import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackButton from "../components/BackButton"


declare global {
  interface Window {
    PaystackPop: any
  }
}

export default function CheckoutPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [oneOnOne, setOneOnOne] = useState(false)
  const [searchParams] = useSearchParams()

  const courseParam = searchParams.get('course') || 'advanced'

  const courseMap: Record<string, { title: string; amount: number }> = {
    html: { title: 'Beginner HTML', amount: 0 },
    advanced: { title: 'Advanced HTML & CSS', amount: 15000 },
    fullstack: { title: 'Full Stack Frontend', amount: 60000 },
    fullstack_bundle: { title: 'Fullstack Web Development Bundle', amount: 180000 },
    ai: { title: 'AI Website Creation Bonus', amount: 5000 },
  }

  const course = courseMap[courseParam] || courseMap.advanced


  // Persist the selected plan so PaymentCallback can show the correct course details/unlock.
  // (PaymentCallback maps from backend response; this helps if backend doesn’t return plan/course.)
  try {
    localStorage.setItem('last_checkout_plan', courseParam)
  } catch {
    // ignore
  }


  const baseAmount = course.amount
  const oneOnOneFee = 25000 // ₦25,000 extra
  const amount = oneOnOne ? baseAmount + oneOnOneFee : baseAmount

  const handlePayment = () => {
    if (!email) return alert('Enter your email')

    setLoading(true)

    // Always use the backend payment flow.
    fetch('/api/payments/init', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, amount, plan: courseParam }),
    })
      .then((r) => r.json())
      .then((data) => {
        setLoading(false)
        if (data.authorization_url) {
          window.location.href = data.authorization_url
        } else {
          alert('Payment initialization failed')
        }
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
        alert('Payment init error')
      })
  }

  const isFreeCourse = baseAmount === 0
  const displayPrice = isFreeCourse
    ? 'Free'
    : new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0,
      }).format(amount)

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24">
      <div className="max-w-5xl mx-auto mb-6">
        <BackButton />
      </div>

      <h1 className="text-5xl font-black mb-10 text-gray-900 dark:text-white">
        {isFreeCourse ? 'Complete Your Purchase' : 'Complete Your Purchase'}
      </h1>

      <div className="max-w-xl space-y-6">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
          autoComplete="email"
          required
          className="w-full p-4 rounded-2xl bg-gray-100 dark:bg-slate-950 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
          onInvalid={(e) => {
            // HTML5 validation message
            e.currentTarget.setCustomValidity('Please enter a valid email address');
          }}
          onInput={(e) => {
            e.currentTarget.setCustomValidity('');
          }}
        />



        <div className="rounded-2xl border border-gray-300 dark:border-white/20 p-6 bg-white dark:bg-slate-950">
          <p className="text-gray-600 dark:text-gray-400">Product</p>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{course.title}</h2>

          <div className="mt-2">
            <p className="text-[#D4AF37] text-xl font-semibold">{displayPrice}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {isFreeCourse
                ? 'Proceed to checkout to unlock your download.'
                : 'Includes access to downloadable course files (ZIP) immediately after successful payment.'}
            </p>
          </div>

          <div className="mt-5">
            <p className="font-bold text-gray-900 dark:text-white">What your course ZIP includes</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>✅ Course source files (HTML + CSS)</li>
              <li>✅ Ready-to-run starter templates</li>
              <li>✅ Layout examples (responsive sections)</li>
              <li>✅ Notes that explain how each part fits together</li>
            </ul>
          </div>

          <div className="mt-5 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-4">
            <p className="font-bold text-gray-900 dark:text-white">How to access your ZIP</p>
            <ol className="mt-2 list-decimal ml-5 space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <li>Pay / confirm on the checkout</li>
              <li>Return to <span className="font-semibold">Download Center</span></li>
              <li>Click <span className="font-semibold">Download</span> to get your ZIP</li>
            </ol>
          </div>

          {!isFreeCourse && (
            <div className="mt-5 flex items-start gap-3">
              <input
                id="oneOnOne"
                type="checkbox"
                checked={oneOnOne}
                onChange={(e) => setOneOnOne(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="oneOnOne" className="text-sm text-gray-700 dark:text-gray-300">
                Add one-on-one lessons with me for an extra <span className="font-bold">₦25,000</span>.
                You’ll get personalized guidance to help you complete your project faster.
              </label>
            </div>
          )}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handlePayment}
          disabled={loading}
          className="w-full py-4 rounded-2xl bg-[#D4AF37] text-black font-bold hover:bg-yellow-500 transition disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </motion.button>
      </div>
    </main>
  )
}

