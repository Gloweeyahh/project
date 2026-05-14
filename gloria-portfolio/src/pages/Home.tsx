import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import SkillsStrip from "../components/SkillsStrip";
import HireStrip from "../components/HireStrip";
import BookingCTA from "../components/BookingCTA";
import ServiceAdvisor from "../components/ServiceAdvisor";
import BudgetEstimator from "../components/BudgetEstimator";
import LeadQualifier from "../components/LeadQualifier";
import ProposalGenerator from "../components/ProposalGenerator";
import TimelineEstimator from "../components/TimelineEstimator";
import PackageMatrix from "../components/PackageMatrix";
import InquiryInsights from "../components/InquiryInsights";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="min-h-screen pt-24 flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold leading-tight text-gray-900 dark:text-white">
            Gloria Emeka
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mt-8 max-w-2xl mx-auto">
            Websites that make founders hire on instinct.
          </p>
          <Link to="/work">
            <button className="mt-12 bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-xl hover:bg-yellow-500 transition">
              View Work
            </button>
          </Link>
        </div>
      </section>
      <Testimonials />
      <SkillsStrip />
      <HireStrip />
      <BookingCTA />
      <ServiceAdvisor />
      <BudgetEstimator />
      <LeadQualifier />
      <ProposalGenerator />
      <TimelineEstimator />
      <PackageMatrix />
      <InquiryInsights />

      <div className="py-24 flex flex-wrap gap-4 justify-center bg-slate-100 dark:bg-black">
        <Link to="/courses" className="px-10 py-5 bg-yellow-400 text-black rounded-2xl font-bold shadow-xl hover:shadow-yellow-400/50 hover:scale-105 transition">
          Explore Courses
        </Link>
        <Link to="/checkout" className="px-10 py-5 border border-gray-300 dark:border-white/20 bg-white/90 dark:bg-slate-950 text-gray-900 dark:text-white rounded-2xl font-bold backdrop-blur-xl hover:bg-white/70 dark:hover:bg-white/10 transition">
          Instant Checkout
        </Link>
        <Link to="/vault" className="px-10 py-5 border border-gray-300 dark:border-white/20 bg-white/90 dark:bg-slate-950 text-gray-900 dark:text-white rounded-2xl font-bold backdrop-blur-xl hover:bg-white/70 dark:hover:bg-white/10 transition">
          Enter Vault
        </Link>
        <Link to="/student" className="px-10 py-5 border border-gray-300 dark:border-white/20 bg-white/90 dark:bg-slate-950 text-gray-900 dark:text-white rounded-2xl font-bold backdrop-blur-xl hover:bg-white/70 dark:hover:bg-white/10 transition">
          Student Portal
        </Link>
        <Link to="/downloads" className="px-10 py-5 border border-gray-300 dark:border-white/20 bg-white/90 dark:bg-slate-950 text-gray-900 dark:text-white rounded-2xl font-bold backdrop-blur-xl hover:bg-white/70 dark:hover:bg-white/10 transition">
          Protected Downloads
        </Link>
        <Link to="/analytics" className="px-10 py-5 border border-gray-300 dark:border-white/20 bg-white/90 dark:bg-slate-950 text-gray-900 dark:text-white rounded-2xl font-bold backdrop-blur-xl hover:bg-white/70 dark:hover:bg-white/10 transition">
          Analytics HQ
        </Link>
      </div>
    </>
  );
}
