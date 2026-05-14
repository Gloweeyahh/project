import Nav from "../components/Nav";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [filter, setFilter] = useState("all");
  const containerRef = useRef(null);

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
        }
      });

      gsap.from(".work-hero", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".work-card"));

    cards.forEach((card) => {

      card.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.transform = `translateY(-6px) rotateX(${(y - rect.height/2)/20}deg) rotateY(${(x - rect.width/2)/20}deg)`;
      });

      card.addEventListener("mouseleave", () => {
        (card as HTMLElement).style.transform = "translateY(0) rotateX(0) rotateY(0)";
      });
    });
  }, []);
  return (
    <>
      <Nav />
      <section ref={containerRef} className="work-hero min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-10 py-32 space-y-32">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
            Work That Doesn't Just Look Good —
            <span className="text-[#D4AF37]"> It Converts.</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg">
            Selected builds where design met revenue, performance, and obsession.
          </p>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          Selected <span className="text-yellow-400">Work</span>
        </h1>

        <div className="flex gap-3 justify-center mb-10">
          {["all", "fintech", "ecommerce", "saas"].map((item) => (
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

        <div className="work-card group border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-[#D4AF37] transition relative overflow-hidden bg-white dark:bg-slate-950">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#D4AF37] to-transparent transition"></div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Fintech Onboarding Redesign</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Reduced friction in signup flow using trust-first UI architecture.
          </p>
          <div className="text-yellow-400 text-5xl font-bold mb-6">+67% signups</div>
          <a 
            href="https://digital-ascension-group.netlify.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-gray-900 font-semibold rounded-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 shadow-lg group-hover:from-yellow-500 group-hover:to-orange-500"
          >
            Live Demo →
          </a>
          <div className="flex gap-2 text-xs text-[#D4AF37]">
            <span>+ Conversion Impact</span>
            <span>•</span>
            <span>Performance Optimized</span>
          </div>
        </div>

        <div className="work-card group border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-[#D4AF37] transition relative overflow-hidden bg-white dark:bg-slate-950">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#D4AF37] to-transparent transition"></div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">E-commerce Conversion System</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Redesigned product storytelling + checkout psychology layer.
          </p>
          <div className="text-yellow-400 text-5xl font-bold">+32% AOV</div>
          <div className="flex gap-2 text-xs text-[#D4AF37]">
            <span>+ Conversion Impact</span>
            <span>•</span>
            <span>Performance Optimized</span>
          </div>
        </div>

        <div className="work-card group border border-gray-300 dark:border-gray-800 rounded-xl p-6 hover:border-[#D4AF37] transition relative overflow-hidden bg-white dark:bg-slate-950">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#D4AF37] to-transparent transition"></div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">SaaS Performance Overhaul</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Rebuilt dashboard UX + Core Web Vitals optimization.
          </p>
          <div className="text-yellow-400 text-5xl font-bold">100 Lighthouse</div>
        <div className="flex gap-2 text-xs text-[#D4AF37]">
            <span>+ Conversion Impact</span>
            <span>•</span>
            <span>Performance Optimized</span>
          </div>
        </div>

        </div>
      </section>

    </>
  );
}
