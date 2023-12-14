import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import React from 'react';

const BlogPost = ({ title, content }) => {
  const [ref, inView] = useInView({
    rootMargin: '-50px 0px', // Adjust as needed
  });

  const animationClass = inView ? 'animate__fadeIn' : 'animate__hidden';

  return (
    <div ref={ref} className={`blog-post ${animationClass}`}>
      <div className="blog-post-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogPost;
