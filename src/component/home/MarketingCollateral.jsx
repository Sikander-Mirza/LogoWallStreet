import React from "react";
import { motion } from "framer-motion";

function MarketingCollateral() {
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
    <section className="bg-cover bg-center py-10 md:py-1">
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
            src="https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765825048/p6zhalclc5uzftvkcl5a.png"
            alt="Marketing collateral example"
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
            Marketing Collateral
          </h2>

          <p
            className="mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base leading-relaxed"
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
      </div>
    </section>
  );
}

export default MarketingCollateral;