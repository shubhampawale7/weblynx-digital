// server/src/utils/emailSender.js
import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "../config/env.js"; // Import email credentials

// Create a transporter using Nodemailer
// For Gmail, this setup typically works. Ensure "App Passwords" are used if 2FA is on.
const transporter = nodemailer.createTransport({
  service: "gmail", // Use 'gmail' or 'outlook', 'yahoo', etc.
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const sendEmail = async ({ to, from, subject, text, html }) => {
  try {
    const mailOptions = {
      from: from || EMAIL_USER, // Sender address, defaults to your EMAIL_USER
      to: to, // List of recipients
      subject: subject, // Subject line
      text: text, // Plain text body
      html: html, // HTML body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};

export { sendEmail };
