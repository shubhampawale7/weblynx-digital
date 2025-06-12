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
app.use(express.json());

// CORS Configuration - Allow both local and deployed frontend origins
const corsOptions = {
  origin: ["http://localhost:5173", "https://weblynx-digital.vercel.app"], // ADDED LOCALHOST ORIGIN
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Routes
app.use("/api/contact", contactRoutes);

// Simple root route for testing
app.get("/", (req, res) => {
  res.send("Weblynx Infotech Backend API is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
