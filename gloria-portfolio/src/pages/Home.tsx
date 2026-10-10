import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const strengths = [
  {
    title: "Clear positioning",
    text: "I help brands explain what they do, who they serve, and why it matters without the usual noise.",
  },
  {
    title: "Design that works",
    text: "I bring together good visuals and practical product thinking so the experience feels premium and useful.",
  },
  {
    title: "Built with intent",
    text: "Every interaction is shaped around making the product easier to understand and easier to trust.",
  },
];

const proofPoints = [
  { value: "5+", label: "years building digital products" },
  { value: "20+", label: "production web apps and client projects" },
  { value: "42%", label: "average performance gain across audited work" },
];

const githubProjects = [
  {
    title: "Claim-check",
    stack: "React • Vite • Express • AI verification",
    image: "/images/IMG_3099.png",
    description: "A health-literacy app that helps people evaluate online health claims with a guided workflow and AI-assisted evidence review.",
    repoUrl: "https://github.com/Gloweeyahh/Claim-check",
    liveUrl: "https://claimcheck-1.netlify.app",
    profileUrl: "https://github.com/Gloweeyahh",
  },
  {
    title: "Applyd",
    stack: "HTML • CSS • JavaScript • Local storage",
    image: "/images/IMG_3098.png",
    description: "A practical job application tracker built while actively job hunting, designed to help manage pipeline, deadlines, and follow-ups without extra complexity.",
    repoUrl: "https://github.com/Gloweeyahh/Applyd",
    liveUrl: "https://gloweeyahh.github.io/Applyd",
    profileUrl: "https://github.com/Gloweeyahh",
  },
  {
    title: "HealthSpec",
    stack: "Next.js • TypeScript • Supabase • Netlify",
    image: "/images/IMG_3106.png",
    description: "A developer-facing health API conformance and interoperability lab designed to test, compare, and validate data integrations.",
    repoUrl: "https://github.com/Gloweeyahh/Healthspec",
    liveUrl: "https://gloria-healthspec.netlify.app",
    profileUrl: "https://github.com/Gloweeyahh",
  },
];

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <BackButton />
      </div>

      <section className="min-h-screen pt-24 flex items-center justify-center bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">
            DESIGNER • FRONTEND ENGINEER • PRODUCT THINKER
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Hi, I’m Gloria Emeka. I design and build clean websites that look great and immediately show your users why your product matters.
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            I help founders and teams turn ideas into websites and digital experiences that feel clear, credible, and easy to trust.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            <span className="rounded-full border border-gray-200 dark:border-white/10 px-3 py-2">React</span>
            <span className="rounded-full border border-gray-200 dark:border-white/10 px-3 py-2">TypeScript</span>
            <span className="rounded-full border border-gray-200 dark:border-white/10 px-3 py-2">Tailwind</span>
            <span className="rounded-full border border-gray-200 dark:border-white/10 px-3 py-2">UX strategy</span>
            <span className="rounded-full border border-gray-200 dark:border-white/10 px-3 py-2">Performance</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link to="/work" className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-500">
              View projects
            </Link>
            <a
              href="/Gloria_Emeka_Final_Optimized_CV.docx"
              download
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950 px-6 py-3 font-bold text-gray-900 dark:text-white transition hover:border-yellow-400"
            >
              Download CV
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl border border-gray-300 dark:border-white/20 bg-transparent px-6 py-3 font-bold text-gray-900 dark:text-white transition hover:border-yellow-400">
              Book a call
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
            <a href="https://www.linkedin.com/in/gloria-emeka?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-yellow-400">
              LinkedIn
            </a>
            <a href="mailto:glowemeka@gmail.com" className="underline underline-offset-4 hover:text-yellow-400">
              glowemeka@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-950 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.label} className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-black p-8 text-center shadow-sm">
                <p className="text-4xl font-black text-gray-900 dark:text-white">{item.value}</p>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">GitHub showcase</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            A few repositories that show how I build, practical, intentional, and focused on solving real-world problems.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {githubProjects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-8 shadow-xl overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="mb-5 h-44 w-full rounded-2xl border border-gray-200 object-cover object-top dark:border-white/10"
                style={{ objectPosition: "center top" }}
              />
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">{project.stack}</p>
              <h3 className="mt-5 text-2xl font-black text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-500"
                >
                  Open repo
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 px-4 py-2 text-sm font-bold text-gray-900 dark:text-white transition hover:border-yellow-400"
                >
                  Live site
                </a>
                <a
                  href={project.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 px-4 py-2 text-sm font-bold text-gray-900 dark:text-white transition hover:border-yellow-400"
                >
                  GitHub profile
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Why work with me</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
            Because I handle everything from initial strategy and design to final code, your project stays cohesive, with no lost-in-translation moments from start to finish.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {strengths.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">{item.title}</p>
              <p className="mt-5 text-lg text-gray-700 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950 p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">What I build</p>
              <h3 className="mt-4 text-3xl font-black text-gray-900 dark:text-white">Websites that look professional, build instant trust, and gently guide people to take action.</h3>
            </div>
            <Link to="/work" className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-500">
              Explore projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
