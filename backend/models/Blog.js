const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: String }],
  publishedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
