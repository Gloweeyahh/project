import { Link } from 'react-router-dom'

export default function GlobalCTA() {
  return (
    <div className="mt-12 py-12 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-gray-200 dark:border-white/10 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">Ready to start?</p>
      <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Let's build something that converts.</h3>
      <div className="mt-6 flex justify-center gap-4">
        <Link to="/contact" className="rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-500 transition">Start a project</Link>
        <Link to="/work" className="rounded-2xl border border-gray-300 dark:border-white/20 px-6 py-3 bg-white/90 dark:bg-slate-950 text-gray-900 dark:text-white hover:bg-white/70 transition">See case studies</Link>
      </div>
    </div>
  )
}
