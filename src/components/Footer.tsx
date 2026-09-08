export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-white">
            <span className="text-cyan-400">&lt;</span>
            <span>Oumayma</span>
            <span className="text-cyan-400">/&gt;</span>
          </p>

          <p className="mt-1 text-xs text-slate-600">
            AI • Data • Computer Vision • Gaming
          </p>
        </div>

        <p className="text-xs text-slate-600">
          © {currentYear} Oumayma. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-xs text-slate-500 transition-colors hover:text-cyan-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}