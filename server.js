
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}));

//Register routes
app.use("/api/auth",authRoutes);
app.use("/api/items",itemRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Lost & Found API is running...");
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
