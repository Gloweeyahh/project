import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import GloreProject from "../components/GloreProject";
import BackButton from "../components/BackButton";

const filters = [{ value: "all", label: "All projects" }, { value: "ecommerce", label: "E-commerce" }, { value: "fintech", label: "Fintech" }, { value: "saas", label: "SaaS" }];

export default function Work() {
  const [filter, setFilter] = useState("all");
  const otherProjects = projects.filter((project) => project.slug !== "ecommerce" && (filter === "all" || project.category === filter));

  return (
    <main className="portfolio-page" id="main-content">
      <div className="portfolio-container portfolio-work">
        <div className="portfolio-back"><BackButton /></div>
        <header className="work-heading">
        <p className="portfolio-eyebrow">Selected work / Gloria Emeka</p>
        <h1>Built with intention.<br /><em>Ready to explore.</em></h1>
        <p className="portfolio-lead">A closer look at my web projects. Start with Gloré Classique, then explore fintech and SaaS experiences.</p>
        </header>
        <div className="work-filters" role="group" aria-label="Filter projects by category">{filters.map((item) => <button key={item.value} type="button" aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}</button>)}</div>
        <div aria-live="polite" aria-atomic="true" className="sr-only">{(filter === "all" || filter === "ecommerce" ? 1 : 0) + otherProjects.length} projects shown</div>
        {(filter === "all" || filter === "ecommerce") && <GloreProject priority />}
        <div className="other-projects">{otherProjects.map((project) => <article className="other-project" key={project.slug}><p className="portfolio-eyebrow">{project.category} / {project.client}</p><h2>{project.title}</h2><p>{project.solution}</p><div className="portfolio-actions"><Link className="portfolio-text-link" to={project.caseRoute}>Project story <span aria-hidden="true">→</span></Link><a className="portfolio-text-link" href={project.siteUrl} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div><p className="portfolio-note">{project.siteNote}</p></article>)}</div>
        <section className="work-hiring"><div><p className="portfolio-eyebrow">Looking for your next developer?</p><h2>Let’s talk about the role.</h2></div><div className="portfolio-actions"><Link className="portfolio-button" to="/contact?intent=hiring">Start a conversation <span aria-hidden="true">↗</span></Link><Link className="portfolio-text-link" to="/resume">View resume <span aria-hidden="true">→</span></Link></div></section>
      </div>
    </main>
  );
}
