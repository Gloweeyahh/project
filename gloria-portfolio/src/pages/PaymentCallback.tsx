import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from "../components/BackButton";

export default function PaymentCallback() {

  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const reference = params.get('reference')
    if (!reference) {
      return
    }

    // verify with backend
    ;(async () => {
      try {
        const r = await fetch(`/api/payments/verify/${reference}`)
        const data = await r.json()
        if (data.ok) {
          // persist a local token for gated demo downloads
          // backend should return plan/course so we can unlock the correct ZIP.
          const plan =
            data.plan ||
            data.course ||
            data.metadata?.plan ||
            data.metadata?.course ||
            (() => {
              try {
                return localStorage.getItem('last_checkout_plan') || undefined
              } catch {
                return undefined
              }
            })()


          const tokenMap: Record<string, string> = {
            html: 'purchase_html',
            advanced: 'purchase_advanced-html-css',
            fullstack: 'purchase_fullstack-frontend',
            ai: 'purchase_ai-website-bonus',
            fullstack_bundle: 'purchase_fullstack-bundle',
            fullstack_bundle_zip: 'purchase_fullstack-bundle',
          }

          const token = tokenMap[plan] || 'purchase_advanced-html-css'

          localStorage.setItem(token, JSON.stringify({ reference: data.reference, email: data.email, time: Date.now(), plan }))

          // open WhatsApp with message
          const displayPlan = plan || 'advanced'


          const message = `I've completed payment for the ${displayPlan === 'fullstack_bundle' ? 'Fullstack Web Development Bundle' : displayPlan === 'fullstack' ? 'Full Stack Frontend' : displayPlan === 'html' ? 'Beginner HTML' : displayPlan === 'ai' ? 'AI Website Creation Bonus' : 'Advanced HTML & CSS'} course. Ref: ${reference}`

          window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')

          navigate('/downloads')
          return
        }
        alert('Payment not verified')
      } catch (err) {
        console.error(err)
        alert('Error verifying payment')
      }
    })()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <BackButton />
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Verifying payment...</h2>
          <p className="text-gray-500 mt-4">Please wait — you will be redirected shortly.</p>
        </div>
      </div>
    </div>
  )
}
