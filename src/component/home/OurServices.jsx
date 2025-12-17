import React from 'react'
import Button from '../button/Button'
import HeroHeading from '../others/Heading'
import Card from '../card/Card'

function OurServices() {
  const cardsData = [
    {
      icon: "ri-seo-line",
      title: "Digital Marketing",
      bgColor: false,
      description:
        "Want to grow your business online? Our digital marketing experts create customized strategies to boost your brand through SEO, social media, and email marketing — helping you reach the right audience and achieve lasting success.",
    },
    {
      icon: "ri-trademark-line",
      title: "Branding Identity",
      bgColor: true,
      description:
        "We help your brand stand out in a crowded market. From logo design and visual identity to brand messaging and standards, our team creates distinctive brand identities that capture your company’s essence and leave a lasting impression.",
    },
    {
      icon: "ri-brush-line",
      title: "Logo Design",
      bgColor: false,
      description:
        "Elevate your brand with a custom logo that stands out. Our expert designers combine creativity and precision to craft memorable logos that resonate with your audience. Whether you’re starting fresh or rebranding, we deliver unique designs that capture your brand’s essence.",
    },
    {
      icon: "ri-advertisement-line",
      title: "PPC Advertising",
      bgColor: false,
      description:
        "Ready to supercharge your online marketing? Our PPC experts craft tailored strategies that drive conversions and maximize ROI. From keyword research and ad creation to campaign optimization and analytics, we ensure your ads reach the right audience and deliver results. Let us help you achieve your business goals with effective PPC advertising.",
    },
    {
      icon: "ri-award-line",
      title: "Content Marketing",
      bgColor: false,
      description:
        "Looking to grow your business? Our content marketing specialists create engaging content that resonates with your audience. From blog posts and social media updates to whitepapers and email newsletters, we craft tailored strategies that boost brand visibility, drive traffic, and generate leads.",
    },
    {
      icon: "ri-braces-line",
      title: "Web Development",
      bgColor: false,
      description:
        "Looking for a website that performs as well as it looks? Our team specializes in responsive design, user experience optimization, backend development, and CMS integration. We create websites that drive traffic and meet your business needs, delivering projects on time and within budget.",
    },
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-[1250px] mx-auto px-5 sm:px-8 md:px-12">

        {/* Heading + Button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div>
            <HeroHeading
              preTitle="Our Services"
              title="Services We Provides"
              textColor="black"
            />
          </div>
          {/* <div className="mt-3 md:mt-0 flex md:justify-end">
            <Button text={"All Services"} />
          </div> */}
        </div>

        {/* Cards grid with SAME styling */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="
                bg-white
                p-6 
                rounded-2xl 
                shadow-md 
                transition-all 
                duration-300 
                hover:bg-orange-500
                hover:scale-105
                hover:shadow-xl
                cursor-pointer
                group
                text-center
                flex flex-col items-center
              "
            >
              <i
                className={`${card.icon} text-4xl text-orange-500 group-hover:text-white transition-all duration-300`}
              ></i>

              <h3 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-white transition-all duration-300"
              style={{ fontFamily: "var(--font-Playfair)" }}>
                {card.title}
              </h3>

              <p className="mt-3 text-gray-600 group-hover:text-white transition-all duration-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurServices
