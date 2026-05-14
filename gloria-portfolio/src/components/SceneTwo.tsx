import { useEffect } from "react";
import gsap from "../lib/gsap";
import { content } from "../data/content";

export default function SceneTwo() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".case");

    sections.forEach((el: any) => {

      gsap.fromTo(
        el,
        { opacity: 0.2, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: el,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section className="py-32 space-y-32">
      {content.cases.map((c, i) => (
        <div key={i} className="case p-10 bg-slate rounded-2xl mx-10">
          <h2 className="text-3xl font-bold text-gold">{c.title}</h2>
          <p className="text-gray-400 mt-2">{c.desc}</p>
          <div className="text-5xl mt-6 font-bold">{c.metric}</div>
        </div>
      ))}
    </section>
  );
}
