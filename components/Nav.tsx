"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-zinc-800/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm text-indigo-400 tracking-widest">EJJ</span>
        <ul className="flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
