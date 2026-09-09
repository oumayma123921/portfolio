import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const certifications = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "August 30, 2026",
    image: "/certifications/artificial-intelligence-fundamentals.png",
    credentialUrl: "#",
  },
  {
    title: "Data Analytics for Machine Learning",
    issuer: "IBM SkillsBuild",
    date: "August 31, 2026",
    image: "/certifications/data-analytics-machine-learning.png",
    credentialUrl: "#",
  },
  {
    title: "Machine Learning Methods and Tools",
    issuer: "IBM SkillsBuild",
    date: "August 31, 2026",
    image: "/certifications/machine-learning-methods-tools.png",
    credentialUrl: "#",
  },
  {
    title: "Natural Language Processing",
    issuer: "IBM SkillsBuild",
    date: "August 31, 2026",
    image: "/certifications/natural-language-processing.png",
    credentialUrl: "#",
  },
  {
    title: "Supervised Learning Methods",
    issuer: "IBM SkillsBuild",
    date: "August 31, 2026",
    image: "/certifications/supervised-learning-methods.png",
    credentialUrl: "#",
  },
  {
    title: "Unsupervised Learning Methods",
    issuer: "IBM SkillsBuild",
    date: "August 31, 2026",
    image: "/certifications/unsupervised-learning-methods.png",
    credentialUrl: "#",
  },
];

type Certification = (typeof certifications)[number];

