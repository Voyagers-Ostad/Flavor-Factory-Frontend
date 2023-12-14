import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "./BlogCard";
// import blogpostsData from "../data/blogpostsData";
import { useState, useEffect } from "react";

const FeaturedBlogPostsSlider = () => {
  const [blogpostsData, setBlogs] = useState([]);
  const [blogNumber, setblogNumber] = useState([]);

  useEffect(() => {
    // Define the backend API endpoint
    const blogAPI =
      "https://flavor-factory-m190.onrender.com/api/v1/blogs/readpost";

    // Fetch data from the backend when the component mounts
    axios
      .get(blogAPI)
      .then((response) => {
        // Update the state with the fetched data
        console.log(response.data.data);
        setBlogs(response.data.data);
        const dataLength = response.data.data.length;
        console.log("Length of the array:", dataLength);
        // console.log("length ", response.data.data.length);
        setblogNumber(dataLength);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log("blogs", blogNumber);
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
      {blogpostsData.slice(0, blogNumber).map((singleBlog) => (
        // <h1>{singleBlog.name}</h1>
        <div key={singleBlog.id}>
          <BlogCard singleBlog={singleBlog} />
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedBlogPostsSlider;
