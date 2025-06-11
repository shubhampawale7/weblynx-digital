# Weblynx Frontend

This is the frontend application for Weblynx, a digital services agency website. It's built with React, Vite, and Tailwind CSS, featuring modern design, responsive layouts, and advanced animations.

## ✨ Features

- **Modern & Responsive Design:** Sleek, futuristic UI adaptable to all screen sizes.
- **Interactive Animations:** Utilizes GSAP and Framer Motion for smooth scroll animations, hero section effects, and interactive elements.
- **Dark/Light Mode Toggle:** Seamless theme switching.
- **Dynamic Services Page:** Overview with clickable cards leading to detailed service pages.
- **Comprehensive Portfolio:** Showcasing agency projects and case studies.
- **Functional Contact Form:** For client inquiries.
- **Floating WhatsApp Button:** Instant communication with pre-loaded message.
- **SEO Optimized:** Dynamic meta tags per page (React Helmet Async), semantic HTML, and PWA readiness.
- **Component-Based Architecture:** Built with reusable React components for maintainability.

## 🚀 Technologies Used

- **React:** Frontend JavaScript library
- **Vite:** Next-generation frontend tooling
- **Tailwind CSS:** Utility-first CSS framework
- **GSAP (GreenSock Animation Platform):** High-performance animation library
- **Framer Motion:** Animation library for React
- **Lottie-React:** For rendering Lottie animations
- **React Router DOM:** For client-side routing
- **Axios:** For API requests to the backend
- **React Icons:** For scalable vector icons
- **React Helmet Async:** For managing document head tags (SEO)

## 💻 Getting Started (Local Development)

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js) or Yarn

### Installation

1.  Navigate to the `client` directory in your terminal:
    ```bash
    cd weblynx-digital/client
    ```
2.  Install the dependencies:
    ```bash
    npm install
    # or yarn install
    ```

### Environment Variables

Create a `.env` file in the `client/` directory:

```dotenv
VITE_API_BASE_URL=http://localhost:5000
VITE_API_BASE_URL: The URL where your backend API is running. During local development, this will typically be http://localhost:5000. When deployed, update this to your deployed backend URL.
Running the Development Server
Start the Vite development server:

Bash

npm run dev
# or yarn dev
The application will typically be accessible at http://localhost:5173.

Building for Production
To create a production-ready build:

Bash

npm run build
# or yarn build
This will compile your optimized code into the /dist directory.

☁️ Deployment
This frontend is designed to be deployed on static hosting platforms like Vercel or Netlify.

Ensure your VITE_API_BASE_URL in your hosting platform's environment variables points to your deployed backend API URL.
Connect your GitHub repository (containing this client folder) to your chosen hosting provider.
The platform should automatically detect the Vite project and use npm run build as the build command.
📁 Project Structure
client/
├── public/                # Static assets (images, favicons, manifest.json)
├── src/
│   ├── assets/            # Lottie animations, other media
│   ├── components/        # Reusable UI components (common, layout, ui)
│   │   ├── common/        # ScrollToTopButton, Seo, FloatingWhatsAppButton
│   │   └── layout/        # Header, Footer
│   ├── context/           # React Context for global state (ThemeContext)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Top-level page components (Home, About, Services, Portfolio, Contact, NotFound)
│   │   └── Services/      # Individual service pages (CustomWebApplications, MobileAppDevelopment, etc.)
│   ├── styles/            # Global CSS (index.css with Tailwind directives)
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main application component, routing setup
│   └── main.jsx           # Entry point of the React application
├── .env                   # Environment variables (ignored by Git)
├── .gitignore             # Files ignored by Git
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
└── tailwind.config.js     # Tailwind CSS configuration
📞 Contact
For any questions or collaborations, feel free to reach out:

Website: https://www.weblynx.com (Once deployed)
Email: shubhampawale7@gmail.com
LinkedIn: https://www.linkedin.com/in/shubhampawale/
<!-- end list -->
```
