export const siteConfig = {
  name: 'Samir Sah',
  title: 'Software Engineer',
  location: 'Bengaluru, Karnataka, India',
  email: 'sahsamir2004@gmail.com',
  phone: '+91-8879505578',
  githubUsername: 'samir-sah',
  resumeUrl: '/resume.pdf',
  links: {
    github: 'https://github.com/samir-sah',
    linkedin: 'https://www.linkedin.com/in/samir-sah-68a8b3329/',
    leetcode: 'https://leetcode.com/u/Samir_Sah/',
    email: 'mailto:sahsamir2004@gmail.com',
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export const interests = [
  'Backend Engineering',
  'Distributed Systems',
  'Cloud Computing',
  'System Design',
  'Artificial Intelligence',
]

export const experience = [
  {
    company: 'Mavoix Technology Solutions Private Limited',
    role: 'Full Stack Web Developer Intern',
    period: 'March 2026 — Present',
    location: 'Bengaluru, Karnataka',
    description:
      'Contributed to the development of a production-oriented business administration dashboard using Next.js, Node.js, Express, and MongoDB.',
    points: [
      'Designed REST APIs',
      'Built MongoDB schemas',
      'Developed reusable UI components',
      'Improved testing and debugging workflows',
      'Helped build reliable full-stack features used internally',
    ],
  },
]

export const projects = [
  {
    id: 'business-admin-dashboard',
    title: 'Business Admin Dashboard',
    image: '/images/project-dashboard.png',
    stack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    description:
      'A production-oriented business administration dashboard for managing business operations through scalable REST APIs, reusable frontend components, and structured backend architecture.',
    highlights: [
      'CRUD APIs',
      'Authentication',
      'Responsive Dashboard',
      'Modular Architecture',
      'MongoDB Integration',
    ],
    github: 'https://github.com/samir-sah',
    demo: null,
  },
  {
    id: 'api-sentinel',
    title: 'API Sentinel',
    image: '/images/project-sentinel.png',
    stack: ['Next.js', 'Node.js', 'RabbitMQ', 'MongoDB', 'PostgreSQL'],
    description:
      'An API monitoring platform that continuously tracks uptime, latency, and endpoint health using asynchronous workers powered by RabbitMQ.',
    highlights: [
      'Uptime Monitoring',
      'Queue Processing',
      'Background Workers',
      'Performance Analytics',
      'API Dashboard',
    ],
    github: 'https://github.com/samir-sah',
    demo: null,
  },
]

export const techStack = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'SQL'] },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API Design', 'Authentication', 'Mongoose'],
  },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
  {
    category: 'Cloud & DevOps',
    items: ['AWS EC2', 'Git', 'GitHub', 'Vercel', 'Render', 'Linux', 'RabbitMQ', 'Postman', 'Ngrok'],
  },
  {
    category: 'Core Computer Science',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Operating Systems',
      'Computer Networks',
      'Database Management Systems',
      'Software Engineering',
    ],
  },
]

export const achievements = [
  {
    title: 'Solved 200+ Data Structures & Algorithms problems',
    detail: 'Consistent problem-solving practice across arrays, graphs, dynamic programming, and system-level challenges.',
  },
  {
    title: 'Reached Conference Stage in the Services Selection Board (SSB)',
    detail: 'Demonstrated leadership, composure, and decision-making through a rigorous multi-day assessment.',
  },
  {
    title: 'General Secretary — MUNSOC, JSSATE',
    detail: 'Led the Model United Nations Society, coordinating events, delegations, and campus initiatives.',
  },
  {
    title: 'Represented Mumbai Region in CBSE Zonal Badminton',
    detail: 'Competed at the zonal level, representing the Mumbai region in inter-school championships.',
  },
]
