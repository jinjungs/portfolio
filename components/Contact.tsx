const links = [
  {
    label: "Email",
    value: "ejjung.tech@gmail.com",
    href: "mailto:ejjung.tech@gmail.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/euijin-jung",
    href: "https://linkedin.com/in/euijin-jung",
    icon: "💼",
  },
  {
    label: "Blog",
    value: "ejjung.hashnode.dev",
    href: "https://ejjung.hashnode.dev",
    icon: "✍️",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-indigo-400 text-xs tracking-widest mb-3">CONTACT</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let&apos;s Connect</h2>
      </div>

      <div className="max-w-2xl">
        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          I&apos;m open to new opportunities, collaborations, and conversations about distributed
          systems, AI-agentic development, or the Seattle tech scene.
        </p>

        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="card-hover flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 group"
            >
              <span className="text-2xl">{link.icon}</span>
              <div>
                <p className="text-xs text-zinc-500 font-mono tracking-wider">{link.label}</p>
                <p className="text-zinc-200 group-hover:text-indigo-400 transition-colors">
                  {link.value}
                </p>
              </div>
              <span className="ml-auto text-zinc-600 group-hover:text-indigo-400 transition-colors">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
