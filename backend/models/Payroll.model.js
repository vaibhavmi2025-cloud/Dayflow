const db = require('../config/db');

class Payroll {
  static getByUser(userId) {
    return db.query(
      `SELECT * FROM payroll WHERE user_id = ?`,
      [userId]
    );
  }

  static getAll() {
    return db.query(
      `SELECT p.*, u.name, u.employee_id
       FROM payroll p
       JOIN users u ON p.user_id = u.id`
    );
  }

  static upsert(userId, data) {
    const { basic_salary, hra, allowances, deductions } = data;
    const net_salary =
      Number(basic_salary) +
      Number(hra) +
      Number(allowances) -
      Number(deductions);

    return db.query(
      `INSERT INTO payroll
       (user_id, basic_salary, hra, allowances, deductions, net_salary)
       VALUES (?,?,?,?,?,?)
       ON DUPLICATE KEY UPDATE
       basic_salary=?, hra=?, allowances=?, deductions=?, net_salary=?`,
      [
        userId,
        basic_salary,
        hra,
        allowances,
        deductions,
        net_salary,
        basic_salary,
        hra,
        allowances,
        deductions,
        net_salary
      ]
    );
  }
}

module.exports = Payroll;
