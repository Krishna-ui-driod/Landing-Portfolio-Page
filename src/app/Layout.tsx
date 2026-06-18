import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { About } from './components/About';
import { SkillsTools } from './components/SkillsTools';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CursorGlow } from './components/CursorGlow';

export default function Layout() {
  return (
    <div className="bg-black min-h-screen text-white font-['Syne'] selection:bg-violet-500/30">
      <CursorGlow />
      <Navigation />
      
      <main>
        <Hero />
        <ProjectsGrid />
        <About />
        <SkillsTools />
        <Contact />
      </main>
      
      <footer className="py-8 text-center border-t border-white/5 relative z-10">
        <p className="font-['Syne'] text-white/40 text-sm">
          © {new Date().getFullYear()} Krishna Kumawat. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
