import axios from "axios";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./dropdown/DropdownMenu";

const DropdownSection = () => {
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
  const handleCloseItem = (item) => {
    // console.log(`Clicked with value: ${item}`);
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((selectedItem) => selectedItem !== item)
    );
    // Do something with the value
  };
  // meals
  const [dropdownValues, setDropdownValues] = useState([]);
  const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);
  const type = "meals";
  const apiLink =
    "https://flavor-factory-m190.onrender.com/api/v1/recipe/" + type;
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
  const apiLinkBake =
    "https://flavor-factory-m190.onrender.com/api/v1/recipe/" + typeBake;
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
  const apiLinkOcs =
    "https://flavor-factory-m190.onrender.com/api/v1/recipe/" + typeOcs;
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
  const typeCuisine = "cuisine";
  const apiLinkCuisine =
    "https://flavor-factory-m190.onrender.com/api/v1/recipe/" + typeCuisine;
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
    <div className="row dropdownSection">
      <nav className="navbar navbar-expand-lg navbar-dark dropdownSection">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <DropdownMenu
                title={"Meals"}
                values={dropdownValues}
                onValueChange={handleValueChange}
              />
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a className="dropbtn" href="">
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
            </li>
            <li className="nav-item">
              <DropdownMenu
                title={"Ingredients"}
                values={dropdownValuesIngredient}
                onValueChange={handleValueChange}
              />
            </li>
            <li className="nav-item">
              <DropdownMenu
                title={"Occassions"}
                values={dropdownValuesOccassion}
                onValueChange={handleValueChange}
              />
            </li>
            <li className="nav-item">
              <DropdownMenu
                title={"Cuisines"}
                values={dropdownValuesCuisine}
                onValueChange={handleValueChange}
              />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tips">
                Tips
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blogs">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="col-md-1">
        <a href="/">
          <span className="d-block">Home</span>
        </a>
      </div>
      <div className="col-md-2">
        <div>
          <DropdownMenu
            title={"Meals"}
            values={dropdownValues}
            onValueChange={handleValueChange}
          />
        </div>
      </div>
      <div className="col-md-2">
        <div className="dropdown">
          <a className="dropbtn" href="">
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
      <div className="col-md-2">
        <div>
          <DropdownMenu
            title={"Ingredients"}
            values={dropdownValuesIngredient}
            onValueChange={handleValueChange}
          />
        </div>
      </div>
      <div className="col-md-2">
        <div>
          <DropdownMenu
            title={"Occassions"}
            values={dropdownValuesOccassion}
            onValueChange={handleValueChange}
          />
        </div>
      </div>
      <div className="col-md-2">
        <div>
          <DropdownMenu
            title={"Cuisines"}
            values={dropdownValuesCuisine}
            onValueChange={handleValueChange}
          />
        </div>
      </div>
      <div className="col-md-2">
        <a className="d-inline-block" href="">
          <span className="d-block">Tips </span>
        </a>
      </div>
      <div className="col-md-1">
        <a className="d-inline-block" href="">
          <span className="d-block">Blog </span>
        </a>
      </div>
      <div className="col-md-1">
        <a className="d-inline-block" href="/about">
          <span className="d-block">About Us </span>
        </a>
      </div> */}
      <div className="filter-elem ms-5">
        {/* <ul> */}
        {selectedItems.map((item, index) => (
          <div className="filter-badge">
            <span key={index}>{item}</span>
            <a onClick={() => handleCloseItem(item)}>X</a>
          </div>
        ))}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default DropdownSection;
