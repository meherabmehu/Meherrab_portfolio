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
  featured?: boolean; // featured projects render larger in the grid
};

export const projects: Project[] = [
  {
    title: "Customer Churn Prediction Using Survival Analysis",
    context: "bKash x NSUCEC Cybernauts 2026 Datathon Grand Finale — First Runner-Up",
    description: [
      "Reframed churn as a time-to-event problem and engineered 152 behavioral features from millions of transaction records",
      "Calibrated a LightGBM + XGBoost + CatBoost ensemble with rigorous cross-validation to score churn risk and time-to-churn",
    ],
    tech: ["Python", "LightGBM", "XGBoost", "CatBoost", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/meherabmehu/Customer-Churn-Prediction-using-Survival-Analysis-",
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
  },
  {
    title: "SasthoSetu — Healthcare Platform Backend",
    context: "Personal Project",
    description: ["FastAPI + PostgreSQL healthcare backend with JWT/OAuth2 authentication, symptom checking, and appointment scheduling"],
    tech: ["Python", "FastAPI", "PostgreSQL", "JWT", "OAuth2"],
    githubUrl: "https://github.com/meherabmehu/SasthoSetu",
  },
  {
    title: "Vantage Robotics Simulator",
    context: "Personal Project",
    description: ["Browser-based robot-arm control with forward/inverse kinematics, built with React, TypeScript, and Three.js"],
    tech: ["React", "TypeScript", "Three.js", "Robotics"],
    githubUrl: "https://github.com/meherabmehu/vantage-robotics-simulator",
  },
  {
    title: "Cirrhosis Outcome Prediction",
    context: "Machine Learning Project",
    description: ["Multi-class clinical outcome classification with EDA, feature engineering, and stratified cross-validation"],
    tech: ["Python", "LightGBM", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/meherabmehu/Cirrhossis-Outcome-prediction",
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
