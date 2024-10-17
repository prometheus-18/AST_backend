
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the User model
const User = sequelize.define('User', {
  age: {
    type: DataTypes.INTEGER,
    allowNull: false, // Required field
    validate: {
      min: 0, // Age must be non-negative
    },
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false, // Required field
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false, // Required field
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false, // Required field
  },
}, {
  tableName: 'users', // Table name in the database
  timestamps: false,  // Disable createdAt/updatedAt columns
});

module.exports = User;



