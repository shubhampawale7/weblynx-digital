// client/src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "Ninad's Pottery",
    // --- RENAMED 'excerpt' to 'description' ---
    description:
      "A bespoke e-commerce platform for artisans, featuring a secure payment gateway and intuitive product management.",
    imageUrl: "/projects/project1.png",
    category: "E-Commerce",
    // --- ADDED technologies array ---
    technologies: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
  },
  {
    id: 2,
    title: "Prani Seva Ashram",
    description:
      "A digital hub for a compassionate non-profit, designed to boost community engagement and streamline adoptions.",
    imageUrl: "/projects/project2.png",
    category: "Non-Profit",
    technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
  },
  {
    id: 5,
    title: "FlowBit",
    description:
      "A full-featured SaaS subscription manager with secure JWT authentication and an analytics dashboard.",
    imageUrl: "/projects/flowbit_cover.png",
    category: "SaaS",
    technologies: ["React", "Redux", "Node.js", "JWT", "Chart.js"],
  },
  {
    id: 6,
    title: "BRB Art Fusion",
    description:
      "A full-stack e-commerce solution with a powerful admin panel for end-to-end control of products and orders.",
    imageUrl: "/projects/project6.png",
    category: "E-Commerce",
    technologies: ["MERN Stack", "Tailwind CSS", "Admin Panel"],
  },
  // Add more projects here as needed
];
