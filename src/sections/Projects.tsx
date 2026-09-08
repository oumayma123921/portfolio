import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects where technology becomes experience."
          description="A selection of academic and personal projects combining Artificial Intelligence, Data Science, Computer Vision, software development and gaming."
        />

        {/* Featured projects */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={featuredProjects.length + index}
              />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-5 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/70">
              More to explore
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
              Interested in how these projects were built?
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Explore the technologies, methodologies and ideas behind my
              work, or get in touch to discuss a potential collaboration.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.1] hover:text-cyan-200"
          >
            <span>Let's talk</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}