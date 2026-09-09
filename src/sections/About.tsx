import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const experiences = [
  {
    type: "Internship",
    period: "August 2023",
    title: "Web Application Development",
    organization: "RADEEF — Fès",
    description:
      "Web application development focused on digitalizing and improving administrative processes.",
  },
  {
    type: "Internship",
    period: "May — June 2024",
    title: "Web Application Development",
    organization: "Commune de Salé",
    description:
      "Development of a web application for managing and monitoring internship activities.",
  },
  {
    type: "Final Year Project",
    period: "2024",
    title: "School Archives Management Application",
    organization: "BTS — Fès",
    description:
      "Development of a web and desktop application designed to organize and manage school archives.",
  },
];

const education = [
  {
    period: "2025 — Present",
    degree:
      "Master — Engineering & Analytics of Data Applied to the Gaming Industry",
    institution:
      "École Normale Supérieure de Fès — Université Sidi Mohamed Ben Abdellah",
    detail:
      "Data Analytics • Business Intelligence • Artificial Intelligence • Software Engineering • Gaming",
  },
  {
    period: "2024 — 2025",
    degree: "Professional Bachelor's — Business Intelligence",
    institution: "École Supérieure de Technologie de Fès",
    detail:
      "Business Intelligence • Data Analytics • Decision Support Systems",
  },
  {
    period: "2022 — 2024",
    degree:
      "Brevet de Technicien Supérieur — Information Systems Development",
    institution: "École Supérieure de BTS, Fès",
    detail:
      "Software Development • Information Systems • Application Development",
  },
  {
    period: "2021 — 2022",
    degree: "Baccalaureate — Physical Sciences",
    institution: "Lycée Abd El Karim Daoudi, Fès",
    detail: "Scientific Studies",
  },
];

const specialization = [
  "Data Analytics",
  "Business Intelligence",
  "Artificial Intelligence",
  "Software Engineering",
  "Gaming",
];

const slideAnimation = {
  initial: {
    opacity: 0,
    x: 25,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -25,
  },
};

