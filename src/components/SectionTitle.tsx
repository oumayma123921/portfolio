interface SectionTitleProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: string;
  readonly centered?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-px w-8 bg-cyan-400/60" />

        <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
          {eyebrow}
        </span>

        <span className="h-px w-8 bg-cyan-400/60" />
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}