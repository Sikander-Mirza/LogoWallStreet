import React from "react";
import { Link } from "react-router-dom";

const menuLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about-us" },
  {
    name: "Services",
    to: "/services",
    subMenu: [
      { name: "Web Design", to: "/web-design", desc: "Create stunning, responsive websites that convert." },
      { name: "Branding", to: "/branding", desc: "Build a unique identity that stands out." },
      { name: "E-Commerce", to: "/ecommerce", desc: "Sell your products online with ease." },
      { name: "SEO Optimization", to: "/seo", desc: "Improve visibility and rank higher on Google." },
      { name: "App Development", to: "/app-dev", desc: "Modern mobile solutions for your business." },
      { name: "Maintenance", to: "/maintenance", desc: "Keep your website running smoothly." },
      { name: "Logo Design", to: "/Logo-design", desc: "Keep your website running smoothly." },
      { name: "Illustration", to: "/illustration", desc: "Keep your website running smoothly." },
      { name: "Video Animation", to: "/VideoAnimation", desc: "Keep your website running smoothly." },
      { name: "Copy Writing", to: "/CopyWriting", desc: "Keep your website running smoothly." },
    ],
  },
  { name: "Pricing", to: "/pricing" },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Review", to: "/review" },
  { name: "Contact", to: "/contact-us" },
];


export default function MenuItems({ isMobile = false, showServices, toggleServices }) {
  return (
    <ul style={{ fontFamily: "var(--font-Poppins)" }} className={`${isMobile ? "space-y-2" : "flex items-center space-x-8"}`}>
      {menuLinks.map((link) => (
        <li key={link.name} className="relative">
          {!link.subMenu ? (
            <Link
              to={link.to}
              className="text-black hover:text-blue-700 block"
              onClick={isMobile ? toggleServices : undefined}
            >
              {link.name}
            </Link>
          ) : (
            <>
              <button
                onClick={toggleServices}
                className="flex justify-between items-center w-full text-black hover:text-blue-700"
              >
                {link.name}
                <i
                  className={`ri-arrow-${showServices ? "up" : "down"}-s-line ml-1`}
                ></i>
              </button>

              {showServices && (
                <ul
                  className={`${
                    isMobile
                      ? "pl-4 mt-2 space-y-2"
                      : "absolute left-0 mt-3 w-[600px] p-6 bg-white dark:bg-gray-800 rounded-lg grid grid-cols-2 gap-6 shadow-md z-50"
                  }`}
                >
                  {link.subMenu.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        to={sub.to}
                        className={`${
                          isMobile
                            ? "text-gray-700 block"
                            : "block p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                        }`}
                        onClick={isMobile ? toggleServices : undefined}
                      >
                        <h4 className="font-semibold text-black dark:text-white">{sub.name}</h4>
                        {!isMobile && sub.desc && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">{sub.desc}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
