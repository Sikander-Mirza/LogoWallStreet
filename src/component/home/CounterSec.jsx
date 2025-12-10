import React from "react";
import bgCounter from "../../assets/images/bg/bg-dark.jpg";
import CountUp from "react-countup";

function CounterSec() {
  return (
    <section
      className="relative flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat py-10 md:py-14"
      style={{ backgroundImage: `url(${bgCounter})` }}
    >
      <div className="w-[90%] sm:w-auto md:w-auto rounded-[20px] py-8 md:py-10 bg-black/40 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white text-center px-6">
          <CounterItem
            iconClass="ri-shield-user-line"
            end={5500}
            label="Happy Clients"
          />
          <CounterItem
            iconClass="ri-palette-line"
            end={3000}
            label="Logo Design"
          />
          <CounterItem
            iconClass="ri-dashboard-2-line"
            end={5}
            label="Years Of Experience"
          />
          <CounterItem
            iconClass="ri-code-line"
            end={1100}
            label="Web Design And Development"
          />
        </div>
      </div>
    </section>
  );
}

function CounterItem({ iconClass, end, label }) {
  const fontPoppins = { fontFamily: "var(--font-Poppins)" };
  const fontPlayfair = { fontFamily: "var(--font-Playfair)" };

  return (
    <div className="p-4 text-center flex flex-col justify-center items-center">
      <i className={`text-[#fd7e14] ${iconClass} text-4xl mb-4`} />

      <div className="relative">
        <CountUp
          start={0}
          end={end}
          duration={2.5}
          separator=","
          enableScrollSpy
          scrollSpyOnce
        >
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
    </div>
  );
}

export default CounterSec;