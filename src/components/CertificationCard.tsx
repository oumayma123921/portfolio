import { ArrowUpRight, Award } from "lucide-react";

interface CertificationCardProps {
  readonly title: string;
  readonly issuer: string;
  readonly date?: string;
  readonly description?: string;
  readonly credentialUrl?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  description,
  credentialUrl,
}: CertificationCardProps) {
  return (
    <article className="group relative min-w-[320px] max-w-[360px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.04]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.06] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.1]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
          <Award size={19} />
        </div>

        {date && (
          <span className="text-xs text-slate-600">
            {date}
          </span>
        )}
      </div>

      <div className="relative mt-6">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan-400/70">
          Certification
        </p>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-300">
          {title}
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-300">
          {issuer}
        </p>

        {description && (
          <p className="mt-4 text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}
      </div>

      {credentialUrl && (
        <div className="relative mt-6 border-t border-white/[0.06] pt-5">
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
          >
            <span>View credential</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </article>
  );
}