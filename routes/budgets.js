const express = require('express');
const router = express.Router();

const controller = require('../controllers/budgets');

// Get all budgets
router.get('/budgets', controller.getBudgets);

module.exports = router;