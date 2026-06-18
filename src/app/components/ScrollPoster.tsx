import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ScrollPoster() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -100]);

  return (
    <div ref={containerRef} className="h-[150vh] flex items-center justify-center relative">
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformPerspective: 1200,
        }}
        className="w-[90vw] max-w-4xl aspect-[3/4] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1762365189058-7be5b07e038b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyJTIwbW9ja3VwfGVufDF8fHx8MTc3Njk1OTkzOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Featured Design Work"
            className="w-full h-full object-cover mix-blend-overlay opacity-40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
            <motion.h2
              style={{
                fontFamily: "'Orbitron', sans-serif",
              }}
              className="text-7xl mb-6 tracking-tight text-white"
            >
              SHOWCASE
            </motion.h2>
            <p className="text-2xl text-violet-100 max-w-xl">
              Curated collection of visual identity, interface design, and creative direction
            </p>
          </div>
          <div className="absolute inset-0 border-4 border-violet-400/30 rounded-2xl" />
        </div>
      </motion.div>
    </div>
  );
}
