import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./loading/loading";
import userImg from "../images/profilepic.png";

const UserDashboard = () => {
  const [data, setData] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  // State to handle loading state
  const [loading, setLoading] = useState(true);
  // State to handle error, if any
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Define an asynchronous function to fetch data from the API
    const fetchData = async () => {
      try {
        // Set loading to true while fetching data
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const token = localStorage.getItem("token");
        // console.log(`token form dashboard ${token}`)
        // Make the API call using Axios
        const response = await axios.get(
          "https://flavor-factory-m190.onrender.com/api/v1/user/profile",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        console.log(response.error);
        if (response.status === 200) {
          console.log("Unauthorized");
        } else {
          console.log("Unauthorized");
        }
        // Access the response data
        const result = response.data.user;
        setData(result);
        setUserEmail(result.email);
        console.log(result);
      } catch (error) {
        // If an error occurs, set the error state
        setError(error);
      } finally {
        // Set loading to false once the API call is complete
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Redirect to the homepage or login page after logout
    navigate("/");
  };
  // Render loading state
  if (loading) {
    return <Loading />;
  }

  // Render error state
  if (error) {
    return <p className="text-center">Error: {error.message}</p>;
  }

  return (
    <div className="container-fluid site">
      <div className="dashboard d-flex flex-row py-5 ps-5">
        {/* <!-- user dashboard leftside  --> */}
        <div className="col-3 m-5 me-3 pt-5 bg-light">
          <div className=" d-flex justify-content-center ">
            <img src={userImg} className="rounded-circle" alt="profileImg" />
          </div>

          <h6 className="text-center m-3">{userEmail}</h6>
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
              onClick={handleLogout}
              className="border border-secondary-subtle mx-5 mb-5 px-0 btn btn-light"
            >
              log-out
            </button>
          </div>
        </div>
        {/* <!-- user dashbpard rightside  --> */}
        <div className="col-8 p-5 bg-light border border-secondary my-5">
          <div className="d-flex justify-content-between">
            <h6 className="display-6 mb-3">Personal Info</h6>
            <button
              className="btn btn-outline-success m-3 "
              onClick={() => {
                navigate("/create-recipe");
              }}
            >
              Add Recipe
            </button>
          </div>
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
