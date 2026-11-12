/**
 * ============================================================================
 *  PORTFOLIO CONTENT — edit this file, nothing else, to update your site.
 * ============================================================================
 *
 *  Every piece of text, link, project, skill, and achievement shown on the
 *  site comes from this one file. Change something here, save, and:
 *    - locally:  the dev server (npm run dev) hot-reloads automatically
 *    - Vercel:   commit + push, Vercel redeploys automatically
 *
 *  You do not need to touch any other file (components, pages, styles) to
 *  update your content. Just follow the shape of the objects/arrays below —
 *  copy an existing entry, change the values, keep the commas.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// PROFILE — your name, headline, contact links, and summary paragraph.
// ----------------------------------------------------------------------------
export const profile = {
  name: "Md. Meherab Hossain Talukder",
  initials: "MHT",
  headline: "Software Engineer",
  subheadline: "Building thoughtful products with AI",
  location: "Dhaka, Bangladesh",
  email: "23103032@iubat.edu",
  phone: "+880 1790-422965",
  links: {
    linkedin: "https://www.linkedin.com/in/md-meherab-hossain-talukder-5046a141b",
    github: "https://github.com/meherabmehu",
    kaggle: "https://www.kaggle.com/mdmeherabhossain",
  },
  // Short one-liner shown big in the Hero — keep this punchy, not a full bio.
  tagline: "I turn research papers and messy data into AI systems that actually ship.",
  summary:
    "Software engineer and Computer Science & Engineering undergraduate, building full-stack applications and end-to-end AI systems across computer vision, NLP/LLMs, and forecasting. Recognized at national AI competitions, with experience taking ideas from data and experiments into useful, working software.",
  // Second paragraph shown only in the About section, for extra detail/story
  // beyond the summary above (which also doubles as the page's meta description).
  bioDetail:
    "My work usually starts with a problem that matters — churn, traffic safety, air quality, medical triage — and carries the model past the notebook into an API, UI, or inference pipeline. I'm currently completing an undergraduate thesis on PM2.5 forecasting for Dhaka and competing in national AI hackathons and datathons.",
  resumeFile: "/Meherab_Main_CV.pdf",
};

// ----------------------------------------------------------------------------
// PROJECTS — shown as cards in the Projects section, newest/strongest first.
//   githubUrl: leave as "" (empty string) to hide the GitHub button for a
//              project that has no public repository.
// ----------------------------------------------------------------------------
export type Project = {
  title: string;
  context: string; // e.g. competition name + result, or "Undergraduate Thesis"
  description: string[]; // bullet points
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  category: string;
  featured?: boolean; // featured projects render larger in the grid
};

export const projects: Project[] = [
  {
    title: "SasthoSetu — Digital Healthcare Platform",
    context: "AI-assisted health platform for Bangladesh · demo sandbox",
    description: [
      "Built bilingual symptom triage, doctor matching and booking, teleconsultation, and health-record workflows for patients and clinicians.",
      "Connects verifiable prescriptions and FHIR R4 interoperability with support for people using basic phones or limited connectivity.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "AI", "FHIR R4", "Healthcare"],
    githubUrl: "https://github.com/meherabmehu/SasthoSetu",
    demoUrl: "https://sasthosetu.onrender.com",
    category: "Full-stack AI",
    featured: true,
  },
  {
    title: "Customer Churn Prediction — Survival Analysis",
    context: "bKash × NSUCEC Cybernauts 2026 Datathon · First Runner-Up",
    description: [
      "Reframed churn as a time-to-event problem and engineered 152 behavioral features from millions of transaction records.",
      "Built and calibrated a LightGBM, XGBoost and CatBoost ensemble to estimate churn risk and time-to-churn.",
    ],
    tech: ["Python", "Survival Analysis", "LightGBM", "XGBoost", "CatBoost"],
    githubUrl: "https://github.com/meherabmehu/Customer-Churn-Prediction-using-Survival-Analysis-",
    category: "Research & AI",
    featured: true,
  },
  {
    title: "RC Property Development — Property Platform",
    context: "Bilingual real-estate website · live deployment",
    description: [
      "Rebuilt a responsive property-development site from 14 design boards using reusable Django templates, local assets and shared design tokens.",
      "Implemented property discovery, detail pages, English/Bangla language switching and an inquiry flow.",
    ],
    tech: ["Python", "Django", "JavaScript", "HTML/CSS", "Vercel"],
    githubUrl: "https://github.com/meherabmehu/rcpdl-property-platform",
    demoUrl: "https://rcpdl-property-platform.vercel.app",
    category: "Full-stack",
    featured: true,
  },
  {
    title: "FinPilot AI — Financial Copilot",
    context: "FinTechathon SME track · AIgnite 2026",
    description: [
      "Built a Django workspace for small businesses to track cash flow, investigate financial risks, compare recovery scenarios and monitor decisions.",
      "Added an optional Groq-powered advisor with bounded, evidence-linked responses; includes a synthetic demo and documented evaluation limits.",
    ],
    tech: ["Python", "Django", "PostgreSQL", "Groq", "Financial Analytics"],
    githubUrl: "https://github.com/meherabmehu/finpilot-ai-sme-copilot",
    category: "Full-stack AI",
    featured: true,
  },
  {
    title: "StockWise AI — Inventory & Sales Intelligence",
    context: "Full-stack business application",
    description: [
      "Built an inventory, POS and customer-management system with transactional stock updates, sales history and business settings.",
      "Added calibrated 14-day demand forecasts and a PostgreSQL-grounded AI assistant for read-only questions about business data.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "LLMs"],
    githubUrl: "https://github.com/meherabmehu/stockwise-ai",
    category: "Full-stack AI",
    featured: true,
  },
  {
    title: "SpaceAgriSim — Evidence-Aware Space Agriculture",
    context: "Research software · controlled-environment crop scenarios",
    description: [
      "Created a responsive workspace joining an explainable crop-scenario simulator with a provenance-tracked NASA OSDR study catalogue.",
      "Keeps model evidence and limitations visible; presented as a research prototype, not a calibrated mission digital twin.",
    ],
    tech: ["Python", "FastAPI", "React", "NASA OSDR", "Machine Learning", "SVG"],
    githubUrl: "https://github.com/meherabmehu/SpaceAgriSim",
    category: "Research & AI",
    featured: true,
  },
];

// SKILLS — grouped by category, rendered as tag chips.
// ----------------------------------------------------------------------------
export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL"] },
  { category: "Product Engineering", items: ["React", "Next.js", "Tailwind CSS", "Django", "FastAPI", "Node.js", "Express", "REST APIs", "WebSockets"] },
  { category: "Applied AI & ML", items: ["LLM Applications", "RAG", "LangChain", "Hugging Face", "Scikit-learn", "LightGBM", "XGBoost", "CatBoost", "PyTorch"] },
  { category: "Data", items: ["PostgreSQL", "MySQL", "Pandas", "NumPy", "SQLAlchemy", "Feature Engineering"] },
  { category: "Engineering Tools", items: ["Git", "Docker", "GitHub Actions", "JWT / RBAC", "Pytest"] },
];

// ACHIEVEMENTS — competition wins and recognitions, most important first.
// ----------------------------------------------------------------------------
export const achievements: { title: string; note?: string; highlight?: boolean }[] = [
  {
    title: "Top 5 Team — Bangladesh Zonal Round, InnovateX Future Habitats Challenge (Techfest IIT Bombay 2026)",
    note: "Team CTRL_V · Hosted at DUET, Gazipur",
    highlight: true,
  },
  { title: "First Runner-Up — bKash x NSUCEC Cybernauts 2026 Datathon Grand Finale", note: "National datathon", highlight: true },
  { title: "First Runner-Up — Data Hackathon, 5th National Data Science Summit (NDSS) 2026", note: "Daffodil International University", highlight: true },
  { title: "First Runner-Up — DUET CSE Carnival 2026 AI Hackathon", highlight: true },
  { title: "39th National Science Fair — 1st Place (Sub-district & District)", note: "National-level participant" },
  { title: "40th National Science Fair — 1st Place (Sub-district)" },
  { title: "Creative Talent Hunt 2019 (Mathematics & Computer) — 1st Place (Sub-district)" },
  { title: "41st National Science Olympiad — 3rd Place (Sub-district)" },
  { title: "BUBT AI Conquest 2025", note: "Competitor" },
  { title: "The Infinity AI BuildFest 2026", note: "CloudCamp Bangladesh x BRAC University" },
  { title: "IUBAT Technocrate V2 (Techathon)", note: "Competitor" },
  { title: "IUBAT Innovation Competition 2024", note: "Line Follower Robot & Project Showcase" },
];

// ----------------------------------------------------------------------------
// EXPERIENCE
// ----------------------------------------------------------------------------
export const experience: { role: string; org: string; period: string; points: string[] }[] = [
  {
    role: "Trainee IT Executive",
    org: "CODETREE, Uttara, Dhaka",
    period: "3 months",
    points: ["Provided IT support and hardware/software troubleshooting; assisted with system maintenance and basic networking"],
  },
];

// ----------------------------------------------------------------------------
// LEADERSHIP & MENTORING
// ----------------------------------------------------------------------------
export const leadership: { role: string; org: string; points: string[] }[] = [
  {
    role: "Robotics Mentor",
    org: "IUBAT IT Society, Robotics Wing",
    points: ["Mentored juniors in robotics fundamentals; guided teams through competition preparation"],
  },
  {
    role: "Academic Mentor, C Programming",
    org: "IUBAT IT Society, Academic Wing",
    points: ["Led peer debugging and problem-solving sessions"],
  },
];

// ----------------------------------------------------------------------------
// EDUCATION
// ----------------------------------------------------------------------------
export const education: { degree: string; school: string }[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering (In Progress)",
    school: "International University of Business Agriculture and Technology (IUBAT), Dhaka",
  },
  {
    degree: "Higher Secondary Certificate · Science",
    school: "Govt. Nalchity College",
  },
  {
    degree: "Secondary School Certificate · Science",
    school: "Nandikathi Adarsha Secondary School",
  },
];

// ----------------------------------------------------------------------------
// CERTIFICATIONS
// ----------------------------------------------------------------------------
export const certifications: { title: string; issuer: string; year?: string }[] = [
  { title: "Database Systems (MySQL, Oracle, SQL Server)", issuer: "EDGE Project, Bangladesh Computer Council, ICT Division", year: "6 months" },
  { title: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry", year: "2025" },
  { title: "Complete 2025 Python Bootcamp: Learn Python from Scratch", issuer: "CodeWithHarry", year: "2025" },
];

export const certificatesFolderUrl =
  "https://drive.google.com/drive/folders/1saPkrjiy2vmURuvG1VmyfYpzjERUhuXf";

// ----------------------------------------------------------------------------
// REFERENCES
// ----------------------------------------------------------------------------
export const references: { name: string; title: string; org: string; phone: string; email: string }[] = [
  {
    name: "Md. Alamin Sikder Shihab",
    title: "Director, Branding and Public Relations Office (BPRO)",
    org: "International University of Business Agriculture and Technology (IUBAT)",
    phone: "+880 1716-848003",
    email: "pro@iubat.edu",
  },
  {
    name: "Sheekar Banerjee",
    title: "Lecturer, Department of Computer Science & Engineering",
    org: "International University of Business Agriculture and Technology (IUBAT)",
    phone: "+880 1760-208590",
    email: "sheekar.cse@iubat.edu",
  },
];
