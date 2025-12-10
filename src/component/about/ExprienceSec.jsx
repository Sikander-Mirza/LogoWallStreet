import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import image from "../../assets/images/about-us2.jpg";
// COUNTER COMPONENT
function Counter({ from = 0, to, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function ExperienceSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 mt-20">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT SIDE – white content block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center"
        >
          <div className="max-w-xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[3px] bg-orange-500" />
              <span
                className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-700 uppercase"
                style={{ fontFamily: "var(--font-Playfair)" }}
              >
                About the Logo Wall Street
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0b183b] leading-tight"
              style={{ fontFamily: "var(--font-Playfair)" }}
            >
              5 Years of Experience in the{" "}
              <span className="text-orange-500">
                Creative Digital Agency
              </span>{" "}
              Realm
            </h2>

            <p
              className="text-gray-600 leading-relaxed text-sm sm:text-base"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              Celebrating five fantastic years in the creative digital agency
              realm! Our journey has been a whirlwind of collaboration and
              innovation — working across industries and delivering tailored
              visual solutions that truly stand out.
            </p>

            {/* STATS */}
            <div className="mt-5 space-y-8">
              {/* STAT 1 */}
              <div className="grid grid-cols-[120px_1px_1fr] items-start gap-6">
                <div className="flex flex-col text-orange-500">
                  <div className="flex items-end text-3xl sm:text-4xl font-bold">
                    <Counter to={5500} />
                    <span>+</span>
                  </div>
                  <span className="text-sm tracking-wide text-gray-700">
                    happy clients
                  </span>
                </div>

                <div className="w-px bg-gray-300" />

                <p
                  className="text-gray-600 text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  We proudly maintain a large list of satisfied clients whose
                  positive feedback reflects the quality of our creative work.
                </p>
              </div>

              {/* STAT 2 */}
              <div className="grid grid-cols-[120px_1px_1fr] items-start gap-6">
                <div className="flex flex-col text-orange-500">
                  <div className="flex items-end text-3xl sm:text-4xl font-bold">
                    <Counter to={3000} />
                    <span>+</span>
                  </div>
                  <span className="text-sm tracking-wide text-gray-700">
                    logo designs
                  </span>
                </div>

                <div className="w-px bg-gray-300" />

                <p
                  className="text-gray-600 text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  We’ve crafted thousands of logos representing businesses with
                  clarity and visual excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE – blue gradient background with white text */}
         {/* RIGHT SIDE – AgencyHero-style gradient with rounded circle image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-6 sm:p-8 lg:p-12 flex flex-col justify-center overflow-hidden  shadow-[0_26px_80px_rgba(15,23,42,0.45)]"
        >
          {/* Background Shapes like AgencyHero */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white rounded-full blur-2xl sm:blur-3xl translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-orange-500 rounded-full blur-2xl sm:blur-3xl -translate-x-1/4 translate-y-1/4" />
          </div>

          {/* Your rounded circle image + orange shapes */}
          <div className="relative z-10 flex justify-center items-center">
            {/* Orange glow behind circle */}
            <div className="absolute w-[380px] h-[380px] bg-orange-500 rounded-full -top-10 -right-4 blur-xl opacity-60" />
            {/* Orange accent line */}
            <div className="absolute w-32 h-3 bg-orange-400 rounded-full rotate-45 bottom-16 left-4 opacity-80" />

            {/* Circular image with white border */}
            <div className="relative overflow-hidden rounded-full shadow-2xl w-[320px] h-[320px] md:w-[380px] md:h-[380px] border-[12px] border-white">
              <img
                src={image}
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}