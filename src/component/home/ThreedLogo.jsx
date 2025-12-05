import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroHeading from '../others/Heading';
import ThreedImg from "../../assets/images/3d-single-01.png";

function ThreedLogo() {
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
                        title="3D Logo Design"
                        subtitle="Using the latest 3D design techniques, our team creates captivating logos that stand out. Whether you’re rebranding or starting fresh, our 3D designs are crafted to leave a lasting impression and effectively represent your brand."
                        subtitle2="We collaborate closely with you to ensure the final logo aligns with your brand identity. By combining creativity with cutting-edge technology, we help elevate your presence in the virtual marketplace and make a memorable impact across digital platforms."
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
                        src={ThreedImg}
                        alt="banner image"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default ThreedLogo;
