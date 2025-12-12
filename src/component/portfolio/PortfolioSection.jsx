import React, { useState } from "react";
import { motion } from "framer-motion";

import logo1 from "../../assets/images/logo1.jpeg";
import logo2 from "../../assets/images/logo2.jpeg";
import logo3 from "../../assets/images/logo3.jpeg";
import web1 from "../../assets/images/web1.jpg";
import web2 from "../../assets/images/web2.jpg";
import web3 from "../../assets/images/web3.jpg";

import "./PortfolioSection.css";

/* MAIN TABS + SUB TABS CONFIG */
const mainTabs = [
  {
    id: "logo",
    label: "Graphic Design",
    subTabs: [
      { id: "logo-all", label: "All Logos" },
      { id: "logo-simple", label: "Logos" },
      { id: "logo-modern", label: "Illustration" },
      { id: "logo-mascot", label: "Mascot" },
      { id: "logo-animated", label: "Animated" },
    ],
  },
  {
    id: "web",
    label: "Website Development",
    subTabs: [
      { id: "web-all", label: "All Websites" },
      { id: "web-landing", label: "Landing Pages" },
      { id: "web-portfolio", label: "Portfolio Sites" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile App",
    subTabs: [
      { id: "mobile-all", label: "All Apps" },
      { id: "mobile-finance", label: "Finance" },
      { id: "mobile-delivery", label: "Delivery" },
    ],
  },
  {
    id: "ecom",
    label: "E‑Commerce Website",
    subTabs: [
      { id: "ecom-all", label: "All Stores" },
      { id: "ecom-fashion", label: "Fashion" },
      { id: "ecom-tech", label: "Tech" },
    ],
  },
];

/* RAW DATA */
const portfolioData = {
  logo: [
    { id: 1, title: "Embrys Roofing", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538259/aikqfu3nioept5wcc5pf.jpg", type: "logo-modern" },
    { id: 2, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538261/ueihwtsjfu8hkhw7q80c.jpg", type: "logo-mascot" },
    { id: 3, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538262/kxist69dc4afyytqyna6.jpg", type: "logo-mascot" },
    { id: 4, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538262/qolydlm0ecn8aplpzkof.jpg", type: "logo-mascot" },
    { id: 5, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538262/fledyfi60dm5vzzx0kp0.jpg", type: "logo-mascot" },
    { id: 6, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538262/tgae00ik6rk71xm2dmmn.jpg", type: "logo-mascot" },
    { id: 7, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538281/munph4crpexna6ik3rem.jpg", type: "logo-mascot" },
    { id: 8, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538261/dmz8jclaoqxegzuz1des.jpg", type: "logo-mascot" },
    { id: 9, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538260/qmnyahqtxw9avet58vcz.jpg", type: "logo-mascot" },
    { id: 10, title: "Angel Canino", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538260/rzka9yzejvfjnkk2zgl3.jpg", type: "logo-mascot" },
    { id: 11, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538259/gpzyxchkllmdcnhichhc.jpg", type: "logo-modern" },
    { id: 12, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538260/se0ejwwkja2gsz1tlvjv.jpg", type: "logo-modern" },
    { id: 13, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538260/amh8etbwbw38jad6il8d.jpg", type: "logo-modern" },
    { id: 14, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538260/stntg00lnpmhammtfqr8.jpg", type: "logo-modern" },
    { id: 15, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538261/riespzbnaavxdq0l4dvj.jpg", type: "logo-modern" },
    { id: 16, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538260/qeldltzzhsxgycsctwsk.jpg", type: "logo-modern" },
    { id: 17, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538281/bd5ktqpsdglsb2q3f9pp.jpg", type: "logo-modern" },
    { id: 18, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538281/vncf79ehw0a1i00dwixx.jpg", type: "logo-modern" },
    { id: 18, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538259/yfxriukzmwd44qznqnxf.jpg", type: "logo-animated" },
    { id: 19, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538262/lg6g5hbkbfjwlly6dkfh.jpg", type: "logo-animated" },
    { id: 20, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538263/kxury6wxrvdrvkqg1ayz.jpg", type: "logo-animated" },
    { id: 21, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538282/vnsyi64hhhrxj6rqglqi.jpg", type: "logo-animated" },
    { id: 22, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538282/jq4ufxebsk2x6cxl50kz.jpg", type: "logo-simple" },
    { id: 23, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538261/ddzvmthjblzaibkqpst0.jpg", type: "logo-simple" },
    { id: 24, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538282/l31koytqoww62regsonf.jpg", type: "logo-simple" },
    { id: 25, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538282/xvoblhv7ivjaqjheltsq.jpg", type: "logo-simple" },
    { id: 26, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538263/shlytnm6ce0bktygzugf.jpg", type: "logo-simple" },
    { id: 27, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538263/azmxhdptuj5uv4zvmzyy.jpg", type: "logo-simple" },
    { id: 28, title: "Vidworks", image: "https://res.cloudinary.com/dpbtmyh1r/image/upload/v1765538262/xbgo2dgf5gw0aazxpcsr.jpg", type: "logo-simple" },
  ],
  web: [
    { id: 1, title: "Agency Website", image: web1, tall: true, type: "web-landing" },
    { id: 2, title: "SaaS Landing", image: web2, tall: true, type: "web-landing" },
    { id: 3, title: "Portfolio Site", image: web3, tall: true, type: "web-portfolio" },
  ],
  mobile: [
    { id: 1, title: "Finance App", image: logo1, type: "mobile-finance" },
    { id: 2, title: "Fitness App", image: logo2, type: "mobile-all" },
    { id: 3, title: "Food Delivery", image: logo3, type: "mobile-delivery" },
  ],
  ecom: [
    { id: 1, title: "Fashion Store", image: web1, tall: true, type: "ecom-fashion" },
    { id: 2, title: "Gadgets Shop", image: web2, tall: true, type: "ecom-tech" },
    { id: 3, title: "Cosmetics", image: web3, tall: true, type: "ecom-all" },
  ],
};

export default function PortfolioSection() {
  const [activeMainTab, setActiveMainTab] = useState("logo");
  const [activeSubTab, setActiveSubTab] = useState("logo-all");

  const currentMain = mainTabs.find((t) => t.id === activeMainTab);
  const currentSubTabs = currentMain?.subTabs || [];

  // Get items for current main tab
  const allItems = portfolioData[activeMainTab] ?? [];

  // Filter by subTab if not "all"
  const items =
    activeSubTab && !activeSubTab.endsWith("all")
      ? allItems.filter((item) => item.type === activeSubTab)
      : allItems;

  return (
    <section id="pricing-bottom" className="bg-white py-16 md:py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[2px] w-10 bg-orange-500" />
              <span className="text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase">
                Portfolio
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-Playfair)" }}
            >
              Our Portfolio
            </h2>
            <p
              className="mt-3 text-sm md:text-base text-slate-600"
              style={{ fontFamily: "var(--font-Poppins)" }}
            >
              Looking to expand your business? Our agency offers a range of
              portfolio options tailored to your needs and budget. Whether
              you’re just starting out or aiming to boost your online presence,
              our team has the perfect strategy for you. Explore our work
              below:
            </p>
          </div>
        </div>

        {/* MAIN TABS – light pill style */}
        <div className="mb-4 flex justify-center">
          <div className="inline-flex w-full md:w-auto rounded-full bg-slate-100 border border-slate-200 p-1 overflow-x-auto scrollbar-hide">
            {mainTabs.map((tab) => {
              const isActive = activeMainTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveMainTab(tab.id);
                    // set first sub‑tab as default for that main tab
                    if (tab.subTabs && tab.subTabs.length > 0) {
                      setActiveSubTab(tab.subTabs[0].id);
                    } else {
                      setActiveSubTab("");
                    }
                  }}
                  role="tab"
                  aria-selected={isActive}
                  className={[
                    "whitespace-nowrap px-4 md:px-6 py-2 text-sm md:text-[15px] font-medium rounded-full transition-all",
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md"
                      : "text-slate-700 hover:bg-white",
                  ].join(" ")}
                  style={{ fontFamily: "var(--font-Poppins)" }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* SUB TABS */}
        {currentSubTabs.length > 0 && (
          <div className="mb-8 flex justify-center">
            <div className="inline-flex w-full md:w-auto rounded-full bg-slate-50 border border-slate-200 p-1 overflow-x-auto scrollbar-hide">
              {currentSubTabs.map((sub) => {
                const isActive = activeSubTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubTab(sub.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={[
                      "whitespace-nowrap px-3 md:px-4 py-1.5 text-[13px] md:text-[14px] font-medium rounded-full transition-all",
                      isActive
                        ? "bg-white text-orange-500 shadow-sm border border-orange-300"
                        : "text-slate-700 hover:bg-white/80",
                    ].join(" ")}
                    style={{ fontFamily: "var(--font-Poppins)" }}
                  >
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Grid */}
        <motion.div
          key={`${activeMainTab}-${activeSubTab}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              image={item.image}
              tall={item.tall}
              isScrollingTab={activeMainTab === "web" || activeMainTab === "ecom"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Single card – light theme, no button */
function PortfolioCard({ title, image, tall, isScrollingTab }) {
  const enableScrollEffect = tall && isScrollingTab;

  return (
    <div className="portfolio-card-hover group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-[0_15px_35px_rgba(15,23,42,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.15)]">
      {/* Image wrapper */}
      <div
        className={[
          "relative overflow-hidden bg-slate-100",
          enableScrollEffect ? "h-64" : "h-64 md:h-72",
        ].join(" ")}
      >
        {enableScrollEffect ? (
          <img
            src={image}
            alt={title}
            className="portfolio-scroll-img w-full h-auto object-cover"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/10 to-transparent" />
      </div>
    </div>
  );
}