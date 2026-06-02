import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";


const courses = [
  {
    id: "html",
    title: "Beginner HTML",
    price: "Free",
    amount: 0,
    desc: "Perfect starting point for complete beginners.",
    cta: "/checkout?course=html",
    zipIncludes: [
      "Lesson 01 (PDF): Page structure + heading hierarchy",
      "Lesson 02 (PDF): Links, navigation, and content sections",
      "Lesson 03 (PDF): Forms (inputs, labels, validation basics)",
      "ZIP includes: starter folder + HTML/CSS examples that match the PDF lessons",
    ],
    expertCovers: [
      "How semantic HTML improves accessibility + SEO",
      "Correct use of headings (H1→H6) and landmarks (header/nav/main/footer)",
      "Form accessibility basics: labels, placeholders vs. labels, input types",
      "Practical patterns: card layouts, nav menus, hero sections (semantic-first)",
      "Debugging: common HTML mistakes beginners make (nesting, missing closing tags)",
    ],
  },
  {
    id: "advanced",
    title: "Advanced HTML + CSS",
    price: "₦15,000",
    amount: 15000,
    desc: "Modern responsive design systems and real client layouts.",
    cta: "/checkout?course=advanced",
    zipIncludes: [
      "Responsive layout templates (mobile/tablet/desktop)",
      "Lesson PDFs: spacing scale, typography rhythm, and layout grids",
      "Lesson PDFs: reusable UI sections (cards, hero, feature sections)",
      "ZIP includes: ready-to-edit components + CSS patterns that mirror the PDFs",
    ],
    expertCovers: [
      "Design systems mindset: spacing/typography scales and naming conventions",
      "Responsive strategy: fluid grids, breakpoints, and max-width systems",
      "Advanced CSS layout: flex/grid, alignment, and common grid mistakes",
      "Typography mastery: line-height, measure, and readable hierarchy",
      "Component structure: how to build sections that stay consistent across pages",
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack Frontend",
    price: "₦60,000",
    amount: 60000,
    desc: "HTML, CSS, JavaScript, UI systems, deployment, animations.",
    cta: "/checkout?course=fullstack",
    zipIncludes: [
      "Lesson PDFs: JavaScript UI interactivity (forms, toggles, dynamic lists)",
      "Lesson PDFs: UI system components (buttons, cards, modals)",
      "Lesson PDFs: motion/UX patterns (scroll + hover behavior)",
      "ZIP includes: project-ready folder structure + code examples from the PDFs",
    ],
    expertCovers: [
      "JavaScript fundamentals for UI: events, state logic, DOM manipulation",
      "Building reusable UI: patterns for components and consistent behavior",
      "UX improvements: validation, empty states, loading patterns (frontend)",
      "Animation workflow: performance-aware transitions and interactions",
      "Deployment basics: checklist-style steps to ship your frontend",
    ],
  },
  {
    id: "ai",
    title: "AI Website Creation Bonus",
    price: "₦5,000",
    amount: 5000,
    desc: "Use AI to speed up premium website production.",
    cta: "/checkout?course=ai",
    zipIncludes: [
      "Prompt Packs (PDF): layout prompts + section-specific copy prompts",
      "Prompt Packs (PDF): design-to-code prompts + style guidance",
      "Conversion Copy Checklist (PDF): headlines, CTAs, and section sequencing",
      "ZIP includes: prompt examples + workflow notes to draft → refine → export",
    ],
    expertCovers: [
      "Prompt engineering for web UI: producing consistent layouts and components",
      "Turning AI output into real code: cleaning, structuring, and refactoring",
      "Conversion-first writing: CTA hierarchy, benefit framing, and objections handling",
      "Brand consistency: keeping typography/colors/layout aligned across sections",
      "Speed workflow: a repeatable process to go from idea → draft → final",
    ],
  },
  {
    id: "fullstack_bundle",
    title: "Fullstack Web Development",
    price: "₦180,000",
    amount: 180000,
    desc: "The complete bundle: HTML + Advanced CSS + Full Frontend (JS/UI) + AI production prompts.",
    cta: "/checkout?course=fullstack_bundle",
    zipIncludes: [
      "Everything from Beginner HTML",
      "Everything from Advanced HTML + CSS",
      "Everything from Full Stack Frontend",
      "Everything from AI Website Creation Bonus",
      "Plus: full project build workflow notes (planning → code → deploy)",
    ],
    expertCovers: [
      "Complete frontend build lifecycle",
      "Production-ready UI patterns",
      "Responsive + interactive components",
      "Motion + UX refinements",
      "Deployment checklist and quality pass",
    ],
  },
];

export default function CourseCommerce() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <BackButton />
        </div>

        <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">Learning Commerce</p>
        <h1 className="text-5xl font-black mt-4 text-gray-900 dark:text-white">Premium web design courses</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl">
          Learn premium front-end systems, responsive layouts, motion, and conversion-focused UI from Gloria's studio workflow.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950 backdrop-blur-xl p-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{course.title}</h3>
              <p className="text-[#D4AF37] text-2xl font-black mt-3">{course.price}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">{course.desc}</p>

              <div className="mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-4">
                <p className="text-gray-900 dark:text-white font-bold">What you get after payment</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>✅ Instant access to your course ZIP downloads</li>
                  <li>
                    ✅ Complete ZIP files for: <span className="font-semibold">{course.title}</span>
                  </li>
                  {course.zipIncludes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-4">
                <p className="text-gray-900 dark:text-white font-bold">What you’ll be able to do (expert coverage)</p>
                <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {course.expertCovers.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              {course.amount === 0 ? (
                <button
                  onClick={() => {
                    const filename = `${course.id || course.title.replace(/\s+/g, "_")}_course.zip`;
                    const content = `Thank you for downloading the ${course.title} course.\n\nThis is a demo download.\n\nContents:\n- lesson PDFs (see list on this page)\n- starter folder + code examples`;
                    const blob = new Blob([content], { type: "text/plain" });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    URL.revokeObjectURL(url);
                  }}
                  className="inline-block mt-8 rounded-xl bg-[#D4AF37] text-black font-bold px-6 py-3 hover:bg-yellow-500 hover:scale-[1.02] transition"
                >
                  Download Course
                </button>
              ) : (
                <Link
                  to={course.cta}
                  className="inline-block mt-8 rounded-xl bg-[#D4AF37] text-black font-bold px-6 py-3 hover:bg-yellow-500 hover:scale-[1.02] transition"
                >
                  Enroll Now
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

