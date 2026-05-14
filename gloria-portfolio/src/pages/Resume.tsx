export default function Resume() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-8 py-32">
      <h1 className="text-7xl font-bold mb-10 text-gray-900 dark:text-white">Resume</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl">
        Download Gloria Emeka's premium CV covering frontend engineering,
        UI systems design, digital education, and conversion optimization.
      </p>

      <a
        href="/Gloria-Emeka-Resume.pdf"
        download
        className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-2xl font-bold hover:bg-yellow-500 transition"
      >
        Download CV
      </a>
    </main>
  );
}
