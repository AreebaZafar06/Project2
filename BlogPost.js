import React from 'react';

const BlogPost = ({ title, content, image }) => {
  return (
    <div className="blog-post">
      <img src={image} alt={title} className="blog-post-image" />
      <div className="blog-post-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
