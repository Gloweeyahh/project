import { Link, useParams } from "react-router-dom";
import { proposals } from "../data/proposals";
import BackButton from "../components/BackButton";

type ProposalDetail = {

  executive: string;
  goals: string[];
  scope: string[];
  deliverables: string[];
  timeline: { phase: string; detail: string }[];
  investment: string;
};

const proposalDetails: Record<string, ProposalDetail> = {
  "landing-page": {
    executive: "A conversion-first landing page designed to capture interest, demonstrate value, and drive fast visitor action.",
    goals: [
      "Convert visitors into qualified leads or signups.",
      "Present a clear value proposition above the fold.",
      "Build trust with social proof and benefit-led storytelling.",
      "Guide visitors to a single high-value action.",
    ],
    scope: [
      "Discovery and strategy to align messaging with your target audience.",
      "Premium UI design for a mobile-first landing experience.",
      "Implement high-performance interactions and speed optimization.",
      "Responsive templates for desktop, tablet, and mobile.",
      "Analytics-ready CTA tracking and lead capture support.",
    ],
    deliverables: [
      "Custom landing page design and build.",
      "Headline, hero and conversion section architecture.",
      "Trust, proof, and feature sections to support decision-making.",
      "Integrated contact form or booking CTA.",
      "Launch-ready production deployment guidance.",
    ],
    timeline: [
      { phase: "Week 1", detail: "Strategy, audience mapping, and content outline." },
      { phase: "Week 2", detail: "UI design, prototype review, and content refinement." },
      { phase: "Week 3", detail: "Frontend development, responsive build, and quality testing." },
      { phase: "Week 4", detail: "Launch support, final review, and optimization." },
    ],
    investment: "This proposal is scoped for a premium landing page build with conversion optimization and launch support. Investment will be provided after we align on content scope and launch requirements.",
  },
  "business-website": {
    executive: "A branded business website that positions your firm as an expert, converts visitors into client conversations, and supports long-term credibility.",
    goals: [
      "Showcase your services clearly and professionally.",
      "Build authority through differentiated storytelling.",
      "Enable easy discovery of your core offering by buyers.",
      "Turn inquiries into consults with compelling contact pathways.",
    ],
    scope: [
      "Brand-aligned website structure and strategy.",
      "Service, about, and case highlight pages.",
      "Responsive design with polished interactions.",
      "Conversion-focused contact and booking experiences.",
      "SEO-friendly page setup and performance best practices.",
    ],
    deliverables: [
      "Multi-page website architecture and design.",
      "Service page templates, proof sections, and lead forms.",
      "Fast-loading responsive code and accessibility checks.",
      "Editorial guidance for key messaging and calls to action.",
      "Deployment support and quality assurance review.",
    ],
    timeline: [
      { phase: "Week 1", detail: "Brand and service discovery, sitemap, and UX plan." },
      { phase: "Week 2", detail: "Design system, homepage, and service page design." },
      { phase: "Week 3", detail: "Development of core pages, forms, and responsive polish." },
      { phase: "Week 4", detail: "Testing, revisions, launch details, and handoff." },
    ],
    investment: "This scope supports a full business website with polished branding, multiple service pages, and modern conversion flows. Investment details will be scoped to your chosen page count and launch requirements.",
  },
  "course-platform": {
    executive: "A premium course platform experience built to turn visitors into students while making learning pathways intuitive and engaging.",
    goals: [
      "Help learners find the right course quickly.",
      "Make enrollment simple and trustworthy.",
      "Deliver a polished course presentation with credibility cues.",
      "Support seamless onboarding and retention awareness.",
    ],
    scope: [
      "Student-focused landing pages and curriculum previews.",
      "Clear course storyline, outcomes, and pricing display.",
      "Enrollment and checkout funnel support.",
      "Responsive learning experience across devices.",
      "Retention-focused support content and success signals.",
    ],
    deliverables: [
      "Course platform homepage and catalog presentation.",
      "Curriculum and lesson overview sections.",
      "Payment/enrollment flow scaffolding.",
      "Student success sections and testimonials.",
      "Performance review and launch readiness.",
    ],
    timeline: [
      { phase: "Week 1", detail: "Course positioning, student persona definition, and wireframes." },
      { phase: "Week 2", detail: "Design for course pages, pricing, and enrollment flow." },
      { phase: "Week 3", detail: "Build core experience, integrate checkout, and refine UX." },
      { phase: "Week 4", detail: "Review, launch prep, and go-live support." },
    ],
    investment: "This proposal is scoped for a course platform experience that balances enrollment, trust, and learner clarity. Final investment is set after we confirm the enrollment flow and platform integrations needed.",
  },
  "saas-dashboard": {
    executive: "A modern SaaS dashboard that simplifies complex product data, improves onboarding clarity, and reinforces retention-oriented workflows.",
    goals: [
      "Surface the most important product data clearly.",
      "Guide users through onboarding and key actions.",
      "Create intuitive navigation for recurring workflows.",
      "Design a dashboard that feels fast and reliable.",
    ],
    scope: [
      "Metrics-first dashboard design and UX layout.",
      "User onboarding patterns and interface guidance.",
      "Responsive admin-style dashboard experience.",
      "Drag, filter, and information hierarchy best practices.",
      "Performance and interaction polish for product trust.",
    ],
    deliverables: [
      "Core dashboard interface pages and components.",
      "User onboarding and progress guidance panels.",
      "High-level analytics and data visualization sections.",
      "Responsive and accessible UI components.",
      "QA testing and release support.",
    ],
    timeline: [
      { phase: "Week 1", detail: "Product goal mapping, dashboard wireframes, and data flow planning." },
      { phase: "Week 2", detail: "Visual system design, component library, and interaction details." },
      { phase: "Week 3", detail: "Frontend implementation, responsive layout, and testing." },
      { phase: "Week 4", detail: "Refinement, user validation, and deployment guidance." },
    ],
    investment: "This proposal focuses on building a polished SaaS experience with strong product clarity and retention-oriented interactions. Investment will be aligned with the depth of dashboard features and integration complexity.",
  },
};

