import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-hero", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: ".process-timeline",
          start: "top 80%",
        },
        opacity: 0,
        x: -60,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".process-metric", {
        scrollTrigger: {
          trigger: ".process-metrics",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.4)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={containerRef} className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-10 py-32 space-y-20">
        <div className="max-w-5xl mx-auto mb-12">
          <BackButton />
        </div>

        <div className="max-w-5xl mx-auto text-center process-hero">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Process</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            My process is built to move founders from idea to launch.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-6">
            Every step is designed to surface clarity, reduce risk, and create sites that scale.
          </p>
        </div>

        <div className="process-timeline px-6 space-y-12 mt-20">
          <h1 className="text-6xl font-bold text-center text-gray-900 dark:text-white">
            The <span className="text-yellow-400">Process</span>
          </h1>

          <div className="space-y-10">
            <div className="process-step border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-[#D4AF37] transition bg-white dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">1. Discovery & Clarity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We uncover audience intent, business goals, and high-value conversion moments.
              </p>
              <div className="text-sm text-[#D4AF37] mt-3">Research-led foundation for every design decision.</div>
            </div>

            <div className="process-step border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-[#D4AF37] transition bg-white dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2. Strategy & Journey</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We map flow, positioning, and messaging so each page moves visitors toward action.
              </p>
              <div className="text-sm text-[#D4AF37] mt-3">A strategic path from awareness to conversion.</div>
            </div>

            <div className="process-step border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-[#D4AF37] transition bg-white dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">3. Design Systems & Motion</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We build systems that scale visually and bring them to life with thoughtful motion.
              </p>
              <div className="text-sm text-[#D4AF37] mt-3">Design that feels premium and works predictably.</div>
            </div>

            <div className="process-step border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-[#D4AF37] transition bg-white dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">4. Build & Launch</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We deliver a polished, optimized website and hand off documentation for growth.
              </p>
              <div className="text-sm text-[#D4AF37] mt-3">Everything is ready to launch with confidence.</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-32 mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Measurable outcomes, not guesses</h2>
        </div>

        <div className="process-metrics grid md:grid-cols-3 gap-8 px-6">
          <div className="process-metric text-center rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-10">
            <h3 className="text-5xl text-[#D4AF37] font-bold">+67%</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Conversion uplift</p>
          </div>
          <div className="process-metric text-center rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-10">
            <h3 className="text-5xl text-[#D4AF37] font-bold">2.4s</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Load optimization</p>
          </div>
          <div className="process-metric text-center rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-10">
            <h3 className="text-5xl text-[#D4AF37] font-bold">100</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Lighthouse score</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-3xl bg-[#D4AF37] px-10 py-4 text-black font-bold transition hover:bg-yellow-500"
          >
            Book the process walkthrough
          </Link>
        </div>
      </section>
    </>
  );
}

