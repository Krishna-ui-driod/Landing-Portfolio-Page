import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const navItems = ['Work', 'About', 'Skills', 'Contact'];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center font-['Orbitron'] font-bold text-white text-sm tracking-wider shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          K
        </div>
        <span className="font-['Orbitron'] font-semibold text-white tracking-widest text-sm hidden sm:block">KRISHNA</span>
      </div>

      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item} className="hidden md:block">
            <a
              href={`#${item.toLowerCase()}`}
              className="font-['Syne'] text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-violet-500 transition-all group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 font-['Syne'] text-sm font-semibold text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-300 shadow-[0_0_0_rgba(139,92,246,0)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            Let's Talk
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}
