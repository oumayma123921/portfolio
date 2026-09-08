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
    <article className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.04]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06]">
          <span className="text-lg text-cyan-300">✦</span>
        </div>

        {date && (
          <span className="text-xs text-slate-600">
            {date}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
        {title}
      </h3>

      <p className="mt-2 text-sm font-medium text-cyan-400/80">
        {issuer}
      </p>

      {description && (
        <p className="mt-4 text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}

      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex text-sm text-slate-400 transition-colors hover:text-cyan-300"
        >
          View credential ↗
        </a>
      )}
    </article>
  );
}