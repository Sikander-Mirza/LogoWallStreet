import React from "react";
import HeroSection from "../../component/about/HeroSection";
import ContactSection from "../../component/contact/ContactSection";

function ContactUs() {
  return <div>
    <HeroSection
      title="Contact Us"
      description="Get in touch with our team of digital marketing experts at LOGO WALL STREET LLC today to discover how we can help your business thrive online. We offer personalized solutions tailored to your unique needs and budget. "
      breadcrumbLabel="Contact Us"
    />
    <ContactSection/>
  </div>
}

export default ContactUs;
