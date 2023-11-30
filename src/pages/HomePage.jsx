import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <p className="text-center">This is Home page</p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
