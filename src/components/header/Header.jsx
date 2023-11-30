import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container-fluid header">
        <div className="row pt-2">
          <div className="col-lg-6 col-md-12 col-sm-12 ms-5 ps-5">
            <span className="display-5 footer_logo">Flavor Factory</span>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 pt-2 ps-5 ms-5">
            {/* <i className="fa-solid fa-magnifying-glass fa-2x d-inline-block pt-2"></i> */}
            <input
              className="bg-light rounded-pill text-center"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-primary px-5 mt-0 rounded-pill mx-3 signInBtn">
              Sign In
            </button>
          </div>
          <div className="col-12 px-5 mt-3 d-flex flex-row navbar">
            <div className="ps-4 mb-5 pt-2">
              <a className="d-inline-block mx-4 text-center" href="/">
                <span className="d-block">Home</span>
                {/* <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span> */}
              </a>
            </div>
            <div>
              <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Meals</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
            </div>
            <div>
              <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Bakes</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
            </div>
            <div>
              <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Ingredients</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
            </div>
            <div>
              <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Occassions</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
            </div>
            <div>
              <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Cuisines</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
            </div>
            <div className="mb-5 pt-2">
              <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Tips </span>
              </a>
              <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Blog </span>
              </a>
              <a className="d-inline-block mx-4 text-center" href="/about">
                <span className="d-block">About Us </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
