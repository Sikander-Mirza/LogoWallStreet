import React from "react";
import HeroSection from "../../component/about/HeroSection";
import ExprienceSec from "../../component/about/ExprienceSec"
import AgencyHero from "../../component/about/AgencyHero";
import CTAConsultation from "../../component/about/Cta";

function AboutUs() {
  return <div>
    <HeroSection
  title="About Us"
  description="We’re a team of designers and strategists helping brands stand out with bold, memorable identities."
  breadcrumbLabel="About"
/>
    <ExprienceSec/>
    <AgencyHero/>
    <CTAConsultation/>
  </div>;
}

export default AboutUs;
