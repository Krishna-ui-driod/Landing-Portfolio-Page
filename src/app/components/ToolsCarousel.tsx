import { Figma, Palette, PenTool, Box, Layers, Sparkles, Aperture, Brush } from "lucide-react";

const tools = [
  { name: "Figma", icon: Figma, color: "#a78bfa" },
  { name: "Photoshop", icon: Palette, color: "#60a5fa" },
  { name: "Illustrator", icon: PenTool, color: "#f59e0b" },
  { name: "Blender", icon: Box, color: "#fb923c" },
  { name: "After Effects", icon: Aperture, color: "#c084fc" },
  { name: "Procreate", icon: Brush, color: "#22d3ee" },
];

export function ToolsCarousel() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-14">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <p
            className="text-violet-400 tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            · TOOLKIT ·
          </p>
          <h2
            className="text-5xl"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Weapons of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              choice
            </span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex flex-wrap justify-center gap-6 py-4 max-w-6xl mx-auto px-4 z-20">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                className="shrink-0 w-56 h-56 rounded-2xl border border-white/10 backdrop-blur-md bg-white/[0.02] flex flex-col items-center justify-center gap-4 hover:border-violet-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${tool.color}30 0%, transparent 70%)`,
                  }}
                >
                  <Icon size={36} style={{ color: tool.color }} strokeWidth={1.5} />
                </div>
                <p
                  className="tracking-[0.2em] text-sm"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {tool.name.toUpperCase()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
