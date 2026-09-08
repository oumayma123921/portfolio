import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div className="relative max-w-3xl">
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3.5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs font-medium tracking-wide text-cyan-300">
                Open to PFE opportunities
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              <span className="block">Building intelligent</span>

              <span className="mt-2 block">
                <span className="text-cyan-300">experiences</span>
                <span className="text-white"> with data.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I’m Oumayma, a Master’s student specializing in{" "}
              <span className="text-slate-200">
                Data Science, Artificial Intelligence and Gaming
              </span>{" "}
              I build projects across machine learning, computer vision, software development and interactive experiences.
            </p>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[
                "Artificial Intelligence",
                "Data Science",
                "Computer Vision",
                "Gaming",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
              >
                <span>Explore my work</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/CV_Oumayma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04] hover:text-white"
              >
                <Download size={16} />
                <span>View CV</span>
              </a>
            </div>

            {/* Scroll indicator */}
            <a
              href="#about"
              className="mt-14 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-600 transition-colors duration-300 hover:text-cyan-300"
            >
              <span>Scroll to explore</span>
              <ArrowDown size={14} />
            </a>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-[420px] items-center justify-center lg:h-[500px] lg:max-w-[500px]">
            {/* Ambient glow */}
            <div className="absolute h-72 w-72 rounded-full bg-cyan-400/[0.05] blur-3xl" />

            {/* Outer ring */}
            <div className="hero-ring-one absolute h-[310px] w-[310px] rounded-full border border-cyan-300/[0.1] sm:h-[370px] sm:w-[370px]" />

            {/* Second ring */}
            <div className="hero-ring-two absolute h-[230px] w-[230px] rounded-full border border-cyan-300/[0.12] sm:h-[280px] sm:w-[280px]" />

            {/* Diamond */}
            <div className="hero-diamond absolute h-40 w-40 rotate-45 rounded-3xl border border-cyan-300/[0.14] bg-cyan-400/[0.015] sm:h-48 sm:w-48 sm:rounded-[2rem]" />

            {/* Inner diamond */}
            <div className="absolute h-24 w-24 rotate-45 rounded-2xl border border-cyan-300/[0.1]" />

            {/* Center */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/20 bg-[#050816]/90 shadow-[0_0_70px_rgba(34,211,238,0.12)] backdrop-blur-sm">
              <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.9)]" />
            </div>

            {/* Floating elements */}
            <div className="hero-float-one absolute left-[8%] top-[22%] flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="h-2 w-2 rounded-full bg-cyan-300/70" />
            </div>

            <div className="hero-float-two absolute bottom-[18%] right-[8%] flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025]">
              <div className="h-5 w-5 rounded-full border border-cyan-300/30" />
            </div>

            <div className="hero-float-three absolute right-[12%] top-[15%] h-5 w-5 rotate-45 border border-cyan-300/20" />

            {/* Orbit dots */}
            <span className="absolute left-[18%] top-[42%] h-1.5 w-1.5 rounded-full bg-cyan-300/60" />

            <span className="absolute right-[18%] top-[50%] h-1.5 w-1.5 rounded-full bg-cyan-300/50" />

            <span className="absolute bottom-[25%] left-[32%] h-1 w-1 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}