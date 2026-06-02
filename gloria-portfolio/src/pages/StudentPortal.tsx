import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import BackButton from '../components/BackButton'


const allCourses = [
  {
    id: 'html',
    title: 'Beginner HTML',
    paid: false,
    lessons: 12,
  },
  {
    id: 'advanced',
    title: 'Advanced HTML & CSS',
    paid: true,
    lessons: 18,
  },
  {
    id: 'fullstack',
    title: 'Full Stack Frontend',
    paid: true,
    lessons: 25,
  },
  {
    id: 'ai',
    title: 'AI Website Creation Bonus',
    paid: true,
    lessons: 10,
  },
  {
    id: 'fullstack_bundle',
    title: 'Fullstack Web Development',
    paid: true,
    price: 180000,
    lessons: 45,
    isBundle: true,
    includes: ['html', 'advanced', 'fullstack', 'ai'],
  },
] as const

type CourseId = (typeof allCourses)[number]['id']

function getPurchasedAccessCodeMap() {
  // Mapping is intentionally simple for now:
  // - Paid courses are unlocked by an access code OR existing purchase token.
  // - Token keys are examples and should be aligned to your real checkout.
  return {
    advanced: 'purchase_advanced-html-css',
    fullstack: 'purchase_fullstack-frontend',
    ai: 'purchase_ai-website-bonus',
    fullstack_bundle: 'purchase_fullstack-bundle',
  } as const
}

