const db = require('../config/db');

/* My Payroll */
exports.getMyPayroll = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM payroll WHERE user_id=?`,
      [req.user.id]
    );

    res.json(rows[0] || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* All Payroll (Admin) */
exports.getAllPayroll = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT p.*, u.name, u.employee_id 
       FROM payroll p
       JOIN users u ON p.user_id = u.id`
    );

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Update Payroll (Admin) */
exports.updatePayroll = async (req, res) => {
  const { basic_salary, hra, allowances, deductions } = req.body;
  const net_salary =
    Number(basic_salary) +
    Number(hra) +
    Number(allowances) -
    Number(deductions);

  try {
    await db.query(
      `INSERT INTO payroll 
       (user_id, basic_salary, hra, allowances, deductions, net_salary)
       VALUES (?,?,?,?,?,?)
       ON DUPLICATE KEY UPDATE
       basic_salary=?, hra=?, allowances=?, deductions=?, net_salary=?`,
      [
        req.params.userId,
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

    res.json({ message: 'Payroll updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
