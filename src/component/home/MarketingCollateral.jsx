import React from "react";
import { motion } from "framer-motion";

function MarketingCollateral() {
  // Motion variants
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
        {/* LEFT CONTENT */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#0b183b]"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            Marketing Collateral
          </h2>

          {/* Paragraphs */}
          <p
            className="mt-10 text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Our creative team specializes in crafting custom digital solutions
            that enhance your brand and engage your audience. From engaging
            websites to captivating content, we have the expertise to turn your
            ideas into effective marketing strategies that deliver results.
          </p>

          <p
            className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Whether you need a fresh website, compelling content, or a full
            digital strategy, we’re here to help you achieve your goals. Let’s
            work together to elevate your digital presence and create impactful
            solutions that drive success. Get in touch with us today to learn
            more!
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center items-center"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            className="w-full md:translate-y-8"
            src="https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538281/bipzzytwvxoi4mowr4gl.png"
            alt="Marketing collateral example"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default MarketingCollateral;