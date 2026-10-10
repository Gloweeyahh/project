import { Link } from 'react-router-dom'
import GlobalCTA from '../components/GlobalCTA'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24">
      <div className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">404</p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">We couldn't find the page you're looking for. Try returning to the homepage or view selected case studies.</p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link to="/" className="rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black">Home</Link>
          <Link to="/work" className="rounded-2xl border border-gray-300 px-6 py-3">Work</Link>
        </div>

        <div className="mt-12">
          <GlobalCTA />
        </div>
      </div>
    </main>
  )
}
