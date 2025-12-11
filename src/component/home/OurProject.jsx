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
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '15px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: false,
          centerPadding: '0',
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

      <div className="w-full max-w-[1300px] mx-auto relative bottom-[150px] sm:bottom-[80px] md:bottom-[100px]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full rounded-[20px] px-2 h-[350px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default OurProject;