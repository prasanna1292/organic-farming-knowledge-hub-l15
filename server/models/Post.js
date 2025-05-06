const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  author: String,
  content: String
});

const commentSchema = new mongoose.Schema({
  author: String,
  content: String,
  replies: [replySchema]
});

const postSchema = new mongoose.Schema({
  author: String,
  content: String,
  comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);
