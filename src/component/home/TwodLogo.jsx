import React from "react";
import { motion } from "framer-motion";

function TwodLogo() {
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-cover bg-center md:pt-6 md:pb-6">
      <div className="max-w-7xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-4 lg:px-12">
        {/* Left IMAGE */}
        <motion.div
          className="flex justify-center items-center"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            className="w-full md:translate-y-8"
            src="https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765453932/zxkekw8hoab3ov4lgwqc.png"
            alt="2D logo examples"
          />
        </motion.div>

        {/* Right CONTENT (no HeroHeading) */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[black]"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            2D LOGO Design
          </h2>

          {/* Paragraphs */}
          <p
            className="mt-10 text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            We specialize in creating 2D logos that leave a lasting impact. Our
            designs are versatile, simple, and impactful, perfectly capturing
            your brand&apos;s essence. Whether you&apos;re aiming for a modern, sleek
            look or a timeless design, we tailor each logo to align with your
            vision.
          </p>

          <p
            className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            With a strong focus on clarity and effectiveness, our 2D logos work
            seamlessly across various applications. Let us help you establish a
            distinctive visual identity that stands out in your industry and
            leaves a memorable impression.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default TwodLogo;