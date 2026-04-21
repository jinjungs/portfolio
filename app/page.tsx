import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0]">
      <Nav />
      <Hero />
      <Skills />
      <Experience />
      <Leadership />
      <Contact />
      <footer className="text-center py-8 text-sm text-zinc-600 border-t border-zinc-800/50">
        <p>© 2026 Eui Jin Jung. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
