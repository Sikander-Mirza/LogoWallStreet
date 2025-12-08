import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../../pages/About/AboutUs";
import ContactUs from "../../pages/Contact/ContactUs";
import Navbar from "../../component/navbar/Navbar";
import Home from "../../pages/Home/Home";
import Pricing from "../../pages/Pricing/Pricing";
import Portfolio from "../../pages/Portfolio/Portfolio"
import Review from '../../pages/Review/review';
import WebDevelopment from '../../pages/WebDevelopment/WebDevelopment';
function Routing() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/review" element={<Review/>} />
        <Route path="/web-design" element={<WebDevelopment/>} />

      </Routes>
    </Router>
  )
}

export default Routing