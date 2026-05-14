import { useEffect } from "react";

import gsap from "../lib/gsap";
import { content } from "../data/content";

export default function Hero() {
  useEffect(() => {

    gsap.from(".hero-text span", {
      y: 80,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out"
    });
  }, []);

  return (
    <section className="min-h-screen grid md:grid-cols-2 p-10 items-center">
      
      <div className="hero-text">
        <h1 className="text-6xl md:text-8xl font-bold font-hero">
          {content.name}
        </h1>

        <p className="text-xl text-gray-800 dark:text-gray-300 mt-4">
          {content.tagline}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-500 mt-2">
          {content.subtitle}
        </p>
      </div>

      <div className="glow p-6 rounded-2xl bg-slate">
        <h2 className="text-amber-400 dark:text-gold text-2xl font-bold">ScaleFlow SaaS</h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2">Conversion-driven UI system</p>

        <button className="mt-6 bg-gold text-black px-6 py-3 rounded-xl">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}
