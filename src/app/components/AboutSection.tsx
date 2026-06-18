import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const skills = [
  { name: "UI / UX Design", level: 95 },
  { name: "Visual Identity", level: 90 },
  { name: "Motion & Interaction", level: 82 },
  { name: "Illustration", level: 78 },
  { name: "Design Systems", level: 88 },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-transparent to-indigo-500/20 z-10 mix-blend-overlay" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800"
              alt="Krishna portrait"
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
          <motion.div
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-violet-400/30 backdrop-blur-xl bg-violet-500/5 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <span
              className="text-xs tracking-[0.3em] text-violet-300"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              EST · 2019 ·
            </span>
          </motion.div>
          <div className="absolute -bottom-4 -left-4 px-4 py-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg">
            <p className="text-xs text-violet-300 tracking-[0.2em]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              BASED IN INDIA
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-violet-400 tracking-[0.3em] mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            · ABOUT ·
          </p>
          <h2
            className="text-5xl mb-8 leading-[1.05]"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Designing at the intersection of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              art & logic
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm Krishna — a multidisciplinary designer obsessed with the craft of interfaces,
            brand systems, and the small moments of delight that make products feel alive. Over
            the past seven years I've partnered with startups and studios to ship work that is
            equal parts considered and audacious.
          </p>

          <div className="space-y-5">
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="tracking-[0.15em] text-sm">{skill.name}</span>
                  <span
                    className="text-violet-300 text-sm"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="h-px bg-white/5 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-indigo-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
