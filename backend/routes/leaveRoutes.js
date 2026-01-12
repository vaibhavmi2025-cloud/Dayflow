import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import { applyLeave, approveLeave } from "../controllers/leaveController.js";

const router = express.Router();

router.post("/", auth, applyLeave);
router.put("/:id", auth, role("admin"), approveLeave);

export default router;
