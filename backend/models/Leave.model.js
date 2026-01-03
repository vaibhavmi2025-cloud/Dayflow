const db = require('../config/db');

class Leave {
  static apply(userId, data) {
    const { leave_type, start_date, end_date, remarks } = data;

    return db.query(
      `INSERT INTO leave_requests
       (user_id, leave_type, start_date, end_date, remarks)
       VALUES (?,?,?,?,?)`,
      [userId, leave_type, start_date, end_date, remarks]
    );
  }

  static getByUser(userId) {
    return db.query(
      `SELECT * FROM leave_requests
       WHERE user_id = ?
       ORDER BY created_at DESC`,
      [userId]
    );
  }

  static getAll() {
    return db.query(
      `SELECT l.*, u.name
       FROM leave_requests l
       JOIN users u ON l.user_id = u.id
       ORDER BY l.created_at DESC`
    );
  }

  static updateStatus(id, status) {
    return db.query(
      `UPDATE leave_requests SET status = ? WHERE id = ?`,
      [status, id]
    );
  }
}

module.exports = Leave;
