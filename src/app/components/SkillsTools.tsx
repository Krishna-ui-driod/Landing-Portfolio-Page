import { useEffect, useState } from 'react';

const tools = [
  { name: 'Figma', color: 'from-pink-500 to-purple-500', icon: 'Fi' },
  { name: 'Photoshop', color: 'from-blue-600 to-blue-400', icon: 'Ps' },
  { name: 'Illustrator', color: 'from-orange-500 to-yellow-500', icon: 'Ai' },
  { name: 'Blender', color: 'from-orange-400 to-orange-600', icon: 'Bl' },
];

export function SkillsTools() {
  return (
    <section className="py-24 bg-black overflow-hidden relative" id="skills">
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-['Orbitron'] text-3xl md:text-4xl font-bold text-white mb-4">Tools & Arsenal</h2>
        <p className="font-['Syne'] text-white/50">Software I use to bring ideas to life.</p>
      </div>

      <div className="relative w-full flex items-center justify-center py-10 perspective-[1000px]">
        {/* Static Tools Container */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto px-4 z-20">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={`w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 cursor-pointer relative group overflow-hidden transform-style-3d transition-transform duration-300 hover:scale-110 hover:shadow-2xl`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow`}>
                <span className="font-['Orbitron'] text-xl md:text-2xl font-bold text-white">{tool.icon}</span>
              </div>
              <span className="font-['Syne'] font-medium text-white/80 text-sm">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
