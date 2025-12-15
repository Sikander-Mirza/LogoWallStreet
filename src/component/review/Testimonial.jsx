import React from "react";
import { FaStar, FaCheckCircle, FaQuoteRight } from "react-icons/fa";
import HeroHeading from "../others/Heading";
import testiBg from "../../assets/images/bg/bg-testimonial.jpg";
import userImg from "../../assets/images/user-01.jpg";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Harley R",
      title: "Developer",
      image:
        "https://i0.wp.com/pencheffphoto.com/wp-content/uploads/2017/02/12-4887-pp_gallery/016-Headshots.jpg?resize=1641%2C1313&ssl=1",
      text: "Very stress free process. I answered a few questions and told them what I was looking for. Then BOOM within the first rounds of logo designs I found the logo perfect for my company! Great company and very easy to work with! I'd recommend them for your logo process!",
      rating: 4,
      date: "September 3, 2025",
    },
    {
      id: 2,
      name: "Michael Lock",
      title: "CEO at ABC Corp",
      image:
        "https://t3.ftcdn.net/jpg/01/04/93/56/360_F_104935633_9dB5CW1aSk35RYSXQPYOCudPMku6vMFv.jpg",
      text: "I sent an existing logo to be edited. Jay sent me a couple of logos they designed that I liked much better. They also created business cards with a code that links directly to my website. They work in a very timely manner and are great to work with.",
      rating: 5,
      date: "August 18, 2025",
    },
    {
      id: 3,
      name: "Hendrik Pruyn",
      title: "Marketing Head at DEF Inc.",
      image: userImg,
      text: "From start to completion, Clifford made the process enjoyable, quickly providing many creative logos. Once he understood the concept and the personal meaning behind it, the designers really stepped it up. Pricing was fair and I’ll definitely use them again.",
      rating: 5,
      date: "September 3, 2025",
    },
        {
      id: 4,
      name: "Hendrik Pruyn",
      title: "Marketing Head at DEF Inc.",
      image: userImg,
      text: "From start to completion, Clifford made the process enjoyable, quickly providing many creative logos. Once he understood the concept and the personal meaning behind it, the designers really stepped it up. Pricing was fair and I’ll definitely use them again.",
      rating: 5,
      date: "September 3, 2025",
    },
        {
      id: 5,
      name: "Hendrik Pruyn",
      title: "Marketing Head at DEF Inc.",
      image: userImg,
      text: "From start to completion, Clifford made the process enjoyable, quickly providing many creative logos. Once he understood the concept and the personal meaning behind it, the designers really stepped it up. Pricing was fair and I’ll definitely use them again.",
      rating: 5,
      date: "September 3, 2025",
    },
        {
      id: 6,
      name: "Hendrik Pruyn",
      title: "Marketing Head at DEF Inc.",
      image: userImg,
      text: "From start to completion, Clifford made the process enjoyable, quickly providing many creative logos. Once he understood the concept and the personal meaning behind it, the designers really stepped it up. Pricing was fair and I’ll definitely use them again.",
      rating: 5,
      date: "September 3, 2025",
    },
  ];

  return (
    <section
      className="px-4 md:px-8 py-16 md:py-20"
      style={{
        backgroundImage: `linear-gradient(#09196e, #050b2a), url(${testiBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <HeroHeading
            preTitle="Testimonials"
            title="5‑Star Reviews from Trustpilot"
            justifyContent="justify-center"
            subtitle="See what our happy clients say about working with The Logo Wall Street. These are real reviews from real businesses who trusted us with their brand."
            textColor="text-white"
          />
        </div>

        {/* 3‑card grid (1/2/3 responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="
                relative bg-[#0b1238]
                rounded-3xl px-6 py-6 md:px-7 md:py-7
                shadow-[0_18px_50px_rgba(0,0,0,0.6)]
                border border-[#1a234f]
                h-full flex flex-col
                group
                transition-all duration-300
                hover:shadow-[0_24px_70px_rgba(249,115,22,0.45)]
                hover:border-orange-400/80
                hover:bg-gradient-to-b hover:from-[#0b1238] hover:via-[#1f2450] hover:to-[#ff7a1a20]
              "
            >
              {/* Orange quote badge */}
              <div className="absolute -left-4 -top-4 h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                <FaQuoteRight className="text-white text-sm" />
              </div>

              {/* Stars */}
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
                  <FaStar key={i} className="text-[#FDC600] h-4 w-4" />
                ))}
                {t.rating - Math.floor(t.rating) >= 0.5 && (
                  <FaStar className="text-[#FDC600] h-4 w-4 opacity-70" />
                )}
              </div>

              {/* Text */}
              <p
                style={{ fontFamily: "var(--font-Poppins)" }}
                className="text-sm md:text-[15px] text-slate-100 mt-3 flex-grow leading-relaxed"
              >
                “{t.text}”
              </p>

              {/* Divider */}
              <div className="mt-4 mb-3 border-t border-[#1f2958]" />

              {/* User info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-orange-400"
                    src={t.image}
                    alt={t.name}
                  />
                  <div>
                    <h3
                      style={{ fontFamily: "var(--font-Playfair)" }}
                      className="text-sm md:text-base font-semibold text-white"
                    >
                      {t.name}
                    </h3>
                    <p className="text-[11px] text-slate-300">{t.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-300">
                  <FaCheckCircle className="h-3 w-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;