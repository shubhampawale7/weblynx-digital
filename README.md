# Weblynx - Digital Services Agency

## ✨ Overview

Weblynx is a modern and futuristic digital services agency website designed to showcase comprehensive web and mobile development, SEO, API integration, and support services. This project is built as a full-stack application, comprising a React frontend and a Node.js Express backend.

## 🚀 Live Demo

*(Once deployed, you can update this section with your live URLs)*
* **Frontend (Website):** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
* **Backend (API):** [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

## 🌟 Key Features

### Frontend
* **Modern & Responsive Design:** Sleek, futuristic UI adaptable to all screen sizes.
* **Interactive Animations:** Utilizes GSAP and Framer Motion for smooth scroll animations, hero section effects, and interactive elements.
* **Dark/Light Mode Toggle:** Seamless theme switching.
* **Dynamic Services Page:** Overview with clickable cards leading to detailed service pages.
* **Comprehensive Portfolio:** Showcasing agency projects and case studies.
* **Functional Contact Form:** For client inquiries.
* **Floating WhatsApp Button:** Instant communication with pre-loaded message and animated hover effect.
* **SEO Optimized:** Dynamic meta tags per page (React Helmet Async), semantic HTML, and PWA readiness.
* **Scroll-to-Top Button:** Enhanced user experience for long pages.

### Backend
* **RESTful API:** For handling contact form submissions.
* **MongoDB Integration:** Uses Mongoose for object data modeling to store inquiries.
* **Email Notifications:** Sends email alerts upon new contact form inquiries using Nodemailer.
* **Environment Variable Management:** Secure handling of sensitive credentials.
* **CORS Configuration:** Manages Cross-Origin Resource Sharing for secure communication.

## 📦 Technologies Used

### Frontend
* **React:** Frontend JavaScript library
* **Vite:** Next-generation frontend tooling
* **Tailwind CSS:** Utility-first CSS framework
* **GSAP (GreenSock Animation Platform):** High-performance animation library
* **Framer Motion:** Animation library for React
* **Lottie-React:** For rendering Lottie animations
* **React Router DOM:** For client-side routing
* **Axios:** For API requests to the backend
* **React Icons:** For scalable vector icons
* **React Helmet Async:** For managing document head tags (SEO)

### Backend
* **Node.js:** JavaScript runtime environment
* **Express.js:** Web application framework for Node.js
* **MongoDB Atlas:** Cloud-hosted NoSQL database
* **Mongoose:** MongoDB object modeling for Node.js
* **Dotenv:** For loading environment variables
* **CORS:** Node.js middleware for CORS
* **Nodemailer:** For sending emails
* **Nodemon:** For automatic server restarts during development (development only)

## 💻 Getting Started (Local Development)

To get Weblynx running locally, you need to set up both the frontend and the backend.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js) or Yarn
* A MongoDB Atlas cluster (free tier is sufficient)
* An email account (e.g., Gmail) with an App Password (if using 2-Factor Authentication) for sending notifications.

### 1. Backend Setup

1.  Navigate to the `server` directory:
    ```bash
    cd weblynx-digital/server
    ```
2.  Install backend dependencies:
    ```bash
    npm install
    # or yarn install
    ```
3.  Create a `.env` file in the `server/` directory with the following content:
    ```dotenv
    PORT=5000
    MONGODB_URI=mongodb+srv://<your_username>:<your_password>@cluster0.yyxzv7v.mongodb.net/weblynxdb
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password_or_app_password
    ```
    * **`MONGODB_URI`**: Your connection string from MongoDB Atlas.
    * **`EMAIL_USER` / `EMAIL_PASS`**: Credentials for sending email notifications.
4.  Start the backend development server:
    ```bash
    npm run dev
    # or yarn dev
    ```
    The API will typically be accessible at `http://localhost:5000`.

### 2. Frontend Setup

1.  Open a **new** terminal window and navigate to the `client` directory:
    ```bash
    cd weblynx-digital/client
    ```
2.  Install frontend dependencies:
    ```bash
    npm install
    # or yarn install
    ```
3.  Create a `.env` file in the `client/` directory:
    ```dotenv
    VITE_API_BASE_URL=http://localhost:5000
    ```
    * **`VITE_API_BASE_URL`**: This should match the `PORT` of your local backend.
4.  Start the frontend development server:
    ```bash
    npm run dev
    # or yarn dev
    ```
    The application will typically be accessible at `http://localhost:5173`.

## ☁️ Deployment

Weblynx is designed for separate deployments of its frontend and backend for optimal performance and scalability.

### Frontend Deployment (Vercel)

* **Platform:** Vercel (recommended)
* **Repository:** Connect your `weblynx-digital` GitHub repository.
* **Root Directory:** Set this to `client/` in Vercel's project settings.
* **Build Command:** `npm run build`
* **Output Directory:** `dist`
* **Environment Variables:** Add `VITE_API_BASE_URL` with the URL of your **deployed backend API** (e.g., `https://your-backend.onrender.com`).

### Backend Deployment (Render)

* **Platform:** Render (recommended)
* **Repository:** Connect your `weblynx-digital` GitHub repository.
* **Root Directory:** Set this to `server/` in Render's web service settings.
* **Build Command:** `npm install`
* **Start Command:** `node server.js`
* **Environment Variables:** Add `PORT`, `MONGODB_URI`, `EMAIL_USER`, `EMAIL_PASS` in Render's dashboard.
* **MongoDB Atlas Network Access:** Add Render's static outbound IP addresses (or "Allow Access from Anywhere" for testing) to your MongoDB Atlas whitelist.
* **CORS Policy:** **Crucial:** After deploying your frontend, update the `origin` in `server/src/server.js` to specifically allow your deployed frontend's URL (e.g., `https://your-frontend.vercel.app`) instead of `*`.

## 📁 Project Structure

weblynx-digital/
├── client/                # Frontend React application
│   ├── public/            # Static assets (favicons, manifest.json, logo)
│   ├── src/               # React source code
│   └── ...
├── server/                # Backend Node.js Express API
│   ├── src/               # Backend source code (controllers, models, utils)
│   ├── .env               # Environment variables (ignored)
│   ├── package.json       # Backend dependencies & scripts
│   └── ...
├── .gitignore             # Root level Git ignore (can also have individual .gitignore in client/ and server/)
└── README.md              # This documentation file


## 📜 License

This project is licensed under the ISC License.

## 📞 Contact

For any questions, collaborations, or digital service inquiries, feel free to reach out:

* **Email:** shubhampawale7@gmail.com
* **LinkedIn:** [https://www.linkedin.com/in/shubhampawale/](https://www.linkedin.com/in/shubhampawale/)
* **GitHub:** [https://github.com/shubhampawale7](https://github.com/shubhampawale7)
* **Personal Portfolio:** [https://www.shubhampawale.info](https://www.shubhampawale.info)
