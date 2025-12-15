import React from "react";
import HeroSection from "../../component/about/HeroSection";
import WhyChoose from "../../component/home/WhyChoose";
import Testimonial from "../../component/review/Testimonial";
import TrustpilotStrip from "../../component/review/TrustpilotStrip";
import CtaPerfectLogo from "../../component/review/CtaPerfectLogo";
import TrustpilotReviewButton from "../../component/review/TrustPilotReviewButton";
function Review() {
  return <div>
    <HeroSection
  title="Reviews"
  description="Our clients are our top priority, and we’re thrilled to have received positive reviews from many satisfied customers. We work hard to deliver exceptional service and results,"
  breadcrumbLabel="Reviews"
/>
<div className="mt-20 ">
      <TrustpilotStrip/>
</div>
      <Testimonial />
      <CtaPerfectLogo/>
      <TrustpilotReviewButton/>
  </div>;
}

export default Review;
