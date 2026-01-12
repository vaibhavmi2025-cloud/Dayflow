import express from "express";
import { getNotifications, markAsRead } from "../controllers/notificationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all notifications for logged-in user
router.get("/", authMiddleware, getNotifications);
// Mark notification as read
router.patch("/:id/read", authMiddleware, markAsRead);

export default router;
