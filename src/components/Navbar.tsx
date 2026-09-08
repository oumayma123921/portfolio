const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#050816]/90 px-5 backdrop-blur-xl">
          <a
            href="#home"
            className="text-sm font-semibold tracking-wide text-cyan-400"
          >
            &lt;Oumayma/&gt;
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400/10 md:block"
          >
            Let's talk
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-medium text-cyan-300 md:hidden"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}