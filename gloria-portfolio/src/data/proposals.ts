export type Proposal = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  features: string[];
  objective: string;
};

export const proposals: Proposal[] = [
  {
    slug: "landing-page",
    title: "Landing Page",
    summary: "A high-conversion landing page for product launches, campaigns, or lead capture.",
    overview:
      "A premium landing page built to engage visitors, highlight your offer, and convert traffic into action.",
    features: [
      "Conversion-first hero and CTA flow",
      "Trust and proof sections for credibility",
      "Fast, responsive mobile-first design",
      "Clear next-step path for bookings or signups",
      "Optimized for speed and user focus",
    ],
    objective: "Turn visitors into qualified leads, signups, and meetings with a conversion-led landing experience.",
  },
  {
    slug: "business-website",
    title: "Business Website",
    summary: "A branded business website for consultancies, agencies, or service firms ready to win bigger clients.",
    overview:
      "A modern business website designed to communicate value, showcase services, and drive discovery conversations.",
    features: [
      "Strategic service pages and messaging",
      "Authority-building about and proof sections",
      "Contact and lead capture triggers",
      "SEO-friendly content structure",
      "Performance-focused frontend delivery",
    ],
    objective: "Build credibility online and convert traffic into leads, meetings, and premium client inquiries.",
  },
  {
    slug: "course-platform",
    title: "Course Platform",
    summary: "A polished course platform to showcase curriculum, enroll learners, and deliver premium online education.",
    overview:
      "A complete course platform experience with student onboarding, enrollment flows, and course discovery built for trust.",
    features: [
      "Course catalog and curriculum previews",
      "Secure checkout and enrollment flow",
      "Student progress and access sections",
      "Responsive learning experience",
      "Conversion-focused landing content",
    ],
    objective: "Create a compelling learning environment that turns prospects into paying students and long-term learners.",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    summary: "A user-friendly SaaS dashboard that makes product analytics, onboarding, and retention feel effortless.",
    overview:
      "A clean SaaS interface built to surface core metrics, guide users through workflows, and highlight the product story.",
    features: [
      "Key metrics and analytics overview",
      "Onboarding and progress guidance",
      "Intuitive navigation and component layout",
      "Responsive data-driven visuals",
      "Retentive interaction design",
    ],
    objective: "Make complex SaaS workflows simple, trustworthy, and engaging for users from first login through retention.",
  },
  {
    slug: "ecommerce-store",
    title: "Ecommerce Store",
    summary: "A polished ecommerce storefront that drives product discovery, trust, and rapid checkout experiences.",
    overview: "A premium storefront designed to showcase products, build trust, and guide customers to purchase with confidence.",
    features: [
      "Product showcase and category flow",
      "Smooth checkout and cart experience",
      "Trust signals and social proof",
      "Mobile-first shopping performance",
      "Conversion-driving product detail pages",
    ],
    objective: "Help customers discover products quickly and complete purchases with confidence through a refined shopping experience.",
  },
  {
    slug: "membership-site",
    title: "Membership Site",
    summary: "A membership platform for gated content, recurring access, and premium community experiences.",
    overview:
      "A membership site built to present benefits clearly, convert recurring members, and keep members engaged over time.",
    features: [
      "Subscription and pricing showcase",
      "Member onboarding flow",
      "Exclusive content access",
      "Retention-focused messaging",
      "Secure recurring payment integration",
    ],
    objective: "Convert your audience into paying members with a compelling, easy-to-navigate membership experience.",
  },
  {
    slug: "creator-portfolio",
    title: "Creator Portfolio",
    summary: "A bold creator portfolio to showcase work, services, and personal brand with clarity and style.",
    overview:
      "A professional portfolio site that positions creators, speakers, consultants, and founders with premium design and storytelling.",
    features: [
      "Showcase galleries and case highlights",
      "Personal story and value proposition",
      "Service offerings and engagement prompts",
      "Strong branding and visual rhythm",
      "Clear contact and booking calls to action",
    ],
    objective: "Give your personal brand a polished digital home that attracts opportunities and converts recruiters or clients.",
  },
  {
    slug: "campaign-microsite",
    title: "Campaign Microsite",
    summary: "A campaign microsite built to launch a product, event, or promotion with impact and urgency.",
    overview:
      "A focused microsite for launches and promotions that captures attention, communicates value, and drives action.",
    features: [
      "Story-driven campaign hero",
      "Urgent messaging and launch cues",
      "Clear single CTA path",
      "Social proof and countdown prompts",
      "Optimized for fast engagement",
    ],
    objective: "Support launches and product campaigns with an immersive landing experience that converts quickly.",
  },
  {
    slug: "professional-resume",
    title: "Professional Resume",
    summary: "A clean digital resume that highlights experience, skills, and career impact for recruiters and hiring managers.",
    overview:
      "A polished resume site that combines storytelling, portfolio highlights, and easy contact paths for career acceleration.",
    features: [
      "Career highlights and impact metrics",
      "Skills and service positioning",
      "Downloadable resume callout",
      "Contact and intro prompts",
      "Responsive professional layout",
    ],
    objective: "Position your career story clearly and convert visitors into recruiters, decision-makers, and potential collaborators.",
  },
  {
    slug: "subscription-service",
    title: "Subscription Service",
    summary: "A subscription service experience for recurring offers, memberships, or digital product communities.",
    overview:
      "A subscription-focused website that makes recurring offerings easy to understand, buy, and stay subscribed to.",
    features: [
      "Tiered subscription pricing display",
      "Benefit-focused copy and visuals",
      "Onboarding and member support paths",
      "Retention-centered messaging",
      "Recurring payment readiness",
    ],
    objective: "Launch your recurring revenue service with clarity, trust, and a strong path from exploration to subscription.",
  },
];
