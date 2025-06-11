// server/src/models/Inquiry.js
import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid email",
    ],
    trim: true,
    lowercase: true,
  },
  projectType: {
    type: String,
    required: [true, "Project type is required"],
    // UPDATED: Ensure all new service names are included in the enum
    enum: [
      "Custom Web Applications", // Formerly MERN Stack Development
      "Mobile App Development", // New service
      "WordPress Site Creation",
      "SEO Optimization",
      "API Integration",
      "Full Stack Development",
      "Support & Management Services", // New service
      "Other",
    ],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    minlength: [10, "Message must be at least 10 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Inquiry = mongoose.model("Inquiry", InquirySchema);

export default Inquiry;
