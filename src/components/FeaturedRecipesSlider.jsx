// src/components/FeaturedRecipesSlider.jsx

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecipeCard from './RecipeCard';
import recipesData from '../data/recipesData';

const FeaturedRecipesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {recipesData.slice(0, 10).map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedRecipesSlider;
