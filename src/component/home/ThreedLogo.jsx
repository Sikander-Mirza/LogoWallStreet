import React from "react";
import { motion } from "framer-motion";

function ThreedLogo() {
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
    <section className="bg-cover bg-center py-10 md:py-12">
      <div className="max-w-7xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-4 lg:px-12">
        {/* IMAGE – first on mobile, second on desktop */}
        <motion.div
          className="flex justify-center items-center order-1 md:order-2"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            className="w-full max-w-md md:max-w-full md:translate-y-4"
            src="https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765825047/uytedgpibbfkmn0i7l8f.png"
            alt="3D logo examples"
          />
        </motion.div>

        {/* CONTENT – second on mobile, first on desktop */}
        <motion.div
          className="order-2 md:order-1"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b183b]"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            3D Logo Design
          </h2>

          <p
            className="mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base leading-relaxed"
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
      </div>
    </section>
  );
}

export default ThreedLogo;