import React from "react";
import AboutCoverPicture from "../aboutCoverPicture/AboutCoverPicture";
import About from "../aboutContents/About";
import Accordion from "../accordion/Accordion";
import faqs from "../../data/faq";

const AllAbout = () => {
  return (
    <div>
      <AboutCoverPicture />
      <About />
      <Accordion data={faqs} />
    </div>
  );
};

export default AllAbout;
