import { useRef } from 'react'
import { useReveal } from '../../../hooks/useReveal'

export default function TrustHero() {

  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useReveal(titleRef)
  useReveal(subtitleRef)

  return (
    <section className="text-center space-y-8">
      <h1 ref={titleRef} className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Welcome to <span className="text-yellow-400">NeoBank</span>
      </h1>
      <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Secure. Simple. Your financial future starts here with trust-first onboarding.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
          Start Onboarding
        </button>
        <button className="px-12 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-2xl text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
          Watch Demo
        </button>
      </div>
    </section>
  )
}
