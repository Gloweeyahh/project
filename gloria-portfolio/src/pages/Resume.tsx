

import BackButton from "../components/BackButton";

const experience = [

  {
    period: "2023 - Present",
    role: "Founder & Lead Designer",
    company: "Gloria Emeka Studio",
    details: "Creating premium websites for founders, educators, and fintech brands with a focus on conversion-led UX."
  },
  {
    period: "2021 - 2023",
    role: "Senior Frontend Engineer",
    company: "Growth Labs",
    details: "Built design systems and conversion-focused experiences for SaaS, commerce, and education products."
  },
  {
    period: "2019 - 2021",
    role: "UI / UX Designer",
    company: "Studio X",
    details: "Delivered high-converting landing pages and product launches for B2B and digital creators."
  }
];

const skills = [
  "React / TypeScript",
  "Tailwind CSS / CSS-in-JS",
  "Conversion optimization",
  "Motion & interaction design",
  "Design systems",
  "Accessibility audit"
];

export default function Resume() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24 lg:px-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="mb-2">
            <BackButton />
          </div>

          <section className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 p-12 shadow-2xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Resume</p>
                <h1 className="mt-4 text-6xl font-black text-gray-900 dark:text-white">Gloria Emeka</h1>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                  Conversion-led digital product design, frontend engineering, and premium website strategy
                  for founders and high-growth brands.
                </p>
              </div>

              <a
                href="/Gloria-Emeka-Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-3xl bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:bg-yellow-500"
              >
                Download PDF
              </a>
            </div>
          </section>

          <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white">Experience</h2>
                <div className="mt-8 space-y-6">
                  {experience.map((item) => (
                    <div key={item.role} className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-8 shadow-lg">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">{item.period}</p>
                          <h3 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{item.role}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                        </div>
                      </div>
                      <p className="mt-6 text-gray-600 dark:text-gray-400">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white">Skills</h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {skills.map((skill) => (
                    <div key={skill} className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-5 text-gray-900 dark:text-white">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 p-12 shadow-2xl">
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">Resume highlights</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Stat label="Years of experience" value="7+" />
              <Stat label="Projects delivered" value="100+" />
              <Stat label="Conversion boost" value="Avg +42%" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-8 text-center shadow-lg">
      <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">{label}</p>
      <p className="mt-4 text-4xl font-black text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}
