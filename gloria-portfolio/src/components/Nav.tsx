import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Projects", to: "/work" },
  { name: "Resume", to: "/resume" },
  { name: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gloria-emeka?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { label: "Email", href: "mailto:glowemeka@gmail.com" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10 transition-all duration-300 ${isScrolled ? "py-3 bg-slate-50/95 dark:bg-slate-950/95 border-b border-gray-200/50 dark:border-white/10 shadow-xl" : "py-5 bg-slate-50/80 dark:bg-slate-950/80 border-b border-transparent"}`}>
      <Link to="/" className="text-black dark:text-white font-bold tracking-[0.3em] text-sm md:text-base hover:text-yellow-400 transition-colors">
        GLORIA EMEKA
      </Link>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to={link.to} className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 text-sm font-medium transition-colors">
                {link.name}
              </Link>
            </motion.div>
          ))}
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}

