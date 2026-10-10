import BackButton from '../components/BackButton'
import GlobalCTA from '../components/GlobalCTA'

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>

        <header className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">About</p>
          <h1 className="mt-4 text-4xl font-black">Frontend engineer with a product mindset.</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">I work at the point where design, user experience, and frontend engineering meet. My background in marketing and product thinking helps me build digital experiences that are clear, useful, and built to move people toward action.</p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-slate-950">
            <h3 className="text-xl font-bold">Who</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Founder & hands-on builder who helps founders and product teams ship fast, measurable web experiences.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-slate-950">
            <h3 className="text-xl font-bold">How I work</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Research → Prototype → Measure → Iterate. I focus on clear outcomes and low-friction paths to product-market fit.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-slate-950">
            <h3 className="text-xl font-bold">Marketing → Development</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">My marketing background means I lead with narrative, conversion copy, and metrics before writing a single line of code.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-6 bg-white dark:bg-slate-950">
            <h3 className="text-xl font-bold">Process</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">I ship incremental improvements, validate with users, and instrument analytics to ensure decisions are data-informed.</p>
          </div>
        </section>

        <div className="mt-12">
          <GlobalCTA />
        </div>
      </div>
    </main>
  )
}
