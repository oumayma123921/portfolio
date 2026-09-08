import { ArrowDownRight, Sparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const highlights = [
  {
    number: "01",
    title: "Data & AI",
    description:
      "Building data-driven solutions using machine learning, analytics and intelligent systems.",
  },
  {
    number: "02",
    title: "Computer Vision",
    description:
      "Exploring real-time vision systems, hand tracking and gesture recognition for interactive applications.",
  },
  {
    number: "03",
    title: "Gaming",
    description:
      "Combining technology, creativity and game design to create immersive interactive experiences.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="About Me"
          title="Where data, intelligence and creativity meet."
          description="I am a Master's student focused on Data Science, Artificial Intelligence and technologies applied to the gaming industry."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main introduction */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.05] blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
                <Sparkles size={19} />
              </div>

              <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Turning complex problems into intelligent solutions.
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
                <p>
                  My academic journey combines software engineering, data
                  analytics and artificial intelligence with a strong interest
                  in the gaming industry.
                </p>

                <p>
                  I enjoy working on projects where technology interacts with
                  real-world data, intelligent systems or human interaction.
                  From machine learning and recommendation systems to computer
                  vision and interactive games, I like transforming ideas into
                  functional experiences.
                </p>

                <p>
                  Currently, I am developing my expertise through hands-on
                  projects involving Python, machine learning, computer vision,
                  data engineering, application development and game
                  technologies.
                </p>
              </div>

              <a
                href="#projects"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
              >
                <span>Explore my work</span>
                <ArrowDownRight size={16} />
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid gap-4">
            {highlights.map((highlight) => (
              <article
                key={highlight.number}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035]"
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs font-medium tracking-[0.2em] text-cyan-400/60">
                    {highlight.number}
                  </span>

                  <div>
                    <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {highlight.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] px-6 py-5 sm:px-8">
          <p className="text-center text-sm text-slate-500">
            <span className="text-cyan-400">Currently focused on:</span>{" "}
            Artificial Intelligence • Data Science • Computer Vision • Gaming
          </p>
        </div>
      </div>
    </section>
  );
}