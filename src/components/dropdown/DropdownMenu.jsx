import React, { useEffect, useState } from "react";

const DropdownMenu = ({ title, values, onValueChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (value, isChecked) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
    onValueChange(value, isChecked);
  };
  return (
    <div>
      <div className="dropdown">
        <a className="d-inline-block mx-4 text-center dropbtn" href="">
          <span className="d-block">{title}</span>
          <span>
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </a>
        <div className="dropdown-content">
          {values.map((item, index) => (
            // <a key={index} href="#">
            //   {item}
            // </a>
            <label key={index}>
              <input
                type="checkbox"
                value={item}
                checked={selectedItems.includes(item)}
                onChange={(e) => handleCheckboxChange(item, e.target.checked)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
