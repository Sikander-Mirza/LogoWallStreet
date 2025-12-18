import React from "react";
import { FaStar } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

export default function TrustpilotStrip() {
  return (
    <section className="bg-[#fc6426] py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20">
        {/* Left stats – keep desktop behavior, improve mobile */}
        <div className="flex flex-wrap sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10 text-white">
          {/* Rating + stars */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-[#FDC600] h-4 w-4" />
              ))}
            </div>
            <p className="text-3xl text-center sm:text-4xl font-semibold leading-none">4.5</p>
            <p className="mt-1 text-sm sm:text-base">Trustpilot Rating</p>
          </div>

          {/* Verified reviews */}
          <div className="text-center sm:text-left mt-7">
            <p className="text-3xl text-center sm:text-4xl font-semibold leading-none">81+</p>
            <p className="mt-1 text-sm sm:text-base">Verified Reviews</p>
          </div>

          {/* 5‑star selection */}
          <div className="text-center sm:text-left mt-7">
            <p className="text-3xl text-center sm:text-4xl font-semibold leading-none">100%</p>
            <p className="mt-1 text-sm sm:text-base">5‑Star Selection</p>
          </div>
        </div>

        {/* Right Trustpilot pill – same desktop layout */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="flex items-center mt-7 gap-4 bg-[#02061A] border border-[#121A3A] rounded-2xl px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            {/* Trustpilot logo */}
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black">
              <SiTrustpilot className="h-5 w-5 text-[#00b67a]" />
            </div>

            {/* 5 green stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-6 w-6 rounded-sm bg-[#00B67A]"
                >
                  <FaStar className="h-3 w-3 text-white" />
                </div>
              ))}
            </div>

            {/* Rating text */}
            <div className="text-left">
              <p className="text-white text-base font-semibold leading-none">
                4.5
              </p>
              <p className="text-xs text-slate-300 mt-1">81 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}