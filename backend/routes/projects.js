const express = require('express');
const router = express.Router();
const {
  createProject,
  getProjects,
  getFeaturedProjects,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
