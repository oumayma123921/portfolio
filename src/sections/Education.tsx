import { GraduationCap, ArrowUpRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Education"
          title="A journey built around technology and data."
          description="My academic path combines software development, data analytics, artificial intelligence and gaming technologies."
        />

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/30 via-white/[0.08] to-transparent md:block" />

          <div className="space-y-6">
            {education.map((item, index) => (
              <article
                key={`${item.degree}-${item.institution}`}
                className="group relative md:pl-16"
              >
                {/* Timeline point */}
                <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-[#050816] md:flex">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-transform duration-300 group-hover:scale-150" />
                </div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035] sm:p-8">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.04] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.08]" />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
                          <GraduationCap size={19} />
                        </div>

                        <div>
                          <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-400/70">
                            Education {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="mt-2 max-w-3xl text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                            {item.degree}
                          </h3>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-500">
                        {item.period}
                      </span>
                    </div>

                    {/* Institution */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-slate-300">
                        {item.institution}
                      </span>

                      {item.field && (
                        <>
                          <span className="text-slate-700">•</span>

                          <span className="text-sm text-cyan-400/70">
                            {item.field}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-500 sm:text-base">
                      {item.description}
                    </p>

                    {/* Bottom link */}
                    <div className="mt-7 flex items-center justify-end border-t border-white/[0.06] pt-5">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-300"
                      >
                        <span>Get in touch</span>
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}