const express = require('express');
const router = express.Router();

// GET all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = [
      { id: 1, title: 'Blog Post 1', content: 'Content here' }
    ];
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error: error.message });
  }
});

module.exports = router;
