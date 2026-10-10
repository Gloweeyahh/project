import { Link } from 'react-router-dom'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gloria-emeka?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { label: 'Email', href: 'mailto:glowemeka@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <Link to="/" className="font-bold text-black dark:text-white">GLORIA EMEKA</Link>
          <p className="text-sm text-gray-500 mt-2">Conversion-led websites & product engineering</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4 justify-center">
          <Link to="/work" className="text-sm text-gray-600 dark:text-gray-300">Projects</Link>
          <Link to="/resume" className="text-sm text-gray-600 dark:text-gray-300">Resume</Link>
          <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-300">Contact</Link>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="text-sm text-gray-600 dark:text-gray-300">{link.label}</a>
          ))}
        </nav>

        <div className="text-sm text-gray-500">© {new Date().getFullYear()} Gloria Emeka</div>
      </div>
    </footer>
  )
}
