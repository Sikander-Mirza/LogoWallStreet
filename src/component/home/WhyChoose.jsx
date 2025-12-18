import React from 'react';
import { motion } from 'framer-motion';
import HeroHeading from '../others/Heading';

function WhyChoose() {
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const iconData = [
    {
      icon: 'ri-verified-badge-line',
      title: 'Trusted by 500+ Companies',
      description:
        'With over 500 satisfied clients, we understand what it takes to help your business thrive and reach its full potential.',
    },
    {
      icon: 'ri-brush-ai-line',
      title: 'Expert Logo Design Agency',
      description:
        'At The Logo Wall Street LLC, we craft unique logos that elevate your brand and drive business growth, helping you stand out online.',
    },
    {
      icon: 'ri-team-line',
      title: 'Professional Logo Design Team',
      description:
        'Elevate your brand with our expert logo design services. Our team creates unique, impactful logos that resonate with your audience, ensuring your satisfaction through a collaborative approach.',
    },
  ];

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
            src="https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765825047/f6vjacvlzxq9y0ejcj7l.png"
            alt="banner image"
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
          <HeroHeading
            preTitle="Why Choose Us"
            title="Professional Logo Design Company"
            preTitleClass="text-yellow-400"
            titleClass="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
            subtitleClass="mt-3"
            textColor="black"
          />

          <div className="mt-6">
            <div className="flex flex-col gap-6">
              {iconData.map((item, index) => (
                <div key={index} className="flex items-start">
                  <i
                    className={`bg-gradient-orange text-white py-3 px-5 rounded-full text-[26px] sm:text-[30px] ${item.icon}`}
                  ></i>
                  <div className="ml-4 sm:ml-6">
                    <h3
                      style={{ fontFamily: 'var(--font-Playfair)' }}
                      className="text-[18px] sm:text-[20px] font-bold"
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{ fontFamily: 'var(--font-Poppins)' }}
                      className="text-[13px] sm:text-[14px] leading-[20px] mt-1 text-gray-600"
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChoose;