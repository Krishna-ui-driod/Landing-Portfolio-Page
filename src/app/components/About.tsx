import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="py-32 px-8 md:px-24 bg-black relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left: Avatar/Image with 3D wrapper */}
        <motion.div 
          className="w-full md:w-1/2 relative perspective-[1000px]"
          style={{ y: y1 }}
        >
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group">
            <ImageWithFallback 
              src="/krishna-about.jpg"
              alt="Krishna Kumawat"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/40 to-transparent mix-blend-overlay" />
            
            {/* Floating badges */}
            <motion.div 
              className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
              animate={{ y: [0, -15, 0], rotateZ: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <span className="font-['Orbitron'] font-bold text-white">Ps</span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-16 right-8 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
              animate={{ y: [0, 20, 0], rotateZ: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <span className="font-['Orbitron'] font-bold text-white text-xl">Fi</span>
            </motion.div>
          </div>
          
          <div className="absolute -inset-4 bg-violet-600/20 blur-3xl -z-10 rounded-full" />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col justify-center"
          style={{ y: y2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <span className="font-['Syne'] text-sm text-violet-400 font-semibold uppercase tracking-wider">About Me</span>
          </div>
          
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Designing for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Future</span>
          </h2>
          
          <p className="font-['Syne'] text-white/60 text-lg mb-8 leading-relaxed">
            I am Krishna Kumawat, a passionate Graphic Designer & UI/UX Designer dedicated to creating digital experiences that are not only visually stunning but also intuitively functional. With a deep love for 3D aesthetics, minimal layouts, and neon-infused dark themes, I bring brands to life in the digital realm.
          </p>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-['Syne'] text-white text-sm font-semibold">UI/UX Design</span>
                <span className="font-['Orbitron'] text-white/60 text-sm">95%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-['Syne'] text-white text-sm font-semibold">Graphic Design & Branding</span>
                <span className="font-['Orbitron'] text-white/60 text-sm">90%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-['Syne'] text-white text-sm font-semibold">3D & Motion</span>
                <span className="font-['Orbitron'] text-white/60 text-sm">80%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                />
              </div>
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
