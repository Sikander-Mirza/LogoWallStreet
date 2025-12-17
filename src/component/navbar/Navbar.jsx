// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import MenuItems from "./MenuItems.jsx";
import Button from "../button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // separate submenu state
  const [showDesktopServices, setShowDesktopServices] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);

  const desktopMenuRef = useRef(null);
  const navigate = useNavigate();

  // desktop handlers
  const toggleDesktopServices = () =>
    setShowDesktopServices((prev) => !prev);
  const closeDesktopServices = () => setShowDesktopServices(false);

  // mobile handlers
  const toggleMobileServices = () =>
    setShowMobileServices((prev) => !prev);
  const closeMobileServices = () => setShowMobileServices(false);

  // close mobile menu (called when any non‑Services item is clicked)
  const handleMobileItemClick = (path) => {
    setIsOpen(false);
    closeMobileServices();
    if (path) navigate(path);
  };

  // Close desktop services submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target)
      ) {
        closeDesktopServices();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-4 left-1/2 -translate-x-1/2 z-20 w-[92%] md:w-[90%] lg:w-[85%] border border-gray-200 dark:border-gray-700 rounded-xl shadow-md">
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[120px] cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <div
          ref={desktopMenuRef}
          className="hidden md:flex items-center space-x-8"
        >
          <MenuItems
            showServices={showDesktopServices}
            toggleServices={toggleDesktopServices}
            closeServices={closeDesktopServices}
          />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:block">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-[1.02] transition-transform transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 focus:ring-offset-white"
              style={{ fontFamily: "var(--font-Poppins)" }}
              onClick={() => navigate("/contact-us")}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
              if (isOpen) closeMobileServices();
            }}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          >
            <i
              className={`ri-${isOpen ? "close" : "menu"}-line text-2xl text-gray-700`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2 rounded-b-xl">
          <MenuItems
            isMobile
            showServices={showMobileServices}
            toggleServices={toggleMobileServices}   // only Services item should use this
            closeServices={closeMobileServices}
            onItemClick={handleMobileItemClick}     // all other items use this
          />
          <Button text="Get Started" className="w-full" />
        </div>
      )}
    </nav>
  );
}