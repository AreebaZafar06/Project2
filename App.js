import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import './styles.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <BlogPost key={post.id} title={post.title} content={post.content} image={post.image} />
      ))}
    </div>
  );
};

export default App;
