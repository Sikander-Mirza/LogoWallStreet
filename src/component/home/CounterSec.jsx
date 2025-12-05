import React from 'react';
import bgCounter from '../../assets/images/bg/bg-dark.jpg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function CounterSec() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section
            className="relative flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
            ref={ref}
        >
            <div
                className="w-[80%] sm:w-auto md:w-auto rounded-[20px] py-10"
                style={{
                    backgroundImage: `url(${bgCounter})`,
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
                    <div className="p-4 text-center flex flex-col justify-center items-center">
                        <i className="text-[#fd7e14] ri-shield-user-line text-4xl mb-4"></i>
                        {inView && (
                            <div
                                className="relative"   
                            >
                                <CountUp start={0} end={500} duration={2.5} delay={0.5}>
                                    {({ countUpRef }) => (
                                        <h2 style={{ fontFamily: "var(--font-Playfair)" }} className="text-[30px] md:text-[40px] font-bold text-white">
                                            <span ref={countUpRef} />+
                                        </h2>
                                    )}
                                </CountUp>
                                <p style={{ fontFamily: "var(--font-Poppins)" }} className="text-[15px] text-white">Happy Clients</p>
                            </div>
                        )}
                    </div>

                    <div className="p-4 text-center flex flex-col justify-center items-center">
                        <i className="text-[#fd7e14] ri-palette-line text-4xl mb-4"></i>
                        {inView && (
                            <div
                                className="relative"
                            >
                                <CountUp start={0} end={1500} duration={2.5} delay={0.5}>
                                    {({ countUpRef }) => (
                                        <h2 style={{ fontFamily: "var(--font-Playfair)" }} className="text-[30px] md:text-[40px] font-bold text-white">
                                            <span ref={countUpRef} />+
                                        </h2>
                                    )}
                                </CountUp>
                                <p style={{ fontFamily: "var(--font-Poppins)" }} className="text-[15px] text-white">Logo Design</p>
                            </div>
                        )}
                    </div>
                    <div className="p-4 text-center flex flex-col justify-center items-center">
                        <i className="text-[#fd7e14] ri-dashboard-2-line text-4xl mb-4"></i>
                        {inView && (
                            <div
                                className="relative"
                            >
                                <CountUp start={0} end={6} duration={2.5} delay={0.5}>
                                    {({ countUpRef }) => (
                                        <h2 style={{ fontFamily: "var(--font-Playfair)" }} className="text-[30px] md:text-[40px] font-bold text-white">
                                            <span ref={countUpRef} />+
                                        </h2>
                                    )}
                                </CountUp>
                                <p style={{ fontFamily: "var(--font-Poppins)" }} className="text-[15px] text-white">Years Of Experience</p>
                            </div>
                        )}
                    </div>
                    <div className="p-4 text-center flex flex-col justify-center items-center">
                        <i className="text-[#fd7e14] ri-code-line text-4xl mb-4"></i>
                        {inView && (
                            <div
                                className="relative"
                            >
                                <CountUp start={0} end={250} duration={2.5} delay={0.5}>
                                    {({ countUpRef }) => (
                                        <h2 style={{ fontFamily: "var(--font-Playfair)" }} className="text-[30px] md:text-[40px] font-bold text-white">
                                            <span ref={countUpRef} />+
                                        </h2>
                                    )}
                                </CountUp>
                                <p style={{ fontFamily: "var(--font-Poppins)" }} className="text-[15px]">Web Design And Development</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CounterSec;
