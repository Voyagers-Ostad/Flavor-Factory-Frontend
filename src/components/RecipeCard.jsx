// src/components/RecipeCard.js

import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-details">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <button className="btn btn-secondary">View</button>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
