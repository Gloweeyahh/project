import { motion } from "framer-motion";

const downloads = [
  {
    title: "HTML Starter Kit",
    type: "ZIP",
    size: "4.2MB",
  },
  {
    title: "Premium Landing Page UI Kit",
    type: "FIG",
    size: "18MB",
  },
  {
    title: "Conversion Psychology Notes",
    type: "PDF",
    size: "2.1MB",
  },
  {
    title: "Client Website Questionnaire",
    type: "DOCX",
    size: "800KB",
  },
];

export default function DownloadCenter() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">
          Resource Vault
        </p>
        <h1 className="text-5xl font-black mt-4 text-gray-900 dark:text-white">
          Premium downloads & assets
        </h1>

        <div className="space-y-6 mt-16">
          {downloads.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950 p-8 flex justify-between items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-500 mt-2">
                  {item.type} • {item.size}
                </p>
              </div>

              <button className="rounded-xl border border-[#D4AF37] text-[#D4AF37] px-5 py-3 font-semibold hover:bg-[#D4AF37] hover:text-black transition">
                Download
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

