// src/components/BlogPostsCard.jsx

import PropTypes from 'prop-types';

const BlogPostsCard = ({ post }) => {
  return (
    <div className="recipe-card">
      <img src={post.image} alt={post.title} />
      <div className="recipe-details">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button className="btn btn-secondary">View Post</button>
      </div>
    </div>
  );
};

BlogPostsCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPostsCard;
