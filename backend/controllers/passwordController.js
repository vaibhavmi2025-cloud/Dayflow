import nodemailer from "nodemailer";
import User from "../models/User.js";
import crypto from "crypto";

const tokens = new Map(); // In-memory token store (for demo)

export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });
  const token = crypto.randomBytes(32).toString("hex");
  tokens.set(token, { userId: user._id, expires: Date.now() + 3600000 });
  // Send email (demo: log to console)
  console.log(`Reset link: http://localhost:5173/reset-password/${token}`);
  res.json({ message: "Password reset link sent to email (check console in demo)" });
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  const data = tokens.get(token);
  if (!data || data.expires < Date.now()) return res.status(400).json({ message: "Invalid or expired token" });
  await User.findByIdAndUpdate(data.userId, { password });
  tokens.delete(token);
  res.json({ message: "Password updated successfully" });
};
