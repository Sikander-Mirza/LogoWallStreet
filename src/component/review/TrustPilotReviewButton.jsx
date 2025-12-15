import React from "react";

const TRUSTPILOT_REVIEW_URL =
  "https://www.trustpilot.com/evaluate/thelogowallstreet.com";

export default function TrustpilotReviewButton() {
  const handleClick = () => {
    window.open(TRUSTPILOT_REVIEW_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        fixed
        top-1/2 right-0
        -translate-y-1/2
        z-50
        bg-[#ff7a1a]
        text-white
        font-semibold
        text-xs sm:text-sm
        tracking-[0.16em]
        px-3 py-4 sm:px-4 sm:py-5
        rounded-tl-xl rounded-bl-xl
        shadow-[0_10px_40px_rgba(15,23,42,0.6)]
        hover:translate-x-[-2px]
        transition-transform transition-shadow duration-200
      "
      style={{ writingMode: "vertical-rl", fontFamily: "var(--font-Poppins)" }}
      aria-label="Write a review on Trustpilot"
    >
      WRITE A REVIEW
    </button>
  );
}