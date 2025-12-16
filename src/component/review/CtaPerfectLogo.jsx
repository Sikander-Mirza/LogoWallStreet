import React from "react";
import ctaBg from "../../assets/images/bg/bg-testimonial.jpg"; // change to your image
import { Link } from "react-router-dom";
export default function CtaPerfectLogo() {
  return (
    <section
      className="py-16 md:py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${ctaBg})`,
      }}
    >
      {/* Dark blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1333c2] via-[#101936] to-[#1333c2] opacity-85" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-Playfair)" }}
        >
          Ready to Create Your{" "}
          <span className="text-[#ff7a1a]">Perfect Logo?</span>
        </h2>

        {/* Subtext */}
        <p
          className="mt-4 text-sm sm:text-base text-slate-200/80"
          style={{ fontFamily: "var(--font-Poppins)" }}
        >
          Join hundreds of satisfied customers who trusted us with their brand
          identity.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA with orange glow */}

          <Link
            to="/contact-us"
            className="
              relative inline-flex items-center justify-center
              rounded-full px-8 sm:px-10 py-3 sm:py-3.5
              text-sm sm:text-base font-semibold text-white
              bg-gradient-to-r from-[#ff7a1a] via-[#ff861f] to-[#ff5b00]
              shadow-[0_0_60px_rgba(255,122,26,0.65)]
              hover:shadow-[0_0_80px_rgba(255,122,26,0.9)]
              transition-transform duration-200 hover:scale-[1.03]
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7a1a] focus:ring-offset-transparent
            "
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Get Started Today
          </Link>
          
          {/* Secondary CTA – outline button */}
          <button
            type="button"
            className="
              inline-flex items-center justify-center
              rounded-full px-8 sm:px-10 py-3 sm:py-3.5
              text-sm sm:text-base font-semibold
              border border-slate-500/70
              text-slate-100
              bg-transparent
              hover:bg-white/5 hover:border-slate-300
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 focus:ring-offset-transparent
            "
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            View on Trustpilot
          </button>
        </div>
      </div>
    </section>
  );
}