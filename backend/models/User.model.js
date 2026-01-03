const db = require('../config/db');

class User {
  static create(data) {
    const {
      employee_id,
      name,
      email,
      password,
      role
    } = data;

    return db.query(
      `INSERT INTO users 
       (employee_id, name, email, password, role)
       VALUES (?,?,?,?,?)`,
      [employee_id, name, email, password, role]
    );
  }

  static findByEmail(email) {
    return db.query(
      `SELECT * FROM users WHERE email=?`,
      [email]
    );
  }

  static findById(id) {
    return db.query(
      `SELECT id, employee_id, name, email, role, phone, address, profile_pic, is_verified
       FROM users WHERE id=?`,
      [id]
    );
  }

  static updateProfile(id, data) {
    const { phone, address, profile_pic } = data;

    return db.query(
      `UPDATE users SET phone=?, address=?, profile_pic=? WHERE id=?`,
      [phone, address, profile_pic, id]
    );
  }

  static getAll() {
    return db.query(
      `SELECT id, employee_id, name, email, role FROM users`
    );
  }
}

module.exports = User;
