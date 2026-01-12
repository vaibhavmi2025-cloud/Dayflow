import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: Date,
    status: {
      type: String,
      enum: ["Present", "Absent", "Half-day", "Leave"]
    },
    checkIn: Date,
    checkOut: Date
  },
  { timestamps: true }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
