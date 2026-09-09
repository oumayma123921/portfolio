import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
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

  const dialogRef = useRef<HTMLDialogElement>(null);

  /* ============================================================
     CAROUSEL
  ============================================================ */

  const scrollCertifications = (direction: "left" | "right") => {
    const container = document.getElementById(
      "certifications-scroll"
    );

    if (!container) return;

    const amount = 390;

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

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

    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, []);

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

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scrollCertifications("left")}
                aria-label="Previous certifications"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollCertifications("right")}
                aria-label="Next certifications"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* ====================================================
              CERTIFICATION CARDS
          ==================================================== */}

          <div
            id="certifications-scroll"
            className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {certifications.map((certification) => (
              <article
                key={certification.title}
                className="group w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:w-[330px]"
              >
                {/* ==================================================
                    BADGE IMAGE
                ================================================== */}

                <button
                  type="button"
                  onClick={() => setSelectedBadge(certification)}
                  aria-label={`Enlarge ${certification.title} badge`}
                  className="relative flex h-[210px] w-full cursor-zoom-in items-center justify-center overflow-hidden border-b border-white/[0.06] bg-slate-950/50 p-8"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

                  <img
                    src={certification.image}
                    alt={`${certification.title} badge`}
                    className="relative z-10 max-h-[155px] max-w-[180px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/30 group-hover:opacity-100">
                    <span className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                      Click to enlarge
                    </span>
                  </div>
                </button>

                {/* ==================================================
                    CARD CONTENT
                ================================================== */}

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-cyan-300">
                      IBM SkillsBuild
                    </span>

                    <span className="text-[11px] text-slate-600">
                      {certification.date}
                    </span>
                  </div>

                  <h3 className="min-h-[48px] text-base font-semibold leading-6 text-white">
                    {certification.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Issued by {certification.issuer}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedBadge(certification)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    <span>View Badge</span>
                    <ExternalLink size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* ====================================================
              BOTTOM HINT
          ==================================================== */}

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-12 bg-cyan-400/40" />

            <span className="text-xs uppercase tracking-[0.18em] text-slate-600">
              Scroll to explore
            </span>
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
        className="fixed inset-0 z-[100] m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-md"
      >
        {selectedBadge && (
          <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
            <div className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/[0.1] bg-slate-950 shadow-2xl shadow-black/50">

              {/* ==================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={() => setSelectedBadge(null)}
                aria-label="Close badge preview"
                className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <X size={20} />
              </button>

              {/* ==================================================
                  LARGE BADGE IMAGE
              ================================================== */}

              <div className="flex min-h-[300px] flex-1 items-center justify-center overflow-auto bg-black/30 p-6 sm:min-h-[400px] sm:p-10">
                <img
                  src={selectedBadge.image}
                  alt={`${selectedBadge.title} badge enlarged`}
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </div>

              {/* ==================================================
                  BADGE INFORMATION
              ================================================== */}

              <div className="border-t border-white/[0.07] bg-white/[0.02] p-5 sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-cyan-300">
                      IBM SkillsBuild
                    </span>

                    <h2
                      id="badge-modal-title"
                      className="mt-2 pr-10 text-lg font-semibold leading-7 text-white sm:text-2xl"
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
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.1]"
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