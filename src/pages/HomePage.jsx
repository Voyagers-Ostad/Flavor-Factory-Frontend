import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DinerSection from "../components/DinnerSection";
import PeopleSection from "../components/PeopleSection";
import BakingSection from "../components/BakingSection";
import TipsSection from "../components/TipsSection";
import BlogsSection from "../components/BlogsSection";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <DinerSection />
      <PeopleSection />
      <BakingSection />
      <TipsSection />
      <BlogsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
