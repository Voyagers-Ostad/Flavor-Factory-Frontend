import React from "react";
import Accordion from "../components/accordion/Accordion.jsx";
import About from "../components/aboutContents/About.jsx";
import AboutCoverPicture from "../components/aboutCoverPicture/AboutCoverPicture.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import faqs from "../data/faq.js";
import Blogs from "../components/Blogs.jsx";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
};

export default AboutUs;
