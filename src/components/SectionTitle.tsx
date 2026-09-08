interface SectionTitleProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}