export default function ProposalPage() {
  const { slug } = useParams();
  const proposal = proposals.find((item) => item.slug === slug);
  const details: ProposalDetail = proposalDetails[slug ?? ""] ?? {
    executive: proposal?.overview ?? "A premium digital experience built for performance and conversion.",
    goals: ["Deliver a polished product experience.", "Support clear customer journeys.", "Launch with speed and quality."],
    scope: proposal?.features ?? [],
    deliverables: proposal?.features ?? [],
    timeline: [
      { phase: "Week 1", detail: "Discovery and planning." },
      { phase: "Week 2", detail: "Design and review." },
      { phase: "Week 3", detail: "Build and polish." },
    ],
    investment: "Investment details are tailored to your specific scope and will be provided during our discovery conversation.",
  };

  if (!proposal) {
    return (
      <section className="py-24 px-6 lg:px-16 bg-white dark:bg-black text-slate-900 dark:text-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 text-left">
            <BackButton />
          </div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Proposal not found</p>

          <h1 className="mt-6 text-4xl font-bold">We couldn't locate that proposal.</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-8">
            Please choose another proposal from the full proposal library or return to the proposals page.
          </p>
          <Link
            to="/proposals"
            className="mt-10 inline-flex rounded-full bg-black text-white px-6 py-3 font-semibold"
          >
            View all proposals
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 lg:px-16 bg-white dark:bg-black text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <BackButton />
        </div>
        <header className="mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Full proposal</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold">{proposal.title}</h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-8 max-w-3xl">{details.executive}</p>
        </header>


        <div className="grid gap-10 lg:grid-cols-[1.7fr_0.8fr] items-start">
          <article className="space-y-14">
            <section className="rounded-[2rem] bg-slate-50/95 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-10 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6">Executive summary</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-8">
                {proposal.summary} This proposal is designed to make the project easier to launch, simpler for the user to understand, and stronger at converting visitors into meaningful outcomes.
              </p>
            </section>

            <section className="rounded-[2rem] bg-slate-50/95 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-10 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6">Project goals</h2>
              <ul className="grid gap-4">
                {details.goals.map((goal) => (
                  <li key={goal} className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                    <p className="font-semibold text-slate-900 dark:text-white">{goal}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] bg-slate-50/95 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-10 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6">Scope of work</h2>
              <div className="space-y-4">
                {details.scope.map((item) => (
                  <div key={item} className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                    <p className="leading-7 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] bg-slate-50/95 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-10 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6">Deliverables</h2>
              <ul className="grid gap-4">
                {details.deliverables.map((deliverable) => (
                  <li key={deliverable} className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                    <p className="leading-7 text-slate-700 dark:text-slate-300">{deliverable}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] bg-slate-50/95 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-10 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6">Timeline & phases</h2>
              <div className="space-y-4">
                {details.timeline.map((step) => (
                  <div key={step.phase} className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">{step.phase}</p>
                    <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-8">
            <div className="rounded-[2rem] bg-slate-50/95 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Key features</p>
              <ul className="mt-6 space-y-4">
                {proposal.features.map((feature) => (
                  <li key={feature} className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
                    <p className="text-slate-900 dark:text-white">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-black text-white p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4">Investment & next step</h3>
              <p className="leading-7 text-slate-100/90">{details.investment}</p>
              <Link
                to={`/contact?plan=${encodeURIComponent(proposal.title)}`}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] text-black px-6 py-4 font-semibold transition hover:bg-yellow-400"
              >
                Book a consultation
              </Link>
            </div>

            <div className="rounded-[2rem] bg-slate-50/95 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Why it works</p>
              <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
                This proposal combines strategic positioning, thoughtful design, and conversion-first development to launch a product that performs from day one.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
