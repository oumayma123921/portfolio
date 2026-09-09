import type { ReactNode } from "react";

interface SkillBadgeProps {
  readonly name: string;
  readonly icon?: ReactNode;
}

export default function SkillBadge({
  name,
  icon,
}: SkillBadgeProps) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]">
      {icon && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-slate-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
          {icon}
        </div>
      )}

      <span className="text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
        {name}
      </span>

      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400/30 transition-all duration-300 group-hover:bg-cyan-300 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
    </div>
  );
}