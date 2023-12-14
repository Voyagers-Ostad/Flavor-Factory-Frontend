import { useState, useEffect } from "react";
// import blogData from "../data/blogData";
import BlogPost from "../components/BlogPost";
import React from "react";
import axios from "axios";

const BlogPage = () => {
  const [blogData, setBlogs] = useState([]);

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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const handleModalClick = (event) => {
    // Prevent the click event from propagating to the overlay
    event.stopPropagation();
  };

  return (
    <div>
      <div className="header">
        <h1 className="blogheader">My Blog</h1>
      </div>
      <div className="posts">
        {blogData.map((post) => (
          <div
            key={post.id}
            style={{ cursor: "pointer" }}
            onClick={() => handlePostClick(post)}
          >
            <BlogPost
              key={post.id}
              title={post.name}
              content={post.description.substring(0, 50) + "..."}
            />
          </div>
        ))}

        {selectedPost && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={handleModalClick}>
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>{selectedPost.name}</h2>
              <p>{selectedPost.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
