export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-amber-400/10 to-yellow-400/10 dark:from-black/20 dark:to-black/20 blur-[120px] top-[-200px] left-[-200px] animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-slate-50/20 via-blue-50/20 to-indigo-50/20 dark:from-black/20 dark:to-black/20 blur-[140px] bottom-[-200px] right-[-200px]" />
    </div>
  );
}
