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
    <article className="group relative min-w-[340px] max-w-[420px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/25 hover:bg-white/[0.04] sm:min-w-[390px] sm:p-7">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.05] blur-3xl transition-all duration-700 group-hover:bg-cyan-400/[0.1]" />

      <div className="relative flex items-center justify-between">
        <span className="text-xs font-medium tracking-[0.2em] text-slate-600">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-[10px] font-medium text-cyan-300">
          {project.category}
        </span>
      </div>

      <div className="relative mt-7 flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#030610]">
        <div className="absolute h-32 w-32 rounded-full border border-cyan-400/[0.08] transition-transform duration-700 group-hover:scale-125" />

        <div className="absolute h-24 w-24 rotate-45 rounded-2xl border border-cyan-400/[0.1] transition-transform duration-700 group-hover:rotate-[135deg]" />

        <div className="absolute h-16 w-16 rounded-full border border-cyan-400/[0.12]" />

        <div className="relative h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-transform duration-500 group-hover:scale-150" />
      </div>

      <div className="relative mt-7">
        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {project.description}
        </p>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
        <span className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
          Project
        </span>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="text-slate-500 transition-colors hover:text-white"
            >
              <FaGithub size={18} />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-300"
            >
              <span>View project</span>
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}