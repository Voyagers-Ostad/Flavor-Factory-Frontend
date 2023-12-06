import axios from "axios";
import React, { useEffect, useState } from "react";
import DropdownMenu from "../dropdown/DropdownMenu";

const Header = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleValueChange = (item, isChecked) => {
    // Update the selected items based on whether the checkbox is checked or unchecked
    if (isChecked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    }
  };
  // meals
  const [dropdownValues, setDropdownValues] = useState([]);
  const type = "meals";
  const apiLink = "http://localhost:5000/api/v1/recipe/" + type;
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get(apiLink)
      .then((response) => setDropdownValues(response.data))
      .catch((error) =>
        console.error("Error fetching dropdown values:", error)
      );
  }, []);
  // ingredients
  const [dropdownValuesIngredient, setDropdownValuesIngredient] = useState([]);
  const typeBake = "ingredient";
  const apiLinkBake = "http://localhost:5000/api/v1/recipe/" + typeBake;
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get(apiLinkBake)
      .then((response) => setDropdownValuesIngredient(response.data))
      .catch((error) =>
        console.error("Error fetching dropdown values:", error)
      );
  }, []);
  // occassions
  const [dropdownValuesOccassion, setDropdownValuesOccasion] = useState([]);
  const typeOcs = "occasion";
  const apiLinkOcs = "http://localhost:5000/api/v1/recipe/" + typeOcs;
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get(apiLinkOcs)
      .then((response) => setDropdownValuesOccasion(response.data))
      .catch((error) =>
        console.error("Error fetching dropdown values:", error)
      );
  }, []);
  // cuisine
  const [dropdownValuesCuisine, setDropdownValuesCuisine] = useState([]);
  const typeCuisine = "occasion";
  const apiLinkCuisine = "http://localhost:5000/api/v1/recipe/" + typeCuisine;
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get(apiLinkCuisine)
      .then((response) => setDropdownValuesCuisine(response.data))
      .catch((error) =>
        console.error("Error fetching dropdown values:", error)
      );
  }, []);
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
              </a>
            </div>
            <div>
              <div>
                <DropdownMenu
                  title={"Meals"}
                  values={dropdownValues}
                  onValueChange={handleValueChange}
                />
              </div>

              {/* <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Meals</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a> */}
            </div>
            <div>
              <div className="dropdown">
                <a className="d-inline-block mx-4 text-center dropbtn" href="">
                  <span className="d-block">Bakes</span>
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </a>
                <div className="dropdown-content">
                  <a key="true" href="#">
                    Baked
                  </a>
                  <a key="false" href="#">
                    Non-Baked
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div>
                <DropdownMenu
                  title={"Ingredients"}
                  values={dropdownValuesIngredient}
                  onValueChange={handleValueChange}
                />
              </div>
              {/* <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Ingredients</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a> */}
            </div>
            <div>
              <div>
                <DropdownMenu
                  title={"Occassions"}
                  values={dropdownValuesOccassion}
                  onValueChange={handleValueChange}
                />
              </div>
              {/* <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Occassions</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a> */}
            </div>
            <div>
              <div>
                <DropdownMenu
                  title={"Cuisines"}
                  values={dropdownValuesCuisine}
                  onValueChange={handleValueChange}
                />
              </div>
              {/* <a className="d-inline-block mx-4 text-center" href="">
                <span className="d-block">Cuisines</span>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a> */}
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
            <div className="filter-elem ms-5">
              {/* <ul> */}
              {selectedItems.map((item, index) => (
                <div className="filter-badge">
                  <span key={index}>{item}</span>
                  <a>X</a>
                </div>
              ))}
              {/* </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
