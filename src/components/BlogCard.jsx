import PropTypes from "prop-types";
import React from "react";

const BlogCard = ({ singleBlog }) => {
  if (!singleBlog) {
    return <div>Loading...</div>; // or any other loading state
  }
  return (
    <div className="recipe-card">
      {/* <img src={recipe.photo} alt={recipe.title} /> */}
      <div className="recipe-details">
        <h3>{singleBlog.name}</h3>
        <p>{singleBlog.description.substring(0, 50) + "..."}</p>
        <button className="btn btn-secondary">View</button>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  singleBlog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
