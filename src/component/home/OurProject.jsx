import React from 'react';
import HeroHeading from '../others/Heading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImgOne from '../../assets/images/portfolio-1.jpg';
import sliderImgTwo from '../../assets/images/portfolio-2.jpg';
import sliderImgThree from '../../assets/images/portfolio-3.jpg';
import sliderImgFour from '../../assets/images/portfolio-4.jpg';

function OurProject() {
  const images = [
    "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765453932/htaadq3q573fwtmqojef.jpg",
    "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765453932/mluzdyp9dpo9nuexkvkr.jpg",
    "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765453931/l7lnn75hjrkgbhcatfi3.jpg",
    "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765453931/ytfqbol5fbj6j6wshfl5.jpg",
    "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765453931/qjqh79t6vymqlg5owzb7.jpg",

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,

    // Default = desktop (width >= 1024)
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,

    // These apply when WIDTH IS LESS THAN breakpoint
    responsive: [
      {
        breakpoint: 1024,        // < 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 640,         // < 640px (mobile)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="text-center mt-12">
      <div
        className="
          h-[500px] pt-20 text-center
          bg-gradient-to-r from-[#FFCC66] via-[#FF9B33] to-[#FF6A00]
        "
      >
        <HeroHeading
          preTitle="Our Projects"
          title="Proven Track Record in Logo Design"
          justifyContent="justify-center"
          subtitle="As a Top Logo Design Agency, we understand the importance of creating a logo that accurately represents a brand’s identity and message. Each logo in our portfolio has been thoughtfully crafted with attention to detail and a focus on creating a strong visual impact."
        />
      </div>

      <div className=" w-full max-w-[1300px] mx-auto relative bottom-[100px]  md:bottom-[100px]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-1">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-[16px] h-[300px] sm:h-[220px] md:h-[260px] lg:h-[350px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default OurProject;