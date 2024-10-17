const express = require('express');
const router = express.Router();
const userController = require('../controllers/controler');

// Route to create a new user
router.post('/v1/users/create', userController.createUser);

module.exports = router;
