import Notification from "../models/Notification.js";

// Get notifications for a user
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark notification as read
export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    if (!notification) return res.status(404).json({ error: "Notification not found" });
    res.json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create notification (for system use)
export const createNotification = async (userId, type, message, link = "") => {
  try {
    const notification = new Notification({ user: userId, type, message, link });
    await notification.save();
    return notification;
  } catch (err) {
    // Log error, don't throw to avoid breaking main flow
    console.error("Notification error:", err.message);
  }
};
