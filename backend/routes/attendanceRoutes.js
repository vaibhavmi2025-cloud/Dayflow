import express from "express";
import auth from "../middleware/authMiddleware.js";
import { markAttendance, getMyAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/", auth, markAttendance);
router.get("/", auth, getMyAttendance);

export default router;
