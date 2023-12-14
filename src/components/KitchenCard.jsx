import PropTypes from "prop-types";
import React from "react";

const KitchenCard = ({ singleTips }) => {
  if (!singleTips) {
    return <div>Loading...</div>; // or any other loading state
  }
  return (
    <div className="recipe-card">
      {/* <img src={recipe.photo} alt={recipe.title} /> */}
      <div className="recipe-details">
        <h3>{singleTips.name}</h3>
        <p>{singleTips.description}</p>
        <button className="btn btn-secondary">View</button>
      </div>
    </div>
  );
};

KitchenCard.propTypes = {
  singleTips: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
  }).isRequired,
};

export default KitchenCard;
