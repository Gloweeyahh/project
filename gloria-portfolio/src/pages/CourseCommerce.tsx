import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Beginner HTML",
    price: "Free",
    desc: "Perfect starting point for complete beginners.",
    cta: "/checkout?course=html",
  },
  {
    title: "Advanced HTML + CSS",
    price: "₦15,000",
    desc: "Modern responsive design systems and real client layouts.",
    cta: "/checkout?course=advanced",
  },
  {
    title: "Full Stack Frontend",
    price: "₦60,000",
    desc: "HTML, CSS, JavaScript, UI systems, deployment, animations.",
    cta: "/checkout?course=fullstack",
  },
  {
    title: "AI Website Creation Bonus",
    price: "₦5,000",
    desc: "Use AI to speed up premium website production.",
    cta: "/checkout?course=ai",
  },
];

export default function CourseCommerce() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">
          Learning Commerce
        </p>
        <h1 className="text-5xl font-black mt-4 text-gray-900 dark:text-white">
          Premium web design courses
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl">
          Learn premium front-end systems, responsive layouts, motion, and
          conversion-focused UI from Gloria's studio workflow.
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
              <p className="text-[#D4AF37] text-2xl font-black mt-3">
                {course.price}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">{course.desc}</p>

              <Link
                to={course.cta}
                className="inline-block mt-8 rounded-xl bg-[#D4AF37] text-black font-bold px-6 py-3 hover:bg-yellow-500 hover:scale-[1.02] transition"
              >
                Enroll Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

