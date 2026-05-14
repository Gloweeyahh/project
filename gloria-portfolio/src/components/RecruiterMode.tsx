import { useState } from "react";

export default function RecruiterMode() {
  const [on, setOn] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setOn(!on)}
        className="px-4 py-2 bg-white/10 dark:bg-slate-950 rounded-full text-sm text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/20 transition"
      >
        Recruiter Mode
      </button>

      {on && (
        <div className="fixed inset-0 bg-white dark:bg-black text-gray-900 dark:text-white p-10 overflow-auto">
          <h1 className="text-5xl font-black mb-6">Gloria Emeka</h1>

          <p className="mb-4">
            Front-End Developer • UI Engineer • Digital Educator
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-3">Key Skills</h2>
          <ul className="list-disc ml-6">
            <li>React + TypeScript</li>
            <li>GSAP + Framer Motion</li>
            <li>UI/UX Systems</li>
            <li>Performance Optimization</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-3">Key Results</h2>
          <ul className="list-disc ml-6">
            <li>+67% Fintech Conversions</li>
            <li>+32% E-commerce AOV</li>
            <li>100 Lighthouse Performance</li>
          </ul>

          <button className="mt-10 px-6 py-3 bg-black dark:bg-yellow-400 text-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-yellow-500 transition font-semibold">
            Download CV
          </button>
        </div>
      )}
    </div>
  );
}
