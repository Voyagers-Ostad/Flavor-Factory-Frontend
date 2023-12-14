import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KitchenCard from "./KitchenCard";
import { useState, useEffect } from "react";
import React from "react";

const FeaturedKitchenPostsSlider = () => {
  const [tipsData, setBlogs] = useState([]);

  useEffect(() => {
    // Define the backend API endpoint
    const tipsAPI =
      "https://flavor-factory-m190.onrender.com/api/v1/tips/readTips";

    // Fetch data from the backend when the component mounts
    axios
      .get(tipsAPI)
      .then((response) => {
        // Update the state with the fetched data
        console.log(response.data.data);
        setBlogs(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
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
      {tipsData.slice(0, 10).map((singleTips) => (
        <div key={singleTips.id}>
          <KitchenCard singleTips={singleTips} />
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedKitchenPostsSlider;
