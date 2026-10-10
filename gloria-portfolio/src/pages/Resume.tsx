

import BackButton from "../components/BackButton";
import GlobalCTA from '../components/GlobalCTA'

const experience = [
  {
    period: "August 2024 – Present",
    role: "Independent Freelance Developer",
    company: "Self-employed",
    details: "Build and ship websites and digital experiences for clients, covering frontend architecture, responsive UI, testing, deployment, and follow-up fixes from start to finish."
  },
  {
    period: "July 2025 – February 2026",
    role: "Web Developer",
    company: "Peace for Humanity Foundation",
    details: "Improved the organisation’s online visibility by strengthening structure, metadata, and internal linking, which helped increase search impressions and drive more meaningful traffic to the site."
  },
  {
    period: "February 2019 – December 2021",
    role: "Graphics Designer",
    company: "Steelbase Resources Limited",
    details: "Created branded visuals and digital assets for campaigns and business communications, helping sharpen my eye for layout, consistency, and design systems that later influenced how I build interfaces."
  }
];

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "REST / JSON APIs",
  "MongoDB",
  "Local Storage",
  "Git / GitHub",
  "Automated testing",
  "Core Web Vitals",
  "Lighthouse",
  "Accessibility",
  "SEO",
  "Figma"
];

const selectedProjects = [
  {
    title: "ClaimCheck",
    stack: "React • Vite • Express • PubMed • WHO/CDC APIs",
    summary: "Built a health-focused web app that walks users through a simple decision-making flow to evaluate online health claims with more clarity and less confusion."
  },
  {
    title: "Applyd",
    stack: "JavaScript • HTML • CSS • Local Storage • Node Test Runner",
    summary: "Created a practical job application tracker that helps users organise applications, deadlines, and follow-ups without adding unnecessary complexity."
  }
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
                  I’m a frontend engineer and designer with hands-on experience building websites and product experiences that are clean, useful, and built to convert.
                </p>

                <div className="mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-4">
                  <p className="text-sm text-gray-500">Professional summary</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">I bring strategy, design, and frontend development together so projects feel consistent from the first idea to the final launch. I care about clarity, performance, and building experiences people actually understand and trust.</p>
                </div>
              </div>

              <a
                href="/Gloria_Emeka_Final_Optimized_CV.docx"
                download
                className="inline-flex items-center justify-center rounded-3xl bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:bg-yellow-500"
              >
                Download CV
              </a>
            </div>
          </section>

          <div className="max-w-6xl mx-auto mt-12">
            <GlobalCTA />
          </div>

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
                <h2 className="text-4xl font-black text-gray-900 dark:text-white">Selected projects</h2>
                <div className="mt-8 space-y-6">
                  {selectedProjects.map((project) => (
                    <div key={project.title} className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-8 shadow-lg">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">{project.stack}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="mt-4 text-gray-600 dark:text-gray-400">{project.summary}</p>
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
              <Stat label="Years of experience" value="5+" />
              <Stat label="Production apps delivered" value="20+" />
              <Stat label="Performance gain" value="42%" />
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
