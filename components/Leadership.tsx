export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-indigo-400 text-xs tracking-widest mb-3">LEADERSHIP & COMMUNITY</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Beyond the Code</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="card-hover p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <a
                href="https://www.meetup.com/spark-ai-seattle/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-indigo-400 transition-colors"
              >
                Spark+AI Seattle ↗
              </a>
              <p className="text-zinc-400 text-sm mt-0.5">Open Source Community Organizer</p>
            </div>
            <span className="font-mono text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
              Mar 2026 – Present
            </span>
          </div>
          <p className="text-zinc-500 text-sm italic mb-3">
            Seattle-based tech community focused on open source, AI, and data engineering.
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-zinc-300">
              <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
              Co-organized a Women + AI panel event for 100+ developers, leading event promotion and end-to-end logistics.
            </li>
            <li className="flex gap-2 text-sm text-zinc-300">
              <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
              Contributing to the growth of the Seattle tech ecosystem through events and community partnerships.
            </li>
          </ul>
        </div>

        <div className="card-hover p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
          <div className="mb-4">
            <p className="font-semibold text-white">Education</p>
            <p className="text-zinc-400 text-sm mt-0.5">Chung-Ang University</p>
          </div>
          <p className="text-zinc-500 text-sm italic mb-3">Bachelor of Architecture</p>
          <p className="text-sm text-zinc-300">
            Graduated Feb 2021. Transitioned from architecture to software engineering — bringing a
            systems-thinking mindset and a structured approach to complex problem-solving.
          </p>
          <span className="inline-block mt-4 font-mono text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">
            Feb 2021
          </span>
        </div>
      </div>
    </section>
  );
}
