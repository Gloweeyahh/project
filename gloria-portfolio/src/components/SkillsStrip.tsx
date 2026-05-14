export default function SkillsStrip() {
  const skills = [
    "React",
    "GSAP",
    "Framer Motion",
    "Tailwind",
    "Next.js",
    "UI Systems",
    "Conversion Design",
    "Lighthouse 100",
  ];

  return (
    <section className="overflow-hidden py-16 sm:py-24 border-y border-white/5 dark:border-white/10">
      <div className="min-w-[200%] flex gap-6 sm:gap-10 whitespace-nowrap text-2xl sm:text-3xl animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]">
        {skills.concat(skills).map((skill, i) => (
            <span
            key={i}
            className="font-bold text-gray-900 dark:text-white/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
