import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", to: "/" },
  { name: "Work", to: "/work" },
  { name: "Services", to: "/services" },
  { name: "Process", to: "/process" },
  { name: "Proposals", to: "/proposals" },
  { name: "Resume", to: "/resume" },
  { name: "Contact", to: "/contact" },
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
    <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10 transition-all duration-300 ${isScrolled ? "py-3 bg-slate-50/95 dark:bg-slate-950/95 border-b border-gray-200/50 dark:border-white/10 shadow-xl" : "py-5 bg-slate-50/80 dark:bg-slate-950/80 border-b border-transparent"}`}>
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
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}

