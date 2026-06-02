import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Landing Pages",
    description: "High-conversion pages that sell before you speak.",
    to: "/case-study/ecommerce",
    label: "See landing work",
  },
  {
    title: "Business Websites",
    description: "Authority-driven brand experiences.",
    to: "/case-study/fintech",
    label: "See business work",
  },
  {
    title: "Course Platforms",
    description: "Education systems that feel premium and addictive.",
    to: "/work",
    label: "Explore course work",
  },
  {
    title: "UI Engineering",
    description: "Complex interfaces made simple and cinematic.",
    to: "/work",
    label: "Explore interface work",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-hero", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.4)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-10 py-32 space-y-20">
        <div className="mb-10">
          <BackButton />
        </div>
        <div className="service-hero">
          <h1 className="text-6xl font-bold">
            What I <span className="text-yellow-400">Build</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-3xl">
            Each service is designed to support growth, trust, and a premium brand experience.
          </p>
        </div>

        <div className="services-grid grid md:grid-cols-2 gap-10">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="service-card p-8 border border-gray-300 dark:border-white/20 rounded-2xl bg-white dark:bg-slate-950 transition hover:shadow-2xl hover:border-[#D4AF37]"
            >
              <h2 className="text-2xl mb-2 text-gray-900 dark:text-white">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <span className="text-sm font-bold text-[#D4AF37]">{service.label} →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
