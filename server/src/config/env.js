// server/src/config/env.js
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const MONGODB_URI = process.env.MONGODB_URI;
export const EMAIL_USER = process.env.EMAIL_USE;
export const EMAIL_PASS = process.env.EMAIL_PASS;

// Basic validation to ensure critical env vars are set
if (!MONGODB_URI) {
  console.error("FATAL ERROR: MONGODB_URI is not defined in .env file.");
  process.exit(1); // Exit process if critical variable is missing
}
