const Testimonial = require('../models/Testimonial');

const createTestimonial = async (req, res) => {
  try {
    const { name, position, company, message, rating } = req.body;

    if (!name || !message) {
      return res.status(400).json({ message: 'Name and message are required' });
    }

    const testimonial = await Testimonial.create({
      name,
      position,
      company,
      message,
      rating
    });

    return res.status(201).json(testimonial);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating testimonial', error: error.message });
  }
};

const getTestimonials = async (_req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return res.json(testimonials);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
  }
};

const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    return res.json(testimonial);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating testimonial', error: error.message });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    return res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting testimonial', error: error.message });
  }
};

module.exports = {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial
};
