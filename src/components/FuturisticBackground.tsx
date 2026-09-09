export default function FuturisticBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Soft ambient lights */}
      <div className="absolute left-[5%] top-[10%] h-96 w-96 rounded-full bg-cyan-400/[0.035] blur-3xl" />

      <div className="absolute right-[5%] top-[35%] h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.025] blur-3xl" />

      {/* Large floating ring */}
      <div className="bg-object-one absolute left-[4%] top-[18%] h-56 w-56 rounded-full border border-cyan-300/10">
        <div className="absolute inset-8 rounded-full border border-cyan-300/[0.07]" />
        <div className="absolute inset-16 rounded-full border border-cyan-300/[0.05]" />
      </div>

      {/* Large right ring */}
      <div className="bg-object-two absolute right-[4%] top-[12%] h-72 w-72 rounded-full border border-cyan-300/[0.08]">
        <div className="absolute inset-10 rounded-full border border-cyan-300/[0.06]" />
        <div className="absolute inset-20 rounded-full border border-cyan-300/[0.04]" />
      </div>

      {/* Diamond */}
      <div className="bg-object-three absolute left-[22%] top-[58%] h-20 w-20 rotate-45 border border-cyan-300/10 bg-cyan-400/[0.015]" />

      {/* Square */}
      <div className="bg-object-four absolute right-[18%] top-[62%] h-28 w-28 border border-cyan-300/[0.08] bg-cyan-400/[0.01]" />

      {/* Small floating circle */}
      <div className="bg-object-drift absolute left-[63%] top-[25%] h-24 w-24 rounded-full border border-cyan-300/[0.08]" />

      {/* Rotating object */}
      <div className="bg-object-rotate absolute left-[48%] top-[42%] h-16 w-16 rotate-45 border border-cyan-300/[0.08]" />

      {/* Small glowing points */}
      <span className="bg-object-pulse absolute left-[15%] top-[35%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
      <span className="bg-object-pulse absolute left-[38%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
      <span className="bg-object-pulse absolute right-[15%] top-[48%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
      <span className="bg-object-pulse absolute bottom-[20%] left-[45%] h-1.5 w-1.5 rounded-full bg-cyan-300" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,8,22,0.85)_100%)]" />
    </div>
  );
}