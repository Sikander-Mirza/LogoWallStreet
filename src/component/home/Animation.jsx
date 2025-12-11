import React from "react";
import { motion } from "framer-motion";
import AnimationImg from "../../assets/images/animation_single-03.png";

function Animation() {
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
        {/* Left IMAGE */}
        <motion.div
          className="flex justify-center items-center"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            className="w-full md:translate-y-8"
            src={AnimationImg}
            alt="Animated logo examples"
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
            className="text-4xl md:text-5xl font-extrabold text-[#0b183b]"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            Animated Logo
          </h2>

          {/* Paragraphs */}
          <p
            className="mt-10 text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            As a premier animated logo design service provider, we bring your
            brand to life with dynamic and captivating animated logos. Our
            designs are not just logos; they are engaging visual stories that
            leave a lasting impression. Whether you’re rebranding or starting
            from scratch, our animated logo services are designed to enhance
            your brand’s identity and captivate your audience.
          </p>

          <p
            className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Our team of skilled designers and representatives is enthusiastic
            about collaborating closely with you and your business to elevate
            your visual presence in the virtual landscape. Let’s make your brand
            unforgettable with our animated logos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Animation;