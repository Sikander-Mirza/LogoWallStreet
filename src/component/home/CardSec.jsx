import React from "react";

function CardsSection() {
  const cardsData = [
    {
      icon: "ri-pencil-ruler-2-line",
      title: "Custom Logo Design",
      bgColor: false,
      description:
        "Elevate your brand with our USA-made custom logos. Our designers create unique, memorable logos that reflect your business’s identity. Perfect for startups and established companies alike.",
    },
    {
      icon: "ri-award-line",
      title: "Logo Design Experts",
      bgColor: true,
      description:
        "Stand out with our professional logo design services. We craft captivating logos that reflect your brand identity and make a lasting impact.",
    },
    {
      icon: "ri-price-tag-3-line",
      title: "Affordable Logo Design",
      bgColor: false,
      description:
        "Get a professional logo without breaking the bank. Our designers work with you to create a unique logo that reflects your brand identity.",
    },
  ];

  return (
    <section className="mt-8 mb-10 sm:mt-10 sm:mb-12 md:mt-14 md:mb-16 lg:-mt-20 lg:mb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        
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
              text-center          /* Center ALL content */
              flex flex-col items-center  /* Align icon + text center */
            "
          >
            <i
              className={`${card.icon} text-4xl text-orange-500 group-hover:text-white transition-all duration-300`}
            ></i>

            <h3 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-white transition-all duration-300">
              {card.title}
            </h3>

            <p className="mt-3 text-gray-600 group-hover:text-white transition-all duration-300">
              {card.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default CardsSection;
