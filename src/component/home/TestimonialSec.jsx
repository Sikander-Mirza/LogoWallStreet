import HeroHeading from '../others/Heading';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import userImg from '../../assets/images/user-01.jpg';
import testiBg from '../../assets/images/bg/bg-testimonial.jpg';

function TestimonialSec() {

  // Testimonial data array
  const testimonials = [
    {
      id: 1,
      name: "Beverley Allan",
      title: "Developer",
      image: "https://i0.wp.com/pencheffphoto.com/wp-content/uploads/2017/02/12-4887-pp_gallery/016-Headshots.jpg?resize=1641%2C1313&ssl=1",
      text: "The Logo Wall Street LLC's customer service is exceptional, and their work quality is impressive. The team was professional, effective, and understood our needs perfectly, delivering a solution beyond expectations. I would gladly work with them again and highly recommend them for any design needs."
    },
    {
      id: 2,
      name: "John Doe",
      title: "CEO at ABC Corp",
      image: "https://t3.ftcdn.net/jpg/01/04/93/56/360_F_104935633_9dB5CW1aSk35RYSXQPYOCudPMku6vMFv.jpg",
      text: "My experience with The Logo Wall Street LLC was exceptional. They maintained great communication, were receptive to feedback, and delivered exactly what I envisioned. Their attention to detail and dedication to exceeding expectations was remarkable. I highly recommend their services for outstanding design work."
    },
    {
      id: 3,
      name: "Alice Smith",
      title: "Marketing Head at DEF Inc.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Ricky_JeanFrancois_%2815%29_%28cropped%29.jpg",
      text: "Working with The Logo Wall Street LLC has transformed my business. Their expert advice and stunning designs have helped us reach a new audience and refreshed our brand. I’m impressed with their impact and highly recommend them to anyone looking to elevate their brand."
    },
    {
      id: 4,
      name: "Alex",
      title: "Marketing Head at DEF Inc.",
      image: userImg,
      text: "We were extremely pleased with the design and quality of work provided by The Logo Wall Street LLC. They understood our requirements and delivered a solution that was both aesthetically appealing and functional."
    }
  ];

  const testiCaro = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '15px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10px',
        }
      }
    ]
  };

  return (
    <section 
      className='px-8  py-18' 
      style={{ 
        backgroundImage: `linear-gradient(#0c1771, rgba(0, 0, 255, 0.5)), url(${testiBg})`, // Blue overlay + image
        backgroundSize: 'cover', // Ensure the image covers the entire section
        backgroundPosition: 'center', // Center the image within the section
        backgroundRepeat: 'no-repeat', // Prevent image repetition
      }}
    >
      <div className='text-center'>
        <HeroHeading
          preTitle="Testimonials"
          title="What They Say About Us"
          justifyContent="justify-center"
          subtitle="Don’t just take our word for it! Read what our satisfied clients have to say about their experience working with us. Check out our client reviews below to see how we’ve helped others achieve their goals."
        />
      </div>
      <div className='mt-4 px-6'>
        <Slider {...testiCaro}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='bg-[#eeee] py-6 px-10 rounded-xl flex flex-col h-full'>
              <p style={{ fontFamily: "var(--font-Poppins)" }} className='text-[16px] h-[220px] flex-grow'>
                {testimonial.text}
              </p>
              <div className='flex flex-row items-center gap-6 mt-4 pt-4 border-t-1 border-[#0c1771]'>
                <img className='w-[60px] rounded-[60px] h-[60px]' src={testimonial.image} alt="User" />
                <div>
                  <h3 style={{ fontFamily: "var(--font-Playfair)" }} className='text-[20px]'>{testimonial.name}</h3>
                  <h5 style={{ fontFamily: "var(--font-Playfair)" }} className='text-[15px]'>{testimonial.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialSec;
