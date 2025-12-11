import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroHeading from '../others/Heading';
import whyImg from "../../assets/images/why_single-01.PNG";

function WhyChoose() {
    // Motion variants
    const textVariant = {
        hidden: { opacity: 0, y: 40 }, // start lower
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // move up to 0
    };

    const imageVariant = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    const iconData = [
        {
            icon: "ri-verified-badge-line",
            title: "Trusted by 500+ Companies",
            description: "With over 500 satisfied clients, we understand what it takes to help your business thrive and reach its full potential."
        },
        {
            icon: "ri-brush-ai-line",
            title: "Expert Logo Design Agency",
            description: "At The Logo Wall Street LLC, we craft unique logos that elevate your brand and drive business growth, helping you stand out online."
        },
        {
            icon: "ri-team-line",
            title: "Professional Logo Design Team",
            description: "Elevate your brand with our expert logo design services. Our team creates unique, impactful logos that resonate with your audience, ensuring your satisfaction through a collaborative approach."
        }
    ];

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
                        preTitle="Why Choose Us"
                        title="Professional Logo Design Company"
                        preTitleClass="text-yellow-400"
                        titleClass="text-4xl md:text-5xl font-extrabold "
                        subtitleClass="mt-3"
                        textColor='black'
                    />
                    <div className="mt-2">
                        <div className="flex flex-wrap justify-between gap-6 mt-6"> {/* Adjusted gap and wrap */}
                            {iconData.map((item, index) => (
                                <div key={index} className="flex items-center"> {/* Added max-width to control size */}
                                    <i className={`bg-gradient-orange text-white py-3 px-5 rounded-full text-[30px] ${item.icon}`}></i>
                                    <div className="ml-6"> {/* Increased margin for spacing */}
                                        <h3 style={{ fontFamily: "var(--font-Playfair)" }} className="text-[20px] font-bold">
                                            {item.title}    
                                        </h3>
                                        <p style={{ fontFamily: "var(--font-Poppins)" }} className="text-[14px] leading-[20px] mt-1 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                        src="https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765453930/gyjvj1xzgqwovar7yvg4.png"
                        alt="banner image"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default WhyChoose;
