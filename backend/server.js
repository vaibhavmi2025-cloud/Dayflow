const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/attendance', require('./routes/attendance.routes'));
app.use('/api/leave', require('./routes/leave.routes'));
app.use('/api/payroll', require('./routes/payroll.routes'));
app.use('/api/reports', require('./routes/report.routes'));

/* Health Check */
app.get('/', (req, res) => {
  res.json({ status: 'Dayflow HRMS Backend Running' });
});

/* Server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
