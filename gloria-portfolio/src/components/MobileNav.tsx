import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/work" },
  { name: "Resume", to: "/resume" },
  { name: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gloria-emeka?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { label: "Email", href: "mailto:glowemeka@gmail.com" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden text-gray-900 dark:text-white flex flex-col gap-1 w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
      >
        <span className={`bg-gray-900 dark:bg-white block transition-all h-0.5 w-full rounded-sm ${isOpen ? "rotate-45 -translate-y-1" : ""}`} />
        <span className={`bg-gray-900 dark:bg-white block transition-all h-0.5 w-full rounded-sm ${isOpen ? "opacity-0" : ""}`} />
        <span className={`bg-gray-900 dark:bg-white block transition-all h-0.5 w-full rounded-sm ${isOpen ? "-rotate-45 translate-y-1" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        id="mobile-menu"
        role="menu"
        className="md:hidden absolute top-full left-0 w-full bg-white/80 dark:bg-slate-950/95 backdrop-blur-xl border-t border-gray-300 dark:border-white/10 overflow-hidden"
      >
        <div className="flex flex-col gap-4 p-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 text-lg px-4 py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              {link.name}
            </Link>
          ))}
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 text-lg px-4 py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </motion.div>
    </>
  );
}
