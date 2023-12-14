// src/components/Homepage.js
import FeaturedRecipesSlider from './FeaturedRecipesSlider';
import FeaturedBlogPostsSlider from './FeaturedBlogPostsSlider'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

const Homepage = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="heroheadertwo">Welcome to</h1>
          <h1 className="heroheaderone">Flavor Factory</h1>
          <p>Discover and share delicious recipes with the community!</p>
          <button className="btn btn-primary">Explore Recipes</button>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="featured-recipes">
        <h2 className="featuredrecipeheader">Featured Recipes</h2>
        <FeaturedRecipesSlider />
      </section>

      {/* Share Your Recipe Section */}
      <section className="share-recipe">
        <h2>Share Your Recipe</h2>
        <p>
          Have a delicious recipe to share? Join our community and contribute
          your favorite recipes!
        </p>
        {/* Add a button or link to the recipe submission page */}
        <button className="btn btn-secondary">Share Your Recipe</button>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="featured-recipes">
        <h2 className="featuredrecipeheader">Featured Blog Posts</h2>
        <FeaturedBlogPostsSlider />
      </section>

      {/* Kitchen Tips Section */}
      <section className="featured-recipes">
        <h2 className="featuredrecipeheader">Kitchen Tips</h2>
        <FeaturedBlogPostsSlider />
      </section>

      {/* Footer Section */}
      <footer>
        <p>Happy cooking and sharing!</p>
      </footer>
    </div>
  );
};

export default Homepage;
