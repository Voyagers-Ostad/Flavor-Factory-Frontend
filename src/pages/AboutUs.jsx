import React from "react";
import Accordion from "../components/accordion/Accordion.jsx";
import About from "../components/aboutContents/About.jsx";
import AboutCoverPicture from "../components/aboutCoverPicture/AboutCoverPicture.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import faqs from "../data/faq.js";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <AboutCoverPicture />
      <About />
      <Accordion data={faqs} />
      <Footer />
    </div>
  );
};

export default AboutUs;
