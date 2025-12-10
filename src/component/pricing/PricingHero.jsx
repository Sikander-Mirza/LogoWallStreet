import React from "react";

const PricingShowcase = () => {
  return (
    <section id="pricing-bottom" className="relative overflow-hidden bg-[#351fb5] text-white" style={{marginTop:"-80px"}}>
      {/* background gradient + shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff12,_transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-10 px-4 py-16 md:flex-row md:items-center lg:py-24">
        {/* LEFT SIDE – interactive pricing "card" */}
        <div className="w-full md:w-1/2">
          <div className="relative mx-auto max-w-md">
            {/* back shadow card */}
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-gradient-to-br from-indigo-500/40 to-pink-500/40 opacity-60 blur-xl" />

            {/* main card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl sm:p-6 lg:p-8">
              {/* header row */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
                    Popular Plan
                  </p>
                  <h3 className="mt-1 text-xl font-semibold sm:text-2xl">Growth</h3>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Best Value
                </span>
              </div>

              {/* price */}
              <div className="mb-6 flex items-end gap-2">
                <span className="text-4xl font-bold sm:text-5xl">$59</span>
                <span className="mb-1 text-sm text-slate-200">/ month</span>
              </div>

              {/* features */}
              <ul className="space-y-3 text-sm text-slate-100">
                {[
                  "Up to 5 active campaigns",
                  "Advanced analytics dashboard",
                  "Conversion‑optimized landing pages",
                  "Priority support with dedicated manager",
                  "Monthly strategy review call",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* bottom CTA in card */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/40 transition hover:scale-[1.02] hover:shadow-orange-500/60 focus:outline-none focus:ring-2 focus:ring-orange-300/80 focus:ring-offset-2 focus:ring-offset-[#020b3a]"
                >
                  Choose Plan
                </button>
                <p className="text-[11px] text-slate-200/80">
                  No credit card required. Cancel anytime.
                </p>
              </div>

              {/* small floating badge */}
              <div className="pointer-events-none absolute -right-3 -top-3 hidden h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-[10px] font-bold shadow-lg shadow-yellow-500/40 sm:flex">
                Save 30%
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – text / CTA / phone */}
        <div className="w-full space-y-6 md:w-1/2">
          {/* tiny tag */}
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-orange-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
              Make appointment
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]"style={{ fontFamily: "var(--font-Playfair)" }}>
            Pocket‑Friendly Plans
            <span className="block text-indigo-100">that Actually Work for You</span>
          </h2>

          <p className="text-sm leading-relaxed text-slate-100/90 sm:text-base">
            Whether you’re just getting started or scaling an established brand, our
            pricing is built to grow with you. Unlock conversion‑ready funnels,
            transparent analytics, and a dedicated strategy team without breaking
            your budget.
          </p>

          {/* bullet row */}
          <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 rounded-full bg-indigo-500/30 text-center text-xs leading-6">
                1
              </div>
              <div>
                <p className="font-semibold">Launch in days</p>
                <p className="text-xs text-slate-200/90">
                  Ready‑to‑use frameworks so you can start generating results fast.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 h-6 w-6 rounded-full bg-pink-500/30 text-center text-xs leading-6">
                2
              </div>
              <div>
                <p className="font-semibold">Only pay for value</p>
                <p className="text-xs text-slate-200/90">
                  No bloated retainers, no hidden fees – just clear, flexible plans.
                </p>
              </div>
            </div>
          </div>

          {/* CTA + phone */}
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#020b3a] shadow-lg shadow-slate-900/40 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#020b3a]"
            >
              <span>Get a Free Strategy Call</span>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m0 0l-4-4m4 4l-4 4"
                />
              </svg>
            </button>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-300">
                {/* phone icon */}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75C2.25 5.784 3.034 5 4 5h2.1c.7 0 1.302.45 1.48 1.128l.74 2.846a1.5 1.5 0 01-.38 1.43l-1.21 1.21a.75.75 0 00-.09.96 11.04 11.04 0 004.29 4.29.75.75 0 00.96-.09l1.21-1.21a1.5 1.5 0 011.43-.38l2.846.74A1.56 1.56 0 0119 19.9V22c0 .966-.784 1.75-1.75 1.75h-.5C9.708 23.75 4.25 18.292 4.25 11.5v-.5C4.25 7.534 5.034 6.75 6 6.75H6z"
                  />
                </svg>
              </div>
              <div className="text-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-200/80">
                  Talk to a specialist
                </p>
                <p className="mt-0.5 text-base font-semibold" style={{ fontFamily: "var(--font-Playfair)" }}>(307) 218‑3240</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingShowcase;