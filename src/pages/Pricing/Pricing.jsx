import React from "react";
import PricingSec from "../../component/home/PricingSec";
import HeroSection from "../../component/about/HeroSection";
import PricingHero from "../../component/pricing/PricingHero";
import WhyChoose from "../../component/home/WhyChoose";
import TestimonialSec from "../../component/home/TestimonialSec";
import ReviewsStrip from "../../component/home/ReviewsStrip";
function Pricing() {
  return (
    <div>
        
        <HeroSection
  title="Our Pricing"
  description="Whether well-established or just starting, we deal with businesses of all sizes. Get on board with us by buying one of our impressive packages."
/>
        <div className="mt-20 mb-20">
      <PricingSec />
      </div>
     
      <PricingHero/>
     
      <div className="mt-20 mb-20">
      <WhyChoose />
</div>

      <TestimonialSec />
<ReviewsStrip/>
    </div>
  );
}

export default Pricing;