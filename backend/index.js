import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// routes
import authRoutes from "./routes/authRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import passwordRoutes from "./routes/passwordRoutes.js";

dotenv.config();

console.log('Loaded ENV:', { PORT: process.env.PORT, mongoDBURI: process.env.mongoDBURI, MONGODBURI: process.env.MONGODBURI });

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.mongoDBURI || process.env.MONGODBURI;

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/leave", leaveRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/password", passwordRoutes);


// mongo connection + server start
mongoose.connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
