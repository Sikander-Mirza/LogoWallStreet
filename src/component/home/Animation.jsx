import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroHeading from '../others/Heading'
import AnimationImg from "../../assets/images/animation_single-03.png";

function Animation() {
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
                        src={AnimationImg}
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
                        title="Animated Logo"
                        subtitle="As a premier animated logo design service provider, we bring your brand to life with dynamic and captivating animated logos. Our designs are not just logos; they are engaging visual stories that leave a lasting impression. Whether you’re rebranding or starting from scratch, our animated logo services are designed to enhance your brand’s identity and captivate your audience."
                        subtitle2="Our team of skilled designers and representatives is enthusiastic about collaborating closely with you and your business to elevate your visual presence in the virtual landscape. Let’s make your brand unforgettable with our animated logos."
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

export default Animation;
