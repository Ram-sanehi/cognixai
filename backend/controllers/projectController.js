const Project = require('../models/Project');

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    return res.status(201).json(project);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating project', error: error.message });
  }
};

const getProjects = async (_req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
};

const getFeaturedProjects = async (_req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ createdAt: -1 });
    return res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching featured projects', error: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    return res.json(project);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating project', error: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    return res.json({ message: 'Project deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting project', error: error.message });
  }
};

module.exports = {
  createProject,
  getProjects,
  getFeaturedProjects,
  updateProject,
  deleteProject
};
