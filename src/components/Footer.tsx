export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-white">
          <span className="text-cyan-400">&lt;</span>Oumaima<span className="text-cyan-400">/&gt;</span>
        </p>

        <p className="text-xs text-slate-600">
          Data Analytics • Business Intelligence • AI • Software Engineering • Gaming
        </p>

        <p className="text-xs text-slate-600">
          © {year} Oumaima
        </p>
      </div>
    </footer>
  );
}