import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroHeading from '../others/Heading';
import TwodImg from "../../assets/images/2d-logo-single.png";

function TwodLogo() {
    // Motion variants
    const textVariant = {
        hidden: { opacity: 0, y: 40 }, // start lower
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // move up to 0
    };

    const imageVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    };


    return (
        <section
            className="bg-cover bg-center md:pt-6 md:pb-6"
        >
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
                        src={TwodImg}
                        alt="banner image"
                    />
                </motion.div>
                {/* Right CONTENT */}
                <motion.div
                    className=""
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <HeroHeading
                        preTitle=""
                        title="2D LOGO Design"
                        subtitle="We specialize in creating 2D logos that leave a lasting impact. Our designs are versatile, simple, and impactful, perfectly capturing your brand's essence. Whether you're aiming for a modern, sleek look or a timeless design, we tailor each logo to align with your vision."
                        subtitle2="With a strong focus on clarity and effectiveness, our 2D logos work seamlessly across various applications. Let us help you establish a distinctive visual identity that stands out in your industry and leaves a memorable impression."
                        preTitleClass="text-yellow-400"
                        titleClass="text-4xl md:text-5xl font-extrabold "
                        subtitleClass="mt-3"
                        textColor='black'
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default TwodLogo;
