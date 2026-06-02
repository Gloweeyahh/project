import { Link } from "react-router-dom";

export default function BookingCTA() {
  return (
    <section className="py-40 px-8 bg-white dark:bg-black text-center">
      <h2 className="text-6xl font-bold mb-8 text-gray-900 dark:text-white">
        Let's Build Your Next Authority Website
      </h2>
      <p className="text-gray-700 dark:text-zinc-400 text-xl mb-10 max-w-2xl mx-auto">
        Strategy calls are ideal for founders, creators, educators, and premium brands who want launch-ready digital experiences.
      </p>

      <Link
        to="/contact"
        className="inline-block bg-[#D4AF37] text-black px-10 py-5 rounded-2xl font-bold text-xl transition hover:bg-yellow-500"
      >
        Request a strategy review
      </Link>
    </section>
  );
}
