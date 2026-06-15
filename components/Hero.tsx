export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-8 py-24 max-w-6xl mx-auto">
      <p className="font-mono text-xs text-purple-500 tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
        Available for new projects
      </p>

      <h1 className="font-space font-bold leading-[1.05] tracking-tight text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-6">
        Ricardo
        <br />
        <span className="text-purple-300">Colmenares</span>
      </h1>

      <div className="mb-2 space-y-1">
        <div className="flex items-center gap-2 font-mono text-base text-gray-400">
          <span className="text-purple-400">→</span>
          <span>role</span>
          <span className="text-gray-600">:</span>
          <span className="text-green-300">&quot;Frontend Developer&quot;</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-base text-gray-400">
          <span className="text-purple-400">→</span>
          <span>focus</span>
          <span className="text-gray-600">:</span>
          <span className="text-green-300">&quot;React · TypeScript · UI/UX&quot;</span>
          <span className="inline-block w-[10px] h-[1.1em] bg-purple-300 align-text-bottom animate-[blink_1s_step-end_infinite]" />
        </div>
      </div>

      <p className="text-gray-400 text-lg leading-relaxed max-w-xl mt-8 mb-2">
        I craft fast, accessible, and visually compelling web experiences.
        Turning complex ideas into clean, functional interfaces is what I do
        best.
      </p>

      <div className="flex gap-4 flex-wrap mt-6">
        <a
          href="#projects"
          className="bg-purple-700 hover:bg-purple-800 text-white px-7 py-3 rounded-md font-mono text-sm tracking-wider transition-all hover:-translate-y-0.5"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="border border-purple-900/50 text-purple-300 hover:bg-purple-900/20 px-7 py-3 rounded-md font-mono text-sm tracking-wider transition-all hover:-translate-y-0.5"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
