import React from "react";
import { motion } from "framer-motion";
import HeroHeading from "../others/Heading";
import AboutImg from "../../assets/images/about-single.PNG";
import counterBG from "../../assets/images/mask-2.png";
import CountUp from "react-countup";

function AboutUs() {
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
    <section className="py-6 sm:py-10 md:py-14 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 lg:px-16">
        {/* LEFT IMAGE + COUNTER */}
        <motion.div
          className="flex flex-col justify-center items-center"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            className="w-[500px] md:w-[580px] lg:w-[530px] object-contain translate-y-4 md:translate-y-8"
            src="https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765825047/akumapev9kc3ymbf1ybx.png"
            alt="banner image"
          />

          <div
            className="
              relative
              left-4 bottom-4
              sm:left-6 sm:bottom-6
              md:left-10 md:bottom-10
              lg:left-[120px] lg:bottom-[80px]
              bg-contain bg-center bg-no-repeat
              w-[160px] h-[160px]
              flex flex-col items-center justify-center
            "
            style={{ backgroundImage: `url(${counterBG})` }}
          >
            <CountUp
              start={0}
              end={5500}
              duration={2.5}
              separator=","
              enableScrollSpy
              scrollSpyOnce
            >
              {({ countUpRef }) => (
                <h2
                  style={{ fontFamily: "var(--font-Playfair)" }}
                  className="text-[30px] md:text-[40px] font-bold text-white"
                >
                  <span ref={countUpRef} />+
                </h2>
              )}
            </CountUp>
            <p
              style={{ fontFamily: "var(--font-Poppins)" }}
              className="text-[15px] text-white"
            >
              Happy Clients
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="py-4 lg:pl-4"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <HeroHeading
          style={{ fontFamily: "var(--font-Poppins)" }}
          className=""
            preTitle="About the Logo Wall Street LLC"
            title="Top Logo Design Company"
            subtitle={`At The Logo Wall Street LLC, we understand the challenges small businesses face when starting out — that’s why we’re here to be your partner in success. As a leading logo design agency in the USA, we offer a full range of creative services to help you strengthen your brand and achieve your marketing goals.`}
            subtitle2={`Our skilled team specializes in crafting unique, impactful logos that truly represent your brand identity. Every design is tailored to your specific needs, ensuring your logo stands out in a competitive market.`}
            subtitle3={`At The Logo Wall Street LLC, we take pride in our commitment to quality and creativity. Let us help you build a strong visual identity and elevate your brand presence in the digital world.`}
            textColor="text-gray-600"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;