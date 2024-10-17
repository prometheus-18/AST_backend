const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/route');
const cors = require('cors');

const app = express();

// Middleware setup
app.use(cors({ 
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"]
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the user routes
app.use('/api', userRoutes);

// Connect to the database and start the server
sequelize.sync()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Middleware to handle 404 errors for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
