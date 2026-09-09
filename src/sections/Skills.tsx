import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  BarChart3,
  Gamepad2,
  Cpu,
  Layers3,
} from "lucide-react";

import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGooglecolab,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiFlutter,
  SiDart,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiApachespark,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiUnrealengine,
  SiBlender,
  SiGit,
  SiGithub,
  SiDocker,
  SiJira,
  SiTrello,
  SiPostman,
  SiAndroidstudio,
  SiCplusplus,
  SiApachehadoop,
  SiBootstrap,
} from "react-icons/si";

import { FaJava, FaCuttlefish } from "react-icons/fa";

type Tool = {
  name: string;
  icon?: React.ReactNode;
  image?: string;
  color?: string;
};

type Category = {
  name: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  tools: Tool[];
};

const categories: Category[] = [
  {
    name: "Software Engineering",
    description:
      "Software development, architecture, APIs, databases and engineering practices.",
    icon: <Code2 size={21} />,
    skills: [
      "Object-Oriented Programming",
      "REST API Development",
      "Database Design",
      "Data Modeling",
      "Software Architecture",
      "Web Development",
      "Application Development",
      "Agile / Scrum",
      "UML",
      "Merise",
    ],
    tools: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "Java", icon: <FaJava />, color: "#ED8B00" },
      { name: "C", icon: <FaCuttlefish />, color: "#A8B9CC" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "C#", image: "/skills/csharp.png" },
      { name: "VB.NET", image: "/skills/vbnet.png" },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <SiCss />, color: "#1572B6" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
      { name: "Dart", icon: <SiDart />, color: "#0175C2" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#FFFFFF" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Jira", icon: <SiJira />, color: "#0052CC" },
      { name: "Slack", image: "/skills/slack.png" },
      { name: "Trello", icon: <SiTrello />, color: "#0C66E4" },
      { name: "SonarQube", image: "/skills/sonarqube.png" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      {
        name: "Android Studio",
        icon: <SiAndroidstudio />,
        color: "#3DDC84",
      },
      { name: "VS Code", image: "/skills/vscode.png" },
      { name: "Visual Studio", image: "/skills/visualstudio.png" },
    ],
  },

  {
    name: "Machine Learning",
    description:
      "Machine learning algorithms, feature engineering, evaluation and recommendation systems.",
    icon: <Brain size={21} />,
    skills: [
      "Classification",
      "Regression",
      "Clustering",
      "Feature Engineering",
      "Data Preprocessing",
      "Ensemble Learning",
      "Model Evaluation",
      "Recommendation Systems",
      "Collaborative Filtering",
      "SVD",
      "ALS",
    ],
    tools: [
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn />,
        color: "#F7931E",
      },
      { name: "Pandas", icon: <SiPandas />, color: "#150458" },
      { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
      { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      { name: "Jupyter Notebook", icon: <SiJupyter />, color: "#F37626" },
      {
        name: "Google Colab",
        icon: <SiGooglecolab />,
        color: "#F9AB00",
      },
    ],
  },

  {
    name: "AI & Deep Learning",
    description:
      "Artificial intelligence, neural networks, NLP, computer vision and intelligent systems.",
    icon: <Cpu size={21} />,
    skills: [
      "Neural Networks",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Recommendation Systems",
    ],
    tools: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn />,
        color: "#F7931E",
      },
      {
        name: "Google Colab",
        icon: <SiGooglecolab />,
        color: "#F9AB00",
      },
    ],
  },

  {
    name: "Business Intelligence",
    description:
      "Business analytics, ETL, reporting, data modeling and decision-support solutions.",
    icon: <BarChart3 size={21} />,
    skills: [
      "ETL",
      "Data Modeling",
      "Data Warehousing",
      "Data Visualization",
      "Statistical Analysis",
      "Decision Support",
      "Dashboard Design",
      "Business Reporting",
    ],
    tools: [
      { name: "Power BI", image: "/skills/powerbi.png" },
      { name: "RapidMiner", image: "/skills/rapidminer.png" },
      {
        name: "JasperReports",
        image: "/skills/jasperreports.png",
      },
      { name: "SQL", image: "/skills/sql.png" },
      { name: "Excel", image: "/skills/excel.png" },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "#4169E1",
      },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    ],
  },

  {
    name: "Data",
    description:
      "Data analysis, visualization, databases and large-scale data processing.",
    icon: <Database size={21} />,
    skills: [
      "Data Analysis",
      "Data Preprocessing",
      "Data Visualization",
      "Statistical Analysis",
      "Data Modeling",
      "Big Data Processing",
      "Data Cleaning",
      "Exploratory Data Analysis",
    ],
    tools: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "Pandas", icon: <SiPandas />, color: "#150458" },
      { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
      { name: "Matplotlib", image: "/skills/matplotlib.png" },
      { name: "Seaborn", image: "/skills/seaborn.png" },
      { name: "SQL", image: "/skills/sql.png" },
      { name: "Jupyter Notebook", icon: <SiJupyter />, color: "#F37626" },
      {
        name: "Google Colab",
        icon: <SiGooglecolab />,
        color: "#F9AB00",
      },
      { name: "Hadoop", icon: <SiApachehadoop />, color: "#66CCFF" },
      { name: "HDFS", image: "/skills/hdfs.png" },
      {
        name: "Apache Spark",
        icon: <SiApachespark />,
        color: "#E25A1C",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "#4169E1",
      },
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Oracle", image: "/skills/oracle.png" },
      { name: "SQL Server", image: "/skills/sql-server.png" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },

  {
    name: "Gaming",
    description:
      "Game design, real-time 3D environments and interactive game development.",
    icon: <Gamepad2 size={21} />,
    skills: [
      "Game Design",
      "Game Development",
      "Level Design",
      "Interactive Experiences",
      "3D Environment Design",
      "Game Mechanics",
      "Game Prototyping",
    ],
    tools: [
      {
        name: "Unreal Engine 5",
        icon: <SiUnrealengine />,
        color: "#FFFFFF",
      },
      { name: "Unity", image: "/skills/unity.png" },
      { name: "Blender", icon: <SiBlender />, color: "#F5792A" },
      { name: "Sketchfab", image: "/skills/sketchfab.png" },
    ],
  },
];