export default function About() {
  /* ============================================================
     EXPERIENCE NAVIGATION
  ============================================================ */

  const [experienceIndex, setExperienceIndex] = useState(0);
  const [experienceDirection, setExperienceDirection] = useState(1);

  const nextExperience = () => {
    setExperienceDirection(1);

    setExperienceIndex(
      (current) => (current + 1) % experiences.length
    );
  };

  const previousExperience = () => {
    setExperienceDirection(-1);

    setExperienceIndex(
      (current) =>
        (current - 1 + experiences.length) % experiences.length
    );
  };

  const goToExperience = (index: number) => {
    setExperienceDirection(index > experienceIndex ? 1 : -1);
    setExperienceIndex(index);
  };

  /* ============================================================
     EDUCATION NAVIGATION
  ============================================================ */

  const [educationIndex, setEducationIndex] = useState(0);
  const [educationDirection, setEducationDirection] = useState(1);

  const nextEducation = () => {
    setEducationDirection(1);

    setEducationIndex(
      (current) => (current + 1) % education.length
    );
  };

  const previousEducation = () => {
    setEducationDirection(-1);

    setEducationIndex(
      (current) =>
        (current - 1 + education.length) % education.length
    );
  };

  const goToEducation = (index: number) => {
    setEducationDirection(index > educationIndex ? 1 : -1);
    setEducationIndex(index);
  };

  /* ============================================================
     AUTOMATIC EXPERIENCE NAVIGATION
  ============================================================ */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setExperienceDirection(1);

      setExperienceIndex(
        (current) => (current + 1) % experiences.length
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  /* ============================================================
     AUTOMATIC EDUCATION NAVIGATION
  ============================================================ */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setEducationDirection(1);

      setEducationIndex(
        (current) => (current + 1) % education.length
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* ======================================================
            SECTION HEADER
        ====================================================== */}

        <SectionTitle
          eyebrow="About Me"
          title="A multidisciplinary profile driven by data, technology and innovation."
          description="My academic and practical journey combines data analytics, Business Intelligence, artificial intelligence and software engineering, with a specialization applied to the gaming industry."
        />

        {/* ======================================================
            PROFILE + SPECIALIZATION
            STATIC — NO NAVIGATION
        ====================================================== */}

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">

          {/* PROFILE */}

          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/[0.05] blur-3xl" />

            <div className="relative">
              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
                  <Sparkles size={19} />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400/70">
                    My Profile
                  </p>

                  <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-white">
                    Oumaima Ibnayyad
                  </h3>

                  <p className="mt-1 text-xs font-medium leading-5 text-cyan-300">
                    Data Analytics • Business Intelligence • AI • Software
                    Engineering • Gaming
                  </p>
                </div>

              </div>

              <p className="mt-6 text-sm leading-7 text-slate-400">
                I am a Master&apos;s student specializing in Engineering and
                Analytics of Data applied to the Gaming Industry, with a
                background in Information Systems Development and Business
                Intelligence.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                My interests focus on Data Analytics, Business Intelligence,
                Artificial Intelligence, Machine Learning, software
                engineering and intelligent digital solutions.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">

                <div className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-slate-400">
                  <BriefcaseBusiness
                    size={13}
                    className="text-cyan-400"
                  />
                  3 Key Experiences
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-slate-400">
                  <GraduationCap
                    size={13}
                    className="text-cyan-400"
                  />
                  4 Academic Milestones
                </div>

                <div className="inline-flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-slate-400">
                  <MapPin size={13} className="text-cyan-400" />
                  Fès, Morocco
                </div>

              </div>
            </div>
          </div>

          {/* SPECIALIZATION */}

          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-6 sm:p-7">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-400/[0.05] blur-3xl" />

            <div className="relative">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400/70">
                Specialization
              </p>

              <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
                Engineering &amp; Analytics of Data Applied to the Gaming
                Industry
              </h3>

              <p className="mt-4 text-xs leading-6 text-slate-500">
                Combining data analytics, Business Intelligence, AI and
                software engineering with gaming technologies.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {specialization.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-slate-400 transition-colors duration-300 hover:border-cyan-400/20 hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================
            PROFESSIONAL EXPERIENCE
            INDEPENDENT NAVIGATION
        ====================================================== */}

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">

          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-6">

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400/70">
                Professional Experience
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white">
                Experience
              </h3>
            </div>

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={previousExperience}
                aria-label="Previous experience"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all hover:border-cyan-400/25 hover:text-cyan-300"
              >
                <ChevronLeft size={15} />
              </button>

              <button
                type="button"
                onClick={nextExperience}
                aria-label="Next experience"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all hover:border-cyan-400/25 hover:text-cyan-300"
              >
                <ChevronRight size={15} />
              </button>

            </div>
          </div>

          <div className="relative min-h-[220px] p-5 sm:p-6">

            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={experienceIndex}
                variants={slideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="grid gap-5 md:grid-cols-[150px_1fr]"
              >

                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-400/60">
                    {String(experienceIndex + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 text-xs text-slate-500">
                    {experiences[experienceIndex].period}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] uppercase tracking-[0.15em] text-slate-600">
                      {experiences[experienceIndex].type}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-cyan-400/40" />

                    <span className="text-xs font-medium text-slate-300">
                      {experiences[experienceIndex].organization}
                    </span>
                  </div>

                  <h4 className="mt-2 text-xl font-semibold text-white">
                    {experiences[experienceIndex].title}
                  </h4>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
                    {experiences[experienceIndex].description}
                  </p>
                </div>

              </motion.article>
            </AnimatePresence>

          </div>

          {/* EXPERIENCE DOTS */}

          <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] py-3.5">
            {experiences.map((experience, index) => (
              <button
                key={experience.period}
                type="button"
                onClick={() => goToExperience(index)}
                aria-label={`Go to experience ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  experienceIndex === index
                    ? "w-7 bg-cyan-400"
                    : "w-1.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

        </div>

        {/* ======================================================
            EDUCATION
            INDEPENDENT NAVIGATION
        ====================================================== */}

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">

          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-6">

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400/70">
                Education
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white">
                Academic Journey
              </h3>
            </div>

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={previousEducation}
                aria-label="Previous education"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all hover:border-cyan-400/25 hover:text-cyan-300"
              >
                <ChevronLeft size={15} />
              </button>

              <button
                type="button"
                onClick={nextEducation}
                aria-label="Next education"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all hover:border-cyan-400/25 hover:text-cyan-300"
              >
                <ChevronRight size={15} />
              </button>

            </div>
          </div>

          <div className="relative min-h-[230px] p-5 sm:p-6">

            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={educationIndex}
                variants={slideAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="grid gap-5 md:grid-cols-[150px_1fr]"
              >

                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-400/60">
                    {String(educationIndex + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 text-xs text-slate-500">
                    {education[educationIndex].period}
                  </p>
                </div>

                <div>

                  <h4 className="max-w-4xl text-xl font-semibold leading-snug text-white">
                    {education[educationIndex].degree}
                  </h4>

                  <p className="mt-2 text-sm font-medium text-slate-300">
                    {education[educationIndex].institution}
                  </p>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {education[educationIndex].detail}
                  </p>

                </div>

              </motion.article>
            </AnimatePresence>

          </div>

          {/* EDUCATION DOTS */}

          <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] py-3.5">
            {education.map((item, index) => (
              <button
                key={item.period}
                type="button"
                onClick={() => goToEducation(index)}
                aria-label={`Go to education ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  educationIndex === index
                    ? "w-7 bg-cyan-400"
                    : "w-1.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
