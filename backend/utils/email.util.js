const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

exports.sendVerificationMail = async (email, token) => {
  const verifyLink = `${process.env.FRONTEND_URL}/verify/${token}`;

  await transporter.sendMail({
    from: `"Dayflow HRMS" <${process.env.MAIL_USER}>`,
    to: email,
    subject: 'Verify your email',
    html: `
      <h3>Email Verification</h3>
      <p>Click below link to verify your email:</p>
      <a href="${verifyLink}">Verify Email</a>
    `
  });
};
