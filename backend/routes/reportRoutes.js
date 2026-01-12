import express from "express";
import { createReport, getReports, getReportById } from "../controllers/reportController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a report
router.post("/", authMiddleware, createReport);
// Get all reports
router.get("/", authMiddleware, getReports);
// Get report by ID
router.get("/:id", authMiddleware, getReportById);

export default router;
