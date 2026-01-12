import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true },
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "employee"], default: "employee" },
    phone: String,
    address: String,
    designation: String,
    department: String,
    joiningDate: Date,
    salary: Number,
    documents: [String]
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
