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
      name: "Harley R",
      title: "Developer",
      image: "https://i0.wp.com/pencheffphoto.com/wp-content/uploads/2017/02/12-4887-pp_gallery/016-Headshots.jpg?resize=1641%2C1313&ssl=1",
      text: "Very stress free process. I answered a few questions and told them what I was looking for. Then BOOM within the first rounds of logo designs I found the logo perfect for my company! Great company and very easy to work with! I'd recommend them for you logo process!"
    },
    {
      id: 2,
      name: "Michael Lock",
      title: "CEO at ABC Corp",
      image: "https://t3.ftcdn.net/jpg/01/04/93/56/360_F_104935633_9dB5CW1aSk35RYSXQPYOCudPMku6vMFv.jpg",
      text: "I sent an existing logo to be edited, Jay sent me a couple of logos they designed as well and that I liked much better. I also ordered some business cards with a code that takes one directly to my website. These guys work in a very timely manner and are great to work with.I Thank you once again!"
    },
    {
      id: 3,
      name: "Clyde James",
      title: "Marketing Head at DEF Inc.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Ricky_JeanFrancois_%2815%29_%28cropped%29.jpg",
      text: "Guys are great did a awesome job on my logo worked with me every time I asked to change something and kept going till I was happy great group of people and designers would definitely recommend if anyone needs a logo for there business new or established great work"
    },
    {
      id: 4,
      name: "Hendrik Pruyn",
      title: "Marketing Head at DEF Inc.",
      image: userImg,
      text: "From the start to completion , Clifford made the process enjoyable, quickly providing many very creative logos, and once we actually spoke and he was able to throughly understand the concept and the very personal meaning behind the concept, I believe the designer (s) Even stepped it up a notch.."
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
