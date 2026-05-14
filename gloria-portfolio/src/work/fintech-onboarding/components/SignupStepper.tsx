import { useEffect } from 'react'
import { gsap } from '../../../lib/gsap'


interface SignupStepperProps {
  currentStep: number
  setCurrentStep: (step: number) => void
}

export default function SignupStepper({ currentStep, setCurrentStep }: SignupStepperProps) {
  const steps = [
    { title: 'Connect Email', icon: '✉️' },
    { title: 'Verify Identity', icon: '🛡️' },
    { title: 'Fund Account', icon: '💳' },
    { title: 'Success!', icon: '✅' }
  ]

  useEffect(() => {
    gsap.fromTo(`.step-${currentStep}`, 
      { scale: 1, opacity: 1 },
      { scale: 1.1, duration: 0.3, ease: 'power2.out' }
    )
  }, [currentStep])

  return (
    <div className="relative">
      {/* Stepper Line */}
      <div className="absolute top-12 left-12 w-[calc(100%-96px)] h-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full" />
      
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`step-${index} relative flex flex-col items-center p-6 cursor-pointer group transition-all duration-300 hover:scale-105 z-10`}
            onClick={() => setCurrentStep(index)}
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-xl transition-all duration-300 group-hover:shadow-2xl ${
              index <= currentStep 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-blue-500/25' 
                : 'bg-white/80 dark:bg-slate-950 border-2 border-gray-200 dark:border-gray-700'
            }`}>
              {step.icon}
            </div>
            <h3 className="mt-4 font-semibold text-lg text-center">{step.title}</h3>
            {index < steps.length - 1 && (
              <div className={`absolute right-0 top-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg z-20 ${
                index < currentStep ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
