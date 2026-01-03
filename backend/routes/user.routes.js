const express = require('express');
const router = express.Router();

const {
  getProfile,
  updateProfile,
  getAllUsers
} = require('../controllers/user.controller');

const authMiddleware = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');

/* User Routes */
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);

/* Admin / HR */
router.get(
  '/',
  authMiddleware,
  roleMiddleware('ADMIN'),
  getAllUsers
);

module.exports = router;
