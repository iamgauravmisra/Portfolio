export const personalInfo = {
  name: "Gaurav Mishra",
  shortName: "GM",
  role: "Full Stack Developer & Software Engineer",
  tagline: "Specializing in MERN Stack, real-time WebSocket systems, and scalable full-stack web applications.",
  status: "Available for full-time & freelance opportunities",
  location: "Satna, Madhya Pradesh, India",
  phone: "+91-6394482175",
  email: "iamgauravmisra@gmail.com",
  secondaryEmail: "gauravmishrawork@gmail.com",
  portfolioUrl: "https://iamgauravmisra.vercel.app",
  socials: {
    github: "https://github.com/iamgauravmisra",
    linkedin: "https://www.linkedin.com/in/gaurav-mishra-8aa936288/",
    twitter: "https://x.com/gaurav_misra_",
    email: "mailto:iamgauravmisra@gmail.com"
  },
  resumeUrl: "/GauravMishraResume.pdf",
  avatarUrl: "/gaurav-profile.jpg",
  avatarFallback: "/gaurav.JPG",
  summary: [
    "Computer Science student with expertise in MERN stack development and hands-on experience building scalable applications with focus on performance optimization, system design, and delivering exceptional user experiences.",
    "Strong foundation in Data Structures, Algorithms, DBMS, and software design principles with proven ability to implement complex application logic and RESTful APIs for production-ready applications."
  ],
  stats: [
    { label: "B.Tech CSE CGPA", value: "8.38 / 10.0" },
    { label: "DSA Problems Solved", value: "300+ Solved" },
    { label: "GitHub Contributions", value: "200+ Active" },
    { label: "Blog Readers", value: "1,000+ / mo" }
  ]
};

export const technicalSkills = {
  languages: [
    { name: "JavaScript", type: "Core" },
    { name: "Java", type: "OOP & DSA" },
    { name: "C++", type: "Algorithms" },
    { name: "Python", type: "Backend & Scripting" },
    { name: "SQL", type: "Relational Queries" },
    { name: "HTML5", type: "Semantic Markup" },
    { name: "CSS3", type: "Modern Styling" }
  ],
  frontend: [
    { name: "React.js", type: "Core UI" },
    { name: "Redux", type: "State Architecture" },
    { name: "Redux Toolkit", type: "Store Management" },
    { name: "Tailwind CSS", type: "Utility Styling" },
    { name: "Bootstrap", type: "Framework" },
    { name: "Material-UI", type: "Component System" },
    { name: "Responsive Design", type: "Cross-Device UX" }
  ],
  backend: [
    { name: "Node.js", type: "Runtime Environment" },
    { name: "Express.js", type: "Web Framework" },
    { name: "RESTful APIs", type: "API Architecture" },
    { name: "JWT Authentication", type: "Role-Based Security" },
    { name: "WebSocket / Socket.io", type: "Real-Time Bi-directional" }
  ],
  databasesAndTools: [
    { name: "MongoDB", type: "NoSQL Database" },
    { name: "MySQL", type: "Relational DBMS" },
    { name: "Git", type: "Version Control" },
    { name: "GitHub", type: "Collaboration & CI" },
    { name: "Postman", type: "API Testing" },
    { name: "npm", type: "Package Management" },
    { name: "Vercel", type: "Cloud Deployment" },
    { name: "Netlify", type: "Web Hosting" }
  ]
};

