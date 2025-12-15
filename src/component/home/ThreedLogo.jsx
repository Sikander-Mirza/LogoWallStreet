import React from "react";
import { motion } from "framer-motion";

function ThreedLogo() {
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
            3D Logo Design
          </h2>

          {/* Paragraphs */}
          <p
            className="mt-10 text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Using the latest 3D design techniques, our team creates captivating
            logos that stand out. Whether you’re rebranding or starting fresh,
            our 3D designs are crafted to leave a lasting impression and
            effectively represent your brand.
          </p>

          <p
            className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            We collaborate closely with you to ensure the final logo aligns with
            your brand identity. By combining creativity with cutting‑edge
            technology, we help elevate your presence in the virtual marketplace
            and make a memorable impact across digital platforms.
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
            src="https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765825047/uytedgpibbfkmn0i7l8f.png"
            alt="3D logo examples"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ThreedLogo;