import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import GloreProject from "../components/GloreProject";

const decisions = [
  { title: "Discovery without the guesswork", text: "Search and category navigation give shoppers direct routes into the collection rather than requiring them to browse every product." },
  { title: "Details at the decision point", text: "The product card brings imagery, color options, price, remaining stock, and the add-to-cart action together. The supplied preview shows these details in one mobile shopping flow." },
  { title: "A brand that feels consistent", text: "Cocoa typography, blush surfaces, and warm accents carry the Gloré Classique identity across navigation and product presentation." },
];

export default function EcomCase() {
  return (
    <main className="portfolio-page" id="main-content">
      <div className="portfolio-container portfolio-work">
        <div className="portfolio-back"><BackButton /></div>
        <Link className="portfolio-text-link" to="/work"><span aria-hidden="true">←</span> Back to selected work</Link>
        <div className="case-heading"><p className="portfolio-eyebrow">Project story / E-commerce</p><h1>Gloré Classique.<br /><em>Brand meets browsing.</em></h1><p className="portfolio-lead">A bag and accessories storefront with a warm visual identity and practical details that help shoppers choose.</p></div>
        <GloreProject priority showStory={false} />
        <section className="case-overview portfolio-section" aria-labelledby="case-overview-title"><div><p className="portfolio-eyebrow">The brief</p><h2 id="case-overview-title">Make the collection<br />easy to shop.</h2></div><div><p>Bring a curated product collection into a clear, mobile-focused storefront. Keep product discovery, variant selection, and shopping actions visible without losing the brand’s soft-luxury character.</p><p className="portfolio-note">Scope shown: storefront navigation, product presentation, search, color variants, stock visibility, and cart interactions. No revenue or conversion uplift is claimed.</p></div></section>
        <section className="case-decisions" aria-labelledby="case-decisions-title"><p className="portfolio-eyebrow">Interface decisions</p><h2 id="case-decisions-title">The details that matter.</h2>{decisions.map((decision, index) => <article key={decision.title}><span className="decision-number">0{index + 1}</span><h3>{decision.title}</h3><p>{decision.text}</p></article>)}</section>
        <section className="work-hiring"><div><p className="portfolio-eyebrow">Evaluate the experience</p><h2>Explore it. Then let’s talk.</h2><p className="portfolio-note">The screenshot is a supplied preview, not an interactive store. Current prices and availability may differ.</p></div><div className="portfolio-actions"><a className="portfolio-button" href="https://gloreclasique.netlify.app/" target="_blank" rel="noopener noreferrer">Open live store <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a><Link className="portfolio-text-link" to="/contact?intent=hiring">Discuss a role <span aria-hidden="true">→</span></Link></div></section>
      </div>
    </main>
  );
}
