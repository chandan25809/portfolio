// Single source of truth for portfolio content + AI assistant (Quill).

export { JOURNAL_PAGES, worldZoneSubtitle } from "./site-nav";

export type Skill = {
  name: string;
  category: "language" | "framework" | "cloud" | "database" | "concept" | "tool";
  level: number;
};

export type Project = {
  id: string;
  name: string;
  blurb: string;
  highlights: string[];
  tech: string[];
};

export type Role = {
  id: string;
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  blurb: string;
  highlights: string[];
  tech: string[];
};

/** Public GitHub projects surfaced on the Projects page */
export type PortfolioRepo = {
  id: string;
  name: string;
  hook: string;
  summary: string;
  bullets: string[];
  /** Longer résumé-style blurb (project story, not just stack). */
  resumeStory: string;
  tech: string[];
  github: string;
  demoUrl?: string;
  accent?: string; // emoji for card corner
};

/** PDF in `public/` — kept in sync with your latest export (download + print links). */
export const RESUME_PDF_HREF = "/Chandan-Abhishek-Resume.pdf" as const;

export const PROFILE = {
  name: "Chandan Abhishek Muchukota",
  shortName: "Chandan",
  title: "Fullstack Software Engineer · Distributed Systems · LLMs / GenAI",
  tagline:
    "I ship fullstack product surfaces (React/Angular + APIs) and production backends, then layer LLMs, RAG, and agentic workflows where language + uncertainty matter.",
  email: "chandanmuchukota2001@gmail.com",
  phone: "+1 (703) 332-5179",
  github: "https://github.com/chandan25809",
  linkedin: "https://www.linkedin.com/in/chandan-abhishek-6862531a9/",
  location: "Gainesville, FL",
  education: {
    school: "University of Florida",
    degree: "Master of Science, Computer Science",
    gpa: "3.95",
    dates: "Aug 2024 – May 2026",
  },
  fastFacts: [
    "Founding engineer at 3 startups (CodeGreenBack, Phamoss, CISApp)",
    "Shipped APIs serving 1M+ users at sub-200ms latency",
    "Built pipelines processing 10M+ events/day",
    "500+ LeetCode · 3-star rating",
    "Wrote a Delphi Pascal interpreter in Java + ANTLR",
  ],
} as const;

/** One-screen résumé highlights (keep aligned with your PDF). */
export const RESUME_SNAPSHOT_BULLETS = [
  "UF digital twin: React, TypeScript, ArcGIS, Dash, Plotly, microservices over 250K+ buildings; FastAPI + PostGIS; Airflow → BigQuery (+30% analytics); multi-agent assistant (Gemini APIs + tool-calling).",
  "PruTech (Client: NYC Comptroller): secure C# / .NET Core / SQL Server APIs on $2B+ flows; Azure Monitor + App Insights; SQL +40%; Angular dashboards −25% report time; NUnit + Azure DevOps −25% defects; 2TB+ migration.",
  "Infinite Analytics: FastAPI on AWS, 1M+ users, sub-200ms latency, 99.99% uptime, Splunk; LLM code review in CI/CD (+30% productivity); Kafka + RabbitMQ + RAG under 5s.",
  "Cogoport: FastAPI + Rails on AWS, 1M+ monthly users, Grafana; LLM+RAG internal search + conversational booking bot; forecasting 78% accuracy; −20% inventory, −37% cancellations.",
  "Founding engineer ×3: Go compiler (CodeGreenBack), 1M-user APIs, 10M+ events/day pipelines — owned product + infra end-to-end.",
  "Compiler craft: Delphi-style Pascal interpreter (Java + ANTLR) with OOP semantics and measured runtime wins.",
] as const;

/** Single achievements section (no duplicate grids). */
export const ACHIEVEMENT_SHOWCASE = [
  {
    title: "Scale & reliability",
    body: "APIs for 1M+ users with tight latency tails; pipelines at 10M+ events/day class; 99.99% uptime posture on rec systems.",
  },
  {
    title: "GenAI in production",
    body: "RAG + streaming ingestion, LLM code review in CI, multi-agent LLM orchestration with tool access to geo + analytics backends.",
  },
  {
    title: "Founding engineer × 3",
    body: "CodeGreenBack, Phamoss, CISApp — fastest online compiler (Go), production APIs, and high-volume event pipelines from zero-to-one.",
  },
  {
    title: "Compiler & systems depth",
    body: "Delphi-style Pascal interpreter (Java + ANTLR) with OOP + virtual dispatch; P2P file sharing with BitTorrent-style piece exchange.",
  },
  {
    title: "DSA discipline",
    body: "500+ LeetCode problems · 3★ rating — graphs, DP, strings, and system-design-style reasoning.",
  },
] as const;

