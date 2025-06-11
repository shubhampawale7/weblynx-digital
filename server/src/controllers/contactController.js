// server/src/controllers/contactController.js
import Inquiry from "../models/Inquiry.js";
import { sendEmail } from "../utils/emailSender.js"; // Import the sendEmail function

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    // Basic validation
    if (!name || !email || !projectType || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const newInquiry = new Inquiry({ name, email, projectType, message });
    await newInquiry.save();

    // Send email notification
    await sendEmail({
      to: process.env.EMAIL_USER, // Your business email (from .env)
      from: `"${name} (Weblynx Inquiry)" <${email}>`, // Sender displayed name and original email
      subject: `New Weblynx Inquiry: ${projectType} from ${name}`, // Clear subject
      text: `
        New Inquiry from Weblynx Website!
        ----------------------------------
        Name: ${name}
        Email: ${email}
        Project Type: ${projectType}
        Message: ${message}
        ----------------------------------
        Reply to: ${email}
      `,
      html: `
        <p><strong>New Inquiry from Weblynx Website!</strong></p>
        <p>----------------------------------</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p style="border: 1px solid #eee; padding: 10px; margin-top: 5px;">${message}</p>
        <p>----------------------------------</p>
        <p>You can reply directly to this email: <a href="mailto:${email}">${email}</a></p>
      `,
    });

    res.status(201).json({
      success: true,
      message:
        "Inquiry submitted successfully! You will receive an email confirmation shortly.",
    });
  } catch (error) {
    console.error("Error submitting contact form or sending email:", error); // Log both
    // Send a generic error message to the client, but log full error on server
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};
