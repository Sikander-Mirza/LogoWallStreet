import React from "react";
import Card from "../card/Card";

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
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default CardsSection;
