import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroHeading from '../others/Heading';
import AniImg from "../../assets/images/marketing_single-01.png";

function MarketingCollateral() {
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
                {/* LEFT CONTENT */}
                <motion.div
                    className=""
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <HeroHeading
                        preTitle=""
                        title="Marketing Collateral"
                        subtitle="Our creative team specializes in crafting custom digital solutions that enhance your brand and engage your audience. From engaging websites to captivating content, we have the expertise to turn your ideas into effective marketing strategies that deliver results."
                        subtitle2="Whether you need a fresh website, compelling content, or a full digital strategy, we’re here to help you achieve your goals. Let’s work together to elevate your digital presence and create impactful solutions that drive success. Get in touch with us today to learn more!"
                        subtitle3=" "
                        preTitleClass="text-yellow-400"
                        titleClass="text-4xl md:text-5xl font-extrabold "
                        subtitleClass="mt-3"
                        textColor='black'
                    />
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
                        src={AniImg}
                        alt="banner image"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default MarketingCollateral;
