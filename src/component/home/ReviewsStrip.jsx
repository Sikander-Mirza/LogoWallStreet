import React from "react";
import { FaGoogle, FaFacebookF, FaInstagram, FaStar } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

export default function ReviewsStrip() {
  return (
    <section className="bg-gradient-to-b from-sky-100 to-white py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-slate-100 flex flex-col sm:flex-row items-stretch">
          {/* Left label */}
          <div className="w-full sm:w-48 border-b sm:border-b-0 sm:border-r border-slate-100 flex items-center justify-center py-6 px-4">
            <div className="text-center">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                style={{ fontFamily: "var(--font-Poppins)" }}
              >
                {/* You can add a small label here if you want */}
              </p>
              <p
                className="text-xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-Playfair)" }}
              >
                Our Reviews
              </p>
            </div>
          </div>

          {/* Platforms */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <ReviewItem
              icon={<FaGoogle className="text-[#4285F4]" />}
              label="Google"
              rating={4.8}
              text="Rated 4.8 / 5"
            />
            {/* Trustpilot uses special icon flag */}
            <ReviewItem
              icon="trustpilot"
              label="Trustpilot"
              rating={4.9}
              text="Excellent"
            />
            <ReviewItem
              icon={<FaFacebookF className="text-[#1877F2]" />}
              label="Facebook"
              rating={5}
              text="5‑Star Feedback"
            />
            <ReviewItem
              icon={<FaInstagram className="text-[#E1306C]" />}
              label="Instagram"
              rating={4.7}
              text="Loved by Creators"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewItem({ icon, label, rating, text }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  // Render icon with conditional bubble
  const renderIcon = () => {
    if (icon === "trustpilot") {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
          <SiTrustpilot className="text-[#00b67a]" />
        </div>
      );
    }

    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-xl">
        {icon}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center py-5 px-4">
      <div className="flex items-center gap-3">
        {/* Icon bubble */}
        {renderIcon()}

        {/* Text + stars */}
        <div className="text-left">
          <p
            className="text-sm font-semibold text-slate-900"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            {label}
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>{rating.toFixed(1)}</span>
            <div className="flex">
              {Array.from({ length: fullStars }).map((_, i) => (
                <FaStar key={i} className="text-[#FDBA11] h-3 w-3" />
              ))}
              {hasHalf && (
                <FaStar className="text-[#FDBA11]/60 h-3 w-3 opacity-60" />
              )}
            </div>
          </div>
          <p
            className="text-[11px] text-slate-500 mt-0.5"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}