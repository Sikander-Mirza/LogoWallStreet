import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, PhoneCall, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export default function ShowCase() {
  return (
    <section className="relative overflow-hidden bg-[#07123b] text-white py-16 md:py-20">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-indigo-500/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] items-center">
          {/* LEFT: image / mockup card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.9)] border border-white/10">
              <img
                src={"https://i.pinimg.com/474x/e1/a9/08/e1a908e161dff31cd9f483efa8567a78.jpg"}
                alt="Website wireframe on laptop"
                className="w-full h-full object-cover"
              />

              {/* gradient overlay corner */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#07123b]/80 via-transparent to-transparent" />

              {/* floating stats card */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3 justify-between">
                <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 min-w-[9rem]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-orange-200 font-semibold">
                    Avg. load time
                  </p>
                  <p className="mt-1 text-xl font-semibold">1.2s</p>
                  <p className="text-[11px] text-slate-100/80">
                    Optimized for performance
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 min-w-[9rem]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-200 font-semibold">
                    Conversion lift
                  </p>
                  <p className="mt-1 text-xl font-semibold">+34%</p>
                  <p className="text-[11px] text-slate-100/80">
                    After redesign on average
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            {/* label */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-orange-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">
                Make appointment
              </span>
            </div>

            {/* heading */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-Playfair)" }}
              >
                Custom Website Development
                <span className="block text-indigo-100">
                  Tailored for Growth & Performance
                </span>
              </h2>
            </div>

            {/* intro paragraph */}
            <p
              className="text-sm md:text-base text-slate-100/85 leading-relaxed"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              We craft conversion‑focused websites that balance aesthetics,
              speed, and usability. From sleek brochure sites to complex
              e‑commerce platforms, our development team builds experiences that
              feel fast, intuitive, and on‑brand.
            </p>

            {/* bullet highlights */}
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              <FeatureItem title="Performance‑first builds">
                Lighthouse‑optimized layouts, clean code, and best‑practice
                SEO baked in from day one.
              </FeatureItem>
              <FeatureItem title="Designed for your funnel">
                Every section is mapped to your customer journey to increase
                leads, calls, and checkouts.
              </FeatureItem>
            </div>

            {/* CTA + phone */}
            <div className="pt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link to="/contact-us">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/40 hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-[#07123b]"
                style={{ fontFamily: "var(--font-Poppins)" }}
              >
                <Sparkles className="h-4 w-4" />
                <span>Get Started</span>
                <ChevronRight className="h-4 w-4" />
              </button>
</Link>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200 font-medium">
                    Call us directly
                  </p>
                  <a
                    href="tel:+13072183240"
                    className="mt-1 block text-base font-semibold text-white"
                    style={{ fontFamily: "var(--font-Playfair)" }}
                  >
                    (307) 218‑3240
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* small feature item */
function FeatureItem({ title, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 h-6 w-6 rounded-full bg-orange-500/15 text-orange-300 flex items-center justify-center text-xs font-semibold">
        •
      </span>
      <div>
        <p
          className="text-sm font-semibold text-white"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          {title}
        </p>
        <p
          className="text-xs text-slate-200/85 mt-1"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}