import { Link } from "react-router-dom";
import { proposals } from "../data/proposals";
import BackButton from "../components/BackButton";

export default function Proposals() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-white dark:bg-black text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Proposals</p>
          <h1 className="mt-4 text-5xl md:text-6xl font-bold">Choose a ready-made proposal</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-8">
            Each proposal is built around a full service scope, outcome-driven goals, and a clear next step so you can move from idea to launch faster.
          </p>
        </div>


        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {proposals.map((item) => (
            <article key={item.slug} className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/80 p-8 shadow-xl transition hover:-translate-y-1">
              <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">{item.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">{item.summary}</p>
              <Link
                to={`/proposal/${item.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-semibold transition hover:bg-slate-800"
              >
                Show full proposal
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
