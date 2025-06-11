// server/server.js
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
app.use(express.json()); // Body parser for JSON requests

// CORS Configuration - IMPORTANT: Only allow your deployed frontend URL
const corsOptions = {
  origin: "https://weblynx-digital.vercel.app", // <--- Your Vercel frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies to be sent (if you ever add authentication)
  optionsSuccessStatus: 204, // For preflight requests
};
app.use(cors(corsOptions)); // Use the configured CORS options

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
