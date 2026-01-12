import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema(
  {
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    month: String,
    year: Number,
    salary: Number,
    deductions: Number,
    netPay: Number
  },
  { timestamps: true }
);

const Payroll = mongoose.model("Payroll", payrollSchema);
export default Payroll;
