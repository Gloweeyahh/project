import { useState } from 'react'
import { motion } from 'framer-motion'

declare global {
  interface Window {
    PaystackPop: any
  }
}

export default function CheckoutPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const amount = 15000 // ₦15,000

  const handlePayment = () => {
    if (!email) return alert('Enter your email')

    setLoading(true)

    const handler = window.PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxxxxx', // replace with your real public key
      email,
      amount: amount * 100,
      currency: 'NGN',
      callback: function (response: any) {
        alert('Payment successful! Ref: ' + response.reference)
        setLoading(false)
      },
      onClose: function () {
        setLoading(false)
      },
    })

    handler.openIframe()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24">

      <h1 className="text-5xl font-black mb-10 text-gray-900 dark:text-white">
        Complete Your Purchase
      </h1>

      <div className="max-w-xl space-y-6">

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-2xl bg-gray-100 dark:bg-slate-950 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />

        <div className="rounded-2xl border border-gray-300 dark:border-white/20 p-6 bg-white dark:bg-slate-950">
          <p className="text-gray-600 dark:text-gray-400">Product</p>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Advanced HTML & CSS Course
          </h2>
          <p className="text-[#D4AF37] text-xl font-semibold">
            ₦15,000
          </p>
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
