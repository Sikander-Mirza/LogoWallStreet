import React from "react";

export default function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick} style={{ fontFamily: "var(--font-Poppins)" }}
      className={`pulse-outside text-white bg-gradient-orange hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-[200px] text-sm px-8 py-2.5 ${className}`}
    >
      {text}
    </button>
  );
}
