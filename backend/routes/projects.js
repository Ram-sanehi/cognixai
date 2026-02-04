const express = require('express');
const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = [
      { id: 1, title: 'Project 1', description: 'Description here' },
      { id: 2, title: 'Project 2', description: 'Description here' }
    ];
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
});

// GET featured projects
router.get('/featured', async (req, res) => {
  try {
    const projects = [
      { id: 1, title: 'Featured Project 1', description: 'Description here' }
    ];
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured projects', error: error.message });
  }
});

module.exports = router;
