import React from 'react';
import HeroHeading from '../others/Heading';
import bgImg from '../../assets/images/bg/bg-dark.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImgOne from '../../assets/images/portfolio-1.jpg'
import sliderImgTwo from '../../assets/images/portfolio-2.jpg'
import sliderImgThree from '../../assets/images/portfolio-3.jpg'
import sliderImgFour from '../../assets/images/portfolio-4.jpg'

function OurProject() {
    const images = [
        `${sliderImgOne}`,
        `${sliderImgTwo}`,
        `${sliderImgThree}`,
        `${sliderImgFour}`,
        `${sliderImgOne}`,
    ];
const settings = {
    dots: false,                // Dots are hidden by default
    infinite: true,
    speed: 500,
    autoplay: true,             // Enable autoplay
    autoplaySpeed: 3000,        // Set the speed for autoplay (in milliseconds)
    slidesToShow: 4,            // Default to 4 slides on desktop
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 1024,    // For tablet screens
            settings: {
                slidesToShow: 2,  // Show 2 slides on tablets
                dots: true,       // Show dots on tablets
                arrows: false,    // Hide arrows on tablets
            }
        },
        {
            breakpoint: 600,     // For mobile screens
            settings: {
                slidesToShow: 1,  // Show 1 slide on mobile
                dots: true,       // Show dots on mobile
                arrows: false,    // Hide arrows on mobile
                centerMode: false, // Disable center mode for mobile
                centerPadding: '0', // Disable center padding for mobile
            }
        }
    ]
};


    return (
            <section className="text-center mt-12">
                <div
                    className="h-[500px] pt-20 bg-cover bg-center text-center"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                    <HeroHeading
                        preTitle="Our Projects"
                        title="Proven Track Record in Logo Design"
                        justifyContent="justify-center"
                        subtitle="As a Top Logo Design Agency, we understand the importance of creating a logo that accurately represents a brand’s identity and message. Each logo in our portfolio has been thoughtfully crafted with attention to detail and a focus on creating a strong visual impact."
                    />
                </div>
                <div className='w-full max-w-[1200px] mx-auto relative bottom-[150px] items-center sm:bottom-[80px] md:bottom-[100px]'>
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
