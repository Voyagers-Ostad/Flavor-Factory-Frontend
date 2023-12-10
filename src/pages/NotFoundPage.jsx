// NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="d-flex  flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">404 - Not Found</h1>
      <h5 className="mt-5">Sorry, the page you are looking for does not exist.</h5>
      <Link to="/" className="mt-3">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
