import Nav from "../components/Nav";
import { useEffect, useRef } from "react";
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
        ease: "power4.out"
      });

      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: ".process-timeline",
          start: "top 80%"
        },
        opacity: 0,
        x: -60,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".process-metric", {
        scrollTrigger: {
          trigger: ".process-metrics",
          start: "top 80%"
        },
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.4)"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav />
      <section ref={containerRef} className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-10 py-32 space-y-20">
        <div className="max-w-5xl mx-auto text-center process-hero">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            Design is not random.
            <span className="text-[#D4AF37]"> It is engineered.</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-6">
            My process turns ideas into systems that convert, scale, and perform.
          </p>
        </div>
        
        <div className="process-timeline px-6 space-y-12 mt-20">
          <h1 className="text-6xl font-bold text-center text-gray-900 dark:text-white">
            My <span className="text-yellow-400">Process</span>
          </h1>
          <div className="space-y-10">
            <div className="process-step border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-[#D4AF37] transition bg-white dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">1. Strategy</h3>
              <p className="text-gray-600 dark:text-gray-400">Understand business psychology + user intent.</p>
              <div className="text-sm text-[#D4AF37] mt-3">
                Outcome-driven execution
              </div>
            </div>
            <div className="process-step border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-[#D4AF37] transition bg-white dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2. Design Systems Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400">Build scalable visual architecture, not just UI.</p>
              <div className="text-sm text-[#D4AF37] mt-3">
                Outcome-driven execution
              </div>
            </div>

            <div className="process-step border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-[#D4AF37] transition bg-white dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">3. Motion Layer</h3>
              <p className="text-gray-600 dark:text-gray-400">GSAP-driven storytelling interactions.</p>
              <div className="text-sm text-[#D4AF37] mt-3">
                Outcome-driven execution
              </div>
            </div>

            <div className="process-step border border-gray-300 dark:border-gray-800 p-6 rounded-xl hover:border-[#D4AF37] transition bg-white dark:bg-slate-950">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">4. Conversion Optimization</h3>
              <p className="text-gray-600 dark:text-gray-400">Every pixel earns its place.</p>
              <div className="text-sm text-[#D4AF37] mt-3">
                Outcome-driven execution
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-32 mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Measurable outcomes, not guesses
          </h2>
        </div>
        
        <div className="process-metrics grid md:grid-cols-3 gap-8 px-6">
          <div className="process-metric text-center">
            <h3 className="text-5xl text-[#D4AF37] font-bold">+67%</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Conversion uplift</p>
          </div>
          <div className="process-metric text-center">
            <h3 className="text-5xl text-[#D4AF37] font-bold">2.4s</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Load optimization</p>
          </div>
          <div className="process-metric text-center">
            <h3 className="text-5xl text-[#D4AF37] font-bold">100</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Lighthouse score</p>
          </div>
        </div>
      </section>
    </>
  );
}
