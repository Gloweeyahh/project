import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { proposals } from "../data/proposals";

export default function ProposalGenerator() {
  const [selectedSlug, setSelectedSlug] = useState(proposals[0]?.slug || "");
  const selectedProposal = useMemo(
    () => proposals.find((proposal) => proposal.slug === selectedSlug) ?? proposals[0],
    [selectedSlug]
  );

  return (
    <section className="py-24 px-6 lg:px-16 bg-white dark:bg-black text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Proposal selector</p>
          <h2 className="mt-4 text-5xl md:text-6xl font-bold">Choose the proposal that matches your project.</h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-8 max-w-3xl">
            Use the dropdown to select a proposal type, then review the corresponding scope card and book a consultation.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <label className="w-full lg:w-1/3 block">
            <span className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Project type</span>
            <select
              value={selectedSlug}
              onChange={(event) => setSelectedSlug(event.target.value)}
              className="mt-4 w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 shadow-sm"
            >
              {proposals.map((proposal) => (
                <option key={proposal.slug} value={proposal.slug}>
                  {proposal.title}
                </option>
              ))}
            </select>
          </label>

          <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-slate-50/95 dark:bg-slate-950/90 p-8 shadow-xl w-full lg:w-2/3">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Selected proposal</p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">{selectedProposal.title}</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">{selectedProposal.summary}</p>
            <div className="mt-6 space-y-4">
              {selectedProposal.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-slate-700 dark:text-slate-300 leading-7">{selectedProposal.objective}</p>
              <Link
                to={`/proposal/${selectedProposal.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-4 text-sm font-semibold transition hover:bg-slate-800"
              >
                Show full proposal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
