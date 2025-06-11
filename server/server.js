// server/src/server.js
import express from "express";
import cors from "cors";
import { PORT } from "./src/config/env.js";
import connectDB from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins (adjust for production)
app.use(express.json()); // Body parser for JSON requests

// Routes
app.use("/api/contact", contactRoutes); // All contact form related routes will be under /api/contact

// Simple root route for testing
app.get("/", (req, res) => {
  res.send("Weblynx Backend API is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
