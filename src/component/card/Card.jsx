import React from "react";

function Card({ icon, title, description, bgColor, textColor, iconColor, marginTop }) {
  return (
    <div className={`${bgColor ? "bg-gradient-orange text-white" : "bg-white"} rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 ${marginTop} flex flex-col h-full justify-between`}>
      {/* Icon */}
      {icon && <i className={`text-4xl ${iconColor} ${icon}`}></i>}

      {/* Title */}
      <h3 style={{ fontFamily: "var(--font-Playfair)" }} className={`text-xl font-bold mb-2 mt-8 ${textColor}`}>{title}</h3>

      {/* Description */}
      <p style={{ fontFamily: "var(--font-Poppins)" }} className={`${textColor} flex-grow`}>{description}</p>
    </div>
  );
}

export default Card;
