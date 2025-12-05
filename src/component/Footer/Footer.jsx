import React from 'react';
import footerLogo from '../../assets/images/logo.png';
import ftrBudge from '../../assets/images/verified_ftr.png';

function Footer() {
  const socialLinks = [
    { icon: "ri-facebook-circle-line", color: "#FD7E14", url: "https://www.facebook.com/thelogowallstreet" },
    { icon: "ri-instagram-line", color: "#FD7E14", url: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fthelogowallstreet%2F&is_from_rle" },
    { icon: "ri-linkedin-box-line", color: "#FD7E14", url: "https://www.linkedin.com/company/the-logo-wall-street/" },
  ];

  const quickLinks = [
    { name: "About Us", to: "/about-us" },
    { name: "Pricing", to: "/pricing" },
    { name: "Reviews", to: "/reviews" },
    { name: "Contact Us", to: "/contact-us" },
  ];

  const Services = [
    { name: "Logo Design", to: "/logo-design" },
    { name: "Illustration", to: "/Illustration" },
    { name: "Marketing Collateral", to: "/marketing-collateral" },
    { name: "Website Development", to: "/website-development" },
    { name: "Video Animation", to: "/video-animation" },
    { name: "E-Commerce", to: "/e-commerce" },
    { name: "Branding", to: "/branding" },
    { name: "Mobile Application", to: "/mobile-application" },
    { name: "Digital Marketing", to: "/digital-marketing" },
    { name: "SEO Optimization", to: "/seo-optimization" },
    { name: "Copywriting", to: "/copywriting" },
  ];

  return (
    <section className='bg-[#0c1771] px-8 text-white'>
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[90%] mx-auto">

        {/* Logo and Description */}
        <div className="p-4 relative">
          <img className='w-[200px] mb-4' src={footerLogo} alt="Footer Logo" />
          <p className='text-white text-sm' style={{ fontFamily: "var(--font-Poppins)" }}>
            Welcome to The Logo Wall Street LLC, where we craft unique logos that effectively represent your brand and resonate with your audience.
          </p>
          <div className='flex gap-4 mt-4'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`h-[35px] w-[35px] text-white text-center text-[25px] rounded-full flex items-center justify-center`}
                style={{ backgroundColor: social.color }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          <div className='mt-4'>
            <img className='w-[150px] h-[150px] mb-4' src={ftrBudge} alt="DesignRush Badge" />
            <p className='text-white text-sm' style={{ fontFamily: "var(--font-Poppins)" }}>
              <a className='text-orange-400' href="#">DesignRush</a> Verified Agency
            </p>
          </div>
          {/* Add right border using after pseudo-element */}
          <div className="absolute -right-10 top-[30%] transform -translate-y-1/2 h-[220px] w-[1px] bg-[#fd7e1466] hidden lg:block"></div>
        </div>

        {/* Quick Links Section */}
        <div className="p-4 lg:pl-20 lg:pr-4 relative py-4">
          <h3 className='text-[20px] text-[#FD7E14]' style={{ fontFamily: "var(--font-Playfair)" }}>Quick Links</h3>
          <span className='block bg-[#FD7E14] w-[80px] h-[2px] mt-2 mb-4'></span>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.to}
                  className="text-white hover:text-[#FD7E14] text-sm"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Add right border using after pseudo-element */}
          <div className="absolute right-0 top-[30%] transform -translate-y-1/2 h-[220px] w-[1px] bg-[#fd7e1466] hidden lg:block"></div>
        </div>

        {/* Services Section */}
        <div className="p-4 lg:pl-6 lg:pr-4 relative py-4">
          <h3 className='text-[20px] text-[#FD7E14]' style={{ fontFamily: "var(--font-Playfair)" }}>Our Services</h3>
          <span className='block bg-[#FD7E14] w-[80px] h-[2px] mt-2 mb-4'></span>
          <ul className="lg:columns-2 gap-6 space-y-1">
            {Services.map((svc) => (
              <li key={svc.name}>
                <a
                  href={svc.to}
                  className="text-white hover:text-[#FD7E14] text-sm"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  {svc.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Add right border using after pseudo-element */}
          <div className="absolute right-0 top-[30%] transform -translate-y-1/2 h-[220px] w-[1px] bg-[#fd7e1466] hidden lg:block"></div>
        </div>

        {/* Get in Touch Section */}
        <div className="p-4 lg:pl-10 lg:pr-4 relative py-4">
          <h3 className='text-[20px] text-[#FD7E14]' style={{ fontFamily: "var(--font-Playfair)" }}>Get in Touch</h3>
          <span className='block bg-[#FD7E14] w-[80px] h-[2px] mt-2 mb-4'></span>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={`res-${link.name}`}>
                <a
                  href={link.to}
                  className="text-white hover:text-[#FD7E14] text-sm"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t-[1px] border-[#fd7e1466] py-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center
                  flex flex-col md:grid md:flex-none md:flex-row">
          {/* Right Side (Terms & Privacy) — mobile par first, desktop par right */}
          <div className="order-1 md:order-2 flex gap-4 md:justify-end justify-center text-xs sm:text-sm"
            style={{ fontFamily: "var(--font-Poppins)" }}>
            <a href="/terms-and-conditions" className="text-white hover:text-[#FD7E14]">
              Terms & Conditions
            </a>
            <span className="text-[#fd7e1466]">|</span>
            <a href="/privacy-policy" className="text-white hover:text-[#FD7E14]">
              Privacy Policy
            </a>
          </div>

          {/* Left Side (Copyright) — mobile par last, desktop par left */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-[11px] sm:text-[12px] md:text-[14px] text-white whitespace-nowrap"
              style={{ fontFamily: "var(--font-Poppins)" }}>
              © {new Date().getFullYear()} The Logo Wall Street LLC — All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
