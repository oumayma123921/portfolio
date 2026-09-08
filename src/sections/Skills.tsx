import { Brain, Code2, Database, Gamepad2, Wrench } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import { skills } from "../data/skills";

const categoryConfig = [
  {
    name: "AI & Machine Learning",
    categories: ["AI", "Machine Learning"],
    icon: Brain,
  },
  {
    name: "Data Science",
    categories: ["Data Science"],
    icon: Database,
  },
  {
    name: "Development",
    categories: ["Backend", "Database", "Development"],
    icon: Code2,
  },
  {
    name: "Gaming & 3D",
    categories: ["Gaming", "3D & Gaming"],
    icon: Gamepad2,
  },
  {
    name: "Tools & Research",
    categories: ["Tools", "Research"],
    icon: Wrench,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Skills"
          title="A multidisciplinary technical toolkit."
          description="Technologies and skills I use to build data-driven applications, intelligent systems and interactive gaming experiences."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categoryConfig.map((category) => {
            const Icon = category.icon;

            const categorySkills = skills.filter((skill) =>
              category.categories.includes(skill.category),
            );

            return (
              <article
                key={category.name}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.035]"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.09]" />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-600">
                      {categorySkills.length} skills
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 grid gap-2.5">
                  {categorySkills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      category={skill.category}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] px-6 py-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-600">
              Core stack
            </span>

            <span className="hidden text-slate-700 sm:inline">•</span>

            <span className="text-sm text-slate-400">Python</span>

            <span className="text-slate-700">•</span>

            <span className="text-sm text-slate-400">
              Machine Learning
            </span>

            <span className="text-slate-700">•</span>

            <span className="text-sm text-slate-400">
              Computer Vision
            </span>

            <span className="text-slate-700">•</span>

            <span className="text-sm text-slate-400">Flutter</span>

            <span className="text-slate-700">•</span>

            <span className="text-sm text-slate-400">FastAPI</span>

            <span className="text-slate-700">•</span>

            <span className="text-sm text-slate-400">PostgreSQL</span>

            <span className="text-slate-700">•</span>

            <span className="text-sm text-slate-400">
              Unreal Engine 5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}