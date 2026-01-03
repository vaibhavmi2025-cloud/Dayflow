const db = require('../config/db');

/* Check In */
exports.checkIn = async (req, res) => {
  try {
    const today = new Date().toISOString().slice(0, 10);

    await db.query(
      `INSERT INTO attendance (user_id, date, check_in, status)
       VALUES (?, ?, CURTIME(), 'PRESENT')`,
      [req.user.id, today]
    );

    res.json({ message: 'Check-in successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Check Out */
exports.checkOut = async (req, res) => {
  try {
    const today = new Date().toISOString().slice(0, 10);

    await db.query(
      `UPDATE attendance SET check_out=CURTIME()
       WHERE user_id=? AND date=?`,
      [req.user.id, today]
    );

    res.json({ message: 'Check-out successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* My Attendance */
exports.getMyAttendance = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM attendance WHERE user_id=? ORDER BY date DESC`,
      [req.user.id]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* All Attendance (Admin) */
exports.getAllAttendance = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT a.*, u.name FROM attendance a
       JOIN users u ON a.user_id = u.id
       ORDER BY a.date DESC`
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
