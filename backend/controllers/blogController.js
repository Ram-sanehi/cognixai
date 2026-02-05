const Blog = require('../models/Blog');

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    return res.status(201).json(blog);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating blog', error: error.message });
  }
};

const getBlogs = async (_req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.json(blogs);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching blogs', error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    return res.json(blog);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating blog', error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    return res.json({ message: 'Blog deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting blog', error: error.message });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog
};
