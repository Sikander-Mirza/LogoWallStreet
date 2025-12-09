import React, { useEffect, useState } from "react";
import bgCounter from "../../assets/images/bg/bg-dark.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterSec() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Ensure we only use CountUp on the client
  const [hasMounted, setHasMounted] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // When the section is in view on the client, start the counters
  useEffect(() => {
    if (hasMounted && inView) {
      setShouldStart(true);
    }
  }, [hasMounted, inView]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat py-10 md:py-14"
      style={{ backgroundImage: `url(${bgCounter})` }}
    >
      <div className="w-[90%] sm:w-auto md:w-auto rounded-[20px] py-8 md:py-10 bg-black/40 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white text-center px-6">
          <CounterItem
            hasMounted={hasMounted}
            shouldStart={shouldStart}
            iconClass="ri-shield-user-line"
            end={500}
            label="Happy Clients"
          />
          <CounterItem
            hasMounted={hasMounted}
            shouldStart={shouldStart}
            iconClass="ri-palette-line"
            end={1500}
            label="Logo Design"
          />
          <CounterItem
            hasMounted={hasMounted}
            shouldStart={shouldStart}
            iconClass="ri-dashboard-2-line"
            end={6}
            label="Years Of Experience"
          />
          <CounterItem
            hasMounted={hasMounted}
            shouldStart={shouldStart}
            iconClass="ri-code-line"
            end={250}
            label="Web Design And Development"
          />
        </div>
      </div>
    </section>
  );
}

function CounterItem({ hasMounted, shouldStart, iconClass, end, label }) {
  const fontPoppins = { fontFamily: "var(--font-Poppins)" };
  const fontPlayfair = { fontFamily: "var(--font-Playfair)" };

  return (
    <div className="p-4 text-center flex flex-col justify-center items-center">
      <i className={`text-[#fd7e14] ${iconClass} text-4xl mb-4`} />

      {/* Fallback static number for SSR / no-JS / before inView */}
      {!hasMounted || !shouldStart ? (
        <div className="relative">
          <h2
            style={fontPlayfair}
            className="text-[30px] md:text-[40px] font-bold text-white"
          >
            0+
          </h2>
          <p style={fontPoppins} className="text-[15px] text-white mt-1">
            {label}
          </p>
        </div>
      ) : (
        <div className="relative">
          <CountUp start={0} end={end} duration={2.5}>
            {({ countUpRef }) => (
              <h2
                style={fontPlayfair}
                className="text-[30px] md:text-[40px] font-bold text-white"
              >
                <span ref={countUpRef} />+
              </h2>
            )}
          </CountUp>
          <p style={fontPoppins} className="text-[15px] text-white mt-1">
            {label}
          </p>
        </div>
      )}
    </div>
  );
}

export default CounterSec;