export const ROLES: Role[] = [
  {
    id: "uf",
    company: "University of Florida",
    title: "Software Engineer",
    location: "Gainesville, FL",
    start: "Jan 2025",
    end: "Present",
    blurb:
      "Geospatial digital-twin platform for resilience planning: React, TypeScript, ArcGIS, Dash, Plotly, microservices, FastAPI/PostGIS, Airflow on GCP to BigQuery, multi-agent conversational assistant.",
    highlights: [
      "Architected a geospatial digital-twin platform for resilience planning using React, TypeScript, ArcGIS JS SDK, Dash, and Plotly, leveraging a microservices architecture to enable interactive analysis across 250K+ geospatial building records.",
      "Designed robust geospatial APIs leveraging FastAPI, SQLAlchemy, and PostGIS and created comprehensive documentation and onboarding materials, reducing new developer ramp-up time by 40%.",
      "Constructed spatial analytics pipelines processing 250K+ building records and 1M+ metadata attributes, uncovering flood, heat, and infrastructure vulnerabilities that informed urban planning decisions and scenario-based resilience simulations.",
      "Orchestrated ETL pipelines using Apache Airflow on GCP, processing 10+ GB geospatial datasets and loading curated data into BigQuery improving analytical query performance by 30%.",
      "Designed and developed a multi-agent conversational assistant using Gemini APIs, where specialized agents handled distinct tasks including geospatial queries, resilience scenario simulations, and analytical workflow execution, coordinated through an LLM-based orchestration layer with tool-calling capabilities to interface with backend geospatial services.",
    ],
    tech: [
      "React",
      "TypeScript",
      "ArcGIS JS SDK",
      "Dash",
      "Plotly",
      "FastAPI",
      "SQLAlchemy",
      "PostGIS",
      "Apache Airflow",
      "GCP",
      "BigQuery",
      "Gemini API",
    ],
  },
  {
    id: "prutech",
    company: "PruTech (Client: NYC Comptroller's Office)",
    title: "Software Engineer Intern",
    location: "Remote, USA",
    start: "May 2025",
    end: "Dec 2025",
    blurb:
      "Secure C# / .NET Core REST APIs for $2B+ annual financial flows; Azure Monitor, SQL tuning, Angular dashboards, NUnit + Azure DevOps SDLC.",
    highlights: [
      "Engineered secure REST APIs using C#, .NET Core, and SQL Server supporting financial systems processing $2B+ annually, and implemented logging and monitoring using Azure Monitor and Application Insights to ensure reliability and compliance in production environments.",
      "Optimized high-volume SQL Server workloads through indexing and query tuning improving performance by 40%.",
      "Built interactive dashboards using Angular integrated with .NET APIs reducing report generation time by 25%.",
      "Automated testing and CI/CD pipelines across the software development lifecycle (SDLC) using NUnit and Azure DevOps, collaborating with cross-functional teams to reduce production defects by 25%.",
      "Migrated and secured 2TB+ financial datasets ensuring compliance with enterprise security standards.",
    ],
    tech: [
      "C#",
      ".NET Core",
      "SQL Server",
      "Angular",
      "Azure Monitor",
      "Azure DevOps",
      "NUnit",
    ],
  },
  {
    id: "infinite",
    company: "Infinite Analytics",
    title: "Software Engineer",
    location: "Mumbai, India",
    start: "Dec 2023",
    end: "Jul 2024",
    blurb:
      "FastAPI on AWS for 1M-user recommendation APIs; Splunk observability; LLM code review in CI/CD; Kafka, RabbitMQ, and RAG pipelines under 5s latency.",
    highlights: [
      "Built and maintained high-throughput backend services on AWS using FastAPI, powering production recommendation APIs for over 1M users with sub-200ms latency and 99.99% uptime, and integrated centralized logging and monitoring using Splunk to analyze system behavior and debug production issues.",
      "Integrated LLM-powered code review automation into CI/CD workflows, leveraging natural language processing to generate actionable suggestions and improve development productivity by 30%.",
      "Designed event-driven ingestion pipelines using Kafka and RabbitMQ, implementing Retrieval-Augmented Generation (RAG) to enrich real-time data streams and reduce processing latency to under 5 seconds.",
    ],
    tech: ["FastAPI", "AWS", "Kafka", "RabbitMQ", "RAG", "Splunk", "LLMs"],
  },
  {
    id: "cogoport",
    company: "Cogoport",
    title: "Software Engineer",
    location: "Mumbai, India",
    start: "Feb 2023",
    end: "Oct 2023",
    blurb:
      "FastAPI and Rails on AWS for 1M+ monthly users; Grafana; internal LLM+RAG search and conversational booking; demand forecasting at 78% accuracy.",
    highlights: [
      "Built backend microservices using FastAPI and Ruby on Rails on AWS, powering recommendation, forecasting, and analytics APIs serving 1M+ monthly users, and implemented monitoring and observability using Grafana dashboards to track service health, latency, and system performance.",
      "Developed an internal LLM-powered search engine for the logistics sales team to query large volumes of trade rules, regulations, and shipment documentation using Retrieval-Augmented Generation (RAG), significantly reducing manual lookup time.",
      "Extended the search engine into a conversational booking bot that enabled sales agents to initiate and complete shipment bookings through natural language, integrating with backend logistics APIs.",
      "Designed a custom demand forecasting system for container shipping logistics, incorporating seasonality and trend modeling to achieve 78% prediction accuracy.",
      "Reduced excess inventory by 20% and shipment cancellations by 37% improving logistics planning and capacity utilization.",
    ],
    tech: [
      "FastAPI",
      "Ruby on Rails",
      "AWS",
      "Grafana",
      "RAG",
      "Forecasting",
    ],
  },
  {
    id: "startups",
    company: "Founding Engineer · 3 startups",
    title: "Founding Engineer",
    location: "CodeGreenBack · Phamoss · CISApp",
    start: "—",
    end: "—",
    blurb:
      "Early-stage founding engineer across three startups — Go compiler, scalable APIs, and high-volume pipelines.",
    highlights: [
      "Fastest online compiler for CodeGreenBack (Go).",
      "Production APIs serving 1M+ users.",
      "Distributed pipelines processing 10M+ events/day.",
      "Owned product surfaces, infra, and team rituals end-to-end.",
    ],
    tech: ["Go", "Distributed Systems", "Web", "Mobile (Flutter)"],
  },
];

