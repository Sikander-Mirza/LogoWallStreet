import React from "react";
import HeroSection from "../../component/about/HeroSection";
import WhyChoose from "../../component/home/WhyChoose";
import TestimonialSec from "../../component/home/TestimonialSec";

function Review() {
  return <div>
    <HeroSection
  title="Reviews"
  description="Our clients are our top priority, and we’re thrilled to have received positive reviews from many satisfied customers. We work hard to deliver exceptional service and results,"
  breadcrumbLabel="Reviews"
/>
<div className="mt-30 mb-20">
      <WhyChoose />
</div>
      <TestimonialSec />
  </div>;
}

export default Review;
