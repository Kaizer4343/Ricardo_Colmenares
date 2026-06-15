import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 max-w-6xl mx-auto">
      <p className="font-mono text-xs text-purple-500 tracking-[0.2em] uppercase mb-3">
        {"// 02 — skills"}
      </p>
      <div className="h-px bg-gradient-to-r from-purple-700 to-transparent opacity-40 mb-3" />
      <h2 className="font-space font-bold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-white mb-12">
        My toolkit
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-[#111827] border border-purple-900/30 rounded-xl p-5 hover:border-purple-600 hover:-translate-y-0.5 transition-all duration-200"
          >
            <h4 className="font-space font-medium text-purple-300 text-[0.95rem] mb-3">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-purple-900/20 text-purple-300 font-mono text-[0.72rem] px-2 py-0.5 rounded border border-purple-900/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
