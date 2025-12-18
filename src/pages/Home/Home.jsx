import React from "react";
import HeroSec from "../../component/home/HeroSec";
import CardsSection from '../../component/home/CardSec'
import AboutUs from "../../component/home/AboutUs";
import CounterSec from "../../component/home/CounterSec";
import OurServices from "../../component/home/OurServices";
import WhyChoose from "../../component/home/WhyChoose";
import TwodLogo from "../../component/home/TwodLogo";
import ThreedLogo from "../../component/home/ThreedLogo";
import Animation from "../../component/home/Animation";
import MarketingCollateral from "../../component/home/MarketingCollateral";
import OurProject from "../../component/home/OurProject";
import PricingSec from "../../component/home/PricingSec";
import TestimonialSec from "../../component/home/TestimonialSec";
import ReviewsStrip from "../../component/home/ReviewsStrip";


function Home() {
  return <div>
    <HeroSec />
    <CardsSection />
    <AboutUs />
    <CounterSec />
    <OurServices />
    <WhyChoose />
    <TwodLogo />
    <ThreedLogo />
    <Animation />
    <MarketingCollateral />
    <OurProject />
    <div style={{marginTop:"-110px"}}><PricingSec /></div>
    
    <TestimonialSec />
    <ReviewsStrip/>
  </div>;
}

export default Home;
