import { useEffect, useRef } from 'react'
import { gsap } from '../../../lib/gsap'
import { useReveal } from '../../../hooks/useReveal'


export default function MetricImpact() {
  const metricRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(metricRef.current, {
        innerHTML: 67,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: metricRef.current,
          start: "top 80%",
        }
      })
    })

    return () => ctx.revert()
  }, [])

  useReveal(metricRef)
  useReveal(labelRef)

  return (
    <div className="fixed top-24 right-8 z-50">
      <div className="bg-gradient-to-br from-yellow-400/90 to-orange-400/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-yellow-200/50">
        <div ref={metricRef} className="text-4xl font-black text-white leading-none">0</div>
        <div ref={labelRef} className="text-white/90 text-sm font-semibold uppercase tracking-wider mt-1">
          Signups Increase
        </div>
      </div>
    </div>
  )
}
