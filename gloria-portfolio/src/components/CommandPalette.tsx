import { useEffect, useState } from "react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "k" && e.ctrlKey) {
        setOpen(prev => !prev);
      }
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div className="bg-slate p-6 rounded-xl w-[400px]">
        <input
          placeholder="Search projects, skills..."
          className="w-full p-3 bg-black border border-white/10 rounded-lg"
        />
      </div>
    </div>
  );
}
