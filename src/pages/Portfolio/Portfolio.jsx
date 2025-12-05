import React from "react";
import HeroSection from "../../component/about/HeroSection";
import TestimonialSec from "../../component/home/TestimonialSec";
import PortfolioSection from "../../component/portfolio/PortfolioSection";

function Portfolio() {
  return <div>
     <HeroSection
      title="Portfolio"
      description="Our experts become an extension of your team, unlocking your growth potential. Partner with a leading digital agency and start thriving today."
      breadcrumbLabel="Portfolio"
    />
   <PortfolioSection/>
    <TestimonialSec />
  </div>;
}

export default Portfolio;
