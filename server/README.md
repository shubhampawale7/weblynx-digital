# Weblynx Backend API

This is the backend API for Weblynx, a digital services agency website. It's built with Node.js, Express.js, and MongoDB, handling contact form submissions and serving as the data layer for the frontend.

## ✨ Features

- **RESTful API:** For handling contact form submissions.
- **MongoDB Integration:** Uses Mongoose for object data modeling.
- **Email Notifications:** Sends email alerts upon new contact form inquiries using Nodemailer.
- **Environment Variable Management:** Secure handling of sensitive credentials.
- **CORS Configuration:** Manages Cross-Origin Resource Sharing.

## 🚀 Technologies Used

- **Node.js:** JavaScript runtime environment
- **Express.js:** Web application framework for Node.js
- **MongoDB Atlas:** Cloud-hosted NoSQL database
- **Mongoose:** MongoDB object modeling for Node.js
- **Dotenv:** For loading environment variables
- **CORS:** Node.js middleware for CORS
- **Nodemailer:** For sending emails
- **Nodemon:** For automatic server restarts during development

## 💻 Getting Started (Local Development)

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js) or Yarn
- A MongoDB Atlas cluster (free tier is sufficient for testing)
- An email account (e.g., Gmail) with an App Password or "Less secure app access" enabled if using 2FA.

### Installation

1.  Navigate to the `server` directory in your terminal:
    ```bash
    cd weblynx-digital/server
    ```
2.  Install the dependencies:
    ```bash
    npm install
    # or yarn install
    ```

### Environment Variables

Create a `.env` file in the `server/` directory:

```dotenv
PORT=5000
MONGODB_URI=mongodb+srv://<your_username>:<your_password>@cluster0.yyxzv7v.mongodb.net/weblynxdb
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
PORT: The port your server will run on (e.g., 5000).
MONGODB_URI: Your full connection string from MongoDB Atlas. Replace <your_username> and <your_password>.
EMAIL_USER: The email address you want to use for sending notifications (e.g., shubhampawale7@gmail.com).
EMAIL_PASS: The password for the above email, preferably an app-specific password if you use 2-Factor Authentication.
Running the Development Server
Start the Express.js development server:

Bash

npm run dev
# or yarn dev
The API will typically be accessible at http://localhost:5000.

☁️ Deployment
This backend API is designed to be deployed on platforms like Render or Railway that support Node.js applications.

Ensure your MONGODB_URI, EMAIL_USER, and EMAIL_PASS environment variables are correctly set up in your hosting platform's dashboard.
In MongoDB Atlas, add the IP addresses of your hosting provider (e.g., Render's outbound IPs) to your Network Access list.
CORS: Remember to update the CORS origin in server/src/server.js to specifically allow your deployed frontend's URL (https://your-frontend.vercel.app) when deploying to production, instead of *.
📁 Project Structure
server/
├── src/
│   ├── config/             # Database connection, environment variables
│   │   └── db.js
│   │   └── env.js
│   ├── controllers/        # Logic for handling routes (e.g., contactController.js)
│   ├── models/             # Mongoose schemas (e.g., Inquiry.js)
│   ├── routes/             # API routes (e.g., contactRoutes.js)
│   ├── middlewares/        # Custom Express middleware
│   ├── utils/              # Helper functions (e.g., emailSender.js)
│   └── server.js           # Main server entry point
├── .env                    # Environment variables (ignored by Git)
├── .gitignore              # Files ignored by Git
├── package.json            # Project metadata and dependencies
└── README.md               # This file
📞 Contact
For any questions, feel free to reach out:

Email: shubhampawale7@gmail.com
LinkedIn: https://www.linkedin.com/in/shubhampawale/
<!-- end list -->
```
