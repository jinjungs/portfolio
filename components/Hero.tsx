export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 max-w-5xl mx-auto">
      <div className="animate-fade-in-up">
        <p className="font-mono text-indigo-400 text-sm tracking-widest mb-6">
          BACKEND SOFTWARE ENGINEER
        </p>
      </div>

      <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-7xl font-bold tracking-tight leading-tight mb-6">
        <span className="gradient-text">EJ Jung</span>
      </h1>

      <p className="animate-fade-in-up delay-200 text-xl sm:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-6">
        Product-minded Backend Engineer with 4+ years specializing in Java & Spring —
        building scalable systems and shipping products from{" "}
        <span className="text-white font-medium">0 to 1</span>.
      </p>

      <p className="animate-fade-in-up delay-300 text-base text-zinc-500 max-w-2xl leading-relaxed mb-10">
        I care about more than just writing code — I care about software quality, business needs,
        and the end users who actually use what I build. Currently co-founding{" "}
        <a
          href="https://flowdi.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Flowdi
        </a>
        , a time-tracking app shipped end-to-end with AI-assisted development.
      </p>

      <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
        <a
          href="#experience"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors duration-200"
        >
          View Experience
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-white rounded-lg font-medium transition-colors duration-200"
        >
          Get in Touch
        </a>
        <a
          href="https://ejjung.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-white rounded-lg font-medium transition-colors duration-200"
        >
          Blog ↗
        </a>
      </div>

      <div className="animate-fade-in-up delay-500 mt-20 flex flex-wrap gap-10">
        {[
          { value: "4+", label: "Years Experience" },
          { value: "10K+", label: "Daily Orders Handled" },
          { value: "70%", label: "Delivery Time Reduced" },
          { value: "10+", label: "APIs Idempotency Design" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