function getUserProgress() {
  // Persist progress per course.
  try {
    const raw = localStorage.getItem('student_progress_v1')
    if (!raw) return {}
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function setUserProgress(next: Record<string, number>) {
  localStorage.setItem('student_progress_v1', JSON.stringify(next))
}

function percent(n: number) {
  if (Number.isNaN(n)) return 0
  return Math.max(0, Math.min(100, Math.round(n)))
}

export default function StudentPortal() {
  const [activeCourse, setActiveCourse] = useState<CourseId>('html')
  const [accessCodeInput, setAccessCodeInput] = useState('')
  const [validatedCodes, setValidatedCodes] = useState<Record<string, boolean>>({})

  const accessMap = useMemo(() => getPurchasedAccessCodeMap(), [])

  const progress = useMemo(() => {
    const raw = getUserProgress() as Record<string, number>
    const next: Record<string, number> = {}
    allCourses.forEach((c) => {
      next[c.id] = percent(raw[c.id] ?? (c.paid ? 0 : 15))
    })
    return next
  }, [])

  const [liveProgress, setLiveProgress] = useState<Record<string, number>>(progress)

  useEffect(() => {
    setLiveProgress(progress)
  }, [progress])



  const isCourseUnlocked = (courseId: CourseId) => {
    const meta = allCourses.find((c) => c.id === courseId)
    if (!meta) return false

    if (!meta.paid) return true

    // Bundle: if bundle token is valid, unlock bundle + included items.
    if ((meta as any).isBundle) {
      const bundleTokenKey = (accessMap as any).fullstack_bundle
      const purchased = !!localStorage.getItem(bundleTokenKey)
      const codeValidated = !!validatedCodes[bundleTokenKey]
      return purchased || codeValidated
    }

    // Individual paid courses.
    const tokenKey = (accessMap as any)[courseId]
    const purchased = tokenKey ? !!localStorage.getItem(tokenKey) : false
    const codeValidated = tokenKey ? !!validatedCodes[tokenKey] : false
    return purchased || codeValidated
  }

  const unlockedForActive = isCourseUnlocked(activeCourse)

  const validateAccessCode = () => {
    // NOTE: Demo-only behavior.
    // - If the user enters any non-empty code, we mark the relevant token key as validated.
    // - Replace with real verification via backend when available.
    if (!accessCodeInput.trim()) {
      alert('Enter your access code')
      return
    }

    const tokenKey = (accessMap as any)[activeCourse]
    if (!tokenKey) {
      alert('This course does not require an access code')
      return
    }

    setValidatedCodes((prev) => ({ ...prev, [tokenKey]: true }))
    alert('Access code accepted. Downloads unlocked.')
  }

  const coursesForSidebar = useMemo(() => {
    return allCourses.map((c) => ({
      ...c,
      unlocked: isCourseUnlocked(c.id),
    }))
  }, [validatedCodes])

  const incrementProgress = () => {
    const current = liveProgress[activeCourse] ?? 0
    const next = percent(current + 10)
    const updated = { ...liveProgress, [activeCourse]: next }
    setLiveProgress(updated)
    setUserProgress(updated)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-white px-6 py-24">
      <div className="mb-12">
        <div className="mb-6">
          <BackButton />
        </div>

        <h1 className="text-6xl font-black mb-4 text-gray-900 dark:text-white">Student Portal</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your learning environment. Structured. Focused. Built for mastery.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* COURSE LIST */}
        <section className="space-y-4">
          {coursesForSidebar.map((course) => (
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
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{course.title}</h3>
                {course.paid ? (
                  <span className="text-xs font-bold rounded-full px-2 py-1 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-200">
                    {course.unlocked ? 'Unlocked' : 'Locked'}
                  </span>
                ) : (
                  <span className="text-xs font-bold rounded-full px-2 py-1 bg-[#D4AF37]/20 text-[#D4AF37]">
                    Free
                  </span>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm">{course.lessons} lessons</p>

              {/* progress bar */}
              <div className="mt-4 h-2 bg-gray-300 dark:bg-slate-950 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37]" style={{ width: `${liveProgress[course.id] ?? 0}%` }} />
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{liveProgress[course.id] ?? 0}% complete</p>
            </motion.div>
          ))}
        </section>

        {/* ACTIVE COURSE VIEW */}
        <section className="lg:col-span-2 rounded-3xl border border-gray-300 dark:border-white/20 p-10 bg-white dark:bg-slate-950 backdrop-blur-xl">
          <CourseContent
            courseId={activeCourse}
            unlocked={unlockedForActive}
            accessCodeInput={accessCodeInput}
            setAccessCodeInput={setAccessCodeInput}
            onValidate={validateAccessCode}
            onMarkProgress={incrementProgress}
          />
        </section>
      </div>
    </main>
  )
}

function CourseContent({
  courseId,
  unlocked,
  accessCodeInput,
  setAccessCodeInput,
  onValidate,
  onMarkProgress,
}: {
  courseId: CourseId
  unlocked: boolean
  accessCodeInput: string
  setAccessCodeInput: (v: string) => void
  onValidate: () => void
  onMarkProgress: () => void
}) {
  const lessons = {
    html: ['Intro to HTML', 'Tags & Structure', 'Forms & Inputs', 'Semantic HTML'],
    advanced: ['Flexbox Mastery', 'Grid Systems', 'Responsive Design', 'Animations'],
    fullstack: ['JavaScript Deep Dive', 'APIs & Fetch', 'React Basics', 'State Management'],
    ai: ['Prompt Packs Overview', 'Design-to-Code Workflow', 'Conversion Copy Checklist'],
    fullstack_bundle: [
      'Everything from HTML + CSS',
      'Everything from Frontend Fullstack',
      'Everything from AI Bonus',
      'Deployment checklist + next steps',
    ],
  } as const

  const list = (lessons as any)[courseId] as string[] | undefined

  return (
    <motion.div key={courseId} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-3xl font-bold mb-6 capitalize text-gray-900 dark:text-white">
        {allTitle(courseId)}
      </h2>

      {!unlocked ? (
        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-5">
          <p className="font-bold text-gray-900 dark:text-white">This course is locked.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Enter your access code to unlock downloads.
          </p>

          <div className="mt-4 flex flex-col gap-3">
            <input
              value={accessCodeInput}
              onChange={(e) => setAccessCodeInput(e.target.value)}
              className="w-full p-4 rounded-2xl bg-gray-100 dark:bg-slate-950 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Access code"
            />
            <button
              onClick={onValidate}
              className="w-full py-3 rounded-2xl bg-[#D4AF37] text-black font-bold hover:bg-yellow-500 transition"
            >
              Unlock Course
            </button>
          </div>

          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            Tip: If you already paid, your access is usually unlocked automatically.
          </p>
        </div>
      ) : (
        <>
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 p-5 mb-6">
            <p className="font-bold text-gray-900 dark:text-white">Downloads</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Click “Download” to get your course files (ZIP). Unzip and start building.
            </p>
          </div>

          <ul className="space-y-4">
            {list?.map((lesson, i) => (
              <li
                key={i}
                className="flex items-center justify-between border-b border-gray-300 dark:border-white/20 pb-3 text-gray-900 dark:text-white"
              >
                <span>{lesson}</span>
                <button
                  onClick={() => {
                    // demo download
                    const content = `Downloaded: ${lesson}\nCourse: ${courseId}`
                    const blob = new Blob([content], { type: 'text/plain' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = `${lesson.replace(/\s+/g, '_')}.txt`
                    document.body.appendChild(a)
                    a.click()
                    a.remove()
                    URL.revokeObjectURL(url)
                  }}
                  className="text-[#D4AF37] text-sm font-semibold hover:underline"
                >
                  Download
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button
              onClick={onMarkProgress}
              className="w-full py-3 rounded-2xl border border-[#D4AF37] text-[#D4AF37] font-bold hover:bg-[#D4AF37] hover:text-black transition"
            >
              Mark progress (+10%)
            </button>
          </div>
        </>
      )}
    </motion.div>
  )
}

function allTitle(courseId: CourseId) {
  const map: Record<CourseId, string> = {
    html: 'Beginner HTML',
    advanced: 'Advanced HTML & CSS',
    fullstack: 'Full Stack Frontend',
    ai: 'AI Website Creation Bonus',
    fullstack_bundle: 'Fullstack Web Development',
  }
  return map[courseId] ?? 'Course'
}

