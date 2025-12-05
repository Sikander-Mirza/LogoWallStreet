import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import image from "../../assets/images/about-us2.jpg";

// COUNTER COMPONENT
function Counter({ from = 0, to, duration = 2 }) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        const controls = animate(count, to, { duration });
        return controls.stop;
    }, []);

    return <motion.span>{rounded}</motion.span>;
}

export default function ExperienceSection() {
    return (
        <section className="w-full py-24 bg-white mt-20">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-[3px] bg-orange-500"></div>
                        <span className="text-sm font-semibold tracking-widest text-gray-700">
                            ABOUT THE LOGO WALL STREET
                        </span>
                    </div>

                    <h2 className="text-4xl lg:text-4xl font-bold text-[#0b183b] leading-tight">
                        5 Years of Experience in the <br />
                        Creative Digital Agency Realm
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Celebrating five fantastic years in the creative digital agency realm!
                        Our journey has been a whirlwind of collaboration and innovation —
                        working across industries and delivering tailored visual solutions
                        that truly stand out.
                    </p>

                    {/* STATS */}
                    <div className="mt-6 space-y-10">

                        {/* STAT 1 */}
                        {/* STAT 1 */}
                        <div className="grid grid-cols-[120px_1px_1fr] items-start gap-6">
                            <div className="flex flex-col text-orange-500">
                                <div className="flex items-end text-4xl font-bold">
                                    <Counter to={500} />
                                    <span>+</span>
                                </div>
                                <span className="text-sm tracking-wide text-gray-700">happy clients</span>
                            </div>

                            {/* Vertical divider */}
                            <div className="w-px bg-gray-300"></div>

                            {/* Right content with dotted line */}
                            <div>

                                <p className="text-gray-600">
                                    We proudly maintain a large list of satisfied clients whose
                                    positive feedback reflects the quality of our creative work.
                                </p>
                            </div>
                        </div>

                        {/* STAT 2 */}
                        <div className="grid grid-cols-[120px_1px_1fr] items-start gap-6">
                            <div className="flex flex-col text-orange-500">
                                <div className="flex items-end text-4xl font-bold">
                                    <Counter to={1500} />
                                    <span>+</span>
                                </div>
                                <span className="text-sm tracking-wide text-gray-700">logo designs</span>
                            </div>

                            <div className="w-px bg-gray-300"></div>

                            <p className="text-gray-600">
                                We’ve crafted thousands of logos representing businesses with clarity and visual excellence.
                            </p>
                        </div>


                    </div>
                </motion.div>

                {/* RIGHT IMAGE WITH SHAPES */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex justify-center"
                >
                    <div className="absolute w-[380px] h-[380px] bg-orange-500 rounded-full -top-10 -right-4 blur-xl opacity-60"></div>
                    <div className="absolute w-32 h-3 bg-orange-400 rounded-full rotate-45 bottom-16 left-4"></div>

                    <div className="relative z-10 overflow-hidden rounded-[50%] shadow-2xl w-[420px] h-[420px] border-[12px] border-white">
                        <img src={image} alt="team" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
