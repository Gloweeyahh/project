import { useState } from 'react'
import { motion } from 'framer-motion'

export default function StudentPortal() {
  const [activeCourse, setActiveCourse] = useState('html')

  const courses = [
    {
      id: 'html',
      title: 'Beginner HTML',
      progress: 80,
      lessons: 12,
    },
    {
      id: 'css',
      title: 'Advanced HTML & CSS',
      progress: 45,
      lessons: 18,
    },
    {
      id: 'fullstack',
      title: 'Full Stack Frontend',
      progress: 20,
      lessons: 25,
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-6 py-24">
      
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-6xl font-black mb-4 text-gray-900 dark:text-white">Student Portal</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your learning environment. Structured. Focused. Built for mastery.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* COURSE LIST */}
        <section className="space-y-4">
          {courses.map(course => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveCourse(course.id)}
              className={`cursor-pointer rounded-2xl p-6 border transition ${
                activeCourse === course.id
                  ? 'border-[#D4AF37] bg-yellow-100 dark:bg-slate-950'
                  : 'border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {course.lessons} lessons
              </p>

              <div className="mt-4 h-2 bg-gray-300 dark:bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#D4AF37]"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </motion.div>
          ))}
        </section>

        {/* ACTIVE COURSE VIEW */}
        <section className="lg:col-span-2 rounded-3xl border border-gray-300 dark:border-white/20 p-10 bg-white dark:bg-slate-950 backdrop-blur-xl">
          <CourseContent courseId={activeCourse} />
        </section>

      </div>
    </main>
  )
}

function CourseContent({ courseId }: { courseId: string }) {
  const lessons = {
    html: [
      'Intro to HTML',
      'Tags & Structure',
      'Forms & Inputs',
      'Semantic HTML',
    ],
    css: [
      'Flexbox Mastery',
      'Grid Systems',
      'Responsive Design',
      'Animations',
    ],
    fullstack: [
      'JavaScript Deep Dive',
      'APIs & Fetch',
      'React Basics',
      'State Management',
    ],
  }

  return (
    <motion.div
      key={courseId}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-bold mb-6 capitalize text-gray-900 dark:text-white">
        {courseId} Course
      </h2>

      <ul className="space-y-4">
        {lessons[courseId as keyof typeof lessons]?.map((lesson, i) => (
          <li
            key={i}
            className="flex items-center justify-between border-b border-gray-300 dark:border-white/20 pb-3 text-gray-900 dark:text-white"
          >
            <span>{lesson}</span>
            <span className="text-[#D4AF37] text-sm">Watch</span>
          </li>
        )) || <p className="text-gray-600 dark:text-gray-400">Select a course to start learning</p>}
      </ul>
    </motion.div>
  )
}
