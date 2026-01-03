const db = require('../config/db');

class Attendance {
  static checkIn(userId, date) {
    return db.query(
      `INSERT INTO attendance (user_id, date, check_in, status)
       VALUES (?, ?, CURTIME(), 'PRESENT')`,
      [userId, date]
    );
  }

  static checkOut(userId, date) {
    return db.query(
      `UPDATE attendance 
       SET check_out = CURTIME()
       WHERE user_id = ? AND date = ?`,
      [userId, date]
    );
  }

  static getByUser(userId) {
    return db.query(
      `SELECT * FROM attendance
       WHERE user_id = ?
       ORDER BY date DESC`,
      [userId]
    );
  }

  static getAll() {
    return db.query(
      `SELECT a.*, u.name
       FROM attendance a
       JOIN users u ON a.user_id = u.id
       ORDER BY a.date DESC`
    );
  }
}

module.exports = Attendance;
