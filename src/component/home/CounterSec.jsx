import React, { useEffect, useState } from "react";
import bgCounter from "../../assets/images/bg/bg-dark.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterSec() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Ensure CountUp only runs on the client
    setHasMounted(true);
  }, []);

  const showCounters = hasMounted && inView;

  return (
    <section
      className="relative flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat py-10 md:py-14"
      ref={ref}
      style={{ backgroundImage: `url(${bgCounter})` }}
    >
      <div className="w-[90%] sm:w-auto md:w-auto rounded-[20px] py-8 md:py-10 bg-black/40 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white text-center px-6">
          {/* 1 */}
          <CounterItem
            show={showCounters}
            iconClass="ri-shield-user-line"
            end={500}
            label="Happy Clients"
          />
          {/* 2 */}
          <CounterItem
            show={showCounters}
            iconClass="ri-palette-line"
            end={1500}
            label="Logo Design"
          />
          {/* 3 */}
          <CounterItem
            show={showCounters}
            iconClass="ri-dashboard-2-line"
            end={6}
            label="Years Of Experience"
          />
          {/* 4 */}
          <CounterItem
            show={showCounters}
            iconClass="ri-code-line"
            end={250}
            label="Web Design And Development"
          />
        </div>
      </div>
    </section>
  );
}

function CounterItem({ show, iconClass, end, label }) {
  return (
    <div className="p-4 text-center flex flex-col justify-center items-center">
      <i className={`text-[#fd7e14] ${iconClass} text-4xl mb-4`} />
      {show && (
        <div className="relative">
          <CountUp start={0} end={end} duration={2.5} delay={0.3}>
            {({ countUpRef }) => (
              <h2
                style={{ fontFamily: "var(--font-Playfair)" }}
                className="text-[30px] md:text-[40px] font-bold text-white"
              >
                <span ref={countUpRef} />+
              </h2>
            )}
          </CountUp>
          <p
            style={{ fontFamily: "var(--font-Poppins)" }}
            className="text-[15px] text-white mt-1"
          >
            {label}
          </p>
        </div>
      )}
    </div>
  );
}

export default CounterSec;