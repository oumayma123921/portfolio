import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Image as ImageIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type MediaItem = {
  type: "image" | "video";
  src: string;
  title?: string;
};

type Project = {
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  skills: string[];
  cover: string;
  media: MediaItem[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Gestion des Stages",
    category: "Stage Project — Commune de Salé",
    shortDescription:
      "Web application for managing and monitoring internship activities.",
    description:
      "A web-based internship management system developed during my internship at the Commune de Salé. The project aims to centralize internship information, facilitate administrative management, and improve the monitoring of interns and their internship activities.",
    technologies: [
      "Web Development",
      "Database",
      "Backend",
      "Frontend",
    ],
    skills: [
      "Software Engineering",
      "Database Management",
      "Web Development",
      "Application Design",
    ],
    cover: "/projects/stage-management/1.png",
    media: [
      {
        type: "image",
        src: "/projects/stage-management/1.png",
        title: "Stage Management — Interface 1",
      },
      {
        type: "image",
        src: "/projects/stage-management/2.png",
        title: "Stage Management — Interface 2",
      },
      {
        type: "image",
        src: "/projects/stage-management/3.png",
        title: "Stage Management — Interface 3",
      },
      {
        type: "image",
        src: "/projects/stage-management/4.png",
        title: "Stage Management — Interface 4",
      },
      {
        type: "image",
        src: "/projects/stage-management/5.png",
        title: "Stage Management — Interface 5",
      },
      {
        type: "image",
        src: "/projects/stage-management/6.png",
        title: "Stage Management — Interface 6",
      },
      {
        type: "image",
        src: "/projects/stage-management/7.png",
        title: "Stage Management — Interface 7",
      },
      {
        type: "image",
        src: "/projects/stage-management/8.png",
        title: "Stage Management — Interface 8",
      },
      {
        type: "image",
        src: "/projects/stage-management/9.png",
        title: "Stage Management — Interface 9",
      },
      {
        type: "image",
        src: "/projects/stage-management/10.png",
        title: "Stage Management — Interface 10",
      },
      {
        type: "image",
        src: "/projects/stage-management/11.png",
        title: "Stage Management — Interface 11",
      },
      {
        type: "image",
        src: "/projects/stage-management/12.png",
        title: "Stage Management — Interface 12",
      },
      {
        type: "image",
        src: "/projects/stage-management/13.png",
        title: "Stage Management — Interface 13",
      },
      {
        type: "image",
        src: "/projects/stage-management/14.png",
        title: "Stage Management — Interface 14",
      },
    ],
  },

  {
    title: "Système de Gestion d’Archivage",
    category: "PFE Project — Web & Desktop",
    shortDescription:
      "Document archiving and management system developed in Web and Desktop versions.",
    description:
      "A document archiving and management solution developed as a PFE project. The project includes two versions: a Web application and a Desktop application. The objective is to organize, store, search and manage archived documents through a structured digital system.",
    technologies: [
      "Web Development",
      "Desktop Development",
      "Database",
      "Software Engineering",
    ],
    skills: [
      "Software Engineering",
      "Database Management",
      "Web Development",
      "Desktop Application Development",
      "System Design",
    ],
    cover: "/projects/archivage/02.png",
    media: [
      {
        type: "image",
        src: "/projects/archivage/01.png",
        title: "Archiving System — Interface 1",
      },
      {
        type: "image",
        src: "/projects/archivage/02.png",
        title: "Archiving System — Interface 2",
      },
      {
        type: "image",
        src: "/projects/archivage/03.png",
        title: "Archiving System — Interface 3",
      },
      {
        type: "image",
        src: "/projects/archivage/04.png",
        title: "Archiving System — Interface 4",
      },
      {
        type: "image",
        src: "/projects/archivage/05.png",
        title: "Archiving System — Interface 5",
      },
      {
        type: "image",
        src: "/projects/archivage/06.png",
        title: "Archiving System — Interface 6",
      },
      {
        type: "image",
        src: "/projects/archivage/07.png",
        title: "Archiving System — Interface 7",
      },
      {
        type: "image",
        src: "/projects/archivage/08.png",
        title: "Archiving System — Interface 8",
      },
      {
        type: "image",
        src: "/projects/archivage/09.png",
        title: "Archiving System — Interface 9",
      },
      {
        type: "image",
        src: "/projects/archivage/10.png",
        title: "Archiving System — Interface 10",
      },
    ],
  },

  {
    title: "Image Processing",
    category: "Computer Vision",
    shortDescription:
      "Project focused on digital image processing and computer vision techniques.",
    description:
      "A computer vision project focused on processing and analyzing digital images. The project explores image transformation, enhancement and analysis techniques to extract useful visual information.",
    technologies: [
      "Python",
      "OpenCV",
      "NumPy",
      "Matplotlib",
    ],
    skills: [
      "Image Processing",
      "Computer Vision",
      "Python Programming",
      "Data Analysis",
    ],
    cover: "/projects/image-processing/01.png",
    media: [
      {
        type: "image",
        src: "/projects/image-processing/01.png",
        title: "Image Processing — Result 1",
      },
      {
        type: "image",
        src: "/projects/image-processing/02.png",
        title: "Image Processing — Result 2",
      },
      {
        type: "image",
        src: "/projects/image-processing/03.png",
        title: "Image Processing — Result 3",
      },
      {
        type: "image",
        src: "/projects/image-processing/04.png",
        title: "Image Processing — Result 4",
      },
      {
        type: "image",
        src: "/projects/image-processing/05.png",
        title: "Image Processing — Result 5",
      },
      {
        type: "image",
        src: "/projects/image-processing/06.png",
        title: "Image Processing — Result 6",
      },
    ],
  },

  {
    title: "WHISHPER",
    category: "Game Development — Psychological Horror",
    shortDescription:
      "First-person psychological horror puzzle game developed with Unreal Engine 5.",
    description:
      "WHISHPER is a first-person psychological horror puzzle game developed as part of my Master's work. The player explores a mysterious environment, solves puzzles, discovers a key, unlocks a door, collects four life elixirs, finds the ghost's grave and performs a ritual to make the ghost disappear.",
    technologies: [
      "Unreal Engine 5",
      "Blender",
      "Game Development",
      "3D Environment",
    ],
    skills: [
      "Game Design",
      "Level Design",
      "Environment Design",
      "3D Modeling",
      "Game Development",
    ],
    cover: "/projects/whisper/05.png",
    media: [
      {
        type: "image",
        src: "/projects/whisper/05.png",
        title: "WHISHPER — Gameplay",
      },
      {
        type: "video",
        src: "/projects/whisper/gameplay.mp4",
        title: "WHISHPER — Gameplay",
      },
    ],
  },

  {
    title: "BrainPath",
    category: "Educational Gaming Application",
    shortDescription:
      "Interactive educational application combining learning activities and game-based experiences.",
    description:
      "BrainPath is an educational application designed around interactive and game-based learning experiences. The application includes different activities and mini-games while providing structured spaces for children and parents. The project combines mobile development, backend services and data management.",
    technologies: [
      "Flutter",
      "Dart",
      "FastAPI",
      "PostgreSQL",
      "Python",
    ],
    skills: [
      "Mobile Development",
      "Software Engineering",
      "Backend Development",
      "Database Management",
      "Game-Based Learning",
    ],
    cover: "/projects/brainpath/01.png",
    media: [
      {
        type: "image",
        src: "/projects/brainpath/01.png",
        title: "BrainPath — Home",
      },
      {
        type: "image",
        src: "/projects/brainpath/02.png",
        title: "BrainPath — Game",
      },
      {
        type: "image",
        src: "/projects/brainpath/03.png",
        title: "BrainPath — Activity",
      },
      {
        type: "image",
        src: "/projects/brainpath/04.png",
        title: "BrainPath — Interface",
      },
      {
        type: "image",
        src: "/projects/brainpath/05.png",
        title: "BrainPath — Interface",
      },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [activeMedia, setActiveMedia] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = projects.length;

  /* =========================================================
     PROJECT NAVIGATION
  ========================================================= */

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

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  /* =========================================================
     OPEN / CLOSE PROJECT
  ========================================================= */

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveMedia(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveMedia(0);
  };

  /* =========================================================
     MEDIA NAVIGATION
  ========================================================= */

  const nextMedia = () => {
    if (!selectedProject) return;

    setActiveMedia(
      (current) =>
        current === selectedProject.media.length - 1
          ? 0
          : current + 1
    );
  };

  const previousMedia = () => {
    if (!selectedProject) return;

    setActiveMedia(
      (current) =>
        current === 0
          ? selectedProject.media.length - 1
          : current - 1
    );
  };

  /* =========================================================
     KEYBOARD
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedProject) {
        if (event.key === "Escape") {
          closeProject();
          return;
        }

        if (event.key === "ArrowRight") {
          nextMedia();
          return;
        }

        if (event.key === "ArrowLeft") {
          previousMedia();
          return;
        }
      }

      if (!selectedProject) {
        if (event.key === "ArrowRight") {
          goNext();
        }

        if (event.key === "ArrowLeft") {
          goPrevious();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, activeIndex]);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  /* =========================================================
     ACTIVE PROJECTS
  ========================================================= */

  const previousIndex =
    (activeIndex - 1 + total) % total;

  const nextIndex =
    (activeIndex + 1) % total;

  const activeProject = projects[activeIndex];
  const previousProject = projects[previousIndex];
  const nextProject = projects[nextIndex];

  return (
    <>
      {/* =========================================================
          PROJECTS SECTION
      ========================================================= */}

      <section
        id="projects"
        className="
          relative
          overflow-hidden
          py-28
          sm:py-36
        "
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* =====================================================
              CENTERED HEADER
          ===================================================== */}

          {/* =====================================================
                  CENTERED HEADER
              ===================================================== */}

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
                  Selected Work
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
                Projects
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
                A selection of projects where I combine software engineering, data, artificial intelligence and gaming.
              </p>
            </motion.div>

          {/* =====================================================
                  CAROUSEL STAGE
              ===================================================== */}

          <div
            className="
              relative
              mt-10
              h-[535px]
              w-full
              overflow-visible
              sm:mt-12
              sm:h-[535px]
              lg:h-[525px]
            "
            style={{
              perspective: "1400px",
              transformStyle: "preserve-3d",
            }}
          >

            {/* Ambient glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-400/[0.045]
                blur-[100px]
              "
            />

            {/* =================================================
                PREVIOUS CARD
            ================================================= */}

            <motion.div
              key={`previous-${previousProject.title}-${activeIndex}`}
              className="
                absolute
                left-1/2
                top-1/2
                hidden
                h-[410px]
                w-[410px]
                -translate-x-1/2
                -translate-y-1/2
                sm:block
                lg:h-[425px]
                lg:w-[425px]
              "
              style={{
                marginLeft: "-330px",
                transformStyle: "preserve-3d",
                zIndex: 10,
              }}
              initial={{
                opacity: 0,
                x: 25,
                rotateY: 24,
                scale: 0.78,
              }}
              animate={{
                opacity: 0.34,
                x: 0,
                rotateY: 22,
                scale: 0.8,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                type="button"
                onClick={() => goTo(previousIndex)}
                className="
                  group
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-[#07111f]
                  text-left
                  shadow-2xl
                  shadow-black/40
                  transition-all
                  duration-300
                  hover:border-cyan-400/20
                "
              >
                <img
                  src={previousProject.cover}
                  alt={previousProject.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    opacity-60
                    grayscale-[20%]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-[#07111f]/60 to-[#07111f]/20" />

                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-cyan-300/60">
                    Previous
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white/70">
                    {previousProject.title}
                  </h3>
                </div>
              </button>
            </motion.div>

            {/* =================================================
                NEXT CARD
            ================================================= */}

            <motion.div
              key={`next-${nextProject.title}-${activeIndex}`}
              className="
                absolute
                left-1/2
                top-1/2
                hidden
                h-[410px]
                w-[410px]
                -translate-x-1/2
                -translate-y-1/2
                sm:block
                lg:h-[425px]
                lg:w-[425px]
              "
              style={{
                marginLeft: "330px",
                transformStyle: "preserve-3d",
                zIndex: 10,
              }}
              initial={{
                opacity: 0,
                x: -25,
                rotateY: -24,
                scale: 0.78,
              }}
              animate={{
                opacity: 0.34,
                x: 0,
                rotateY: -22,
                scale: 0.8,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                type="button"
                onClick={() => goTo(nextIndex)}
                className="
                  group
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-[#07111f]
                  text-left
                  shadow-2xl
                  shadow-black/40
                  transition-all
                  duration-300
                  hover:border-cyan-400/20
                "
              >
                <img
                  src={nextProject.cover}
                  alt={nextProject.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    opacity-60
                    grayscale-[20%]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-[#07111f]/60 to-[#07111f]/20" />

                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-cyan-300/60">
                    Next
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white/70">
                    {nextProject.title}
                  </h3>
                </div>
              </button>
            </motion.div>

            {/* =================================================
                ACTIVE CARD
            ================================================= */}

            <AnimatePresence
              mode="wait"
              custom={direction}
            >
              <motion.div
                key={activeProject.title}
                custom={direction}
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
                  sm:h-[495px]
                  sm:w-[520px]
                  lg:h-[485px]
                  lg:w-[540px]
                "
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 70 : -70,
                  rotateY: direction > 0 ? -8 : 8,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -70 : 70,
                  rotateY: direction > 0 ? 8 : -8,
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.16}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -55) {
                    goNext();
                  } else if (info.offset.x > 55) {
                    goPrevious();
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    openProject(activeProject)
                  }
                  className="
                    group
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-cyan-400/[0.14]
                    bg-[#07111f]
                    text-left
                    shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                    transition-all
                    duration-500
                    hover:border-cyan-400/30
                    hover:shadow-[0_30px_90px_rgba(34,211,238,0.10)]
                  "
                >

                  {/* Background image */}

                  <div className="absolute inset-0">
                    <img
                      src={activeProject.cover}
                      alt={activeProject.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.035]
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-[#07111f]/50 to-transparent" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.10),transparent_35%)]" />
                  </div>

                  {/* Category */}

                  <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">

                    <div
                      className="
                        max-w-[75%]
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-[#020914]/65
                        px-3
                        py-1.5
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.14em]
                        text-cyan-300
                        backdrop-blur-xl
                      "
                    >
                      {activeProject.category}
                    </div>

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        group-hover:border-cyan-400/30
                        group-hover:bg-cyan-400/10
                        group-hover:text-cyan-300
                      "
                    >
                      <ArrowUpRight size={17} />
                    </div>

                  </div>

                  {/* Bottom content */}

                  <div className="absolute inset-x-5 bottom-5">

                    <div className="max-w-[480px]">

                      <h3
                        className="
                          text-2xl
                          font-semibold
                          tracking-tight
                          text-white
                          sm:text-3xl
                        "
                      >
                        {activeProject.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[470px]
                          text-xs
                          leading-6
                          text-slate-300/80
                          sm:text-sm
                        "
                      >
                        {activeProject.shortDescription}
                      </p>

                      {/* Technologies */}

                      <div className="mt-4 flex flex-wrap gap-2">

                        {activeProject.technologies
                          .slice(0, 3)
                          .map((technology) => (
                            <span
                              key={technology}
                              className="
                                rounded-lg
                                border
                                border-white/[0.09]
                                bg-black/30
                                px-2.5
                                py-1
                                text-[9px]
                                text-slate-300
                                backdrop-blur-md
                              "
                            >
                              {technology}
                            </span>
                          ))}

                      </div>

                      <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-cyan-300/80">
                        <span className="h-px w-6 bg-cyan-400/40" />
                        Click to explore
                      </div>

                    </div>

                  </div>

                  {/* Glass border */}

                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.05]" />

                </button>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                LEFT SIDE ARROW
            ================================================= */}

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous project"
              className="
                absolute
                left-1
                top-1/2
                z-50
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/20
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_25px_rgba(34,211,238,0.10)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                sm:left-3
                sm:h-11
                sm:w-11
                lg:left-5
              "
            >
              <ChevronLeft size={20} />
            </button>

            {/* =================================================
                RIGHT SIDE ARROW
            ================================================= */}

            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="
                absolute
                right-1
                top-1/2
                z-50
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/20
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_25px_rgba(34,211,238,0.10)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-110
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                sm:right-3
                sm:h-11
                sm:w-11
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>

          {/* =====================================================
              CAROUSEL INFO
          ===================================================== */}

          <div
            className="
              mt-3
              flex
              flex-col
              items-center
              justify-between
              gap-5
              sm:flex-row
            "
          >

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400/40" />

              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
                Drag or use arrows to explore
              </span>
            </div>

            <div className="flex items-center gap-5">

              <span className="hidden text-xs text-slate-600 sm:block">
                {activeIndex + 1} / {projects.length}
              </span>

              <div className="flex items-center gap-2">

                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to ${project.title}`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        index === activeIndex
                          ? "w-7 bg-cyan-400"
                          : "w-1.5 bg-white/20 hover:bg-white/40"
                      }
                    `}
                  />
                ))}

              </div>

            </div>

          </div>

          {/* =====================================================
              GITHUB
          ===================================================== */}

          <div className="mt-16 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-medium text-white">
                  Interested in seeing more?
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Explore my code and technical work on GitHub.
                </p>
              </div>

              <a
                href="https://github.com/oumayma123921"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  self-start
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/25
                  hover:bg-cyan-400/[0.05]
                  hover:text-cyan-300
                "
              >
                <FaGithub size={17} />
                <span>GitHub</span>
                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PROJECT MODAL
      ========================================================= */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/80
              p-4
              backdrop-blur-md
              sm:p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeProject();
              }
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                max-h-[92vh]
                w-full
                max-w-6xl
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.10]
                bg-[#07111f]
                shadow-2xl
                shadow-black/50
              "
            >

              {/* Close */}

              <button
                type="button"
                onClick={closeProject}
                aria-label="Close project"
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  text-slate-300
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/10
                  hover:text-cyan-300
                "
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto">

                {/* =================================================
                    MEDIA VIEWER
                ================================================= */}

                <div className="relative bg-black">

                  <div
                    className="
                      relative
                      flex
                      min-h-[320px]
                      items-center
                      justify-center
                      sm:min-h-[500px]
                    "
                  >

                    {selectedProject.media[activeMedia].type ===
                    "video" ? (
                      <video
                        key={
                          selectedProject.media[activeMedia].src
                        }
                        src={
                          selectedProject.media[activeMedia].src
                        }
                        controls
                        playsInline
                        className="
                          max-h-[560px]
                          w-full
                          object-contain
                        "
                      >
                        <track
                          src=""
                          kind="captions"
                          srcLang="en"
                          label="English"
                          default
                        />
                      </video>
                    ) : (
                      <img
                        src={
                          selectedProject.media[activeMedia].src
                        }
                        alt={
                          selectedProject.media[activeMedia]
                            .title ||
                          selectedProject.title
                        }
                        className="
                          max-h-[560px]
                          w-full
                          object-contain
                        "
                      />
                    )}

                    {/* Previous media */}

                    {selectedProject.media.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={previousMedia}
                          aria-label="Previous media"
                          className="
                            absolute
                            left-4
                            top-1/2
                            flex
                            h-11
                            w-11
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-black/50
                            text-white
                            backdrop-blur-md
                            transition-all
                            hover:border-cyan-400/30
                            hover:bg-cyan-400/10
                            hover:text-cyan-300
                          "
                        >
                          <ChevronLeft size={22} />
                        </button>

                        {/* Next media */}

                        <button
                          type="button"
                          onClick={nextMedia}
                          aria-label="Next media"
                          className="
                            absolute
                            right-4
                            top-1/2
                            flex
                            h-11
                            w-11
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-black/50
                            text-white
                            backdrop-blur-md
                            transition-all
                            hover:border-cyan-400/30
                            hover:bg-cyan-400/10
                            hover:text-cyan-300
                          "
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}

                    {/* Counter */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-1/2
                        -translate-x-1/2
                        rounded-full
                        border
                        border-white/10
                        bg-black/50
                        px-3
                        py-1.5
                        text-xs
                        text-slate-300
                        backdrop-blur-md
                      "
                    >
                      {activeMedia + 1} /{" "}
                      {selectedProject.media.length}
                    </div>

                  </div>

                  {/* =================================================
                      THUMBNAILS
                  ================================================= */}

                  {selectedProject.media.length > 1 && (
                    <div
                      className="
                        flex
                        gap-3
                        overflow-x-auto
                        border-t
                        border-white/[0.06]
                        bg-black/40
                        p-4
                      "
                      style={{
                        scrollbarWidth: "none",
                      }}
                    >
                      {selectedProject.media.map(
                        (media, index) => (
                          <button
                            key={media.src}
                            type="button"
                            onClick={() =>
                              setActiveMedia(index)
                            }
                            className={`
                              relative
                              h-16
                              w-24
                              shrink-0
                              overflow-hidden
                              rounded-lg
                              border
                              transition-all
                              ${
                                index === activeMedia
                                  ? "border-cyan-400/70 ring-2 ring-cyan-400/20"
                                  : "border-white/10 opacity-60 hover:opacity-100"
                              }
                            `}
                          >
                            {media.type === "video" ? (
                              <>
                                <video
                                  src={media.src}
                                  muted
                                  preload="metadata"
                                  className="
                                    h-full
                                    w-full
                                    object-cover
                                  "
                                />

                                <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                                  <Play
                                    size={18}
                                    className="fill-white text-white"
                                  />
                                </span>
                              </>
                            ) : (
                              <img
                                src={media.src}
                                alt=""
                                className="
                                  h-full
                                  w-full
                                  object-cover
                                "
                              />
                            )}
                          </button>
                        )
                      )}
                    </div>
                  )}

                </div>

                {/* =================================================
                    DETAILS
                ================================================= */}

                <div className="p-6 sm:p-8 lg:p-10">

                  <div className="grid gap-10 lg:grid-cols-[1fr_300px]">

                    {/* Main content */}

                    <div>

                      <div
                        className="
                          mb-3
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-cyan-400/15
                          bg-cyan-400/[0.05]
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.15em]
                          text-cyan-300
                        "
                      >
                        <ImageIcon size={13} />
                        {selectedProject.category}
                      </div>

                      <h2
                        className="
                          text-3xl
                          font-semibold
                          tracking-tight
                          text-white
                          sm:text-4xl
                        "
                      >
                        {selectedProject.title}
                      </h2>

                      <p
                        className="
                          mt-5
                          max-w-3xl
                          text-sm
                          leading-7
                          text-slate-400
                          sm:text-base
                        "
                      >
                        {selectedProject.description}
                      </p>

                      {/* Skills */}

                      <div className="mt-8">

                        <h3
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-white
                          "
                        >
                          Skills
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">

                          {selectedProject.skills.map(
                            (skill) => (
                              <span
                                key={skill}
                                className="
                                  rounded-full
                                  border
                                  border-white/[0.08]
                                  bg-white/[0.025]
                                  px-3
                                  py-1.5
                                  text-xs
                                  text-slate-300
                                "
                              >
                                {skill}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                      {/* Technologies */}

                      <div className="mt-8">

                        <h3
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-white
                          "
                        >
                          Technologies
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">

                          {selectedProject.technologies.map(
                            (tech) => (
                              <span
                                key={tech}
                                className="
                                  rounded-full
                                  border
                                  border-cyan-400/10
                                  bg-cyan-400/[0.04]
                                  px-3
                                  py-1.5
                                  text-xs
                                  text-cyan-200
                                "
                              >
                                {tech}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                    {/* =================================================
                        SIDE INFORMATION
                    ================================================= */}

                    <div
                      className="
                        lg:border-l
                        lg:border-white/[0.06]
                        lg:pl-8
                      "
                    >

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.16em]
                          text-slate-600
                        "
                      >
                        Project
                      </p>

                      <p className="mt-2 text-sm text-slate-300">
                        {selectedProject.title}
                      </p>

                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            mt-6
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            px-4
                            py-3
                            text-sm
                            text-slate-300
                            transition-all
                            hover:border-cyan-400/25
                            hover:bg-cyan-400/[0.05]
                            hover:text-cyan-300
                          "
                        >
                          <span className="flex items-center gap-2">
                            <FaGithub size={17} />
                            GitHub
                          </span>

                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            mt-3
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-cyan-400/20
                            bg-cyan-400/[0.05]
                            px-4
                            py-3
                            text-sm
                            text-cyan-300
                            transition-all
                            hover:bg-cyan-400/[0.10]
                          "
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={16} />
                        </a>
                      )}

                      <div
                        className="
                          mt-8
                          rounded-xl
                          border
                          border-white/[0.06]
                          bg-white/[0.02]
                          p-4
                        "
                      >
                        <p className="text-xs leading-5 text-slate-500">
                          Use the arrows or keyboard ← → to
                          navigate through the project media.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
