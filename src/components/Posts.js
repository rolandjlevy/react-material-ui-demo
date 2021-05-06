import React, { useEffect, useState } from 'react';

function Posts() {

  const [posts, setPosts] = useState([]);
  
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const getPosts = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPosts(data));
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <ul>
      {posts.length && (posts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
        )
      ) || 'Loading...')}
      </ul>
    </div>
  );
}

export default Posts;