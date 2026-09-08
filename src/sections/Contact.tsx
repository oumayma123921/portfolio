import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const contactLinks = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "View my projects",
    href: "#",
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something meaningful."
          description="Looking for a PFE internship or an opportunity to work on projects involving AI, Data Science, Computer Vision or Gaming."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main contact card */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-400/[0.06] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.1]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
                <Mail size={20} />
              </div>

              <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Have a project or opportunity in mind?
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                I am open to discussing PFE internships, collaborations and
                opportunities where I can contribute my skills in Artificial
                Intelligence, Data Science, Computer Vision and Gaming.
              </p>

              <a
                href="mailto:your.email@example.com"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]"
              >
                <span>Get in touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Contact links */}
          <div className="space-y-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-400 transition-colors duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                    <Icon size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                      {link.label}
                    </p>

                    <p className="mt-1 truncate text-sm text-slate-300 transition-colors duration-300 group-hover:text-white">
                      {link.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                  />
                </a>
              );
            })}

            {/* Location */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-400">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                  Location
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Fès, Morocco
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>

            <span className="text-sm text-slate-400">
              Open to PFE opportunities and collaborations
            </span>
          </div>

          <span className="text-xs uppercase tracking-[0.18em] text-slate-600">
            AI • Data • Vision • Gaming
          </span>
        </div>
      </div>
    </section>
  );
}