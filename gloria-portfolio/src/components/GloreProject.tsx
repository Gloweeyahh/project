import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const project = projects.find((item) => item.slug === "ecommerce")!;

export default function GloreProject({ priority = false, showStory = true }: { priority?: boolean; showStory?: boolean }) {
  return (
    <article className="glore-feature">
      <div className="glore-story">
        <p className="portfolio-eyebrow">Featured project / E-commerce</p>
        <h2>Gloré <em>Classique.</em></h2>
        <p className="glore-description">Soft luxury. Clear shopping decisions. A storefront that brings the brand and the buying journey together.</p>
        <ul className="project-capabilities" aria-label="Storefront features">
          <li>Product search & discovery</li>
          <li>Color options & stock visibility</li>
          <li>Pricing & add-to-cart interactions</li>
        </ul>
        <div className="portfolio-actions">
          <a className="portfolio-button" href={project.siteUrl} target="_blank" rel="noopener noreferrer">Visit live store <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
          {showStory && <Link className="portfolio-text-link" to={project.caseRoute}>Read the project story <span aria-hidden="true">→</span></Link>}
        </div>
        <p className="portfolio-note">Real project preview. Explore the live site to evaluate the experience.</p>
      </div>
      <figure className="glore-preview">
        <div className="glore-preview-label"><span>THE STOREFRONT</span><span>Mobile preview</span></div>
        <div className="glore-image-window">
          <img src="/images/glore-classique-preview.webp" alt="Gloré Classique mobile storefront showing search, a Star Chain Bag, color swatches, pricing, stock, and an Add to cart button." width="760" height="1496" loading={priority ? "eager" : "lazy"} decoding="async" />
        </div>
        <figcaption>Gloré Classique · Supplied storefront screenshot</figcaption>
      </figure>
    </article>
  );
}
