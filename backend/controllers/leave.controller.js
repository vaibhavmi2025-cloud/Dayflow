const db = require('../config/db');

/* Apply Leave */
exports.applyLeave = async (req, res) => {
  const { leave_type, start_date, end_date, remarks } = req.body;

  try {
    await db.query(
      `INSERT INTO leave_requests 
       (user_id, leave_type, start_date, end_date, remarks)
       VALUES (?,?,?,?,?)`,
      [req.user.id, leave_type, start_date, end_date, remarks]
    );

    res.json({ message: 'Leave applied successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* My Leaves */
exports.myLeaves = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM leave_requests 
       WHERE user_id=? 
       ORDER BY created_at DESC`,
      [req.user.id]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* All Leaves (Admin) */
exports.allLeaves = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT l.*, u.name 
       FROM leave_requests l
       JOIN users u ON l.user_id = u.id
       ORDER BY l.created_at DESC`
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Approve Leave */
exports.approveLeave = async (req, res) => {
  try {
    await db.query(
      `UPDATE leave_requests 
       SET status='APPROVED' 
       WHERE id=?`,
      [req.params.id]
    );

    res.json({ message: 'Leave approved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Reject Leave */
exports.rejectLeave = async (req, res) => {
  try {
    await db.query(
      `UPDATE leave_requests 
       SET status='REJECTED' 
       WHERE id=?`,
      [req.params.id]
    );

    res.json({ message: 'Leave rejected' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
