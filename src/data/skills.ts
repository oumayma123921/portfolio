export interface Skill {
  readonly name: string;
  readonly category: string;
  readonly icon: string;
}

export const skills: Skill[] = [
  // =========================================================
  // DATA & BUSINESS INTELLIGENCE
  // =========================================================
  { name: "Python", category: "Data & BI", icon: "python" },
  { name: "Pandas", category: "Data & BI", icon: "pandas" },
  { name: "NumPy", category: "Data & BI", icon: "numpy" },
  { name: "Matplotlib", category: "Data & BI", icon: "matplotlib" },
  { name: "Seaborn", category: "Data & BI", icon: "seaborn" },
  { name: "Jupyter", category: "Data & BI", icon: "jupyter" },
  { name: "Google Colab", category: "Data & BI", icon: "googlecolab" },
  { name: "RapidMiner", category: "Data & BI", icon: "rapidminer" },
  { name: "SQL", category: "Data & BI", icon: "sql" },
  { name: "Business Intelligence", category: "Data & BI", icon: "powerbi" },
  { name: "Data Visualization", category: "Data & BI", icon: "chart" },
  { name: "ETL", category: "Data & BI", icon: "etl" },
  { name: "JasperReports", category: "Data & BI", icon: "jasperreports" },
  { name: "Decision Support", category: "Data & BI", icon: "decision" },

  // =========================================================
  // AI & MACHINE LEARNING
  // =========================================================
  { name: "Artificial Intelligence", category: "AI & ML", icon: "ai" },
  { name: "Machine Learning", category: "AI & ML", icon: "ml" },
  { name: "Deep Learning", category: "AI & ML", icon: "deeplearning" },
  { name: "Scikit-learn", category: "AI & ML", icon: "scikitlearn" },
  { name: "TensorFlow", category: "AI & ML", icon: "tensorflow" },
  { name: "PyTorch", category: "AI & ML", icon: "pytorch" },
  { name: "NLP", category: "AI & ML", icon: "nlp" },
  { name: "Recommendation Systems", category: "AI & ML", icon: "recommendation" },
  { name: "Predictive Modeling", category: "AI & ML", icon: "prediction" },
  { name: "Model Evaluation", category: "AI & ML", icon: "evaluation" },

  // =========================================================
  // SOFTWARE ENGINEERING
  // =========================================================
  { name: "Python", category: "Software Engineering", icon: "python" },
  { name: "C", category: "Software Engineering", icon: "c" },
  { name: "C++", category: "Software Engineering", icon: "cplusplus" },
  { name: "C#", category: "Software Engineering", icon: "csharp" },
  { name: "Java", category: "Software Engineering", icon: "java" },
  { name: "PHP", category: "Software Engineering", icon: "php" },
  { name: "VB.NET", category: "Software Engineering", icon: "vbnet" },
  { name: "JavaScript", category: "Software Engineering", icon: "javascript" },
  { name: "HTML5", category: "Software Engineering", icon: "html5" },
  { name: "CSS3", category: "Software Engineering", icon: "css3" },
  { name: "Object-Oriented Programming", category: "Software Engineering", icon: "oop" },
  { name: "REST APIs", category: "Software Engineering", icon: "api" },
  { name: "FastAPI", category: "Software Engineering", icon: "fastapi" },
  { name: "SQLAlchemy", category: "Software Engineering", icon: "sqlalchemy" },

  // =========================================================
  // DATABASES & BIG DATA
  // =========================================================
  { name: "MySQL", category: "Databases & Big Data", icon: "mysql" },
  { name: "PostgreSQL", category: "Databases & Big Data", icon: "postgresql" },
  { name: "Oracle", category: "Databases & Big Data", icon: "oracle" },
  { name: "SQL Server", category: "Databases & Big Data", icon: "microsoftsqlserver" },
  { name: "MongoDB", category: "Databases & Big Data", icon: "mongodb" },
  { name: "NoSQL", category: "Databases & Big Data", icon: "nosql" },
  { name: "Database Design", category: "Databases & Big Data", icon: "database" },
  { name: "Data Modeling", category: "Databases & Big Data", icon: "datamodeling" },
  { name: "Big Data", category: "Databases & Big Data", icon: "bigdata" },
  { name: "Hadoop", category: "Databases & Big Data", icon: "hadoop" },
  { name: "Apache Spark", category: "Databases & Big Data", icon: "spark" },

  // =========================================================
  // APPLICATION DEVELOPMENT
  // =========================================================
  { name: "Flutter", category: "Application Development", icon: "flutter" },
  { name: "Dart", category: "Application Development", icon: "dart" },
  { name: "Android Studio", category: "Application Development", icon: "androidstudio" },

  // =========================================================
  // WEB DEVELOPMENT
  // =========================================================
  { name: "WordPress", category: "Web Development", icon: "wordpress" },
  { name: "Joomla", category: "Web Development", icon: "joomla" },
  { name: "PrestaShop", category: "Web Development", icon: "prestashop" },

  // =========================================================
  // MODELING & DESIGN
  // =========================================================
  { name: "UML", category: "Modeling & Design", icon: "uml" },
  { name: "Merise", category: "Modeling & Design", icon: "merise" },
  { name: "StarUML", category: "Modeling & Design", icon: "staruml" },
  { name: "PowerDesigner", category: "Modeling & Design", icon: "powerdesigner" },
  { name: "Software Architecture", category: "Modeling & Design", icon: "architecture" },

  // =========================================================
  // GAMING & 3D
  // =========================================================
  { name: "Unreal Engine 5", category: "Gaming & 3D", icon: "unrealengine" },
  { name: "Blender", category: "Gaming & 3D", icon: "blender" },
  { name: "Game Design", category: "Gaming & 3D", icon: "gamedesign" },
  { name: "Level Design", category: "Gaming & 3D", icon: "leveldesign" },
  { name: "Environment Design", category: "Gaming & 3D", icon: "environment" },

  // =========================================================
  // TOOLS & COLLABORATION
  // =========================================================
  { name: "Git", category: "Tools & Collaboration", icon: "git" },
  { name: "GitHub", category: "Tools & Collaboration", icon: "github" },
  { name: "Docker", category: "Tools & Collaboration", icon: "docker" },
  { name: "Jira", category: "Tools & Collaboration", icon: "jira" },
  { name: "Trello", category: "Tools & Collaboration", icon: "trello" },
  { name: "SonarQube", category: "Tools & Collaboration", icon: "sonarqube" },
  { name: "Slack", category: "Tools & Collaboration", icon: "slack" },
  { name: "Postman", category: "Tools & Collaboration", icon: "postman" },
  { name: "Visual Studio", category: "Tools & Collaboration", icon: "visualstudio" },
  { name: "VS Code", category: "Tools & Collaboration", icon: "vscode" },
  { name: "Dev-C++", category: "Tools & Collaboration", icon: "devcpp" },
  { name: "Code::Blocks", category: "Tools & Collaboration", icon: "codeblocks" },
  { name: "Agile / Scrum", category: "Tools & Collaboration", icon: "agile" },
];

export const skillCategories = [
  ...new Set(skills.map((skill) => skill.category)),
];

