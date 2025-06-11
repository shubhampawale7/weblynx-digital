// server/src/controllers/contactController.js
import Inquiry from "../models/Inquiry.js";
import { sendEmail } from "../utils/emailSender.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !projectType || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    const newInquiry = new Inquiry({ name, email, projectType, message });
    await newInquiry.save();

    await sendEmail({
      to: process.env.EMAIL_USER,
      from: `"${name} (Weblynx Infotech Inquiry)" <${email}>`, // UPDATED
      subject: `New Weblynx Infotech Inquiry: ${projectType} from ${name}`, // UPDATED
      text: `
        New Inquiry from Weblynx Infotech Website! // UPDATED
        ----------------------------------
        Name: ${name}
        Email: ${email}
        Project Type: ${projectType}
        Message: ${message}
        ----------------------------------
        Reply to: ${email}
      `,
      html: `
        <p><strong>New Inquiry from Weblynx Infotech Website!</strong></p> // UPDATED
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
    console.error("Error submitting contact form or sending email:", error);
    res.status(500).json({
      success: false,
      message: "Server error, please try again later.",
    });
  }
};