/** Work-sample narratives (often not public repos) — shown on Projects alongside public GitHub repos */
export const WORK_SHOWCASES: Project[] = [
  {
    id: "digital-twin",
    name: "Geospatial Digital-Twin Platform (UF)",
    blurb:
      "City-scale resilience planning UI + APIs over 250K+ buildings — multi-agent assistant with hosted LLMs and tool access to geo + analytics backends.",
    highlights: [
      "React + ArcGIS JS SDK frontend; FastAPI + PostGIS services.",
      "Multi-agent orchestration with specialized roles + tool-calling.",
      "Airflow on GCP feeding BigQuery for analytics workloads.",
    ],
    tech: ["React", "ArcGIS", "FastAPI", "PostGIS", "Hosted LLMs", "Airflow", "BigQuery"],
  },
];

export const PORTFOLIO_REPOS: PortfolioRepo[] = [
  {
    id: "pascal",
    name: "Pascal Interpreter",
    hook: "Delphi-style OOP interpreter from scratch",
    summary:
      "Java + ANTLR 4 grammar for Object Pascal–like programs; Visitor-based runtime with classes, methods, virtual dispatch.",
    bullets: [
      "Full lexer/parser via ANTLR; AST walk + interpreter listener.",
      "~25% faster path via compile-time evaluation + memory pools + JFR profiling.",
    ],
    resumeStory:
      "A from-scratch language runtime for Pascal-like programs: ANTLR grammar, AST visitors, classes and virtual dispatch, and a measured performance pass (constant folding, pools, JFR) that cut hot paths by ~25%. Built to prove deep compilers knowledge—not a toy lexer demo.",
    tech: ["Java", "ANTLR 4", "Compilers", "Visitor pattern"],
    github: "https://github.com/chandan25809/Pascal-interpreter",
    accent: "⌘",
  },
  {
    id: "p2p",
    name: "P2P File Sharing",
    hook: "BitTorrent-style protocol & concurrency",
    summary:
      "Piece-wise file exchange with preferred-neighbor scoring, optimistic unchoking, and bitfield sync — classic distributed-systems coursework brought to working code.",
    bullets: [
      "Dynamic multi-peer topology; configurable piece & interval tuning.",
      "Detailed event logging across handshake, choke, piece, and disconnect paths.",
    ],
    resumeStory:
      "Implements the classic peer-to-peer file exchange loop: handshakes, bitfields, choke/unchoke, preferred neighbors, optimistic unchoking, and piece assembly—so you can stress-test concurrency and protocol correctness like a mini BitTorrent lab.",
    tech: ["Python", "TCP", "Concurrency", "Protocol design"],
    github: "https://github.com/chandan25809/Peer-to-Peer-File-Sharing-System",
    accent: "⛓",
  },
  {
    id: "crypto-alerts",
    name: "Crypto-Alerts",
    hook: "WebSocket ingest → Redis → Sidekiq → email fan-out",
    summary:
      "Rails 7 JSON API — live crypto price streams via faye-websocket, JWT auth, Postgres persistence, cron + background jobs.",
    bullets: [
      "Sidekiq + Redis + ActionCable channels; JWT + bcrypt endpoints.",
      "Docker Compose + Postman collection + walkthrough demo video.",
    ],
    resumeStory:
      "End-to-end Rails 7 API that ingests live crypto prices over WebSockets, fans alerts through Redis + Sidekiq, and emails subscribers—JWT-secured JSON, Postgres persistence, cron jobs, and Docker Compose so others can run the full pipeline locally.",
    tech: [
      "Ruby on Rails 7",
      "Sidekiq",
      "Redis",
      "WebSockets",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/chandan25809/Crypto-Alerts",
    demoUrl:
      "https://drive.google.com/file/d/1owaLp_j-gxeBB7TQmooDcdWUObe5O0nW/view",
    accent: "⚡",
  },
  {
    id: "geneviz",
    name: "GeneViz",
    hook: "Full-stack genomic viz — Django + React + Docker",
    summary:
      "Django REST API + Vite/React frontend + Docker Compose stack with dedicated backend/frontend docs and a demo video.",
    bullets: [
      "Modular REST design; chart-rich UI documented in-repo.",
      "Single-command compose for local onboarding.",
    ],
    resumeStory:
      "Full-stack genomic visualization: Django REST backend, Vite/React charts, Dockerized services, and narrated demo video—focused on modular APIs and a reproducible local stack for collaborators.",
    tech: ["Django REST", "React", "Vite", "Docker", "PostgreSQL"],
    github: "https://github.com/chandan25809/GeneViz",
    demoUrl: "https://www.youtube.com/watch?v=l4XhV6hE5eA",
    accent: "🧬",
  },
  {
    id: "impacta",
    name: "Impacta",
    hook: "Go crowdfunding API + JWT/RBAC",
    summary:
      "Go backend with migrations, JWT middleware, role-based guards; React + Ant Design frontend — structured like production services.",
    bullets: ["Layered controllers/models/routes; env-driven config.", "Separate Vite SPA talking to typed API endpoints."],
    resumeStory:
      "Crowdfunding-style product split across a Go API (migrations, JWT middleware, RBAC) and a React + Ant Design SPA—shows how you structure auth, roles, and env-driven config when shipping a small production-shaped service.",
    tech: ["Go", "PostgreSQL", "JWT", "React", "Vite", "Ant Design"],
    github: "https://github.com/chandan25809/Impacta",
    accent: "🌍",
  },
  {
    id: "streamlite",
    name: "StreamLite",
    hook: "Go signaling + WebRTC screen share",
    summary:
      "Minimal signaling server exchanging SDP/ICE over WebSockets; React client biases H.264 for predictable codecs.",
    bullets: ["No third-party realtime SaaS — direct browser APIs.", "Local dev README for parallel Go + CRA client boot."],
    resumeStory:
      "Minimal screen-share lab: Go signaling over WebSockets exchanges SDP/ICE with a React client that prefers H.264—useful to show you understand realtime negotiation without leaning on a hosted RTC vendor.",
    tech: ["Go", "WebSockets", "WebRTC", "React", "H.264"],
    github: "https://github.com/chandan25809/StreamLite",
    accent: "📡",
  },
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "language", level: 5 },
  { name: "Go", category: "language", level: 4 },
  { name: "Java", category: "language", level: 4 },
  { name: "C#", category: "language", level: 4 },
  { name: "TypeScript", category: "language", level: 4 },
  { name: "Ruby", category: "language", level: 3 },
  { name: "SQL", category: "language", level: 5 },
  { name: "FastAPI", category: "framework", level: 5 },
  { name: ".NET Core", category: "framework", level: 4 },
  { name: "Ruby on Rails", category: "framework", level: 3 },
  { name: "React", category: "framework", level: 4 },
  { name: "Angular", category: "framework", level: 3 },
  { name: "Node.js", category: "framework", level: 4 },
  { name: "Django REST", category: "framework", level: 3 },
  { name: "Flutter", category: "framework", level: 3 },
  { name: "AWS", category: "cloud", level: 4 },
  { name: "Azure", category: "cloud", level: 4 },
  { name: "GCP / BigQuery", category: "cloud", level: 4 },
  { name: "Docker", category: "cloud", level: 4 },
  { name: "Apache Airflow", category: "cloud", level: 4 },
  { name: "PostgreSQL", category: "database", level: 5 },
  { name: "PostGIS", category: "database", level: 4 },
  { name: "SQL Server", category: "database", level: 4 },
  { name: "Cassandra", category: "database", level: 3 },
  { name: "Redis", category: "database", level: 3 },
  { name: "Kafka", category: "tool", level: 4 },
  { name: "RabbitMQ", category: "tool", level: 4 },
  { name: "Sidekiq", category: "tool", level: 3 },
  { name: "LLMs / RAG", category: "concept", level: 5 },
  { name: "Agentic workflows", category: "concept", level: 5 },
  { name: "Distributed Systems", category: "concept", level: 4 },
  { name: "Microservices", category: "concept", level: 4 },
  { name: "System Design", category: "concept", level: 4 },
  { name: "DSA", category: "concept", level: 5 },
];

