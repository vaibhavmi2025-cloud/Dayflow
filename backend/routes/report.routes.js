const express = require('express');
const router = express.Router();

const {
  attendanceReport,
  salaryReport
} = require('../controllers/report.controller');

const authMiddleware = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');

/* Admin / HR Reports */
router.get(
  '/attendance',
  authMiddleware,
  roleMiddleware('ADMIN'),
  attendanceReport
);

router.get(
  '/salary',
  authMiddleware,
  roleMiddleware('ADMIN'),
  salaryReport
);

module.exports = router;
