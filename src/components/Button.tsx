import type { ReactNode } from "react";

interface ButtonProps {
  readonly children: ReactNode;
  readonly href?: string;
  readonly variant?: "primary" | "secondary";
  readonly onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
      : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300";

  const classes = `${baseClasses} ${variantClasses}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}