export const AI_KNOWLEDGE = `
PROFILE: ${PROFILE.name} — ${PROFILE.title}.
${PROFILE.tagline}
Most hands-on GenAI (LLMs, RAG, agent orchestration with tool-calling) work has been shipped in employer environments; public GitHub focuses on backend & systems depth.

EDUCATION: ${PROFILE.education.degree} @ ${PROFILE.education.school} (GPA ${PROFILE.education.gpa}, ${PROFILE.education.dates}).

EXPERIENCE:
${ROLES.map(
  (r) =>
    `- ${r.company} · ${r.title} (${r.start} – ${r.end}, ${r.location}): ${r.blurb}\n  Highlights: ${r.highlights.join(" | ")}\n  Tech: ${r.tech.join(", ")}`,
).join("\n")}

WORK SHOWCASES (summaries — code often private):
${WORK_SHOWCASES.map((p) => `- ${p.name}: ${p.blurb}`).join("\n")}

PUBLIC GITHUB PROJECTS (highlighted portfolio picks):
${PORTFOLIO_REPOS.map(
  (p) =>
    `- ${p.name}: ${p.summary}. Tech: ${p.tech.join(", ")}. Repo: ${p.github}${p.demoUrl ? ` Demo: ${p.demoUrl}` : ""}`,
).join("\n")}

CORE SKILLS: ${SKILLS.map((s) => s.name).join(", ")}.

FAST FACTS: ${PROFILE.fastFacts.join(" · ")}.

CONTACT: ${PROFILE.email} · ${PROFILE.phone} · GitHub ${PROFILE.github} · LinkedIn ${PROFILE.linkedin}.
`.trim();
