import Image from "next/image";

const stats = [
  { number: "2", label: "Years exp." },
  { number: "1", label: "Projects" },
  { number: "4", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-6xl mx-auto">
      <p className="font-mono text-xs text-purple-500 tracking-[0.2em] uppercase mb-3">
        {"// 01 — about"}
      </p>
      <div className="h-px bg-gradient-to-r from-purple-700 to-transparent opacity-40 mb-3" />
      <h2 className="font-space font-bold text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight text-white mb-12">
        Who I am
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 items-start">
        <div>
          <div className="w-60 h-60 rounded-full border-2 border-purple-600 p-1 mb-6 overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Ricardo profile"
              className="w-full h-full rounded-full object-cover"
              width={190}
              height={190}
            />
          </div>
          <div className="flex gap-6 flex-wrap">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-space font-bold text-3xl text-purple-300 tracking-tight">
                  {s.number}
                </div>
                <div className="font-mono text-[0.7rem] text-gray-400 tracking-widest uppercase mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-gray-400 text-[0.95rem] leading-[1.85]">
          <p>
            Hey! I&apos;m Ricardo —  a BS Information Technology student with
            an interest in frontend development. I enjoy building simple and 
            user-friendly web applications using React, HTML, CSS, and JavaScript.
          </p>
          <p>
            I&apos;ve created projects such as an Anime Wallpaper app and our capstone
            project, TruckAlert. I&apos;m always learning and looking for opportunities to
            improve my skills as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
