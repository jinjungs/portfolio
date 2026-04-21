const experiences = [
  {
    company: "Flowdi",
    url: "https://flowdi.app",
    role: "Full Stack Software Engineer / Co-Founder",
    period: "Jul 2025 – Present",
    description: "A cross-platform mobile time-tracking application providing statistics for time flow.",
    highlights: [
      "Owned end-to-end engineering from system architecture to App Store / Google Play deployment.",
      "Leveraged Claude Code as an agentic coding agent to deliver a React Native/Expo app with no prior mobile experience.",
      "Integrated Figma MCP to translate designer assets directly into production-ready components.",
      "Replaced a full analytics DB with a Google Sheets logging pipeline to track user activity without infrastructure overhead.",
    ],
    tags: ["React Native", "Expo", "Claude Code", "Figma MCP"],
  },
  {
    company: "SSG.COM",
    url: "https://ssg.com",
    role: "Backend Software Engineer",
    period: "Jun 2022 – Apr 2025",
    description: "E-commerce platform supporting nationwide retail and fulfillment services.",
    highlights: [
      "Built and launched a packaging system supporting 10,000+ daily orders for a new fulfillment center.",
      "Reduced overnight delivery processing time by 70%+ with a bulk-complete feature, preventing order delays.",
      "Ensured data integrity by implementing distributed locking, preventing race conditions across multi-user operations.",
      "Refactored the Arrival API using the Factory Method pattern, achieving 70% code reusability.",
      "Improved data consistency in Kafka-driven microservices by implementing failure recovery and retry mechanisms.",
      "Designed an idempotent locking mechanism adopted across 10+ REST APIs, eliminating duplicate request side effects.",
      "Reduced error detection time by 50% through real-time alerting.",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "Spring Batch", "MySQL", "Docker"],
  },
  {
    company: "WealthGuide",
    url: "#",
    role: "Backend Software Engineer",
    period: "Apr 2021 – May 2022",
    description: "Fintech startup providing personal pension asset management.",
    highlights: [
      "Integrated MyData API into a pension asset management system, ensuring full regulatory compliance.",
      "Enabled asynchronous data propagation across distributed systems using RabbitMQ.",
      "Automated CI/CD pipelines with Azure Pipelines, improving deployment speed and system reliability.",
    ],
    tags: ["Java", "Spring Boot", "RabbitMQ", "Azure Pipelines"],
  },
  {
    company: "CodeDay",
    url: "https://codeday.org",
    role: "Volunteer Engineering Mentor",
    period: "Jan 2026 – Feb 2026",
    description: "Nonprofit connecting students with industry mentors to build real-world tech experience.",
    highlights: [
      "Mentored 3 student developers on the p5.js open-source project with weekly sessions.",
      "Turned around 2 weeks of zero progress by breaking down the codebase, enabling the team to merge their first open-source PR.",
    ],
    tags: ["Mentorship", "Open Source", "p5.js"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-indigo-400 text-xs tracking-widest mb-3">WORK EXPERIENCE</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Where I&apos;ve Worked</h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 ml-[7px] hidden sm:block" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="sm:pl-10 relative">
              <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full border-2 border-indigo-500 bg-[#0a0a0f] hidden sm:block" />

              <div className="card-hover p-6 rounded-xl border border-zinc-800 bg-zinc-900/40">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-white hover:text-indigo-400 transition-colors"
                    >
                      {exp.company} ↗
                    </a>
                    <p className="text-zinc-400 text-sm mt-0.5">{exp.role}</p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-zinc-500 text-sm italic mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-zinc-300">
                      <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
