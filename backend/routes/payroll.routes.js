const express = require('express');
const router = express.Router();

const {
  getMyPayroll,
  getAllPayroll,
  updatePayroll
} = require('../controllers/payroll.controller');

const authMiddleware = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');

/* Employee */
router.get('/my', authMiddleware, getMyPayroll);

/* Admin / HR */
router.get(
  '/all',
  authMiddleware,
  roleMiddleware('ADMIN'),
  getAllPayroll
);

router.put(
  '/update/:userId',
  authMiddleware,
  roleMiddleware('ADMIN'),
  updatePayroll
);

module.exports = router;
