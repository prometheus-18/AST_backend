const User = require('../models/model');

exports.createUser = async (req, res) => {
  const { age, department, experience, salary } = req.body;

  // Input validation (optional but recommended)
  if (age === undefined || department === undefined || experience === undefined || salary === undefined) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newUser = await User.create({ age, department, experience, salary });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error); // Log the error for debugging
    res.status(500).json({ error: error.message || 'Failed to create user' });
  }
};
