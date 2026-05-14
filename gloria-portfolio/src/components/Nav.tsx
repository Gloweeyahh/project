import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

const links = [
  { name: "Home", to: "/" },
  { name: "Work", to: "/work" },
  { name: "Services", to: "/services" },
  { name: "Process", to: "/process" },
  { name: "Contact", to: "/contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10 py-4 md:py-6 backdrop-blur-xl bg-slate-50/80 dark:bg-slate-950/95 border-b border-gray-200/50 dark:border-white/10 shadow-lg">
      <div className="text-black dark:text-white font-bold tracking-[0.3em] text-sm md:text-base">
        GLORIA EMEKA
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        <div className="hidden md:flex gap-8">
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
        </div>
        <MobileNav />

      </div>
    </nav>
  );
}

