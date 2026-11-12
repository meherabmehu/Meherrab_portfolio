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
    "Software engineer and Computer Science & Engineering undergraduate (CGPA 3.52/4.00), building full-stack applications and end-to-end AI systems across computer vision, NLP/LLMs, and forecasting. First Runner-Up at three national AI competitions, with experience taking ideas from data and experiments into useful, working software.",
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
  category: string;
  featured?: boolean; // featured projects render larger in the grid
};

export const projects: Project[] = [
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
  {
    title: "AEGIS-ER — Emergency Response Platform",
    context: "Geospatial decision-support system",
    description: [
      "Designed a command-centre workflow for emergency reports, response resources and live operating conditions.",
      "Combines explainable triage with disruption-aware routing to support dispatch decisions under changing road conditions.",
    ],
    tech: ["Python", "FastAPI", "Geospatial Systems", "Leaflet", "Optimization"],
    githubUrl: "https://github.com/meherabmehu/aegis-er-platform",
    category: "Full-stack AI",
    featured: true,
  },
  {
    title: "Pre-Impact Fall Detection on ESP32",
    context: "TinyML · wearable inertial sensing",
    description: [
      "Built a compact INT8 model that classifies motion windows as non-fall, alert or fall on an ESP32 using MPU6050 sensor data.",
      "Trained and evaluated across public fall datasets, exported the model to TensorFlow Lite Micro and verified inference on physical hardware.",
    ],
    tech: ["TensorFlow", "TensorFlow Lite Micro", "ESP32", "C++", "TinyML"],
    githubUrl: "https://github.com/meherabmehu/elderly_fall_detection",
    category: "Edge AI",
    featured: true,
  },
  {
    title: "Bangladesh Dengue 7-Day Onset Warning",
    context: "Public-health ML research · development stage",
    description: [
      "Built a leakage-aware pipeline to study whether available signals can warn of dengue outbreak onset seven days ahead.",
      "Compared seasonal and recent-trend rules with regularized logistic regression and LightGBM; the reserved 2025 test period remains unevaluated.",
    ],
    tech: ["Python", "LightGBM", "TCN", "GRU", "Time-Series Validation"],
    githubUrl: "https://github.com/meherabmehu/bd-dengue-7day-onset-warning",
    category: "Research & AI",
    featured: true,
  },
  {
    title: "GridWise — LLM Energy Optimizer",
    context: "BUP CSE Fest 2026 · Online Preliminary · 10/10 official cases matched the published optimum",
    description: [
      "Turns short operator notes into validated, machine-checkable constraints for a 24-hour campus energy schedule.",
      "Separates language-model interpretation from a deterministic linear-programming optimizer so schedules can be checked against the rules.",
    ],
    tech: ["Python", "FastAPI", "LLMs", "Linear Programming", "HiGHS"],
    githubUrl: "https://github.com/meherabmehu/GridWise-LLM-Energy-Optimizer",
    category: "Full-stack AI",
  },
  {
    title: "Codebase Onboarding Agent",
    context: "RAG-powered developer learning assistant",
    description: [
      "Built an assistant that explains a repository through its code and evolution history, with architecture mapping, learning plans, Q&A and quizzes.",
      "Split the Streamlit learning interface from a FastAPI service for parsing, indexing and agent workflows.",
    ],
    tech: ["Python", "FastAPI", "Streamlit", "RAG", "Agent Workflows"],
    githubUrl: "https://github.com/meherabmehu/codebase-onboarding-agent",
    category: "Full-stack AI",
  },
  {
    title: "Samsung Phone Query & Review System",
    context: "RAG and multi-agent application · internship project",
    description: [
      "Scrapes Samsung phone specifications and reviews, stores structured records in PostgreSQL and serves them through a FastAPI application.",
      "Uses retrieval-grounded answers for product questions and a multi-agent pipeline to analyze reviews.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "RAG", "Multi-agent AI"],
    githubUrl: "https://github.com/meherabmehu/samsung-phone-query-review-system",
    category: "Full-stack AI",
  },
  {
    title: "Customer Churn Prediction Using Survival Analysis",
    context: "bKash x NSUCEC Cybernauts 2026 Datathon Grand Finale — First Runner-Up",
    description: [
      "Reframed churn as a time-to-event problem and engineered 152 behavioral features from millions of transaction records",
      "Calibrated a LightGBM + XGBoost + CatBoost ensemble with rigorous cross-validation to score churn risk and time-to-churn",
    ],
    tech: ["Python", "LightGBM", "XGBoost", "CatBoost", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/meherabmehu/Customer-Churn-Prediction-using-Survival-Analysis-",
    category: "Research & AI",
    featured: true,
  },
  {
    title: "RoadVision — AI-Powered Traffic Detection & Vehicle Classification",
    context: "DUET CSE Carnival 2026 AI Hackathon — First Runner-Up",
    description: [
      "Trained a YOLO11 (Ultralytics) detector for multi-class vehicle identification on Bangladesh highway surveillance footage",
      "Built the augmentation and hyperparameter-tuning pipeline; delivered real-time inference evaluated with mAP@50/50–95",
    ],
    tech: ["Python", "PyTorch", "YOLO11", "Ultralytics", "OpenCV"],
    githubUrl: "https://github.com/meherabmehu/RoadVision-AI-Powered-Traffic-Detection-Vehicle-Classification-",
    category: "Research & AI",
    featured: true,
  },
  {
    title: "Starship Safety — System Failure Prediction",
    context: "Data Hackathon, 5th National Data Science Summit (NDSS) 2026, Daffodil International University — First Runner-Up",
    description: [
      "Recovered hidden patterns from 15 obfuscated features through hex decoding, temperature parsing, and coordinate analysis",
      "Achieved 94.5% accuracy / 0.944 F1 (cross-validated) with an interpretable logistic-regression + ColumnTransformer pipeline",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/meherabmehu/Starship-Safety-NDSS-2026",
    category: "Research & AI",
    featured: true,
  },
  {
    title: "Multi-Agent Medical Assistant — RAG, Vision & Literature Search",
    context: "Personal Project",
    description: [
      "Orchestrated four specialized agents with LangChain — medical image analysis (brain tumor, chest X-ray, skin lesion), document RAG, PubMed/web search, and safety guardrails",
      "Implemented semantic retrieval over medical documents with Qdrant; Dockerized the service with GitHub Actions CI",
    ],
    tech: ["Python", "LangChain", "LLMs", "RAG", "Qdrant", "Computer Vision", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/meherabmehu/Multi_Agent_Medical_Service",
    category: "Full-stack AI",
  },
  {
    title: "Bengali LLM Hallucination Detection",
    context: "Kaggle Competition",
    description: [
      "Designed a macro-F1-optimized hybrid pipeline combining rule-based validation, Bengali Wikipedia retrieval, NLI scoring (mDeBERTa), and semantic similarity (LaBSE)",
      "Integrated quantized LLM judges (Qwen2.5-7B 4-bit, Gemma via llama.cpp) for retrieval-augmented verification",
    ],
    tech: ["Python", "PyTorch", "Hugging Face Transformers", "llama.cpp", "RapidFuzz"],
    githubUrl: "https://github.com/meherabmehu/Bengali-Hallucination-Detection",
    category: "Research & AI",
  },
  {
    title: "PM2.5 Air Quality Forecasting for Dhaka",
    context: "Undergraduate Thesis (Ongoing)",
    description: [
      "Benchmarked LSTM, GRU, and ARIMA vs LightGBM, XGBoost, CatBoost for 24-hour-ahead forecasting on 2016–2022 data",
      "Reached R² = 0.88 (LightGBM benchmark) using chronological splits, 24-hour-mean targets, and SHAP analysis",
    ],
    tech: ["Python", "TensorFlow", "LightGBM", "SHAP", "Time-Series Analysis"],
    githubUrl: "https://github.com/meherabmehu/PM2.5-Air-Quality-Forecasting-for-Dhaka-",
    category: "Research & AI",
  },
  {
    title: "FinNova — Financial Transaction Risk Detection",
    context: "Personal Project",
    description: [
      "Detected high-risk transactions under severe class imbalance with a threshold-optimized weighted ensemble of LightGBM, XGBoost, CatBoost, logistic regression, and a neural network",
      "Achieved ROC-AUC 0.979, AUC-PR 0.891, and F1 0.895 via systematic EDA, feature engineering, and threshold tuning",
    ],
    tech: ["Python", "Scikit-learn", "LightGBM", "XGBoost", "CatBoost"],
    githubUrl: "https://github.com/meherabmehu/finnova-risk-transaction-detection",
    category: "Research & AI",
  },
  {
    title: "Office Energy Monitor — IoT Energy Intelligence Platform",
    context: "Personal Project",
    description: [
      "Built a real-time energy monitoring platform: FastAPI + SQLAlchemy backend, React + Chart.js dashboard, and WebSocket streaming from Wokwi-simulated ESP32 sensors",
      "Added room-wise analytics and a Discord alert bot for high-usage, after-hours, and long-running-device events",
    ],
    tech: ["Python", "FastAPI", "React", "WebSockets", "SQLAlchemy", "ESP32", "IoT"],
    githubUrl: "https://github.com/meherabmehu/office-energy-monitor",
    category: "Full-stack AI",
  },
  {
    title: "SasthoSetu — Digital Healthcare Platform",
    context: "Personal Project",
    description: ["Healthcare platform with patient and provider workflows, appointment management, medical records and AI-assisted health features, backed by a documented REST API."],
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "JWT", "AI"],
    githubUrl: "https://github.com/meherabmehu/SasthoSetu",
    category: "Full-stack AI",
  },
  {
    title: "Vantage Robotics Simulator",
    context: "Personal Project",
    description: ["Browser-based robot-arm control with forward/inverse kinematics, built with React, TypeScript, and Three.js"],
    tech: ["React", "TypeScript", "Three.js", "Robotics"],
    githubUrl: "https://github.com/meherabmehu/vantage-robotics-simulator",
    category: "Full-stack",
  },
  {
    title: "Cirrhosis Outcome Prediction",
    context: "Machine Learning Project",
    description: ["Multi-class clinical outcome classification with EDA, feature engineering, and stratified cross-validation"],
    tech: ["Python", "LightGBM", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/meherabmehu/Cirrhossis-Outcome-prediction",
    category: "Research & AI",
  },
];

// ----------------------------------------------------------------------------
// SKILLS — grouped by category, rendered as tag chips.
// ----------------------------------------------------------------------------
export const skills: { category: string; items: string[] }[] = [
  { category: "Programming", items: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "SQL"] },
  {
    category: "Machine Learning",
    items: [
      "Scikit-learn", "LightGBM", "XGBoost", "CatBoost", "Ensemble Learning",
      "Survival Analysis", "Feature Engineering", "Cross-Validation", "Imbalanced Data", "SHAP",
    ],
  },
  { category: "Deep Learning", items: ["PyTorch", "TensorFlow", "CNN", "LSTM", "GRU", "Transfer Learning"] },
  { category: "Computer Vision", items: ["YOLO11", "Ultralytics", "OpenCV", "Object Detection", "Image Classification"] },
  {
    category: "NLP & LLMs",
    items: [
      "Hugging Face Transformers", "LangChain", "RAG", "mDeBERTa", "LaBSE",
      "Qwen2.5", "Gemma", "llama.cpp", "Prompt Engineering",
    ],
  },
  {
    category: "Backend & Data",
    items: ["FastAPI", "REST APIs", "WebSockets", "SQLAlchemy", "JWT/OAuth2", "Node.js", "Pandas", "NumPy", "EDA"],
  },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Oracle", "SQL Server", "Qdrant"] },
  { category: "Tools, DevOps & IoT", items: ["Git", "GitHub", "Docker", "GitHub Actions", "Jupyter", "Kaggle", "ESP32/Arduino", "Wokwi"] },
];

// ----------------------------------------------------------------------------
// ACHIEVEMENTS — competition wins and recognitions, most important first.
// ----------------------------------------------------------------------------
export const achievements: { title: string; note?: string; highlight?: boolean }[] = [
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
export const education: { degree: string; school: string; period: string; note: string }[] = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "International University of Business Agriculture and Technology (IUBAT), Dhaka",
    period: "Expected 2026",
    note: "CGPA 3.52/4.00",
  },
  {
    degree: "HSC (Science)",
    school: "Govt. Nalchity College",
    period: "2020",
    note: "GPA 4.50/5.00",
  },
  {
    degree: "SSC (Science)",
    school: "Nandikathi Adarsha Secondary School",
    period: "2018",
    note: "GPA 4.28/5.00",
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
