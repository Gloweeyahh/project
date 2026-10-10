export default function SkillsStrip() {
  const skills = [
    { name: 'React', level: 'strong' },
    { name: 'TypeScript', level: 'strong' },
    { name: 'Tailwind CSS', level: 'strong' },
    { name: 'Framer Motion', level: 'working' },
    { name: 'GSAP', level: 'working' },
    { name: 'Accessibility', level: 'strong' },
    { name: 'Conversion Design', level: 'strong' },
    { name: 'Performance (Lighthouse)', level: 'working' },
  ];

  return (
    <section className="overflow-hidden py-12 sm:py-16 border-y bg-transparent border-gray-100 dark:border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">Skills</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-gray-200 dark:border-white/8 bg-white dark:bg-slate-950 p-4">
              <p className="font-bold text-gray-900 dark:text-white">{s.name}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{s.level === 'strong' ? 'Strong' : 'Working knowledge'}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-500">Levels: <strong>Strong</strong> — primary expertise; <strong>Working</strong> — familiar and productive.</div>
      </div>
    </section>
  )
}
