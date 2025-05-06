// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('✅ Connected to MongoDB'));

// SCHEMAS
const replySchema = new mongoose.Schema({
  author: String,
  content: String,
});

const commentSchema = new mongoose.Schema({
  author: String,
  content: String,
  replies: [replySchema],
});

const postSchema = new mongoose.Schema({
  author: String,
  content: String,
  comments: [commentSchema],
});

const Post = mongoose.model('Post', postSchema);

// ROUTES
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/api/posts', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
});

app.post('/api/posts/:postId/comments', async (req, res) => {
  const post = await Post.findById(req.params.postId);
  post.comments.push(req.body);
  await post.save();
  res.json(post);
});

app.post('/api/posts/:postId/comments/:commentId/replies', async (req, res) => {
  const post = await Post.findById(req.params.postId);
  const comment = post.comments.id(req.params.commentId);
  comment.replies.push(req.body);
  await post.save();
  res.json(post);
});

// START
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
