// Header.js
import React, { useEffect, useState } from "react";
import "./Header.css";
import { DropdownMenu } from "react-bootstrap";
import DropdownSection from "./DropdownSection";

const Header2 = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`headerDiv ${isSticky ? "sticky" : ""}`}>
      <div className="row headSection">
        <div className="col-md-6">
          <span className="logo-name">Flavor Factory</span>
        </div>
        <div className="col-md-6 search-signin">
          <input
            className="bg-light rounded-pill text-center"
            type="search"
            placeholder="Search"
          />
          <a
            className="btn btn-primary px-5 mt-0 rounded-pill mx-3 signInBtn"
            href="/signin"
          >
            Sign In
          </a>
        </div>
      </div>

      <DropdownSection />
    </header>
  );
};

export default Header2;
