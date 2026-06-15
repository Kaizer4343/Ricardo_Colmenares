import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 max-w-6xl mx-auto">
      <p className="font-mono text-xs text-purple-500 tracking-[0.2em] uppercase mb-3">
        {"// 03 — projects"}
      </p>
      <div className="h-px bg-gradient-to-r from-purple-700 to-transparent opacity-40 mb-3" />
      <h2 className="font-space font-bold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-white mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#111827] border border-purple-900/30 rounded-xl p-6 flex flex-col gap-3 hover:border-purple-600 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-10 h-10 bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Image
                src={project.icon}
                alt={project.title}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-space font-medium text-white text-base">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-1">
              <div className="flex gap-1.5 flex-wrap">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-900/20 text-purple-300 font-mono text-[0.68rem] px-2 py-0.5 rounded border border-purple-900/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-purple-300 font-mono text-xs tracking-wider hover:opacity-70 transition-opacity ml-2 shrink-0"
              >
                🔗 github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