export const projectsData = [
  {
    id: "chessmaster",
    title: "ChessMaster",
    subtitle: "Real-Time Multiplayer Chess Application",
    stackSummary: "React.js, Node.js, MongoDB, Socket.io",
    category: "Full Stack",
    featured: true,
    image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=1200&h=800&fit=crop&q=80",
    liveUrl: "https://minorproject-chessmaster.vercel.app/",
    githubUrl: "https://github.com/iamgauravmisra",
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express.js", "Tailwind CSS"],
    highlights: [
      "Engineered full-stack chess application with real-time multiplayer functionality supporting 100+ concurrent games using WebSocket technology and optimized React state management.",
      "Implemented complex game logic engine with move validation and check/checkmate detection achieving 99.9% accuracy.",
      "Built responsive UI with drag-and-drop functionality and sub-100ms latency for seamless gameplay experience.",
      "Developed RESTful APIs with Express.js and MongoDB for user authentication and game history tracking."
    ],
    metrics: [
      { label: "Concurrent Games", value: "100+ Supported" },
      { label: "Logic Accuracy", value: "99.9%" },
      { label: "Latency", value: "<100ms" }
    ]
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Online Store with Admin Dashboard",
    stackSummary: "MERN Stack, Redux, JWT, Payment Integration",
    category: "Full Stack",
    featured: false,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop&q=80",
    liveUrl: "https://github.com/iamgauravmisra",
    githubUrl: "https://github.com/iamgauravmisra",
    technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe API"],
    highlights: [
      "Developed scalable e-commerce platform with dynamic product catalog, shopping cart, and secure payment processing.",
      "Created admin panel for inventory management with full CRUD operations and real-time stock tracking for 1000+ products.",
      "Implemented JWT authentication with role-based access control (RBAC) securing customer data and administrative privileges.",
      "Optimized MongoDB queries with indexing and pagination, successfully reducing API response time by 60%."
    ],
    metrics: [
      { label: "Catalog Products", value: "1,000+ Tracked" },
      { label: "API Query Speedup", value: "60% Faster" },
      { label: "Security", value: "JWT & RBAC" }
    ]
  },
  {
    id: "task-management",
    title: "Task Management System",
    subtitle: "Collaborative Kanban Board & Activity Feed",
    stackSummary: "React.js, Node.js, MongoDB, Redux Toolkit",
    category: "Full Stack",
    featured: false,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop&q=80",
    liveUrl: "https://github.com/iamgauravmisra",
    githubUrl: "https://github.com/iamgauravmisra",
    technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "WebSocket"],
    highlights: [
      "Built collaborative Kanban board with fluid drag-and-drop interface supporting synchronized team workflows for 50+ users.",
      "Implemented real-time notifications using WebSocket for instant task updates, assignments, and live activity feeds.",
      "Designed RESTful API with filtering, sorting, and multi-field search handling 10,000+ tasks with indexed MongoDB queries."
    ],
    metrics: [
      { label: "Concurrent Teams", value: "50+ Users" },
      { label: "Tasks Capacity", value: "10,000+ Indexed" },
      { label: "Updates", value: "Real-Time Sockets" }
    ]
  }
];

export const education = {
  institution: "Vindhya Institute of Technology & Science",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  cgpa: "8.38 / 10.0",
  location: "Satna, Madhya Pradesh",
  period: "Aug 2023 — May 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Object-Oriented Programming (Java/C++)",
    "Operating Systems & Computer Networks",
    "Software Engineering & System Design"
  ]
};

export const achievements = [
  {
    title: "300+ DSA Problems Solved",
    description: "Solved 300+ Data Structures and Algorithms problems across LeetCode, HackerRank, and CodeChef platforms, strengthening core algorithmic efficiency and problem-solving.",
    tag: "Algorithms & Problem Solving",
    highlight: "300+ Problems"
  },
  {
    title: "Active Open-Source Contributor",
    description: "Active contributor on GitHub with 200+ contributions and well-documented personal open-source repositories and utility projects.",
    tag: "Community & Collaboration",
    highlight: "200+ Contributions"
  },
  {
    title: "Industry Certifications",
    description: "Completed professional certifications in Advanced JavaScript, React.js, Node.js, and MongoDB from Udemy, Coursera, and FreeCodeCamp.",
    tag: "Continuous Learning",
    highlight: "MERN Stack Certified"
  },
  {
    title: "Technical Blog Writer",
    description: "Authored technical articles and guides sharing full-stack development tutorials, MERN architecture, and JavaScript best practices reaching 1,000+ monthly readers.",
    tag: "Technical Writing",
    highlight: "1,000+ Readers/mo"
  }
];

export const professionalExperience = [
  {
    role: "Freelance Full-Stack Developer",
    organization: "Self-Employed / Client Projects",
    period: "2023 — Present",
    type: "Contract & Client Engagements",
    description: "Delivering bespoke, high-performance web applications and responsive user interfaces with modern JavaScript, React, and Node.js.",
    contributions: [
      "Architecting end-to-end web applications with React, Tailwind CSS, Express, and MongoDB.",
      "Implementing JWT-secured APIs, database indexing, and responsive user interfaces with sub-second page loads.",
      "Collaborating directly with clients to translate functional specifications into reliable code."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"]
  }
];

export const navigationItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
