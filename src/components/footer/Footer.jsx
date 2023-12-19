import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid site_footer">
      <div className="row d-flex align-items-center p-4">
        <div className="col-lg-4 col-md-4 col-sm-8 col-12">
          <span className="display-5 footer_logo">Flavor Factory</span>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-12">
          <a href="/">Home</a>
          <br />
          <a href="">All Recipe</a>
          <br />
          <a href="/tips">Tips</a>
          <br />
          <a href="/blogs">Blog</a>
          <br />
          <a href="/about">About Us</a>
          <br />
          <a href="/contact">Contact US</a>
          <br />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-12 ps-4">
          {/* <a className="d-inline-block py-2" href="">
            Editorial Process
          </a> */}
          <br />
          <a className="d-inline-block py-2" href="">
            Terms of Service
          </a>
          <br />
          <a className="d-inline-block py-2" href="">
            Privacy Policy
          </a>
          <br />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
          <a className="d-inline-block mx-3" href="#">
            <i className="fa-brands fa-facebook fa-3x"></i>
          </a>
          <a className="d-inline-block mx-3" href="#">
            <i className="fa-brands fa-instagram fa-3x"></i>
          </a>
          <a className="d-inline-block mx-3" href="#">
            <i className="fa-brands fa-twitter fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
