import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  BarChart3,
  Gamepad2,
  Cpu,
  Layers3,
  ChevronLeft,
  ChevronRight,
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
      {
        name: "Jupyter Notebook",
        icon: <SiJupyter />,
        color: "#F37626",
      },
      {
        name: "Google Colab",
        icon: <SiGooglecolab />,
        color: "#F9AB00",
      },
      {
        name: "Hadoop",
        icon: <SiApachehadoop />,
        color: "#66CCFF",
      },
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
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#47A248",
      },
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
      {
        name: "Blender",
        icon: <SiBlender />,
        color: "#F5792A",
      },
      { name: "Sketchfab", image: "/skills/sketchfab.png" },
    ],
  },
];

/* ============================================================
   TOOL LOGO
============================================================ */

function ToolLogo({
  tool,
}: Readonly<{ tool: Tool }>) {
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

/* ============================================================
   CATEGORY CARD
============================================================ */

function CategoryCard({
  category,
  active,
}: Readonly<{
  category: Category;
  active: boolean;
}>) {
  return (
    <motion.article
      animate={{
        scale: active ? 1 : 0.82,
        opacity: active ? 1 : 0.32,
        filter: active ? "blur(0px)" : "blur(3px)",
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        relative h-full w-full overflow-hidden rounded-[24px]
        border backdrop-blur-2xl
        ${
          active
            ? "border-cyan-400/25 bg-[#07111f]/90 shadow-[0_20px_70px_rgba(0,0,0,0.5),0_0_45px_rgba(34,211,238,0.08)]"
            : "border-white/[0.06] bg-[#030712]/80"
        }
      `}
    >
      {/* Ambient glow */}
      {active && (
        <>
          <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-blue-600/10 blur-3xl" />
        </>
      )}

      <div className="relative flex h-full flex-col p-4 sm:p-6">

        {/* Header */}
        <div className="flex items-start gap-3 sm:gap-3.5">
          <div
            className={`
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-xl border
              sm:h-10 sm:w-10
              ${
                active
                  ? "border-cyan-400/25 bg-cyan-400/10 text-cyan-300"
                  : "border-white/[0.06] bg-white/[0.025] text-slate-500"
              }
            `}
          >
            {category.icon}
          </div>

          <div className="min-w-0">
            <h3
              className={`text-base font-bold tracking-tight sm:text-xl ${
                active ? "text-white" : "text-slate-400"
              }`}
            >
              {category.name}
            </h3>

            <p
              className={`mt-1 text-[10px] leading-4 sm:text-xs sm:leading-5 ${
                active ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {category.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-4 h-px sm:my-5 ${
            active
              ? "bg-gradient-to-r from-cyan-400/30 via-white/[0.08] to-transparent"
              : "bg-white/[0.04]"
          }`}
        />

        {/* Skills */}
        <div className="min-h-0 flex-1 overflow-hidden">
          <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
            <Layers3
              size={14}
              className={
                active ? "text-cyan-300" : "text-slate-600"
              }
            />

            <h4
              className={`text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px] ${
                active ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Skills
            </h4>
          </div>

          <div className="flex max-h-[150px] flex-wrap gap-1.5 overflow-hidden sm:max-h-[160px]">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className={`
                  rounded-full border px-2 py-1
                  text-[9px] font-medium
                  sm:px-2.5 sm:text-[10px]
                  ${
                    active
                      ? "border-white/[0.09] bg-white/[0.045] text-slate-300 hover:border-cyan-400/30 hover:text-cyan-200"
                      : "border-white/[0.04] bg-white/[0.015] text-slate-600"
                  }
                `}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-4 sm:mt-5">
          <div className="mb-2.5 flex items-center gap-2 sm:mb-3">
            <Cpu
              size={14}
              className={
                active ? "text-cyan-300" : "text-slate-600"
              }
            />

            <h4
              className={`text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px] ${
                active ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Tools & Technologies
            </h4>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {category.tools.map((tool) => (
              <div
                key={tool.name}
                title={tool.name}
                className={`
                  flex h-7 w-7 items-center justify-center
                  rounded-lg border
                  sm:h-8 sm:w-8
                  ${
                    active
                      ? "border-white/[0.08] bg-black/25 hover:scale-110 hover:border-cyan-400/40 hover:bg-white/[0.07]"
                      : "border-white/[0.04] bg-black/20"
                  }
                `}
              >
                <ToolLogo tool={tool} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      )}
    </motion.article>
  );
}

/* ============================================================
   SKILLS
============================================================ */

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = categories.length;

  const goPrevious = () => {
    setDirection(-1);

    setActiveIndex(
      (current) => (current - 1 + total) % total
    );
  };

  const goNext = () => {
    setDirection(1);

    setActiveIndex(
      (current) => (current + 1) % total
    );
  };

  const goTo = (index: number) => {
    if (index === activeIndex) return;

    setDirection(
      index > activeIndex ? 1 : -1
    );

    setActiveIndex(index);
  };

  /* ==========================================================
     KEYBOARD NAVIGATION
  ========================================================== */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  });

  const previousIndex =
    (activeIndex - 1 + total) % total;

  const nextIndex =
    (activeIndex + 1) % total;

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        bg-[#020617]
        py-20 sm:py-24
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-[550px] w-[550px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.035]
            blur-[120px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute -left-40 top-1/4
            h-72 w-72
            rounded-full
            bg-blue-600/[0.045]
            blur-[110px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute -right-40 bottom-1/4
            h-72 w-72
            rounded-full
            bg-purple-600/[0.035]
            blur-[110px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.13]
            [background-image:linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)]
            [background-size:75px_75px]
            [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]
          "
        />

        {/* Network lines */}
        <svg
          className="
            absolute inset-0
            h-full w-full
            opacity-[0.1]
          "
          preserveAspectRatio="none"
        >
          <line
            x1="4%"
            y1="22%"
            x2="25%"
            y2="37%"
            stroke="rgb(56 189 248)"
            strokeWidth="1"
          />

          <line
            x1="25%"
            y1="37%"
            x2="48%"
            y2="18%"
            stroke="rgb(56 189 248)"
            strokeWidth="1"
          />

          <line
            x1="52%"
            y1="20%"
            x2="75%"
            y2="38%"
            stroke="rgb(96 165 250)"
            strokeWidth="1"
          />

          <line
            x1="75%"
            y1="38%"
            x2="96%"
            y2="20%"
            stroke="rgb(56 189 248)"
            strokeWidth="1"
          />

          <line
            x1="5%"
            y1="78%"
            x2="28%"
            y2="61%"
            stroke="rgb(96 165 250)"
            strokeWidth="1"
          />

          <line
            x1="28%"
            y1="61%"
            x2="51%"
            y2="80%"
            stroke="rgb(56 189 248)"
            strokeWidth="1"
          />

          <line
            x1="51%"
            y1="80%"
            x2="75%"
            y2="61%"
            stroke="rgb(56 189 248)"
            strokeWidth="1"
          />

          <line
            x1="75%"
            y1="61%"
            x2="95%"
            y2="78%"
            stroke="rgb(96 165 250)"
            strokeWidth="1"
          />
        </svg>

        {/* Particles */}
        {[...Array(14)].map((_, index) => (
          <motion.span
            key={index}
            className="
              absolute
              h-1 w-1
              rounded-full
              bg-cyan-300/40
            "
            style={{
              left: `${5 + ((index * 19) % 90)}%`,
              top: `${12 + ((index * 27) % 78)}%`,
            }}
            animate={{
              opacity: [0.15, 0.55, 0.15],
              y: [0, -10, 0],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3 + (index % 3),
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
        "
      >

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mx-auto mb-8
            max-w-2xl
            text-center
            sm:mb-10
          "
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-px w-7 bg-cyan-400/70" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-cyan-300
              "
            >
              Technical Expertise
            </span>

            <div className="h-px w-7 bg-cyan-400/70" />
          </div>

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            Skills{" "}
            <span className="text-cyan-300">
              & Technologies
            </span>
          </h2>

          <p
            className="
              mx-auto mt-3
              max-w-xl
              text-xs
              leading-6
              text-slate-500
              sm:text-sm
            "
          >
            A structured overview of my technical skills, tools and
            technologies across software engineering, AI, data and gaming.
          </p>
        </motion.div>

        {/* ====================================================
            CAROUSEL
        ==================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1150px]
          "
          style={{
            perspective: "1400px",
          }}
        >

          {/* ==================================================
              MOBILE NAVIGATION
          ================================================== */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-4
              sm:hidden
            "
          >
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous category"
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-cyan-400/25
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_20px_rgba(34,211,238,0.10)]
                backdrop-blur-xl
                transition-all
                active:scale-95
              "
            >
              <ChevronLeft size={18} />
            </button>

            <span
              className="
                min-w-[55px]
                text-center
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-slate-500
              "
            >
              {activeIndex + 1} / {total}
            </span>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next category"
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                border border-cyan-400/25
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_20px_rgba(34,211,238,0.10)]
                backdrop-blur-xl
                transition-all
                active:scale-95
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* ==================================================
              CAROUSEL STAGE
          ================================================== */}

          <div
            className="
              relative
              h-[535px]
              w-full
              overflow-visible
              sm:h-[520px]
              lg:h-[510px]
            "
            style={{
              transformStyle: "preserve-3d",
            }}
          >

            {/* =================================================
                DESKTOP LEFT ARROW
            ================================================= */}

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous category"
              className="
                absolute
                left-1
                top-1/2
                z-50
                hidden
                h-11 w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border border-cyan-400/25
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_25px_rgba(34,211,238,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                sm:flex
                sm:left-3
                lg:left-5
              "
            >
              <ChevronLeft size={21} />
            </button>

            {/* =================================================
                DESKTOP RIGHT ARROW
            ================================================= */}

            <button
              type="button"
              onClick={goNext}
              aria-label="Next category"
              className="
                absolute
                right-1
                top-1/2
                z-50
                hidden
                h-11 w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border border-cyan-400/25
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_25px_rgba(34,211,238,0.12)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                sm:flex
                sm:right-3
                lg:right-5
              "
            >
              <ChevronRight size={21} />
            </button>

            {/* =================================================
                PREVIOUS CARD
            ================================================= */}

            <motion.div
              key={`previous-${previousIndex}`}
              initial={{
                opacity: 0,
                x: direction > 0 ? -60 : -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 24,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                hidden
                h-[430px]
                w-[430px]
                -translate-x-1/2
                -translate-y-1/2
                sm:block
                lg:h-[440px]
                lg:w-[440px]
              "
              style={{
                marginLeft: "-315px",
                transformStyle: "preserve-3d",
                zIndex: 10,
              }}
            >
              <motion.div
                animate={{
                  rotateY: 18,
                  scale: 0.82,
                  opacity: 0.38,
                }}
                transition={{
                  type: "spring",
                  stiffness: 190,
                  damping: 24,
                }}
                className="h-full w-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <CategoryCard
                  category={
                    categories[previousIndex]
                  }
                  active={false}
                />
              </motion.div>
            </motion.div>

            {/* =================================================
                ACTIVE CARD
            ================================================= */}

            <AnimatePresence
              mode="wait"
              custom={direction}
            >
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  x:
                    direction > 0
                      ? 45
                      : -45,
                  rotateY:
                    direction > 0
                      ? -6
                      : 6,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  rotateY: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  x:
                    direction > 0
                      ? -45
                      : 45,
                  rotateY:
                    direction > 0
                      ? 6
                      : -6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 23,
                  mass: 0.8,
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) {
                    goNext();
                  } else if (
                    info.offset.x > 60
                  ) {
                    goPrevious();
                  }
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-30
                  h-[500px]
                  w-[calc(100%-32px)]
                  max-w-[560px]
                  -translate-x-1/2
                  -translate-y-1/2
                  cursor-grab
                  active:cursor-grabbing

                  sm:h-[490px]
                  sm:w-[520px]

                  lg:h-[480px]
                  lg:w-[540px]
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <CategoryCard
                  category={
                    categories[activeIndex]
                  }
                  active
                />
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                NEXT CARD
            ================================================= */}

            <motion.div
              key={`next-${nextIndex}`}
              initial={{
                opacity: 0,
                x: direction < 0 ? 60 : 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 24,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                hidden
                h-[430px]
                w-[430px]
                -translate-x-1/2
                -translate-y-1/2
                sm:block
                lg:h-[440px]
                lg:w-[440px]
              "
              style={{
                marginLeft: "315px",
                transformStyle: "preserve-3d",
                zIndex: 10,
              }}
            >
              <motion.div
                animate={{
                  rotateY: -18,
                  scale: 0.82,
                  opacity: 0.38,
                }}
                transition={{
                  type: "spring",
                  stiffness: 190,
                  damping: 24,
                }}
                className="h-full w-full"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <CategoryCard
                  category={
                    categories[nextIndex]
                  }
                  active={false}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ==================================================
              DOTS
          ================================================== */}

          <div
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-1
            "
          >
            {categories.map(
              (category, index) => (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    goTo(index)
                  }
                  aria-label={`Go to ${category.name}`}
                  className="p-1"
                >
                  <motion.span
                    animate={{
                      width:
                        index === activeIndex
                          ? 26
                          : 6,
                      opacity:
                        index === activeIndex
                          ? 1
                          : 0.35,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="
                      block
                      h-1.5
                      rounded-full
                      bg-cyan-400
                    "
                  />
                </button>
              )
            )}
          </div>

          {/* Hint */}
          <p
            className="
              mt-4
              text-center
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-slate-600
            "
          >
            Drag or use the arrows
          </p>
        </div>
      </div>
    </section>
  );
}

