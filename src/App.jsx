import "bootstrap/dist/css/bootstrap.css";

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/">{<HomePage />}</Route>
        <Route path="/about">{<AboutUs />}</Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
