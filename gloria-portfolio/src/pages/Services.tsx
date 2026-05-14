import Nav from "../components/Nav";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".service-hero", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out"
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 80%"
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.4)"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-10 py-32 space-y-20">
        <h1 className="text-6xl font-bold">
          What I <span className="text-yellow-400">Build</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 border border-gray-300 dark:border-white/20 rounded-2xl bg-white dark:bg-slate-950">
            <h2 className="text-2xl mb-2 text-gray-900 dark:text-white">Landing Pages</h2>
            <p className="text-gray-600 dark:text-gray-400">High-conversion pages that sell before you speak.</p>
          </div>

          <div className="p-8 border border-gray-300 dark:border-white/20 rounded-2xl bg-white dark:bg-slate-950">
            <h2 className="text-2xl mb-2 text-gray-900 dark:text-white">Business Websites</h2>
            <p className="text-gray-600 dark:text-gray-400">Authority-driven brand experiences.</p>
          </div>

          <div className="p-8 border border-gray-300 dark:border-white/20 rounded-2xl bg-white dark:bg-slate-950">
            <h2 className="text-2xl mb-2 text-gray-900 dark:text-white">Course Platforms</h2>
            <p className="text-gray-600 dark:text-gray-400">Education systems that feel premium and addictive.</p>
          </div>

          <div className="p-8 border border-gray-300 dark:border-white/20 rounded-2xl bg-white dark:bg-slate-950">
            <h2 className="text-2xl mb-2 text-gray-900 dark:text-white">UI Engineering</h2>
            <p className="text-gray-600 dark:text-gray-400">Complex interfaces made simple and cinematic.</p>
          </div>
        </div>
      </div>
    </>
  );
}
