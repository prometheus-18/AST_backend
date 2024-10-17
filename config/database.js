const { Sequelize } = require('sequelize');

// Set up Sequelize to connect to MySQL
const sequelize = new Sequelize('ast', 'root', '@@mindz%^&*!123@#$', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,  // Disable SQL query logging
});

module.exports = sequelize;
