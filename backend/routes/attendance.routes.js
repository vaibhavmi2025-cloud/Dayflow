const express = require('express');
const router = express.Router();

const {
  checkIn,
  checkOut,
  getMyAttendance,
  getAllAttendance
} = require('../controllers/attendance.controller');

const authMiddleware = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');

/* Employee */
router.post('/check-in', authMiddleware, checkIn);
router.post('/check-out', authMiddleware, checkOut);
router.get('/my', authMiddleware, getMyAttendance);

/* Admin / HR */
router.get(
  '/all',
  authMiddleware,
  roleMiddleware('ADMIN'),
  getAllAttendance
);

module.exports = router;
