export default function FuturisticBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute left-[10%] top-[15%] h-96 w-96 rounded-full bg-cyan-400/[0.035] blur-3xl" />

      <div className="absolute right-[5%] top-[40%] h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.025] blur-3xl" />

      {/* Large floating sphere */}
      <div className="bg-object-one absolute left-[3%] top-[18%] h-52 w-52 rounded-full border border-cyan-300/15 bg-cyan-400/[0.025] shadow-[0_0_80px_rgba(34,211,238,0.04)]">
        <div className="absolute inset-7 rounded-full border border-cyan-300/10" />
        <div className="absolute inset-16 rounded-full border border-cyan-300/[0.08]" />
      </div>

      {/* Large ring */}
      <div className="bg-object-two absolute right-[5%] top-[12%] h-72 w-72 rounded-full border border-cyan-300/10">
        <div className="absolute inset-8 rounded-full border border-cyan-300/[0.08]" />
        <div className="absolute inset-20 rounded-full border border-cyan-300/[0.06]" />
      </div>

      {/* Floating diamond */}
      <div className="bg-object-three absolute left-[22%] top-[58%] h-20 w-20 rotate-45 border border-cyan-300/15 bg-cyan-400/[0.02]" />

      {/* Floating square */}
      <div className="bg-object-four absolute right-[20%] top-[60%] h-28 w-28 border border-cyan-300/10 bg-cyan-400/[0.015]" />

      {/* Small floating rings */}
      <div className="bg-object-drift absolute left-[65%] top-[25%] h-24 w-24 rounded-full border border-cyan-300/10" />

      <div className="bg-object-drift absolute bottom-[15%] left-[8%] h-32 w-32 rounded-full border border-cyan-300/[0.08]" />

      {/* Rotating geometric shape */}
      <div className="bg-object-rotate absolute left-[48%] top-[38%] h-16 w-16 rotate-45 border border-cyan-300/10" />

      {/* Small glowing points */}
      <span className="bg-object-pulse absolute left-[15%] top-[35%] h-1.5 w-1.5 rounded-full bg-cyan-300" />

      <span className="bg-object-pulse absolute left-[38%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-300" />

      <span className="bg-object-pulse absolute left-[58%] top-[16%] h-1.5 w-1.5 rounded-full bg-cyan-300" />

      <span className="bg-object-pulse absolute right-[15%] top-[48%] h-1.5 w-1.5 rounded-full bg-cyan-300" />

      <span className="bg-object-pulse absolute left-[45%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-cyan-300" />

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,8,22,0.8)_100%)]" />
    </div>
  );
}