import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const assets = [
  {
    title: "Fintech Growth Deck",
    category: "Client Strategy",
    access: "Premium",
  },
  {
    title: "Luxury SaaS UI Framework",
    category: "Student Resource",
    access: "Unlocked",
  },
  {
    title: "Conversion Audit Template",
    category: "Internal Tool",
    access: "Premium",
  },
  {
    title: "High-Ticket Sales Landing Blueprint",
    category: "Paid Asset",
    access: "Unlocked",
  },
];

export default function DigitalVault() {
  const [code, setCode] = useState("");
  const [granted, setGranted] = useState(false);

  const unlock = () => {
    if (code.toLowerCase() === "gloriagold") {
      setGranted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">
          Private Vault
        </p>
        <h1 className="text-5xl font-black mt-4 text-gray-900 dark:text-white">
          Secure premium files & strategic assets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl">
          Client decks, paid frameworks, premium UI kits, student bonuses, and
          internal growth systems — all in one luxury protected environment.
        </p>

        {!granted && (
          <div className="mt-12 rounded-3xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950 p-8 max-w-xl">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Enter premium access code</p>
            <div className="flex gap-4">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 rounded-xl bg-white dark:bg-slate-950 border border-gray-300 dark:border-white/20 px-4 py-3 outline-none focus:border-[#D4AF37] text-gray-900 dark:text-white"
                placeholder="Enter access key"
              />
              <button
                onClick={unlock}
                className="rounded-xl bg-[#D4AF37] text-black px-6 font-bold hover:bg-yellow-500 transition"
              >
                Unlock
              </button>
            </div>
          </div>
        )}

        <AnimatePresence>
          {granted && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-8 mt-16"
            >
              {assets.map((asset, i) => (
                <motion.div
                  key={asset.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-3xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950 backdrop-blur-xl p-8"
                >
                  <p className="text-sm text-[#D4AF37] uppercase tracking-[0.2em]">
                    {asset.category}
                  </p>
                  <h3 className="text-2xl font-bold mt-3 text-gray-900 dark:text-white">
                    {asset.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-500 mt-3">
                    Access Level: {asset.access}
                  </p>

                  <button className="mt-6 rounded-xl border border-[#D4AF37] text-[#D4AF37] px-5 py-3 font-semibold hover:bg-[#D4AF37] hover:text-black transition">
                    Open Asset
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

