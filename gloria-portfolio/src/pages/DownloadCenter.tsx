import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";


const downloads = [
  {
    id: "html",
    title: "Beginner HTML Course ZIP",
    type: "ZIP",
    size: "4.2MB",
    tokenKey: "purchase_html",
  },
  {
    id: "advanced",
    title: "Advanced HTML + CSS Course ZIP",
    type: "ZIP",
    size: "18MB",
    tokenKey: "purchase_advanced-html-css",
  },
  {
    id: "fullstack",
    title: "Full Stack Frontend Course ZIP",
    type: "ZIP",
    size: "45MB",
    tokenKey: "purchase_fullstack-frontend",
  },
  {
    id: "ai",
    title: "AI Website Bonus ZIP",
    type: "ZIP",
    size: "12MB",
    tokenKey: "purchase_ai-website-bonus",
  },
  {
    id: "fullstack_bundle",
    title: "Fullstack Web Development Bundle ZIP",
    type: "ZIP",
    size: "120MB",
    tokenKey: "purchase_fullstack-bundle",
  },
] as const;

type DownloadItem = (typeof downloads)[number];

export default function DownloadCenter() {
  const navigate = useNavigate();

  const [unlockedTokenKeys, setUnlockedTokenKeys] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const tokenKeys = downloads.map((d) => d.tokenKey);
    const map: Record<string, boolean> = {};
    tokenKeys.forEach((k) => {
      map[k] = !!localStorage.getItem(k);
    });
    setUnlockedTokenKeys(map);
  }, []);

  const anyAccess = Object.values(unlockedTokenKeys).some(Boolean);

  const onDownload = (item: DownloadItem) => {
    const unlocked = item.tokenKey ? !!unlockedTokenKeys[item.tokenKey] : false;
    if (!unlocked) {
      navigate('/checkout');
      return;
    }

    // Demo download: replace with real ZIP/file download later.
    const content = `Downloaded: ${item.title}\nFrom Gloria Portfolio.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>
        <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">Resource Vault</p>
        <h1 className="text-5xl font-black mt-4 text-gray-900 dark:text-white">Premium downloads & assets</h1>

        <div className="space-y-6 mt-16">
          {downloads.map((item, i) => {
            const unlocked = item.tokenKey ? !!unlockedTokenKeys[item.tokenKey] : false;
            return (
              <motion.div
                key={item.id}
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

                <button
                  onClick={() => onDownload(item)}
                  className={`rounded-xl border border-[#D4AF37] px-5 py-3 font-semibold transition ${
                    unlocked
                      ? 'text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                      : 'text-gray-500'
                  }`}
                >
                  {unlocked ? 'Download' : 'Locked — Purchase'}
                </button>
              </motion.div>
            );
          })}
        </div>

        {!anyAccess && (
          <p className="mt-10 text-sm text-gray-600 dark:text-gray-400">
            You don’t have access to any downloads yet. Purchase a course to unlock your ZIP files.
          </p>
        )}
      </div>
    </div>
  );
}

