import React from "react";
import { FiEdit3 } from "react-icons/fi";

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
        fixed bottom-18 right-4
        flex items-center gap-2
        rounded-full
        bg-[#ff7a1a]
        px-5 sm:px-6 py-2.5
        text-sm sm:text-base font-semibold text-white
        shadow-[0_0_40px_rgba(255,122,26,0.6)]
        hover:shadow-[0_0_55px_rgba(255,122,26,0.9)]
        hover:bg-[#ff861f]
        transition-transform transition-shadow duration-200
        hover:scale-[1.03]
        
      "
      style={{ fontFamily: "var(--font-Poppins)" }}
      aria-label="Write a review on Trustpilot"
    >
      <FiEdit3 className="h-4 w-4" />
      <span>Write a Review</span>
    </button>
  );
}