export const profile = {
  name: "Abhi Dahiya",
  tagline: "Building with code. Exploring with science. Experimenting with AI.",
  location: "Gurugram, Haryana, India",
  intro:
    "Hi, I'm Abhi Dahiya, a Computer Science student at UPES with a strong interest in Artificial Intelligence, software development, engineering, and science. I enjoy turning ideas into working projects, exploring how things work, and learning by building.",
  status: "B.Tech CSE @ UPES • AI & Coding Enthusiast • Builder • Research Explorer",
  resume: "/resume.pdf",
  contact: {
    phone: "9999739373",
    email: "abhidahiya7116@gmail.com",
    linkedin: "https://www.linkedin.com/in/abhi-dahiya-a33035320/",
    github: "https://github.com/Jin7117",
    instagram: "#",
  },
  summary: [
    "I'm a Computer Science student who likes to sit somewhere between software, artificial intelligence, engineering, and science.",
    "My interest in technology started with curiosity about how things work. Over time, that curiosity turned into programming, experimentation, research, and building projects of my own.",
    "Today, I'm focused on developing stronger foundations in Computer Science while exploring AI, software development, and new ways of combining technology with real-world ideas.",
    "I don't want to only learn how existing technology works. I want to eventually build things that didn't exist before.",
  ],
  facts: [
    ["Currently", "B.Tech Computer Science Engineering"],
    ["University", "UPES"],
    ["Based in", "India"],
    ["Interested in", "AI • Software • Science • Engineering • Research"],
    ["Current focus", "Building projects and expanding my technical foundations"],
  ],
};

// Rendered as ascending floors of a building — most recent role sits at the top.
export const experience = [
  {
    floor: "04",
    org: "AblyWorks",
    role: "Internship Trainee",
    period: "April 2025 – June 2025",
    place: "Noida, Uttar Pradesh, India",
    description:
      "Worked as an internship trainee with exposure to JavaScript and programming fundamentals. Contributed to content development alongside members of the organization while gaining practical insight into a professional technology environment.",
    focus: ["JavaScript", "Programming", "Content Development", "Teamwork"],
  },
  {
    floor: "03",
    org: "GD Goenka Public School, Sector 48",
    role: "Student Intern",
    period: "October 2024 – November 2024",
    place: "Gurugram, Haryana, India",
    description:
      "Completed an engineering-focused internship under the I Discover Me program with mentorship from Ms. Meenu Chugh. Worked on University Research and Presentation, exploring higher education opportunities, requirements, future opportunities, and the alignment between pathways and individual interests.",
    focus: ["Research", "Critical Thinking", "Presentation", "Communication"],
  },
  {
    floor: "02",
    org: "Indian Institute of Technology, Delhi",
    role: "Student Intern",
    period: "January 2024 – February 2024",
    place: "Delhi, India",
    description:
      "Participated in an engineering-focused innovation initiative, identifying a practical problem, researching possible approaches, developing an original concept, and presenting it to a panel of experts. The idea was selected for further counselling and mentorship.",
    focus: ["Engineering", "Innovation", "Research", "Presentation"],
  },
  {
    floor: "01",
    org: "GD Goenka Public School, Sector 48",
    role: "Student Intern",
    period: "May 2023",
    place: "Gurugram, Haryana, India",
    description:
      "On-site internship under the I Discover Me program, researching higher-education opportunities and presenting findings to a panel of judges and the school audience.",
    focus: ["Research", "Problem Solving", "Presentation"],
  },
];

export const journey = [
  ["2023", "Engineering & Research", "Began exploring engineering through the I Discover Me program, working on research and presentation-based projects."],
  ["2024", "Innovation at IIT Delhi", "Participated in an engineering-focused innovation initiative and presented an original engineering idea selected for further counselling and mentorship."],
  ["2024", "Engineering Research", "Continued exploring engineering and higher education through research, analysis, and technical presentations."],
  ["2025", "Software & Coding", "Joined AblyWorks as an Internship Trainee, gaining practical exposure to JavaScript, coding fundamentals, and content development."],
  ["2025 → Present", "Computer Science", "Started my B.Tech in Computer Science at UPES and expanded my focus toward programming, AI, software development, and technical projects."],
];

