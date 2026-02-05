const express = require('express');
const router = express.Router();
const { createBlog, getBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');

router.get('/', getBlogs);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
