import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Target, Lightbulb } from 'lucide-react';
import aboutus from "../../assets/images/about-us-3rd-image.jpg"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

export default function AgencyHero() {
    const statsRef = useRef(null);
    const isInView = useInView(statsRef, { once: true });

    const stat1 = useMotionValue(0);
    const stat2 = useMotionValue(0);

    const [stat1Display, setStat1Display] = useState(0);
    const [stat2Display, setStat2Display] = useState(0);

    const R = 56;
    const C = 2 * Math.PI * R;

    const dashOffset1 = useTransform(stat1, (v) => C * (1 - v / 100));
    const dashOffset2 = useTransform(stat2, (v) => C * (1 - v / 100));

    useEffect(() => {
        const unsub1 = stat1.on("change", (v) => setStat1Display(Math.floor(v)));
        const unsub2 = stat2.on("change", (v) => setStat2Display(Math.floor(v)));
        return () => {
            unsub1();
            unsub2();
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            animate(stat1, 92, { duration: 2 });
            animate(stat2, 85, { duration: 2 });
        }
    }, [isInView]);

    const expertise = [
        { name: 'Digital Marketing', percentage: 95, icon: TrendingUp },
        { name: 'Branding Identity', percentage: 98, icon: Target },
        { name: 'Business Planning', percentage: 92, icon: Lightbulb }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 min-h-screen">

                {/* Left Side */}
                <div
  className="relative bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center overflow-hidden"
  style={{
    backgroundImage: `url(${aboutus})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* Blue tint + blur overlay (more transparent) */}
  <div
    className="
      absolute inset-0
      backdrop-blur-sm lg:backdrop-blur
      bg-gradient-to-br from-blue-600/70 via-blue-800/70 to-indigo-900/70
    "
  />

  <div className="relative z-10">
    {/* Main image card */}
    <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] mb-6 sm:mb-8">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
        alt="Creative team collaboration"
        className="w-full h-56 sm:h-72 md:h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>

    {/* Expertise Section */}
    <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-lg border border-slate-200">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6" style={{ fontFamily: "var(--font-Playfair)" }}>Our Expertise</h3>

                            <div className="space-y-6">
                                {expertise.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="group">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg group-hover:scale-110 transition-transform">
                                                        <Icon className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <span className="text-slate-500 font-semibold text-sm">{item.percentage}%</span>
                                            </div>

                                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 rounded-full transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: `${item.percentage}%`,
                                                        animation: `slideIn 1.5s ease-out ${index * 0.2}s backwards`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="
    relative p-6 sm:p-8 lg:p-12
    flex flex-col justify-center overflow-hidden
    bg-gradient-to-br from-[#020617] via-[#050816] to-[#111827]
  "
                >

                    {/* Background Shapes */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white rounded-full blur-2xl sm:blur-3xl translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-orange-500 rounded-full blur-2xl sm:blur-3xl -translate-x-1/4 translate-y-1/4"></div>
                    </div>

                    <div className="relative z-10 max-w-xl">
                        {/* Small Title */}
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <div className="h-0.5 w-10 sm:w-12 bg-gradient-to-r from-orange-500 to-red-500"></div>
                            <span className="text-orange-400 font-semibold tracking-wider text-xs sm:text-sm uppercase"
                                style={{ fontFamily: "var(--font-Playfair)" }}>
                                Who We Are
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-Playfair)" }}>
                            Leading Global Creative Digital Agency
                        </h1>

                        <p className="text-blue-200 text-base sm:text-lg mb-10 sm:mb-12 leading-relaxed">
                            Logo Wall Street is one of the best digital agencies that provide high-quality
                            web design and development alongside other services.
                        </p>

                        {/* Stats Grid */}
                        <div ref={statsRef} className="grid grid-cols-2 gap-6 sm:gap-10 max-w-sm sm:max-w-md md:max-w-lg mx-auto">


                            {/* ==== STAT 1 ==== */}
                            <div className="text-center">
                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                                    <svg
                                        className="w-full h-full -rotate-90"
                                        viewBox="0 0 128 128"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="#ffffff20"
                                            strokeWidth="8"
                                            fill="none"
                                        />

                                        <motion.circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="url(#g1)"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray={2 * Math.PI * 56}
                                            strokeDashoffset={dashOffset1}
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-3xl sm:text-4xl font-bold text-white">
                                            {stat1Display}%
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-white text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-1 sm:mb-2">
                                    Smart Solution
                                </h3>
                                <p className="text-blue-200 text-xs sm:text-sm px-2 leading-relaxed">
                                    We provide strategic designs that bring real business growth.
                                </p>

                                <svg width="0" height="0">
                                    <defs>
                                        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#FF9A00" />
                                            <stop offset="100%" stopColor="#FF4D6D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* ==== STAT 2 ==== */}
                            <div className="text-center">
                                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
                                    <svg
                                        className="w-full h-full -rotate-90"
                                        viewBox="0 0 128 128"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="#ffffff20"
                                            strokeWidth="8"
                                            fill="none"
                                        />

                                        <motion.circle
                                            cx="64"
                                            cy="64"
                                            r="56"
                                            stroke="url(#g2)"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray={2 * Math.PI * 56}
                                            strokeDashoffset={dashOffset2}    // FIXED
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-3xl sm:text-4xl font-bold text-white">
                                            {stat2Display}%
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-white text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-1 sm:mb-2">
                                    Effective Strategy
                                </h3>
                                <p className="text-blue-200 text-xs sm:text-sm px-2 leading-relaxed">
                                    We refine designs based on client feedback and business goals.
                                </p>

                                <svg width="0" height="0">
                                    <defs>
                                        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="100%" stopColor="#FF9A00" />
                                            <stop offset="0%" stopColor="#FF4D6D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                        </div>

                        {/* Button */}
                        <button className="group mt-10 sm:mt-14 relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                                VIEW PROJECTS
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
    @keyframes slideIn {
      from {
        width: 0;
      }
    }
  `}</style>
        </div>

    );
}