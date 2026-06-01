import type { ElementType } from 'react'
import { FaPython } from "react-icons/fa";
import {
  Bot,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileText,
  Globe,
  Mail,
  MessageSquare,
  Network,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react'
import {
  SiDocker,
  SiGithubactions,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiThreedotjs,
} from 'react-icons/si'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export type IconType = ElementType

export interface NavItem {
  label: string
  href: string
}

export interface HeroStat {
  value: string
  label: string
  note: string
}

export interface AboutBadge {
  label: string
  icon: IconType
}

export interface SkillItem {
  name: string
  description: string
  level: string
  icon: IconType
}

export interface SkillCategory {
  title: string
  lead: string
  icon: IconType
  skills: SkillItem[]
}

export interface ProjectSlide {
  title: string
  caption: string
  stat: string
  chips: string[]
  gradient: string
}

export interface ProjectMetric {
  label: string
  value: string
  note: string
}

export interface ProjectTimelineItem {
  label: string
  detail: string
}

export interface ProjectChecklistItem {
  label: string
  enabled: boolean
}

export interface ProjectData {
  id: number
  title: string
  eyebrow: string
  summary: string
  description: string
  theme: string
  tech: string[]
  links: {
    live: string
    github: string
   
  }
 }

export interface ExperienceItem {
  title: string
  period: string
  company: string
  summary: string
  achievements: string[]
}

export interface ServiceItem {
  title: string
  description: string
  icon: IconType
  outcomes: string[]
}

export interface ContactLink {
  label: string
  value: string
  href: string
  icon: IconType
}

export interface SocialLink {
  label: string
  href: string
  icon: IconType
}

export const navItems: NavItem[] = [
  { label: 'Story', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const heroWords = ['BUILDING', 'SCALABLE', 'AI SYSTEMS']

export const heroStats: HeroStat[] = [
  { value: '15', label: 'Projects Built', note: 'Backend, Frontend, AI, Realtime, Dashboards' },
  { value: '5', label: 'AI Integrations', note: 'RAG , Orchestration , Multi-modal Agents' },
  { value: '300', label: 'DSA Problems Solved', note: 'Algorithmic thinking and problem-solving' },
]

export const marqueeItems = [
  'JAVA',
  'PYTHON',
  'FASTAPI',
  'SPRING BOOT',
  'MICROSERVICES',
  'REACT',
  'TAILWIND CSS',
  'FRAMER MOTION',
  'RAG PIPELINES',
  'LLM APIS',
  'PROMPT ENGINEERING',
  'LANGCHAIN',
  'LANGGRAPH',
  'VECTOR DATABASES',
  'WEBSOCKETS',
  'AWS',
  'DOCKER',
  'CI/CD',
  'POSTGRESQL',
]

export const aboutBadges: AboutBadge[] = [
  { label: 'System Design', icon: Network },
  { label: 'AI Orchestration', icon: Brain },
  { label: 'Cloud Native', icon: Cloud },
  { label: 'Realtime Delivery', icon: Zap },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    lead: 'Resilient APIs, service boundaries, auth, and event-driven engineering.',
    icon: Code2,
    skills: [
      { name: 'Java', description: 'Production-grade services and performance-oriented backend logic.', level: 'Advanced', icon: SiOpenjdk },
      { name: 'Python', description: 'AI tooling, data processing, and scripting for automation.', level: 'Intermediate', icon: FaPython },
      { name: 'FastAPI', description: 'Lightweight Python APIs for AI services, data endpoints, and internal tools.', level: 'Intermediate', icon: SiLangchain },
      { name: 'Spring Boot', description: 'Modular REST platforms with observability, validation, and clean architecture.', level: 'Advanced', icon: SiSpringboot },
      { name: 'Spring Security', description: 'JWT flows, role-based access, and secure request pipelines.', level: 'Intermediate', icon: Shield },
      { name: 'Microservices', description: 'Service decomposition, event choreography, and boundary-focused design.', level: 'Intermediate', icon: Network },
      { name: 'REST APIs', description: 'Versioned endpoints, idempotent workflows, and contract-first delivery.', level: 'Intermediate', icon: Globe },
      { name: 'WebSockets', description: 'Persistent channels for presence, notifications, and live collaboration.', level: 'Intermediate', icon: MessageSquare },
    ],
  },
  {
    title: 'Frontend',
    lead: 'Responsive interfaces with motion, clarity, and production-ready state flow.',
    icon: SiReact,
    skills: [
      { name: 'JavaScript', description: 'Dynamic interfaces, asynchronous flows, and integration with backend APIs.', level: 'Intermediate', icon: SiReact },
      { name: 'React.js', description: 'Composable interfaces, reusable systems, and interactive application shells.', level: 'Intermediate', icon: SiReact },
      { name: 'Tailwind CSS', description: 'Design tokens, cinematic spacing, and fast component styling.', level: 'Intermediate', icon: SiTailwindcss },
      { name: 'Redux', description: 'Predictable state orchestration for dashboards and collaborative tools.', level: 'Intermediate', icon: SiRedux },
      { name: 'Framer Motion', description: 'Narrative motion systems, scroll choreography, and premium UI feedback.', level: 'Intermediate', icon: Sparkles },
     
    ],
  },
  {
    title: 'AI',
    lead: 'Practical AI layers that turn raw data into usable product experiences.',
    icon: Brain,
    skills: [
      { name: 'RAG Pipelines', description: 'Retrieval flows that keep answers grounded, explainable, and fast.', level: 'Intermediate', icon: Brain },
      { name: 'LangChain', description: 'Tool orchestration, chains, routing, and multi-step LLM workflows.', level: 'Intermediate', icon: SiLangchain },
      { name: 'LangGraph', description: 'Graph-based orchestration for complex AI workflows and data dependencies.', level: 'Intermediate', icon: SiThreedotjs },
      { name: 'CrewAI', description: 'Agentic AI flows with structured tools, memory, and guardrails for safe operation.', level: 'Exploring', icon: Bot },
      { name: 'LLM APIs', description: 'Embeddings, structured outputs, function calling, and response streaming.', level: 'Intermediate', icon: SiOpenai },
      { name: 'Vector Databases', description: 'Semantic indexing, chunking strategy, and hybrid search retrieval.', level: 'Intermediate', icon: Database },
      { name: 'Prompt Engineering', description: 'Reliable prompt systems with guardrails, memory, and eval awareness.', level: 'Intermediate', icon: Bot },
    ],
  },
  {
    title: 'DevOps / Cloud',
    lead: 'Delivery pipelines that keep systems observable, portable, and easy to scale.',
    icon: Cloud,
    skills: [
      { name: 'AWS', description: 'Deployments across containers, queues, storage, and compute services.', level: 'Beginner', icon: Cloud },
      { name: 'Docker', description: 'Environment parity, service packaging, and local-to-cloud portability.', level: 'Beginner', icon: SiDocker },
      { name: 'Jenkins', description: 'Automated builds, checks, and release pipelines for safe iteration.', level: 'Beginner', icon: SiGithubactions },
      { name: 'CI/CD', description: 'Release discipline with progressive delivery, smoke checks, and rollback paths.', level: 'Intermediate', icon: Cpu },
      { name: 'Linux', description: 'Runtime diagnostics, deployment confidence, and server-side operations.', level: 'Intermediate', icon: Cpu },
    ],
  },
  {
    title: 'Databases',
    lead: 'Right data store, right indexing model, and right tradeoffs for scale.',
    icon: Database,
    skills: [
      { name: 'MongoDB', description: 'Document modeling for dynamic domains and event-heavy products.', level: 'Intermediate', icon: SiMongodb },
      { name: 'MySQL', description: 'Relational consistency, stored data workflows, and transactional reporting.', level: 'Intermediate', icon: SiMysql },
      { name: 'PostgreSQL', description: 'Query tuning, relational modeling, and analytics-ready schema design.', level: 'Intermediate', icon: SiPostgresql },
      { name: 'Pinecone', description: 'Managed vector database for semantic search, RAG pipelines, and embedding storage.', level: 'Intermediate', icon: Database },
      { name: 'Faissse', description: 'Self-hosted vector search for flexible retrieval and embedding management.', level: 'Intermediate', icon: Database },
      { name: 'Redis', description: 'In-memory data store for caching, queues, and transient state management.', level: 'Beginner', icon: Database }, 

    ],
  },
]

export const projects: ProjectData[] = [
  {
  id: 1,
  title: 'AI RAG Platform',
  eyebrow: 'Knowledge Intelligence',
  summary: 'A production-oriented RAG pipeline for semantic retrieval, grounded responses, and intelligent document understanding.',
  description:
    'Designed as a scalable retrieval system that transforms unstructured documents into context-aware AI conversations using hybrid retrieval, reranking, vector search, and streaming LLM responses. Built to reduce hallucinations and improve answer reliability across large knowledge bases.',
  theme: 'from-[#5E0ED7] via-[#16102b] to-[#05070f]',
  tech: [
    'Python',
    'LangChain',
    'OpenAI',
    'Hybrid Retrieval',
    'Vector Search',
    'Reranking',
    'Document Analysis',
  ],
  links: {
    live: 'https://github.com/adityagaur200/AI_RAG',
    github: 'https://github.com/adityagaur200/AI_RAG',
  },
},
  {
  id: 2,
  title: 'MockMate AI',
  eyebrow: 'AI Interview Intelligence',
  summary: 'An AI-driven interview preparation platform focused on realistic simulations, feedback loops, and adaptive learning.',
  description:
    'Built to replicate high-pressure technical interviews with conversational AI, intelligent question flows, and performance-driven feedback designed to improve communication, confidence, and problem-solving under real interview conditions.',
  theme: 'from-[#0c1020] via-[#4F46E5] to-[#090912]',
  tech: ['Python', 'FastAPI', 'React.Js', 'LangChain', 'MongoDB', 'JWT Auth', 'Gemini', 'Redis', 'Realtime Feedback', 'AI Workflows'],
  links: {
    live: 'https://your-portfolio.dev/demos/mockmate-ai',
    github: 'https://github.com/adityagaur200/MockmateAI',
  },
},
{
  id: 3,
  title: 'SynQ',
  eyebrow: 'Realtime Collaboration',
  summary: 'A modern realtime collaboration platform combining messaging, team coordination, and seamless communication.',
  description:
    'Engineered around low-latency communication and scalable collaboration infrastructure using WebSockets and distributed backend services, delivering smooth realtime interactions for teams operating across shared workspaces.',
  theme: 'from-[#121212] via-[#1d0c3d] to-[#090912]',
  tech: ['Java', 'Spring Boot', 'React.Js', 'WebSockets', 'Realtime Messaging', 'JWT Auth'],
  links: {
    live: 'https://syncq.onrender.com',
    github: 'https://github.com/adityagaur200/SynQ',
  },
},
{
  id: 4,
  title: 'LinkXpert',
  eyebrow: 'Professional Networking and Learning Platform',
  summary: 'A smart LinkedIn optimization and networking assistant designed to improve professional visibility and outreach.',
  description:
    'Created as a productivity-focused platform that helps users strengthen digital presence, optimize profiles, and streamline networking workflows using intelligent recommendations and data-driven profile enhancement strategies.',
  theme: 'from-[#0b1020] via-[#5E0ED7] to-[#1b0e2e]',
  tech: ['Java', 'Spring Boot', 'Python', 'FastAPI','React.Js', 'RAG Pipeline', 'MongoDB', 'AI Recommendations', 'Profile Analytics', 'Productivity'],
  links: {
    live: 'https://your-portfolio.dev/demos/linkxpert',
    github: 'https://github.com/adityagaur200/LinkXpert',
  },
},
]

export const experienceItems: ExperienceItem[] = [
  {
    title: 'Freelance Systems Engineer',
    period: '2025 - Present',
    company: 'Independent Studio',
    summary:
      'Designing backend-heavy products, realtime platforms, and AI workflows for founders who need fast iteration with solid technical foundations.',
    achievements: [
      'Scoped product architectures around delivery risk, scale, and maintainability.',
      'Delivered full-stack builds that combine premium UI with production backend systems.',
      'Established deploy-ready patterns for auth, observability, and service boundaries.',
    ],
  },
  {
    title: 'AI Exploration Sprint',
    period: '2024 - 2025',
    company: 'Applied Research Projects',
    summary:
      'Focused on RAG systems, prompt design, retrieval quality, and turning LLM capabilities into practical product workflows.',
    achievements: [
      'Built knowledge retrieval prototypes with citation-aware answer generation.',
      'Tested orchestration patterns for tool use, context selection, and streaming.',
      'Improved AI response trust through retrieval tuning and operator controls.',
    ],
  },
  {
    title: 'Full-Stack Engineering Track',
    period: '2023 - 2024',
    company: 'Client Delivery',
    summary:
      'Built modern product surfaces that connect expressive frontends with reliable APIs, dashboards, and realtime event systems.',
    achievements: [
      'Shipped interactive dashboard interfaces with clear data storytelling.',
      'Delivered auth-secured applications across React and Spring-based backends.',
      'Handled end-to-end delivery from UI polish to database and deployment decisions.',
    ],
  },
  {
    title: 'Backend Architecture Projects',
    period: '2022 - 2023',
    company: 'Independent Labs',
    summary:
      'Deepened focus on system design, microservices thinking, and scalable service communication under real-world constraints.',
    achievements: [
      'Modeled domain boundaries for service-based commerce and workflow systems.',
      'Practiced API design, data modeling, and performance diagnostics across stacks.',
      'Built the foundation for a backend-first engineering identity anchored in clarity and scale.',
    ],
  },
]

export const serviceItems: ServiceItem[] = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end product builds with cinematic frontends and dependable backend systems.',
    icon: Code2,
    outcomes: ['Responsive product surfaces', 'Auth-secured flows', 'Reliable integrations'],
  },
  {
    title: 'Backend Architecture',
    description: 'Service design for products that need clean boundaries, performance, and long-term flexibility.',
    icon: Network,
    outcomes: ['Domain modeling', 'API contracts', 'Scalable architecture decisions'],
  },
  {
    title: 'AI / RAG Systems',
    description: 'Grounded AI experiences that use retrieval, orchestration, and traceable answer generation.',
    icon: Brain,
    outcomes: ['Context-aware assistants', 'Knowledge search', 'Operational AI tooling'],
  },
  {
    title: 'Real-Time Applications',
    description: 'Realtime interfaces and communication systems that stay reliable when activity spikes.',
    icon: MessageSquare,
    outcomes: ['Socket workflows', 'Presence systems', 'Collaboration features'],
  },
  {
    title: 'API Development',
    description: 'Cleanly structured APIs with authentication, versioning, and integration-first thinking.',
    icon: Shield,
    outcomes: ['RESTful design', 'JWT auth', 'Integration-ready endpoints'],
  },
  {
    title: 'Cloud Deployment',
    description: 'Portable deployment paths for apps that need confidence from local development to production.',
    icon: Cloud,
    outcomes: ['Containerized delivery', 'CI/CD automation', 'Scalable hosting strategy'],
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'gauraditya200@gmail.com',
    href: 'mailto:gauraditya200@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/adityagaur2004',
    href: 'https://linkedin.com/in/adityagaur2004',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: 'github.com/adityagaur200',
    href: 'https://github.com/adityagaur200',
    icon: FaGithub,
  },
  {
    label: 'Resume',
    value: 'Open Resume',
    href: 'https://drive.google.com/file/d/1gxMgbl2jNooq-xxBWeZo-LosGgKOssZ8/view?usp=sharing',
    icon: FileText,
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/adityagaur200', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/adityagaur2004', icon: FaLinkedinIn },
  { label: 'Twitter', href: 'https://x.com/aditya200', icon: FaXTwitter },
  { label: 'Email', href: 'mailto:gauraditya200@gmail.com', icon: Mail },
]

// export const footerPillars = ['Backend engineering', 'AI workflows', 'Realtime systems', 'Premium frontend craft']

export const contactHighlights = [
  'Open to Backend and AI-focused roles',
  'Available for freelance product builds',
  'Comfortable owning architecture and implementation',
]

export const heroLinks = {
  projects: '#projects',
  resume: '/resume.html',
  contact: '+91 7579942575',
  github: 'https://github.com/adityagaur200',
  linkedin: 'https://linkedin.com/in/adityagaur2004',
}

export const aboutNarrative = {
  intro:
    'I build backend-first products with a product eye: systems that are scalable under pressure, thoughtful in their interfaces, and clear in their architecture.',
  focus:
    'My center of gravity is AI-enabled engineering, realtime platforms, and Java-based backend architecture. I enjoy translating complex product needs into stable service boundaries, dependable APIs, and elegant user experiences.',
  mindset:
    'I am especially drawn to microservices, cloud deployment, and the invisible quality work that makes modern systems feel effortless for the people using them.',
}
