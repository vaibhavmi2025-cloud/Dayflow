import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { employeeId, email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    employeeId,
    email,
    password: hashed,
    role
  });

  res.json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );

  res.json({ token });
};
import Attendance from "../models/Attendance.js";

export const markAttendance = async (req, res) => {
  const attendance = await Attendance.create({
    employee: req.user.id,
    date: new Date(),
    status: req.body.status
  });
  res.json(attendance);
};

export const getMyAttendance = async (req, res) => {
  const data = await Attendance.find({ employee: req.user.id });
  res.json(data);
};
