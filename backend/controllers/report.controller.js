const db = require('../config/db');

/* Attendance Report */
exports.attendanceReport = async (req, res) => {
  const { from, to } = req.query;

  try {
    const [rows] = await db.query(
      `SELECT u.employee_id, u.name, a.date, a.check_in, a.check_out, a.status
       FROM attendance a
       JOIN users u ON a.user_id = u.id
       WHERE a.date BETWEEN ? AND ?
       ORDER BY a.date ASC`,
      [from, to]
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Salary Report */
exports.salaryReport = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT u.employee_id, u.name,
              p.basic_salary, p.hra, p.allowances,
              p.deductions, p.net_salary
       FROM payroll p
       JOIN users u ON p.user_id = u.id`
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
