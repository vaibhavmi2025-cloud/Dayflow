import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["attendance", "leave", "payroll"] },
    data: mongoose.Schema.Types.Mixed,
    generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    generatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;
