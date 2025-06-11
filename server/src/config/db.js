// server/src/config/db.js
import dotenv from "dotenv";

import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
