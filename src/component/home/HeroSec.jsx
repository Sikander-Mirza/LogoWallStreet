import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroBg from '../../assets/images/bg/background-hero.webp';
import HeroHeading from '../others/Heading';
import singleImg from "../../assets/images/single-s-01.png";

function HeroSec() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && email.trim() !== '') setStep(2);
    else if (step === 2 && phone.trim() !== '') setSubmitted(true);
  };

  // Motion variants
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
<section
  className="bg-cover bg-center pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28 lg:pt-48 lg:pb-44 xl:pt-40 xl:pb-42"
  style={{ backgroundImage: `url(${HeroBg})` }}
>
      <div className="max-w-7xl mx-auto grid items-center grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 lg:px-16">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="py-4 lg:pl-4"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          <HeroHeading
            preTitle="WELCOME TO THE LOGO WALL STREET LLC"
            title="Affordable Custom Logo Design Services"
            subtitle="Enhance your brand’s identity and make a lasting impression with our professional logo design service."
            preTitleClass="text-yellow-400"
            titleClass="text-4xl md:text-5xl font-extrabold leading-tight"
            subtitleClass="text-gray-200 mt-3"
          />

          {/* Step Form */}
          <div className="mt-8">
            {!submitted ? (
              <form
                onSubmit={handleNext}
                className="flex items-center max-w-md bg-white rounded-full overflow-hidden shadow-md p-1 pr-2"
              >
                {step === 1 ? (
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-2 text-gray-800 focus:outline-none rounded-full"
                    required
                  />
                ) : (
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-grow px-4 py-2 text-gray-800 focus:outline-none rounded-full"
                    required
                  />
                )}
                <button
                  type="submit"
                  className="bg-gradient-orange text-white px-6 py-2 font-[inter] rounded-full ml-2 flex items-center justify-center hover:opacity-90 transition-all"
                >
                  {step === 1 ? 'Next' : 'Submit'}
                </button>
              </form>
            ) : (
              <p className="text-green-400 font-medium mt-3">
                ✅ Thanks! We’ll contact you soon.
              </p>
            )}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center items-center lg:mt-8 md:mt-0"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img
            className="
    w-[300px] 
    sm:w-[360px] 
    md:w-[420px] 
    lg:w-[460px] 
    xl:w-[520px]
    object-contain 
    mx-auto
    translate-y-2 md:translate-y-4
  "
  src={singleImg}
  alt="banner image"
          />

        </motion.div>
      </div>
    </section>
  );
}

export default HeroSec;
