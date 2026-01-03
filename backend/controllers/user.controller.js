const db = require('../config/db');

/* Get Logged-in User Profile */
exports.getProfile = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT id, employee_id, name, email, role, phone, address, profile_pic 
       FROM users WHERE id = ?`,
      [req.user.id]
    );

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Update Profile */
exports.updateProfile = async (req, res) => {
  const { phone, address, profile_pic } = req.body;

  try {
    await db.query(
      `UPDATE users SET phone=?, address=?, profile_pic=? WHERE id=?`,
      [phone, address, profile_pic, req.user.id]
    );

    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Get All Users (Admin) */
exports.getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT id, employee_id, name, email, role FROM users`
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
