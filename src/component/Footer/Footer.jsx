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
    <section className="bg-[#0c1771] text-white px-4 sm:px-6 lg:px-8">
      {/* Top columns */}
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Logo and Description */}
        <div className="p-2 sm:p-4 relative">
          <img className="w-[180px] sm:w-[200px] mb-4" src={footerLogo} alt="Footer Logo" />
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Welcome to The Logo Wall Street LLC, where we craft unique logos that
            effectively represent your brand and resonate with your audience.
          </p>

          <div className="flex gap-3 mt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[35px] w-[35px] text-white text-center text-[22px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: social.color }}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <img className="w-[80px] sm:w-[120px] h-auto" src={ftrBudge} alt="DesignRush Badge" />
            <p
              className="text-xs sm:text-sm"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              <a className="text-orange-400" href="#">
                DesignRush
              </a>{" "}
              Verified Agency
            </p>
          </div>

          {/* Right border only on large screens */}
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 h-[220px] w-px bg-[#fd7e1466] hidden lg:block"></div>
        </div>

        {/* Quick Links Section */}
        <div className="p-2 sm:p-4 lg:pl-10 mt-15 lg:pr-4 relative">
          <h3
            className="text-[18px] sm:text-[20px] text-[#FD7E14]"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            Quick Links
          </h3>
          <span className="block bg-[#FD7E14] w-[80px] h-[2px] mt-2 mb-4"></span>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.to}
                  className="text-sm hover:text-[#FD7E14]"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[220px] w-px bg-[#fd7e1466] hidden lg:block"></div>
        </div>

        {/* Services Section */}
        <div className="p-2 sm:p-4 lg:pl-6 mt-15 lg:pr-4 relative">
          <h3
            className="text-[18px] sm:text-[20px] text-[#FD7E14]"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            Our Services
          </h3>
          <span className="block bg-[#FD7E14] w-[80px] h-[2px] mt-2 mb-4"></span>
          <ul className="lg:columns-2 gap-4 space-y-1">
            {Services.map((svc) => (
              <li key={svc.name}>
                <a
                  href={svc.to}
                  className="text-sm hover:text-[#FD7E14]"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  {svc.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[220px] w-px bg-[#fd7e1466] hidden lg:block"></div>
        </div>

        {/* Get in Touch Section */}
        <div className="p-2 sm:p-4 mt-15 lg:pl-8 lg:pr-4">
          <h3
            className="text-[18px] sm:text-[20px] text-[#FD7E14]"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            Get in Touch
          </h3>
          <span className="block bg-[#FD7E14] w-[80px] h-[2px] mt-2 mb-4"></span>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={`res-${link.name}`}>
                <a
                  href={link.to}
                  className="text-sm hover:text-[#FD7E14]"
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#fd7e1466] py-4 mt-2">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Terms & Privacy – first on mobile, right on desktop */}
          <div
            className="order-1 md:order-2 flex gap-4 justify-center md:justify-end text-xs sm:text-sm"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            <a
              href="/terms-and-conditions"
              className="hover:text-[#FD7E14]"
            >
              Terms & Conditions
            </a>
            <span className="text-[#fd7e1466]">|</span>
            <a
              href="/privacy-policy"
              className="hover:text-[#FD7E14]"
            >
              Privacy Policy
            </a>
          </div>

          {/* Copyright – last on mobile, left on desktop */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p
              className="text-[11px] sm:text-[12px] md:text-[14px] whitespace-normal md:whitespace-nowrap"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              © {new Date().getFullYear()} The Logo Wall Street LLC — All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;