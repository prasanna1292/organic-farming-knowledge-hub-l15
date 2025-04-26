import React, { useState } from 'react';
import './Forum.css';

const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: 'Alice', content: 'What do you think about React 18?' },
    { id: 2, author: 'Bob', content: 'I love hooks! They make life easier.' }
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim() === '') return;
    const newPostObj = {
      id: posts.length + 1,
      author: 'You',
      content: newPost
    };
    setPosts([newPostObj, ...posts]);
    setNewPost('');
  };

  return (
    <div className="forum-container">
      <h1 className="forum-title">Simple React Forum</h1>

      <div className="new-post">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write something..."
        />
        <button onClick={handlePost}>Post</button>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="author">{post.author}</div>
            <div className="content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
