import React, { useState } from 'react';
import HeroHeading from '../others/Heading';
import Button from '../button/Button'
import TabPanel from "../others/TabPanel"
import PricingGrid from '../others/PricingGrid';
import PricingCard from '../others/PricingCard';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const mainTabs = [
  {
    id: "Graphic",
    label: "Graphic Design",
    subTabs: [
      { id: "Logo", label: "Logo Design" },
      { id: "Illustration", label: "Illustration" },
      { id: "Branding", label: "Brand Identity" },
    ],
  },
  {
    id: "Web",
    label: "Web Development",
    subTabs: [
      { id: "webPackage", label: "Web Solutions" },
      { id: "Ecommerce", label: "Online Store" },
      { id: "Seo", label: "SEO Services" },
    ],
  },
  {
    id: "AnimationMain",
    label: "Animation",
    subTabs: [
      { id: "Animation", label: "Motion Graphics" },
    ],
  },
  {
    id: "ComboMain",
    label: "All‑in‑One",
    subTabs: [
      { id: "Combo", label: "All‑in‑One" },
    ],
  },
];


function PricingSec() {
const [activeMainTab, setActiveMainTab] = useState("Graphic");
const [activeSubTab, setActiveSubTab] = useState("Logo");

const currentMain = mainTabs.find((t) => t.id === activeMainTab);
const currentSubTabs = currentMain?.subTabs || [];




    // Logo Pricing data with features
    const pricingLogoData = [
        {
            packageName: "Logo Basic", // Package name
            price: 29,
            oldPrice: 60,
            currency: "$",
            features: [
                "4 Original Logo Concepts",
                "2 Dedicated Logo Designer",
                "4 Revisions",
                "With Grey Scale Format",
                "Free Icon Design",
                "Formats: JPEG Only",
                "24 - 48 Hours Turn Around Time",
                "MORE FEATURES",
                "100% Satisfaction",
            ]
        },
        {
            packageName: "Logo Silver", // Package name
            price: 89,
            oldPrice: 133,
            currency: "$",
            features: [
                "6 Custom Logo Design Concepts",
                "By 2 Designers",
                "UNLIMITED Revisions",
                "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
                "48 to 72 hours TAT",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Ownership Rights *",
                "100% Money Back Guarantee *"
            ]
        },
        {
            packageName: "Logo Gold", // Package name
            price: 129,
            oldPrice: 193,
            currency: "$",
            features: [
                "12 Logo Design Concepts",
                "By 4 Designers",
                "UNLIMITED Revisions",
                "Stationery Design (Business Card, Letterhead, Envelope)",
                "FREE MS Word Letterhead",
                "48 to 72 hours TAT",
                "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Ownership Rights *",
                "100% Money Back Guarantee *",
            ]
        },
        {
            packageName: "Logo Platinum", // Package name
            price: 179,
            oldPrice: 268,
            currency: "$",
            features: [
                "UNLIMITED Logo Design Concepts",
                "By 5 Award Winning Designers",
                "Stationary Design (Business Card, Letterhead, Envelope)",
                "FREE Social Media Banners (Any 2)",
                "UNLIMITED Revisions",
                "FREE MS Word Letterhead",
                "Free Email Signature",
                "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Ownership Rights *",
                "100% Money Back Guarantee *",
                "48 to 72 hours TAT",
            ]
        },
        {
            packageName: "Logo Elite Package", // Package name
            price: 299,
            oldPrice: 448,
            currency: "$",
            features: [
                "You will get unlimited concepts by 10 designers",
                "Unlimited Rounds of Changes",
                "100% ownership rights",
                "Turn Around time will be 24-48 hours",
                "Icon design (Free)",
                "500 Business Cards",
                "You will get all the formats in HI-RES",
                "You will be getting vector file",
                "The Editable Vector Version (resizable)",
                "You will be getting the Greyscale file (to be placed at any colored back ground)",
                "You will be getting the Solid Black and Solid White version of the Logo (can be used for T-Shirts and Merchandise)",
                "You will be getting the Colored Version with transparent background (can be used for stationery, merchandise, car wraps, sign boards, labelling, ETC)",
                "You will be getting stationery designs (Business Cards, Letterheads, Envelops)",
                "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
            ]
        },
        {
            packageName: "THE BOSS", // Package name
            price: 599,
            oldPrice: 898,
            currency: "$",
            features: [
                "3D/Mascot/Animated Logo",
                "Unlimited Original Logo Concepts",
                "8 Dedicated Logo Designers (Industry-specific)",
                "Unlimited Rounds Of Revisions",
                "Stationery Design (Business Card, Letterhead, Envelope)",
                "500 Business Cards",
                "Email Signature Design",
                "Free Icon Design",
                "Grey Scale Format Attached",
                "JPEG, PSD, EPS, AI, PNG, TIFF, SVG Formats",
                "Turnaround Time Of 24-48 Hours",
                "100% Satisfaction Guaranteed",
                "100% Ownership Rights",
                "Money-back Guarantee",
                "Dedicated Account Manager",
            ]
        },
    ];
    // Website Pricing data with features
    const pricingWebData = [
        {
            packageName: "Starter Web", // Package name
            price: 499,
            oldPrice: 748,
            currency: "$",
            features: [
                "3 Page Website Design",
                "Custom Layout Design",
                "Contact/Query Form",
                "1 Banner Design",
                "2 Stock Photos",
                "FREE Favicon Design",
                "Cross Browser Compatible",
                "Complete W3C Certified HTML",
                "Complete Design & Development",
                "Value Added Services",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *",
                "NO MONTHLY OR ANY HIDDEN FEE",
            ]
        },
        {
            packageName: "Essential Web", // Package name
            price: 849,
            oldPrice: 1273,
            currency: "$",
            features: [
                "5 Page Website Design",
                "Custom Layout Design",
                "Contact/Query Form",
                "3 Banner Designs & 5 Stock Photos",
                "Sliding Banner & Hover Effects",
                "Website Favicon Design",
                "Google Friendly Website",
                "Cross Browser Compatible",
                "Complete W3C Certified HTML",
                "Website Initial Concepts in 48 Hours",
                "Complete Design & Development",
                "Value Added Services",
                "Complete Source Files",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *",
                "*NO MONTHLY OR ANY HIDDEN FEE*"
            ]
        },
        {
            packageName: "Elite Web", // Package name
            price: 1199,
            oldPrice: 1798,
            currency: "$",
            features: [
                "5 to 10 Unique Pages Website Design",
                "CMS Integration (WordPress)",
                "5+ Stock Photos & Banner Designs",
                "Contact/Query/Newsletter Form",
                "Website Favicon Design",
                "SEO Friendly Design",
                "Cross Browser Compatible",
                "Google Sitemap Integration",
                "Website Initial Concepts in 48 Hours",
                "Unlimited Revisions",
                "Complete W3C Certified HTML",
                "Website Initial Concepts in 48 Hours",
                "Complete Design & Development",
                "Custom & Interactive Web Design",
                "Industry specified Team of Expert Designers and Developers",
                "Complete Deployment",
                "Value Added Services",
                "Complete Source Files",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *",
                "*NO MONTHLY OR ANY HIDDEN FEE*"
            ]
        }
    ];

    // Illustration Pricing data with features
    const pricingIllustrationData = [
        {
            packageName: "Illustration Starter", // Package name
            price: 284,
            oldPrice: 426,
            currency: "$",
            features: [
                "3 Custom Logo Design Concepts",
                "By 2 Designers",
                "UNLIMITED Revisions",
                "48 to 72 hours TAT",
                "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *",
                "NO MONTHLY OR ANY HIDDEN FEE"
            ]
        },
        {
            packageName: "Sketch Craft", // Package name
            price: 394,
            oldPrice: 591,
            currency: "$",
            features: [
                "4 Custom Design Concepts",
                "By 3 Designers",
                "UNLIMITED Revisions",
                "48 to 72 hours TAT",
                "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee *"
            ]
        },
        {
            packageName: "Illustrate Elite", // Package name
            price: 594,
            oldPrice: 891,
            currency: "$",
            features: [
                "UNLIMITED Design Concepts",
                "By 4 Designers",
                "UNLIMITED Revisions",
                "24 to 48 hours TAT",
                "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee *"
            ]
        }
    ];

    // Ecommerce Pricing data with features
    const pricingEcommerceData = [
        {
            packageName: "Quick Ecom", // Package name
            price: 749,
            oldPrice: 1123,
            currency: "$",
            features: [
                "5 to 7 Custom Unique Pages Website",
                "Content Management System (CMS)",
                "Product Reviews",
                "20 Products",
                "Shopping Cart Integration",
                "Conceptual and Dynamic Website",
                "Mobile Responsive",
                "Easy Product Search",
                "Jquery Slider",
                "Free Google Friendly Sitemap",
                "Complete W3C Certified HTML",
                "Facebook Page Design",
                "Twitter Page Design",
                "Complete Development",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee"
            ]
        },
        {
            packageName: "Ecom Essentials", // Package name
            price: 1199,
            oldPrice: 1798,
            currency: "$",
            features: [
                "10 to 15 Unique Pages Website",
                "Content Management System (CMS)",
                "Product Reviews",
                "50 Products",
                "10 Categories",
                "Full Shopping Cart Integration",
                "Payment Module Integration",
                "Conceptual and Dynamic Website",
                "Mobile Responsive",
                "Easy Product Search",
                "Jquery Slider",
                "Free Google Friendly Sitemap",
                "Complete W3C Certified HTML",
                "Facebook Page Design",
                "Twitter Page Design",
                "Instagram Page Design",
                "Complete Development",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee *"
            ]
        },
        {
            packageName: "Ecom Preneur", // Package name
            price: 1399,
            oldPrice: 2098,
            currency: "$",
            features: [
                "Up to 25 Unique Pages Website",
                "Content Management System (CMS)",
                "Product Reviews",
                "Featured Products Showcase",
                "100 Products",
                "25 Categories",
                "Sales and Inventory reports",
                "Full Shopping Cart Integration",
                "Payment Module Integration",
                "Conceptual and Dynamic Website",
                "Mobile Responsive",
                "Easy Product Search",
                "Jquery Slider",
                "Free Google Friendly Sitemap",
                "Complete W3C Certified HTML",
                "Facebook Page Design",
                "Twitter Page Design",
                "Instagram Page Design",
                "Complete Development",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *",
                "NO MONTHLY OR ANY HIDDEN FEE"
            ]
        }
    ];

    // Seo Pricing data with features
    const pricingSeoData = [
        {
            packageName: "SEO Start", // Package name
            price: 1500,
            oldPrice: 2250,
            currency: "$",
            features: [
                "Prior Analysis",
                "Business Analysis",
                "Consumer Analysis",
                "15 Selected Keywords Targeting",
                "15 Pages Keyword Targeted",
                "Webpage Optimization",
                "Meta Tags Creation",
                "Keyword Optimization",
                "Image Optimization",
                "Inclusion of anchors",
                "Tracking & Analysis",
                "Google Analytics Installation",
                "Google Webmaster Installation",
                "Call To Action Plan",
                "Creation of Sitemaps",
                "Reporting",
                "Monthly Reporting",
                "Recommendation",
                "Email Support",
                "Phone Support",
                "Off Page Optimization",
                "Social Bookmarking",
                "Slide Share Marketing",
                "Forums/FAQ’s",
                "Directory Submission",
                "Link Building",
                "Local Business Listings"
            ]
        },
        {
            packageName: "SEO Supreme", // Package name
            price: 1500,
            oldPrice: 2250,
            currency: "$",
            features: [
                "Prior Analysis",
                "Business Analysis",
                "Consumer Analysis",
                "Competitor Analysis",
                "30 Selected Keywords Targeting",
                "30 Pages Keyword Targeted",
                "Webpage Optimization",
                "Meta Tags Creation",
                "Keyword Optimization",
                "Image Optimization",
                "Inclusion of anchors Tags",
                "Inclusion of anchors Indexing Modifications",
                "Tracking & Analysis",
                "Google Places Inclusions",
                "Google Analytics Installation",
                "Google Webmaster Installation",
                "Call To Action Plan",
                "Creation of Sitemaps",
                "Reporting",
                "Monthly Reporting",
                "Recommendation",
                "Email Support",
                "Phone Support",
                "Off Page Optimization",
                "Social Bookmarking",
                "Forums/FAQ’s",
                "Link Building",
                "Directory Submission",
                "Local Business Listings"
            ]
        },
        {
            packageName: "SEO Infinity", // Package name
            price: 2000,
            oldPrice: 3000,
            currency: "$",
            features: [
                "Prior Analysis",
                "Business Analysis",
                "Consumer Analysis",
                "Competitor Analysis",
                "70 Selected Keywords Targeting",
                "50 Pages Keyword Targeted",
                "Webpage Optimization",
                "Meta Tags Creation",
                "Keyword Optimization",
                "Image Optimization",
                "Inclusion of anchors Tags",
                "Tracking & Analysis",
                "Google Places Inclusions",
                "Google Analytics Installation",
                "Google Webmaster Installation",
                "Call To Action Plan",
                "Reporting",
                "Monthly Reporting",
                "Recommendation",
                "Email Support",
                "Phone Support",
                "Creation of Sitemaps",
                "Off Page Optimization",
                "Social Bookmarking",
                "Slide Share Marketing",
                "Forums/FAQ’s",
                "Link Building",
                "Directory Submission",
                "Local Business Listings",
                "Blog Content Creation",
                "Local SEO",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *"
            ]
        }
    ];

    // Branding Pricing data with features
    const pricingBrandingData = [
        {
            packageName: "Brand Start", // Package name
            price: 99,
            oldPrice: 148,
            currency: "$",
            features: [
                "2 Stationery Design Set",
                "FREE Fax Template",
                "Print Ready Formats",
                "UNLIMITED Revisions",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *"
            ]
        },
        {
            packageName: "Classic Essence", // Package name
            price: 199,
            oldPrice: 298,
            currency: "$",
            features: [
                "2 Stationery Design Set",
                "UNLIMITED Revisions",
                "Flyer Design",
                "Brochure Design (Bi-fold/Tri-fold)",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *"
            ]
        },
        {
            packageName: "Prime Branding", // Package name
            price: 399,
            oldPrice: 598,
            currency: "$",
            features: [
                "2 Stationery Design Set",
                "Packaging Design",
                "UNLIMITED Revisions",
                "T-Shirt Design",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *"
            ]
        }
    ];

    // Animation Pricing data with features
    const pricingAnimationData = [
        {
            packageName: "Animate Start", // Package name
            price: 495,
            oldPrice: 1498,
            currency: "$",
            features: [
                "30 Second Video",
                "Professional Script",
                "Storyboard",
                "Animation",
                "Voice-Over & Sound Effects",
                "4 weeks Delivery",
                "Unlimited Revisions",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *",
                "NO MONTHLY OR ANY HIDDEN FEE"
            ]
        },
        {
            packageName: "Motion Essence", // Package name
            price: 999,
            oldPrice: 1498,
            currency: "$",
            features: [
                "60 Second Video",
                "Professional Script",
                "Sample Theme",
                "Storyboard",
                "Animation",
                "Voice-Over & Sound Effects",
                "5 weeks Delivery",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *",
                "*NO MONTHLY OR ANY HIDDEN FEE*"
            ]
        },
        {
            packageName: "Ultimate Animate", // Package name
            price: 1399,
            oldPrice: 2098,
            currency: "$",
            features: [
                "90 Second Video",
                "Professional Script",
                "Sample Theme",
                "Storyboard",
                "Animation",
                "Voice-Over & Sound Effects",
                "6 Weeks Delivery",
                "Dedicated Project Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Money Back Guarantee *",
                "NO MONTHLY OR ANY HIDDEN FEE"
            ]
        }
    ];

    // All-in-one Pricing data with features
    const pricingAllData = [
        {
            packageName: "All-in-One Starter", // Package name
            price: 799,
            oldPrice: 1198,
            currency: "$",
            features: [
                    "4 Logo Design Concepts",
                    "4 Dedicated Designers",
                    "Icon Design",
                    "Website Pages",
                    "Conceptual and Dynamic Website",
                    "Content Management System (CMS)",
                    "Custom Forms",
                    "Lead Capturing Forms (Optional)",
                    "Newsfeed Integration",
                    "Social Media Integration",
                    "Search Engine Submission",
                    "6 Unique Banner Designs",
                    "jQuery Slider",
                    "Free Google Friendly Sitemap",
                    "All Final File Formats",
                    "Dedicated Account Manager",
                    "100% Ownership",
                    "100% Satisfaction Guarantee",
                    "100% Unique Design Guarantee"
            ]
        },
        {
            packageName: "Value Pack", // Package name
            price: 1119,
            oldPrice: 1678,
            currency: "$",
            features: [
                    "6 Logo Design Concepts",
                    "+ Social Media Design",
                    "Mobile Responsive",
                    "6 Dedicated Designers",
                    "Icon Design",
                    "Business Card, Letterhead, Envelope",
                    "MS Word Letterhead",
                    "Website Pages",
                    "Content Management System (CMS)",
                    "5 Stock Photos + 3 Banner Designs",
                    "Complete W3C Certified HTML",
                    "Complete Deployment",
                    "Facebook Page Design",
                    "All Final File Formats",
                    "Dedicated Account Manager",
                    "100% Ownership",
                    "100% Satisfaction Guarantee",
                    "100% Unique Design Guarantee"
            ]
        },
        {
            packageName: "Elite Corporate", // Package name
            price: 1594,
            oldPrice: 2391,
            currency: "$",
            features: [
                    "Complete Custom Design & Development",
                    "Unique, User Friendly, Interactive, Dynamic, High End UI Design",
                    "Banner Designs",
                    "JQuery Slider",
                    "Special Hover Effects",
                    "Stock Images",
                    "Client/User Dashboard Area",
                    "Online Payment Integration (Optional)",
                    "Custom Dynamic Forms (Optional)",
                    "User Signup Area",
                    "User Login Area",
                    "User Dashboard Area",
                    "Complete Database Creation",
                    "Signup Automated Email Authentication",
                    "Web Traffic Analytics Integration",
                    "Signup Area (For Newsletters, Offers etc.)",
                    "Search Bar for Easy Search",
                    "Search Engine Submission",
                    "Module-wise Architecture",
                    "Extensive Admin Panel",
                    "Award Winning Team of Expert Designers and Developers",
                    "Complete Deployment",
                    "100% Satisfaction Guarantee",
                    "100% Unique Design Guarantee"
            ]
        }
    ];

    const contactData = [
        { phoneNumber: "(920) 504-3860" },
    ];




    return (
       <section className="md:pt-10 md:pb-14 bg-slate-50 relative overflow-hidden">
    {/* soft background shapes */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -left-10 h-64 w-64 rounded-full bg-orange-300/25 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_60%)]" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
      {/* Label + heading */}
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <span className="h-[2px] w-10 bg-orange-500" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
          Pricing
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center mb-6">
        {/* Left: title + subtitle */}
        <div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-900"
            style={{ fontFamily: "var(--font-Playfair)" }}
          >
            Our Affordable Logo Design Packages
          </h2>

          <p
            className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600"
            style={{ fontFamily: "var(--font-Poppins)" }}
          >
            Want to propel your business growth? The Logo Wall Street LLC offers
            a range of affordable custom logo design services to fit your needs
            and budget. Our team crafts impactful logos, whether you’re a
            startup or aiming to boost online presence. View our flexible
            pricing packages below!
          </p>
        </div>

        {/* Right: button that jumps to Pricing bottom */}
<div className="flex md:justify-end justify-center">
  <Link
    to="/pricing#pricing-bottom"
    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/40 hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-50"
    style={{ fontFamily: 'var(--font-Poppins)' }}
  >
    View Pricing
  </Link>
</div>
      </div>

      {/* TAB NAV */}
      {/* MAIN TAB NAV */}
<div className="mt-2 mb-3">
  {/* Outer wrapper handles horizontal scrolling on small screens */}
  <div className="flex justify-start md:justify-center overflow-x-auto scrollbar-hide">
    <div
      className="
        inline-flex items-center
        rounded-full bg-white border border-slate-200 p-1
        min-w-max        /* ensures contents don't shrink */
      "
      role="tablist"
    >
      {mainTabs.map((tab) => {
        const isActive = activeMainTab === tab.id;
        return (
          <button
            key={tab.id}
            style={{ fontFamily: "var(--font-Poppins)" }}
            type="button"
            role="tab"
            aria-selected={isActive ? "true" : "false"}
            onClick={() => {
              setActiveMainTab(tab.id);
              if (tab.subTabs && tab.subTabs.length > 0) {
                setActiveSubTab(tab.subTabs[0].id);
              }
            }}
            className={[
              "whitespace-nowrap px-4 md:px-5 py-2 text-[14px] md:text-[15px] font-medium rounded-full transition-all",
              isActive
                ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md shadow-orange-500/35"
                : "text-slate-700 hover:bg-slate-100",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  </div>
</div>

{/* SUB TAB NAV (depends on active main) */}
{currentSubTabs.length > 0 && (
  <div className="mb-6 flex justify-center">
    <div
      className="inline-flex w-full md:w-auto rounded-full bg-slate-50 border border-slate-200 p-1 overflow-x-auto scrollbar-hide"
      role="tablist"
    >
      {currentSubTabs.map((sub) => {
        const isActive = activeSubTab === sub.id;
        return (
          <button
            key={sub.id}
            style={{ fontFamily: "var(--font-Poppins)" }}
            type="button"
            role="tab"
            aria-selected={isActive ? "true" : "false"}
            onClick={() => setActiveSubTab(sub.id)}
            className={[
              "whitespace-nowrap px-3 md:px-4 py-1.5 text-[13px] md:text-[14px] font-medium rounded-full transition-all",
              isActive
                ? "bg-white text-orange-500 shadow-sm border border-orange-300"
                : "text-slate-700 hover:bg-white/80",
            ].join(" ")}
          >
            {sub.label}
          </button>
        );
      })}
    </div>
  </div>
)}

      {/* TAB CONTENT */}
      <div
  id="default-tab-content"
  className="space-y-6 rounded-3xl bg-white/80 border border-slate-200 p-4 sm:p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
>
  <TabPanel id="Logo" activeSubTab={activeSubTab}>
    <PricingGrid data={pricingLogoData} contactData={contactData} />
  </TabPanel>

  <TabPanel id="webPackage" activeSubTab={activeSubTab}>
    <PricingGrid data={pricingWebData} contactData={contactData} />
  </TabPanel>

  <TabPanel id="Illustration" activeSubTab={activeSubTab}>
    <PricingGrid data={pricingIllustrationData} contactData={contactData} />
  </TabPanel>

  <TabPanel id="Ecommerce" activeSubTab={activeSubTab}>
    <PricingGrid data={pricingEcommerceData} contactData={contactData} />
  </TabPanel>

  <TabPanel id="Seo" activeSubTab={activeSubTab}>
    <PricingGrid data={pricingSeoData} contactData={contactData} />
  </TabPanel>

  <TabPanel id="Branding" activeSubTab={activeSubTab}>
    <PricingGrid data={pricingBrandingData} contactData={contactData} />
  </TabPanel>

  <TabPanel id="Animation" activeSubTab={activeSubTab}>
    <PricingGrid data={pricingAnimationData} contactData={contactData} />
  </TabPanel>

  <TabPanel id="Combo" activeSubTab={activeSubTab}>
    <PricingGrid data={pricingAllData} contactData={contactData} />
  </TabPanel>
</div>
    </div>
  </section>
    );
}

export default PricingSec;
