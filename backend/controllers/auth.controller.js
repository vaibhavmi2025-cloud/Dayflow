const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const { sendVerificationMail } = require('../utils/email.util');

/* Register */
exports.register = async (req, res) => {
  const { employee_id, name, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });

    await db.query(
      `INSERT INTO users (employee_id, name, email, password, role) VALUES (?,?,?,?,?)`,
      [employee_id, name, email, hashedPassword, role]
    );

    await sendVerificationMail(email, token);

    res.status(201).json({ message: 'Registered successfully. Verify email.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Login */
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query(`SELECT * FROM users WHERE email=?`, [email]);
    if (!rows.length) return res.status(401).json({ message: 'Invalid credentials' });

    const user = rows[0];
    if (!user.is_verified) return res.status(403).json({ message: 'Email not verified' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Verify Email */
exports.verifyEmail = async (req, res) => {
  try {
    const { email } = jwt.verify(req.params.token, process.env.JWT_SECRET);

    await db.query(
      `UPDATE users SET is_verified=true WHERE email=?`,
      [email]
    );

    res.json({ message: 'Email verified successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};
