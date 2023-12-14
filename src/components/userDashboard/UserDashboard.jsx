// import React from "react";

import { useLocation } from "react-router-dom";

const UserDashboard = () => {
  const location = useLocation();

  return (
    <div className="container-fluid site">
      <div className="dashboard d-flex flex-row py-5 ps-5">
        {/* <!-- user dashboard leftside  --> */}
        <div className="col-3 m-5 me-3 pt-5 bg-light">
          <img src="" className="rounded-circle mx-auto d-block" alt="..." />
          <h6 className="text-center m-3">hi {location.state.id}</h6>
          <div className="d-flex flex-column px-5">
            <button
              type="button"
              className="border-secondary-subtle my-2 btn btn-light"
            >
              Personal Info
            </button>
            <button
              type="button"
              className="border-secondary-subtle my-2 btn btn-light"
            >
              Change Password
            </button>
            <button
              type="button"
              className="border-secondary-subtle my-2 btn btn-light"
            >
              Save Items
            </button>
            <button
              type="button"
              className="border-secondary-subtle my-2 btn btn-light"
            >
              My Recipes
            </button>
            <button
              type="button"
              className="border-secondary-subtle my-2 btn btn-light"
            >
              Reviews
            </button>
            <button
              type="button"
              className="border border-secondary-subtle mx-5 mb-5 px-0 btn btn-light"
            >
              log-out
            </button>
          </div>
        </div>
        {/* <!-- user dashbpard rightside  --> */}
        <div className="col-8 p-5 bg-light border border-secondary my-5">
          <h6 className="display-6 pb-5">Personal Info</h6>
          <form className="">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control bg-light"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                First Name
              </label>
              <input
                type="password"
                className="form-control bg-light"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Last Name
              </label>
              <input
                type="password"
                className="form-control bg-light"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Address
              </label>
              <input
                type="password"
                className="form-control bg-light"
                id="exampleInputPassword1"
              />
            </div>

            <button
              type="submit"
              className="btn btn-secondary float-end px-5 mt-5"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
