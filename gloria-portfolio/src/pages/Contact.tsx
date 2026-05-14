import Nav from "../components/Nav";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-10 py-32 text-center space-y-10">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          Let's Build <span className="text-yellow-400">Something Iconic</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          If you're serious about your brand, this is where it starts.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://wa.me/234XXXXXXXXX"
            className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition"
          >
            WhatsApp Me
          </a>

          <a
            href="mailto:gloria@example.com"
            className="px-8 py-4 border border-gray-400 dark:border-white/20 text-gray-900 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </>
  );
}
