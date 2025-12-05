import React from "react";

export default function HeroHeading({
  preTitle,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  className = "",
  preTitleClass = "",
  titleClass = "",
  subtitleClass = "",
  mx = "mx-auto",
  justifyContent = "justify-start",
  textColor = "text-white",
}) {
  return (
    <div className={`${className}`}>
      {/* PreTitle */}
      {preTitle && (
        <div className={`flex items-center mb-2 ${justifyContent}`}>
          <span
            className="
              bg-orange-500 mr-3
              w-12 h-[2px]        /* mobile small */
              sm:w-16 sm:h-[2.5px] /* tablet */
              md:w-20 md:h-[3px]  /* desktop */
            "
          ></span>
          <p
            style={{ fontFamily: "var(--font-Inter)" }}
            className={`
              text-xs sm:text-sm md:text-base uppercase tracking-wider
              ${textColor} ${preTitleClass}
            `}
          >
            {preTitle}
          </p>
        </div>
      )}

      {/* Title */}
      <h1
        className={`
          font-extrabold leading-tight mb-4
          text-2xl sm:text-3xl md:text-5xl   /* responsive sizes */
          ${textColor} ${titleClass}
        `}
        style={{ fontFamily: "var(--font-Playfair)" }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{ fontFamily: "var(--font-Poppins)" }}
          className={`
            max-w-2xl ${mx}
            text-sm sm:text-base md:text-lg   /* responsive scaling */
            ${textColor} ${subtitleClass}
          `}
        >
          {subtitle}
        </p>
      )}
      {subtitle2 && (
        <p
          style={{ fontFamily: "var(--font-Poppins)" }}
          className={`
            mt-4 max-w-2xl mx-auto
            text-sm sm:text-base md:text-lg
            ${textColor} ${subtitleClass}
          `}
        >
          {subtitle2}
        </p>
      )}
      {subtitle3 && (
        <p
          style={{ fontFamily: "var(--font-Poppins)" }}
          className={`
            mt-4 max-w-2xl mx-auto
            text-sm sm:text-base md:text-lg
            ${textColor} ${subtitleClass}
          `}
        >
          {subtitle3}
        </p>
      )}
    </div>
  );
}
