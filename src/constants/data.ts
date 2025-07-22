import type {
  Project,
  Experience,
  TechCategory,
  ContactInfo,
  SocialLink,
  FloatingIcon,
  Value,
} from "@/types";
import {
  FiCode,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { LuPalette } from "react-icons/lu";

export const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
  "Figma",
];

export const VALUES: Value[] = [
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: LuPalette,
    title: "Design Focus",
    description: "Creating beautiful, intuitive user experiences",
  },
  {
    icon: FiZap,
    title: "Performance",
    description: "Optimizing for speed and user satisfaction",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
  },
];

export const FLOATING_ICONS: FloatingIcon[] = [
  { icon: FiCode, delay: 0, x: "10%", y: "20%" },
  { icon: LuPalette, delay: 0.5, x: "80%", y: "30%" },
  { icon: FiZap, delay: 1, x: "15%", y: "70%" },
  { icon: FiDatabase, delay: 1.5, x: "85%", y: "60%" },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Frontend",
    color: "from-blue-400 to-cyan-400",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      //   { name: "Framer Motion", icon: "🎭" },
      //   { name: "Redux", icon: "🔄" },
    ],
  },
  {
    title: "Backend",
    color: "from-green-400 to-emerald-400",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      //   { name: "Python", icon: "🐍" },
      //   { name: "Django", icon: "🎯" },
      //   { name: "GraphQL", icon: "📊" },
      { name: "MongoDB", icon: "🍃" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  //   {
  //     title: "Database & Cloud",
  //     color: "from-purple-400 to-pink-400",
  //     technologies: [
  //       { name: "PostgreSQL", icon: "🐘" },
  //       { name: "MongoDB", icon: "🍃" },
  //       { name: "AWS", icon: "☁️" },
  //       { name: "Docker", icon: "🐳" },
  //       { name: "Firebase", icon: "🔥" },
  //       { name: "Vercel", icon: "▲" },
  //     ],
  //   },
  {
    title: "Tools & Others",
    color: "from-orange-400 to-red-400",
    technologies: [
      { name: "Git", icon: "📝" },
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎨" },
      //   { name: "Jest", icon: "🧪" },
      { name: "Postman", icon: "📦" },
      //   { name: "Linux", icon: "🐧" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    category: "Web App",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React", "D3.js", "Weather API", "Tailwind"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Social Media API",
    description:
      "RESTful API for social media platform with user management, post creation, real-time messaging, and content moderation.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Express", "PostgreSQL", "JWT", "Redis"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website with smooth animations, dark theme, and optimized performance.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting features.",
    image: "/placeholder.svg?height=300&width=500",
    tech: ["React", "Chart.js", "Express", "MongoDB"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Web App",
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "work",
    description:
      "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions.",
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    type: "work",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.",
    achievements: [
      "Built 15+ client projects",
      "Reduced load times by 60%",
      "Implemented responsive designs",
    ],
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    location: "Online",
    period: "2021",
    type: "certification",
    description:
      "Achieved AWS Solutions Architect certification, demonstrating expertise in designing distributed systems on AWS.",
    achievements: [
      "Cloud architecture expertise",
      "Security best practices",
      "Cost optimization strategies",
    ],
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2019 - 2020",
    type: "work",
    description:
      "Specialized in creating interactive user interfaces and optimizing web performance. Worked closely with UX designers and backend developers.",
    achievements: [
      "Improved user engagement by 35%",
      "Optimized Core Web Vitals",
      "Implemented accessibility standards",
    ],
  },
  {
    id: 5,
    title: "Computer Science Degree",
    company: "University of Technology",
    location: "Boston, MA",
    period: "2015 - 2019",
    type: "education",
    description:
      "Bachelor's degree in Computer Science with focus on software engineering and web development. Graduated Magna Cum Laude.",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List 6 semesters",
      "Led university coding bootcamp",
    ],
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: FiMail,
    title: "Email",
    value: "alex.johnson@email.com",
    href: "mailto:alex.johnson@email.com",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: FiMapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: FiGithub,
    href: "#",
    border: "border-gray-300 hover:border-gray-200",
    color: "hover:text-gray-300",
    bg: "hover:bg-gray-800/50",
  },
  {
    icon: FiLinkedin,
    href: "#",
    border: "border-blue-400 hover:border-blue-300",
    color: "hover:text-blue-400",
    bg: "hover:bg-blue-500/20",
  },
  {
    icon: FiMail,
    href: "#",
    border: "border-teal-400 hover:border-teal-300",
    color: "hover:text-teal-400",
    bg: "hover:bg-teal-500/20",
  },
];

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  { icon: FiGithub, href: "#", color: "hover:text-gray-300" },
  { icon: FiLinkedin, href: "#", color: "hover:text-blue-400" },
  { icon: FiTwitter, href: "#", color: "hover:text-sky-400" },
];
