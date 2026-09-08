import type { ReactNode } from "react";

interface SkillBadgeProps {
  readonly name: string;
  readonly icon?: ReactNode;
  readonly category?: string;
}

export default function SkillBadge({
  name,
  icon,
  category,
}: SkillBadgeProps) {
  return (
    <div className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.04]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-16 w-16 rounded-full bg-cyan-400/[0.08] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {icon && (
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-slate-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
          {icon}
        </div>
      )}

      <div className="relative min-w-0">
        <p className="truncate text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
          {name}
        </p>

        {category && (
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-slate-600">
            {category}
          </p>
        )}
      </div>

      <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/30 transition-all duration-300 group-hover:bg-cyan-300 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
    </div>
  );
}