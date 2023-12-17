import React, { useEffect, useState } from "react";

const DropdownMenu = ({ title, values, onValueChange }) => {
  const [showAll, setShowAll] = useState(false);

  // Set the maximum number of items to show initially
  const maxItemsToShow = 4;
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
          {showAll
            ? values.map((item, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedItems.includes(item)}
                    onChange={(e) =>
                      handleCheckboxChange(item, e.target.checked)
                    }
                  />
                  {item}
                </label>
              ))
            : values.slice(0, maxItemsToShow).map((item, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={item}
                    checked={selectedItems.includes(item)}
                    onChange={(e) =>
                      handleCheckboxChange(item, e.target.checked)
                    }
                  />
                  {item}
                </label>
              ))}

          {values.length > maxItemsToShow && !showAll && (
            <a onClick={() => setShowAll(true)}>See More</a>
          )}
          {/* {values.length > 5 &&
            values.map((item, index) => (
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
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
