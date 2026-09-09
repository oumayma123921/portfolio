import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import Button from "../components/Button";

export default function Hero() {
  /* ============================================================
     TYPEWRITER ROLES
  ============================================================ */

  const roles = [
    "Data Analyst",
    "AI & Machine Learning Engineer",
    "Software Engineer",
    "Business Intelligence Analyst",
    "Game Data Analyst",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeoutDuration = isDeleting ? 45 : 85;

    // Pause when the complete role has been written
    if (!isDeleting && displayedRole === currentRole) {
      timeoutDuration = 1800;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(
            currentRole.slice(0, displayedRole.length + 1)
          );
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(
            currentRole.slice(0, displayedRole.length - 1)
          );
        } else {
          setIsDeleting(false);
          setRoleIndex((current) => (current + 1) % roles.length);
        }
      }
    }, timeoutDuration);

    return () => window.clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 sm:pt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* ================= LEFT ================= */}

          <div className="max-w-3xl">

            {/* Specialty badge */}
            <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="text-[10px] font-medium leading-5 tracking-wide text-cyan-300 sm:text-xs">
                Software Engineering • Business Intelligence • Data Analytics
                • AI • Gaming
              </span>
            </div>

            {/* Greeting */}
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Oumaima{" "}
              <span className="text-cyan-400">Ibnayyad.</span>
            </h1>

            {/* ================= ANIMATED ROLE ================= */}

            <div className="mt-4 flex min-h-[42px] items-center sm:mt-5 sm:min-h-[52px]">
              <span className="text-xl font-medium tracking-tight text-slate-300 sm:text-3xl lg:text-4xl">
                {displayedRole}
                <span className="ml-1 inline-block text-cyan-400 animate-pulse">
                  |
                </span>
              </span>
            </div>

            {/* Main description */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
              Master&apos;s student specializing in{" "}
              <span className="text-slate-200">
                Engineering &amp; Analytics of Data applied to the Gaming
                Industry
              </span>
              , with a strong interest in{" "}
              <span className="text-slate-200">
                Data Analytics, Business Intelligence, Artificial Intelligence
                and Software Engineering.
              </span>
            </p>

            {/* Secondary description */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              I build data-driven and intelligent digital solutions by
              combining analytical thinking, software engineering and
              interactive technologies within the gaming ecosystem.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Button href="#projects">
                Explore my work
                <ArrowUpRight size={16} className="ml-2" />
              </Button>

              <Button href="#contact" variant="secondary">
                Let&apos;s connect
              </Button>

              <a
                href="/cv/Oumaima_Ibnayyad_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>

            {/* ================= CORE AREAS ================= */}

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/[0.06] pt-7 sm:mt-12 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4">

              <div>
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  Data
                </p>

                <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                  Analytics &amp; Insights
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  BI
                </p>

                <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                  Business Intelligence
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  AI
                </p>

                <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                  Intelligent Systems
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  Software
                </p>

                <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                  Engineering &amp; Development
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  Gaming
                </p>

                <p className="mt-1 text-[11px] text-slate-600 sm:text-xs">
                  Interactive Technologies
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT / PORTRAIT ================= */}

          <div className="relative mx-auto flex h-[380px] w-full max-w-[380px] items-center justify-center sm:h-[450px] sm:max-w-[450px] lg:h-[500px] lg:max-w-[500px]">

            {/* Main rings */}

            <div className="absolute inset-[8%] rounded-full border border-cyan-400/[0.08]" />

            <div className="absolute inset-[16%] rounded-full border border-cyan-400/[0.10]" />

            <div className="absolute inset-[25%] rounded-full border border-cyan-400/[0.12]" />

            {/* Glow */}

            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-3xl sm:h-72 sm:w-72" />

            {/* ================= CIRCULAR PORTRAIT ================= */}

            <div className="absolute left-1/2 top-1/2 z-10 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 sm:h-[285px] sm:w-[285px] lg:h-[320px] lg:w-[320px]">

              <div className="relative h-full w-full overflow-hidden rounded-full border border-cyan-400/20 bg-[#050816] shadow-[0_0_60px_rgba(34,211,238,0.12)]">

                <img
                  src="/images/profile.png"
                  alt="Oumaima Ibnayyad"
                  className="h-full w-full object-cover object-center"
                />

                {/* Inner border */}
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-cyan-300/10" />

              </div>
            </div>

            {/* ================= DECORATIVE POINTS ================= */}

            {/* Top left */}
            <div className="absolute left-[8%] top-[20%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)] sm:h-3 sm:w-3" />

            {/* Top right */}
            <div className="absolute right-[12%] top-[28%] h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

            {/* Bottom left */}
            <div className="absolute bottom-[18%] left-[20%] h-2 w-2 rounded-full bg-cyan-300/60 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

            {/* Bottom right */}
            <div className="absolute bottom-[24%] right-[15%] h-3 w-3 rounded-full border border-cyan-300/30" />

            {/* ================= DATA LABEL ================= */}

            <div className="absolute left-[3%] top-[48%] z-20 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#050816]/80 px-2.5 py-1.5 backdrop-blur-md sm:left-[8%] sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
                Data
              </span>
            </div>

            {/* ================= AI LABEL ================= */}

            <div className="absolute bottom-[30%] right-[1%] z-20 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#050816]/80 px-2.5 py-1.5 backdrop-blur-md sm:right-[3%] sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
                AI
              </span>
            </div>

            {/* ================= GAMING LABEL ================= */}

            <div className="absolute right-[12%] top-[7%] z-20 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#050816]/80 px-2.5 py-1.5 backdrop-blur-md sm:right-[18%] sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
                Gaming
              </span>
            </div>

            {/* ================= BI LABEL ================= */}

            <div className="absolute bottom-[18%] left-[8%] z-20 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#050816]/80 px-2.5 py-1.5 backdrop-blur-md sm:left-[14%] sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
                BI
              </span>
            </div>

            {/* ================= SOFTWARE LABEL ================= */}

            <div className="absolute bottom-[11%] right-[10%] z-20 flex items-center gap-2 rounded-xl border border-white/[0.07] bg-[#050816]/80 px-2.5 py-1.5 backdrop-blur-md sm:right-[15%] sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-[9px] uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
                Software
              </span>
            </div>

            {/* ================= SCROLL ================= */}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:bottom-2">
              <a
                href="#about"
                className="flex flex-col items-center gap-2 text-slate-600 transition-colors hover:text-cyan-300"
              >
                <span className="text-[9px] uppercase tracking-[0.2em] sm:text-[10px]">
                  Scroll
                </span>

                <ArrowDown size={14} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
