import { useEffect, useRef } from 'react'
import { gsap } from '../../../lib/gsap'

export default function TrustSignals() {

  const signalsRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    const elements = signalsRef.current?.querySelectorAll('.signal');
    if (!elements) return;
    gsap.from(elements as unknown as gsap.TweenTarget, {

      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    })
  }, [])

  const signals = [
    { name: 'SSL Secured', icon: '🔒' },
    { name: 'SOC 2 Compliant', icon: '📜' },
    { name: '1M+ Users', icon: '👥' },
    { name: 'Bank Grade', icon: '🏦' },
    { name: '24/7 Support', icon: '🛠️' },
    { name: 'No Hidden Fees', icon: '💯' }
  ]

  return (
    <section className="py-24 bg-white/50 dark:bg-slate-950/95 backdrop-blur-sm">
      <div ref={signalsRef} className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Built with Trust
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="signal text-center p-6 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {signal.icon}
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">{signal.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
