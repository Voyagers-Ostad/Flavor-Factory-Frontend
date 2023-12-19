import React from "react";
import RecipeForm from "../components/RecipeForm.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

const RecipeCreatePage = () => {
  return (
    <div>
      <Header />
      <RecipeForm />
      <Footer />
    </div>
  );
};

export default RecipeCreatePage;
