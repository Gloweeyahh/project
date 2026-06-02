import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 80%",
        },
      });

      gsap.from(".work-hero", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".work-card"));

    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `translateY(-6px) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  const filters = ["all", "fintech", "ecommerce", "saas"];
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    if (filter === "all") {
      return;
    }

    const nextProject = projects.find((project) => project.category === filter);
    if (nextProject && nextProject.slug !== selectedProject.slug) {
      setSelectedProject(nextProject);
    }
  }, [filter, selectedProject]);

  return (
    <>
      <section ref={containerRef} className="work-hero min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-10 py-32">
        <div className="max-w-5xl mx-auto mb-12">
          <BackButton />
        </div>
        <div className="max-w-5xl mx-auto text-center mb-20 work-hero">

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Work That Doesn't Just Look Good —
            <span className="text-[#D4AF37]"> It Converts.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg">
            Selected builds where design met revenue, performance, and obsession.
          </p>
        </div>

        <div className={`max-w-7xl mx-auto grid gap-16 ${filter === "all" ? "lg:grid-cols-1" : "lg:grid-cols-[1.4fr_minmax(360px,420px)]"}`}>
          <div>
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    filter === item
                      ? "bg-[#D4AF37] text-black"
                      : "border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="work-grid grid md:grid-cols-2 gap-8 px-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(project.caseRoute)}
                  className={`work-card group border rounded-xl p-6 hover:border-[#D4AF37] transition relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-gray-300 dark:border-gray-800 cursor-pointer ${
                    (filter !== "all" && selectedProject.slug === project.slug) ? "shadow-2xl border-[#D4AF37] bg-white dark:bg-slate-900" : ""
                  }`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#D4AF37] to-transparent transition"></div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500 mb-4">{project.client}</p>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.problem}</p>
                  <div className="text-yellow-400 text-5xl font-bold mb-4">{project.metrics[0].value}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Click the card to view the full case study.</p>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm transition hover:bg-gray-900"
                    >
                      Preview
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.siteUrl, "_blank", "noopener,noreferrer");
                      }}
                      className="px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 text-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    >
                      {project.siteLabel}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">{project.siteNote}</p>
                </div>
              ))}
            </div>
          </div>
          {filter !== "all" && (
            <aside className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 p-10 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Preview</p>
              <h2 className="mt-4 text-4xl font-black text-gray-900 dark:text-white">{selectedProject.title}</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">{selectedProject.solution}</p>
              <div className="mt-8 grid gap-4">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">{metric.label}</p>
                    <p className="mt-2 text-3xl font-bold text-[#D4AF37]">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 space-y-4">
                <button
          
          l99
          \//</div>type="button"
                  onClick={() => navigate(selectedProject.caseRoute)}
                  className="w-full rounded-3xl bg-[#D4AF37] px-6 py-4 text-black font-bold transition hover:bg-yellow-500"
                >
                  View Case Study
                </button>
                <button
                  type="button"
                  onClick={() => window.open(selectedProject.siteUrl, "_blank", "noopener,noreferrer")}
                  className="w-full rounded-3xl border border-gray-300 dark:border-white/20 px-6 py-4 text-gray-900 dark:text-white transition hover:border-[#D4AF37]"
                >
                  Open Live Site
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{selectedProject.siteNote}</p>
            </aside>
          )}
        </div>
      </section>
    </>
  );
}
