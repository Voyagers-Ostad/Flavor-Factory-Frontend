import "bootstrap/dist/css/bootstrap.css";

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RecipeCreatePage from "./pages/RecipeCreatePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/create-recipe" element={<RecipeCreatePage />} />
        {/* <Route path="/">{<HomePage />}</Route>
        <Route path="/about">{<AboutUs />}</Route> */}
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
