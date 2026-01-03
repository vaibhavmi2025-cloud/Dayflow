const express = require('express');
const router = express.Router();

const {
  applyLeave,
  myLeaves,
  allLeaves,
  approveLeave,
  rejectLeave
} = require('../controllers/leave.controller');

const authMiddleware = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');

/* Employee */
router.post('/apply', authMiddleware, applyLeave);
router.get('/my', authMiddleware, myLeaves);

/* Admin / HR */
router.get(
  '/all',
  authMiddleware,
  roleMiddleware('ADMIN'),
  allLeaves
);

router.put(
  '/approve/:id',
  authMiddleware,
  roleMiddleware('ADMIN'),
  approveLeave
);

router.put(
  '/reject/:id',
  authMiddleware,
  roleMiddleware('ADMIN'),
  rejectLeave
);

module.exports = router;
