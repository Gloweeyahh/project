import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import GlassCard from "../components/ui/GlassCard";
import BrowserMockup from "../components/ui/BrowserMockup";
import { content } from "../data/content";

export default function HeroScene() {
  const root = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-char", {
        y: 120,
        opacity: 0,
        rotateX: -90,
        stagger: 0.04,
        duration: 1.2,
        ease: "back.out(1.7)"
      });

      gsap.from(".hero-copy", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5
      });

      gsap.from(".hero-mockup", {
        x: 180,
        opacity: 0,
        scale: 0.95,
        duration: 1.3,
        ease: "power3.out"
      });

      gsap.to(".metric-float", {
        y: -12,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".testimonial-card", {
        boxShadow: "0 0 60px rgba(212,175,55,0.18)",
        duration: 2,
        repeat: -1,
        yoyo: true
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;

    mockupRef.current.style.transform =
      `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const resetParallax = () => {
    if (!mockupRef.current) return;
    mockupRef.current.style.transform =
      "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  };

  const name = "Gloria Emeka";

  return (
    <Section className="min-h-screen flex items-center">
      <div
        ref={root}
        className="grid lg:grid-cols-[2fr_3fr] gap-12 items-center w-full"
      >
        <div>
          <h1 className="text-[clamp(4rem,10vw,9rem)] font-black leading-[0.9] tracking-[-0.05em]">
            {name.split("").map((char, i) => (
              <span
                key={i}
                className={`hero-char inline-block ${
                  char === " " ? "w-6" : ""
                } ${char !== " " ? "text-[var(--text-primary)]" : ""}`}
              >
                {char}
              </span>
            ))}
          </h1>

          <div className="hero-copy">
            <p className="text-2xl text-[var(--text-primary)] mt-8 max-w-xl">
              {(content as any).hero?.title}

            </p>

            <p className="text-lg text-[var(--text-muted)] mt-4">
              {(content as any).hero?.subtitle}

            </p>

            <p className="text-sm uppercase tracking-[0.2em] text-[var(--gold)] mt-6">
              {(content as any).hero?.location}

            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>Elevate My Brand</Button>
              <Button
                className="bg-transparent border border-white/20 text-white"
                style={{ background: "transparent", color: "white" }}
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>

        <div
          className="relative hero-mockup"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetParallax}
        >
          <div className="metric-float absolute -top-6 left-6 z-20 rounded-full px-4 py-2 text-sm font-bold bg-[var(--gold)] text-black shadow-xl">
            +67% Signups
          </div>

          <div className="metric-float absolute top-1/2 -right-6 z-20 rounded-full px-4 py-2 text-sm font-bold bg-[var(--gold)] text-black shadow-xl">
            100 Lighthouse
          </div>

          <div className="metric-float absolute -bottom-6 left-20 z-20 rounded-full px-4 py-2 text-sm font-bold bg-[var(--gold)] text-black shadow-xl">
            2.4s Load
          </div>

          <div ref={mockupRef} className="transition-transform duration-300">
            <BrowserMockup>
              <div className="min-h-[500px] p-10 flex flex-col justify-center">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  ScaleFlow
                </h2>

                <p className="text-[var(--text-muted)] mt-4 max-w-md">
                  Scale your startup without the engineering bottlenecks.
                </p>

                <div className="mt-10">
                  <button className="px-6 py-3 rounded-xl bg-[var(--gold)] text-black font-bold shadow-lg">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </BrowserMockup>
          </div>

          <div className="testimonial-card absolute bottom-10 -left-10 max-w-xs">
            <GlassCard>
              <p className="italic text-sm leading-7">
                "Gloria turned our MVP into a conversion machine."
              </p>
              <p className="text-[var(--gold)] text-sm mt-4 font-semibold">
                — Founder, ScaleUp
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </Section>
  );
}
