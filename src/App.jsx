import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RecipeCreatePage from "./pages/RecipeCreatePage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/create-recipe" element={<RecipeCreatePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/">{<HomePage />}</Route>
        <Route path="/about">{<AboutUs />}</Route> */}
         <Route path="*" element={<NotFoundPage />} />
         
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
