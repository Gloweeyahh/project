import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'

import TrustHero from './components/TrustHero'
import SignupStepper from './components/SignupStepper'
import MetricImpact from './components/MetricImpact'
import TrustSignals from './components/TrustSignals'

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Floating +67% metric */}
      <MetricImpact />
      
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        <TrustHero />
        <SignupStepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <TrustSignals />
      </main>
    </div>
  )
}
