import { useState } from 'react';
import blogData from '../data/blogData';
import BlogPost from '../components/BlogPost';

const BlogPage = () => {
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
      <div className='header'>
        <h1 className='blogheader'>My Blog</h1>
      </div>
      <div className='posts'>
        {blogData.map((post) => (
          <div
            key={post.id}
            style={{ cursor: 'pointer' }}
            onClick={() => handlePostClick(post)}
          >
            <BlogPost
              key={post.id}
              title={post.title}
              content={post.content.substring(0, 50) + '...'}
            />
          </div>
        ))}

        {selectedPost && (
          <div className="modal" onClick={handleCloseModal}>
            <div className="modal-content" onClick={handleModalClick}>
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              <h2>{selectedPost.title}</h2>
              <p>{selectedPost.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