// Rendered as the foundation the building rests on.
export const education = [
  {
    school: "UPES",
    detail: "B.Tech, Computer Science",
    period: "June 2025 – July 2029",
  },
  {
    school: "GD Goenka World School, Sohna",
    detail: "",
    period: "April 2014 – April 2016",
  },
  {
    school: "GD Goenka Public School, Sector 48",
    detail: "",
    period: "2024",
  },
];

export const projects = [
  {
    number: "01",
    name: "JARVIS",
    type: "Personal AI Assistant",
    description: "A personal desktop AI assistant designed to interact through natural language and voice, execute computer tasks, work with applications, and provide an intelligent interface between the user and their computer.",
    tags: ["Voice interaction", "Natural language processing", "Automation", "Computer vision", "Local AI", "Memory systems"],
    technologies: ["Python", "Ollama", "LLMs", "OpenCV", "Tesseract", "Edge TTS"],
    status: "Building",
  },
  {
    number: "02",
    name: "Syntherion AI",
    type: "AI-powered interactive world",
    description: "An experimental concept combining artificial intelligence, interactive storytelling, gaming, and personalized digital companions. It explores persistent memory, personality, world generation, decision-making, and adaptive storytelling.",
    tags: ["AI Companion", "Dynamic Worlds", "Interactive Storytelling", "Persistent Memory", "Procedural Experiences"],
    technologies: [],
    status: "Concept / Development",
  },
  {
    number: "03",
    name: "ArcaneID",
    type: "Personal digital identity",
    description: "A personal portfolio experience designed around a fantasy-inspired digital identity rather than a conventional resume.",
    tags: ["Interactive sections", "Responsive design", "Light/dark mode", "Animated interface", "Creative storytelling"],
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide"],
    status: "Live",
  },
  {
    number: "04",
    name: "Arduino & Electronics Experiments",
    type: "Embedded systems lab",
    description: "A collection of experiments exploring electronics, sensors, motors, displays, and embedded systems.",
    tags: ["Arduino", "Servo Motors", "Ultrasonic Sensor", "DHT11", "IR Receiver", "LCD", "LED Matrix"],
    technologies: [],
    status: "Experiments",
  },
];

export const skillGroups = [
  ["Programming", ["C", "Python", "JavaScript"]],
  ["Web Development", ["HTML", "CSS", "React", "Vite", "Tailwind CSS"]],
  ["Backend & Data", ["Node.js", "MongoDB"]],
  ["AI & Computer Vision", ["LLMs", "Ollama", "OpenCV", "Tesseract", "NLP", "AI Agents"]],
  ["Development Tools", ["Git", "GitHub", "VS Code"]],
  ["Electronics", ["Arduino", "Sensors", "Motors", "Embedded Systems"]],
  ["Research", ["Technical Research", "Problem Solving", "Presentation", "Critical Thinking"]],
];

export const learning = [
  ["Artificial Intelligence", "Exploring LLMs, AI agents, local AI, and intelligent assistants."],
  ["Computer Science", "Strengthening programming, data structures, algorithms, and core CS concepts."],
  ["Software Development", "Building applications with modern JavaScript and React-based technologies."],
  ["Systems & Engineering", "Exploring how software interacts with hardware and real-world systems."],
  ["Research", "Learning how to investigate unfamiliar problems and turn ideas into structured solutions."],
];

export const interests = [
  ["Astronomy & Space", "Understanding the universe and observing the night sky."],
  ["Physics & Science", "Exploring the principles behind the world around us."],
  ["Engineering", "Understanding how physical systems are designed and built."],
  ["Technology", "Following developments in AI, computing, robotics, and emerging technologies."],
  ["Learning", "Exploring subjects outside my formal curriculum simply because they're interesting."],
];

export const achievements = [
  ["IIT Delhi Selection", "Selected for further counselling and mentorship after presenting an original engineering-based idea."],
  ["Engineering Research", "Completed engineering-focused internship experiences involving research, problem-solving, and presentation."],
  ["Technical Presentation", "Presented research and engineering concepts to panels of judges and audiences."],
  ["Industry Exposure", "Completed a coding-focused internship at AblyWorks."],
];
