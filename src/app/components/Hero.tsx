import { motion, useScroll, useTransform } from 'motion/react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useRef } from 'react';

export function Hero() {
  const { normalizedX, normalizedY } = useMousePosition();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, scale, y }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Grid Background */}
      <div className="absolute inset-0 z-0 perspective-[1000px]">
        <motion.div 
          className="absolute inset-0 w-[200%] h-[200%] -left-[50%] -top-[50%] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            rotateX: 60,
            y: 200,
            z: -400,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '0px 40px'],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none perspective-[1200px]">
        {/* Floating Abstract Shape */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-600/40 to-blue-500/40 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          animate={{
            x: normalizedX * -40,
            y: normalizedY * -40,
            rotateX: normalizedY * 20,
            rotateY: normalizedX * 20,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />
        {/* Floating UI Card */}
        <motion.div
          className="absolute bottom-[25%] right-[15%] w-48 h-32 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 p-4 shadow-xl"
          animate={{
            x: normalizedX * 50,
            y: normalizedY * 50,
            rotateX: normalizedY * -15,
            rotateY: normalizedX * -15,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        >
          <div className="w-full h-4 bg-white/10 rounded-full mb-3" />
          <div className="w-3/4 h-3 bg-white/10 rounded-full mb-2" />
          <div className="w-1/2 h-3 bg-white/10 rounded-full" />
        </motion.div>
        {/* Glowing Orb */}
        <motion.div
          className="absolute top-[30%] right-[25%] w-16 h-16 rounded-full bg-cyan-500/30 blur-2xl"
          animate={{
            x: normalizedX * 30,
            y: normalizedY * 30,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-['Syne'] text-sm text-white/80">Available for freelance work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Orbitron'] text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Krishna</span>
          <br />
          <span className="text-4xl md:text-6xl text-white/90">Creative Designer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-['Syne'] text-lg md:text-xl text-white/60 mb-10 max-w-2xl font-medium"
        >
          Crafting immersive digital experiences through Graphic Design & UI/UX. Elevating brands with forward-thinking aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#work"
            className="px-8 py-4 rounded-full bg-white text-black font-['Syne'] font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-['Syne'] font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-['Syne'] text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/3 bg-white"
            animate={{
              y: [0, 48]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
