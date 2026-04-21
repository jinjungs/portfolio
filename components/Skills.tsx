const skillGroups = [
  {
    category: "Languages",
    icon: "⌨️",
    skills: ["Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Backend & Frameworks",
    icon: "⚙️",
    skills: ["Spring Boot", "Spring Batch", "Kafka", "RabbitMQ", "REST APIs"],
  },
  {
    category: "Infrastructure & DevOps",
    icon: "☁️",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Git"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "Oracle", "MongoDB", "NoSQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-indigo-400 text-xs tracking-widest mb-3">TECHNICAL SKILLS</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What I Work With</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="card-hover p-6 rounded-xl border border-zinc-800 bg-zinc-900/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">{group.icon}</span>
              <h3 className="font-semibold text-zinc-200">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-indigo-950/60 text-indigo-300 rounded-full border border-indigo-900/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