export default function Certifications() {
  const [selectedBadge, setSelectedBadge] =
    useState<Certification | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const total = certifications.length;

  /* ============================================================
     CAROUSEL
  ============================================================ */

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

  const previousIndex =
    (activeIndex - 1 + total) % total;

  const nextIndex =
    (activeIndex + 1) % total;

  const activeCertification =
    certifications[activeIndex];

  const previousCertification =
    certifications[previousIndex];

  const nextCertification =
    certifications[nextIndex];

  /* ============================================================
     OPEN / CLOSE DIALOG
  ============================================================ */

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (selectedBadge) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [selectedBadge]);

  /* ============================================================
     ESCAPE KEY
  ============================================================ */

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    const handleCancel = () => {
      setSelectedBadge(null);
    };

    dialog.addEventListener(
      "cancel",
      handleCancel
    );

    return () => {
      dialog.removeEventListener(
        "cancel",
        handleCancel
      );
    };
  }, []);

  /* ============================================================
     KEYBOARD CAROUSEL
  ============================================================ */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedBadge) return;

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
  }, [selectedBadge]);

  /* ============================================================
     BODY SCROLL LOCK
  ============================================================ */

  useEffect(() => {
    if (selectedBadge) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBadge]);

  /* ============================================================
     MODAL BACKDROP CLICK
  ============================================================ */

  const handleDialogClick = (
    event: React.MouseEvent<HTMLDialogElement>
  ) => {
    if (event.target === event.currentTarget) {
      setSelectedBadge(null);
    }
  };

  return (
    <>
      {/* ========================================================
          CERTIFICATIONS SECTION
      ======================================================== */}

      <section
        id="certifications"
        className="relative py-28 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          {/* ====================================================
              HEADER
          ==================================================== */}

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Credentials"
              title="Certifications"
              description="Continuous learning through professional courses and certifications in artificial intelligence, machine learning and data analytics."
            />

            {/* Desktop arrows */}
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous certification"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  text-slate-400
                  transition-all duration-300
                  hover:scale-105
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.06]
                  hover:text-cyan-300
                "
              >
                <ChevronLeft size={19} />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next certification"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  text-slate-400
                  transition-all duration-300
                  hover:scale-105
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.06]
                  hover:text-cyan-300
                "
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          {/* ====================================================
              MOBILE ARROWS
          ==================================================== */}

          <div className="mt-8 flex items-center justify-end gap-2 sm:hidden">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous certification"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-cyan-400/20
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_20px_rgba(34,211,238,0.08)]
                backdrop-blur-xl
              "
            >
              <ChevronLeft size={19} />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next certification"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-cyan-400/20
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_20px_rgba(34,211,238,0.08)]
                backdrop-blur-xl
              "
            >
              <ChevronRight size={19} />
            </button>
          </div>

          {/* ====================================================
              PREMIUM 3D CAROUSEL
          ==================================================== */}

          <div
            className="
              relative mt-10
              h-[520px]
              overflow-hidden
              sm:mt-12
              sm:h-[510px]
              lg:h-[500px]
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
                absolute left-1/2 top-1/2
                h-[380px] w-[380px]
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

            <div
              className="
                absolute left-1/2 top-1/2
                hidden
                h-[400px] w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                sm:block
                lg:h-[410px]
                lg:w-[315px]
              "
              style={{
                marginLeft: "-350px",
                transformStyle: "preserve-3d",
                zIndex: 10,
              }}
            >
              <button
                type="button"
                onClick={() => goTo(previousIndex)}
                className="
                  group
                  relative h-full w-full
                  overflow-hidden
                  rounded-3xl
                  border border-white/[0.07]
                  bg-[#07111f]
                  text-left
                  shadow-2xl shadow-black/40
                  transition-all duration-300
                  hover:border-cyan-400/20
                "
              >
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 p-8">
                  <img
                    src={previousCertification.image}
                    alt={`${previousCertification.title} badge`}
                    className="
                      max-h-[250px]
                      max-w-[210px]
                      object-contain
                      opacity-50
                      grayscale-[15%]
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-transparent to-transparent" />

                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-cyan-300/60">
                    Previous
                  </p>

                  <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-white/65">
                    {previousCertification.title}
                  </h3>
                </div>
              </button>
            </div>

            {/* =================================================
                NEXT CARD
            ================================================= */}

            <div
              className="
                absolute left-1/2 top-1/2
                hidden
                h-[400px] w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                sm:block
                lg:h-[410px]
                lg:w-[315px]
              "
              style={{
                marginLeft: "350px",
                transformStyle: "preserve-3d",
                zIndex: 10,
              }}
            >
              <button
                type="button"
                onClick={() => goTo(nextIndex)}
                className="
                  group
                  relative h-full w-full
                  overflow-hidden
                  rounded-3xl
                  border border-white/[0.07]
                  bg-[#07111f]
                  text-left
                  shadow-2xl shadow-black/40
                  transition-all duration-300
                  hover:border-cyan-400/20
                "
              >
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 p-8">
                  <img
                    src={nextCertification.image}
                    alt={`${nextCertification.title} badge`}
                    className="
                      max-h-[250px]
                      max-w-[210px]
                      object-contain
                      opacity-50
                      grayscale-[15%]
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-transparent to-transparent" />

                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-cyan-300/60">
                    Next
                  </p>

                  <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-white/65">
                    {nextCertification.title}
                  </h3>
                </div>
              </button>
            </div>

            {/* =================================================
                ACTIVE CARD
            ================================================= */}

            <motion.div
              key={activeCertification.title}
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
              className="
                absolute left-1/2 top-1/2
                z-30
                h-[450px]
                w-[calc(100%-50px)]
                max-w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                cursor-grab
                active:cursor-grabbing
                sm:h-[455px]
                sm:w-[350px]
                lg:h-[465px]
                lg:w-[365px]
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="
                  group
                  relative h-full w-full
                  overflow-hidden
                  rounded-3xl
                  border border-cyan-400/[0.16]
                  bg-[#07111f]
                  shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                  transition-all duration-500
                  hover:border-cyan-400/30
                  hover:shadow-[0_30px_90px_rgba(34,211,238,0.10)]
                "
              >

                {/* =================================================
                    BADGE IMAGE
                ================================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setSelectedBadge(activeCertification)
                  }
                  aria-label={`Enlarge ${activeCertification.title} badge`}
                  className="
                    relative
                    flex h-[275px]
                    w-full
                    cursor-zoom-in
                    items-center
                    justify-center
                    overflow-hidden
                    border-b border-white/[0.06]
                    bg-slate-950/70
                    p-8
                    sm:h-[285px]
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute inset-0
                      bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_62%)]
                    "
                  />

                  <img
                    src={activeCertification.image}
                    alt={`${activeCertification.title} badge`}
                    className="
                      relative z-10
                      max-h-[215px]
                      max-w-[245px]
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute inset-0
                      z-20
                      flex items-center justify-center
                      bg-slate-950/0
                      opacity-0
                      transition-all duration-300
                      group-hover:bg-slate-950/30
                      group-hover:opacity-100
                    "
                  >
                    <span
                      className="
                        rounded-full
                        border border-white/10
                        bg-slate-950/80
                        px-4 py-2
                        text-xs
                        font-medium
                        text-white
                        backdrop-blur-md
                      "
                    >
                      Click to enlarge
                    </span>
                  </div>
                </button>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="p-5">

                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="
                        rounded-full
                        border border-cyan-400/15
                        bg-cyan-400/[0.06]
                        px-2.5 py-1
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-cyan-300
                      "
                    >
                      IBM SkillsBuild
                    </span>

                    <span className="text-[10px] text-slate-600">
                      {activeCertification.date}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      min-h-[48px]
                      text-base
                      font-semibold
                      leading-6
                      text-white
                    "
                  >
                    {activeCertification.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-500">
                    Issued by {activeCertification.issuer}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedBadge(activeCertification)
                    }
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-cyan-300
                      transition-colors
                      hover:text-cyan-200
                    "
                  >
                    <span>View Badge</span>
                    <ExternalLink size={14} />
                  </button>
                </div>

                {/* Glass border */}

                <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/[0.05]" />
              </div>
            </motion.div>

            {/* =================================================
                LEFT ARROW
            ================================================= */}

            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous certification"
              className="
                absolute left-1 top-1/2
                z-50
                flex h-11 w-11
                -translate-y-1/2
                items-center justify-center
                rounded-full
                border border-cyan-400/20
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_25px_rgba(34,211,238,0.10)]
                backdrop-blur-xl
                transition-all duration-300
                hover:scale-110
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                sm:left-3
                lg:left-5
              "
            >
              <ChevronLeft size={21} />
            </button>

            {/* =================================================
                RIGHT ARROW
            ================================================= */}

            <button
              type="button"
              onClick={goNext}
              aria-label="Next certification"
              className="
                absolute right-1 top-1/2
                z-50
                flex h-11 w-11
                -translate-y-1/2
                items-center justify-center
                rounded-full
                border border-cyan-400/20
                bg-[#06101d]/95
                text-cyan-300
                shadow-[0_0_25px_rgba(34,211,238,0.10)]
                backdrop-blur-xl
                transition-all duration-300
                hover:scale-110
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
              "
            >
              <ChevronRight size={21} />
            </button>
          </div>

          {/* ====================================================
              BOTTOM INFO
          ==================================================== */}

          <div className="mt-3 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400/40" />

              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
                Drag or use arrows to explore
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span className="hidden text-xs text-slate-600 sm:block">
                {activeIndex + 1} / {certifications.length}
              </span>

              <div className="flex items-center gap-2">
                {certifications.map((certification, index) => (
                  <button
                    key={certification.title}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to ${certification.title}`}
                    className={`
                      h-1.5 rounded-full
                      transition-all duration-300
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
        </div>
      </section>

      {/* ========================================================
          BADGE MODAL
      ======================================================== */}

      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        aria-labelledby="badge-modal-title"
        className="
          fixed inset-0
          z-[100]
          m-0
          h-full
          max-h-none
          w-full
          max-w-none
          border-0
          bg-transparent
          p-0
          backdrop:bg-black/80
          backdrop:backdrop-blur-md
        "
      >
        {selectedBadge && (
          <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
            <div
              className="
                relative
                flex max-h-[95vh]
                w-full max-w-5xl
                flex-col
                overflow-hidden
                rounded-3xl
                border border-white/[0.1]
                bg-slate-950
                shadow-2xl
                shadow-black/50
              "
            >

              {/* ==================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={() => setSelectedBadge(null)}
                aria-label="Close badge preview"
                className="
                  absolute right-4 top-4
                  z-30
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-black/60
                  text-slate-300
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/10
                  hover:text-cyan-300
                "
              >
                <X size={20} />
              </button>

              {/* ==================================================
                  LARGE BADGE IMAGE
              ================================================== */}

              <div
                className="
                  flex min-h-[300px]
                  flex-1
                  items-center
                  justify-center
                  overflow-auto
                  bg-black/30
                  p-6
                  sm:min-h-[400px]
                  sm:p-10
                "
              >
                <img
                  src={selectedBadge.image}
                  alt={`${selectedBadge.title} badge enlarged`}
                  className="
                    max-h-[70vh]
                    max-w-full
                    object-contain
                  "
                />
              </div>

              {/* ==================================================
                  BADGE INFORMATION
              ================================================== */}

              <div
                className="
                  border-t border-white/[0.07]
                  bg-white/[0.02]
                  p-5
                  sm:p-7
                "
              >
                <div
                  className="
                    flex flex-col gap-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="min-w-0">
                    <span
                      className="
                        text-xs
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-cyan-300
                      "
                    >
                      IBM SkillsBuild
                    </span>

                    <h2
                      id="badge-modal-title"
                      className="
                        mt-2
                        pr-10
                        text-lg
                        font-semibold
                        leading-7
                        text-white
                        sm:text-2xl
                      "
                    >
                      {selectedBadge.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Issued by {selectedBadge.issuer} ·{" "}
                      {selectedBadge.date}
                    </p>
                  </div>

                  {selectedBadge.credentialUrl !== "#" && (
                    <a
                      href={selectedBadge.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border border-cyan-400/20
                        bg-cyan-400/[0.06]
                        px-4 py-2.5
                        text-sm
                        font-medium
                        text-cyan-300
                        transition-all duration-300
                        hover:border-cyan-400/30
                        hover:bg-cyan-400/[0.1]
                      "
                    >
                      View Credential
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

