import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] ${
        project.featured ? "p-7 lg:p-8" : "p-6"
      }`}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.05] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.1]" />

      <div className="relative mb-8 flex items-center justify-between gap-4">
        <span className="text-sm font-medium tracking-widest text-slate-600">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-xs font-medium text-cyan-300">
          {project.category}
        </span>
      </div>

      <div className="relative mb-8 flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#030610]">
        <div className="absolute h-36 w-36 rounded-full border border-cyan-400/[0.08] transition-transform duration-700 group-hover:scale-125" />

        <div className="absolute h-24 w-24 rounded-full border border-cyan-400/[0.12] transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute h-20 w-20 rotate-45 rounded-2xl border border-cyan-400/[0.14] transition-transform duration-700 group-hover:rotate-[135deg]" />

        <div className="relative h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.8)] transition-transform duration-500 group-hover:scale-150" />

        <span className="absolute left-[25%] top-[28%] h-1.5 w-1.5 rounded-full bg-cyan-300/50" />

        <span className="absolute bottom-[28%] right-[25%] h-1.5 w-1.5 rounded-full bg-cyan-300/40" />

        <span className="absolute right-[30%] top-[22%] h-1 w-1 rounded-full bg-white/30" />
      </div>

      <div className="relative">
        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-xs text-slate-400 transition-colors duration-300 group-hover:border-white/[0.1]"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="relative mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
          Project
        </span>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="text-slate-500 transition-colors duration-300 hover:text-white"
            >
              <FaGithub size={18} />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-300"
            >
              <span>View project</span>
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}