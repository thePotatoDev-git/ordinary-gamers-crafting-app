// Handles GET request for homepage
// Handles POST method for adding new crafting item

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

// Add specific routes for specific crafting items
router.get('/', homeController.getIndex);
router.post('/', homeController.addItem);

module.exports = router;