function ToolLogo({ tool }: Readonly<{ tool: Tool }>) {
  if (tool.image) {
    return (
      <img
        src={tool.image}
        alt={tool.name}
        className="h-5 w-5 object-contain"
      />
    );
  }

  if (tool.icon) {
    return (
      <span
        className="flex h-5 w-5 items-center justify-center text-[19px] leading-none"
        style={{ color: tool.color }}
      >
        {tool.icon}
      </span>
    );
  }

  return null;
}

function CategoryCard({
  category,
  index,
}: Readonly<{
  category: Category;
  index: number;
}>) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
      }}
      whileHover={{ y: -4 }}
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.035]
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.055]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-start gap-3">
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/20
            bg-cyan-400/10
            text-cyan-300
          "
        >
          {category.icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-bold tracking-tight text-white">
            {category.name}
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-5">
        <div className="mb-2.5 flex items-center gap-2">
          <Layers3 size={14} className="text-cyan-300" />

          <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
            Skills
          </h4>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.045]
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-slate-300
                transition-colors
                duration-200
                hover:border-cyan-400/30
                hover:text-cyan-200
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <div className="mb-2.5 flex items-center gap-2">
          <Cpu size={14} className="text-cyan-300" />

          <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
            Tools & Technologies
          </h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.tools.map((tool) => (
            <div
              key={tool.name}
              title={tool.name}
              className="
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                border
                border-white/10
                bg-black/20
                transition-all
                duration-200
                hover:scale-110
                hover:border-cyan-400/40
                hover:bg-white/[0.08]
                hover:shadow-[0_0_16px_rgba(34,211,238,0.12)]
              "
            >
              <ToolLogo tool={tool} />
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[15%] h-48 w-48 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="absolute bottom-[15%] right-[8%] h-60 w-60 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9 max-w-3xl"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-cyan-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Skills &{" "}
            <span className="text-cyan-300">
              Technologies
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            A structured overview of my technical skills, tools and
            technologies across software engineering, AI, data and gaming.
          </p>
        </motion.div>

        {/* Horizontal Carousel */}
        <div className="relative">
          <div
            className="
              flex
              gap-5
              overflow-x-auto
              pb-6
              snap-x
              snap-mandatory
              scroll-smooth
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="
                  w-[82vw]
                  min-w-[82vw]
                  snap-center
                  sm:w-[500px]
                  sm:min-w-[500px]
                  lg:w-[560px]
                  lg:min-w-[560px]
                "
              >
                <CategoryCard
                  category={category}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Left fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-full
              w-10
              bg-gradient-to-r
              from-[#020617]
              to-transparent
            "
          />

          {/* Right fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-full
              w-10
              bg-gradient-to-l
              from-[#020617]
              to-transparent
            "
          />
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-500"
        >
          <span>Scroll horizontally</span>
          <span className="text-cyan-400">→</span>
        </motion.div>
      </div>
    </section>
  );
}