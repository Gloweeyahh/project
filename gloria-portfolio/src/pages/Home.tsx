import { Link } from "react-router-dom";
import GloreProject from "../components/GloreProject";
import BackButton from "../components/BackButton";
import { content } from "../data/content";

export default function Home() {
  return (
    <main className="portfolio-page portfolio-home" id="main-content">
      <div className="portfolio-container portfolio-back"><BackButton /></div>
      <section className="portfolio-hero portfolio-container">
        <div className="hero-copy">
          <p className="portfolio-eyebrow">Gloria Emeka / Front-End Developer & UI Engineer</p>
          <h1>Gloria Emeka</h1>
          <p className="hero-tagline">Thoughtful interfaces. <span>Built to work.</span></p>
          <p className="portfolio-lead">I build responsive web experiences with React, TypeScript, and a careful eye for the details that make an interface feel right.</p>
          <div className="portfolio-actions">
            <Link className="portfolio-button" to="/work">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="portfolio-text-link" to="/resume">View resume <span aria-hidden="true">→</span></Link>
          </div>
          <p className="hero-location">{content.location}</p>
        </div>
        <aside className="hero-index" aria-label="Portfolio overview">
          <p>Design sensitivity.<br />Engineering discipline.</p>
          <div className="hero-index-row"><span>01</span><a href="#selected-work">Selected work</a><span aria-hidden="true">↘</span></div>
          <div className="hero-index-row"><span>02</span><a href="#recruiter">For hiring teams</a><span aria-hidden="true">↘</span></div>
          <div className="hero-index-row"><span>03</span><Link to="/contact?intent=hiring">Start a conversation</Link><span aria-hidden="true">↗</span></div>
        </aside>
      </section>
      <section className="portfolio-container portfolio-section" id="selected-work" aria-labelledby="selected-work-title">
        <div className="portfolio-section-heading"><div><p className="portfolio-eyebrow">Less pitch. More proof.</p><h2 id="selected-work-title">See the work.</h2></div><Link className="portfolio-text-link" to="/work">All projects <span aria-hidden="true">→</span></Link></div>
        <GloreProject />
      </section>
      <section className="portfolio-container portfolio-section" id="recruiter" aria-labelledby="recruiter-title">
        <div className="recruiter-brief">
          <div><p className="portfolio-eyebrow">The recruiter brief</p><h2 id="recruiter-title">Your next teammate,<br /><em>at a glance.</em></h2><p className="portfolio-lead">Front-end development, UI engineering, and digital education. Here’s a direct path to the work, skills, and background you need to evaluate my fit.</p><div className="portfolio-actions"><Link className="portfolio-button" to="/contact?intent=hiring">Discuss a role <span aria-hidden="true">↗</span></Link><Link className="portfolio-text-link" to="/resume">Experience & resume <span aria-hidden="true">→</span></Link></div></div>
          <dl className="recruiter-facts"><div><dt>Core toolkit</dt><dd>React · TypeScript · Tailwind CSS</dd></div><div><dt>Interface craft</dt><dd>Responsive layouts · UI systems · GSAP & Framer Motion</dd></div><div><dt>Work to explore</dt><dd>E-commerce · Fintech · SaaS</dd></div><div><dt>Based in</dt><dd>Abuja, Nigeria · Serving globally</dd></div></dl>
        </div>
      </section>
      <footer className="portfolio-footer portfolio-container"><p>Gloria Emeka <span>Front-End Developer & UI Engineer</span></p><Link className="portfolio-text-link" to="/contact?intent=hiring">Let’s talk <span aria-hidden="true">↗</span></Link></footer>
    </main>
  );
}
