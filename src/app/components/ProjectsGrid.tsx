import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

import poster1 from '../../imports/final_go_cart_holi_poster.jpg';
import poster2 from '../../imports/Mahaveer_Jayanti__Poster_go_cart.jpg';
import poster3 from '../../imports/aiza.jpg';
import poster4 from '../../imports/Mahaveer_Jayanti_Poster_DR._VS.jpg';
import poster5 from '../../imports/Ram_ravami_Poster_Ankur_Gas_Agency.jpg';

type Category = 'All' | 'UI/UX' | 'Graphic Design';

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    description: 'Comprehensive financial dashboard with real-time analytics.',
    category: 'UI/UX',
    tools: ['Figma', 'Protopie'],
    image: 'https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NzY4NjMzODN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Neon E-Commerce',
    description: 'Dark mode e-commerce app concept with 3D elements.',
    category: 'UI/UX',
    tools: ['Figma'],
    image: 'https://images.unsplash.com/photo-1776702701448-36220108225d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NzY5NjIwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Echo Music Player',
    description: 'A modern, immersive music streaming interface.',
    category: 'UI/UX',
    tools: ['Figma'],
    image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGFzaGJvYXJkJTIwYXBwfGVufDF8fHx8MTc3Nzk2NzM1MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Holi Go Cart',
    description: '',
    category: 'Graphic Design',
    tools: ['Photoshop', 'Illustrator'],
    image: poster1
  },
  {
    id: 5,
    title: 'Mahaveer Jayanti Go Cart',
    description: '',
    category: 'Graphic Design',
    tools: ['Photoshop', 'Illustrator'],
    image: poster2
  },
  {
    id: 6,
    title: 'Aiza',
    description: '',
    category: 'Graphic Design',
    tools: ['Photoshop'],
    image: poster3
  },
  {
    id: 7,
    title: 'Mahaveer Jayanti Dr. VS',
    description: '',
    category: 'Graphic Design',
    tools: ['Illustrator'],
    image: poster4
  },
  {
    id: 8,
    title: 'Ram Navami Ankur Gas',
    description: '',
    category: 'Graphic Design',
    tools: ['Photoshop'],
    image: poster5
  }
];

function TiltCard({ project }: { project: typeof projects[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const isGraphicDesign = project.category === 'Graphic Design';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`relative perspective-[1500px] ${isGraphicDesign ? 'row-span-2' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden transform-style-3d cursor-pointer shadow-2xl flex flex-col"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={`${isGraphicDesign ? 'h-96' : 'h-64'} overflow-hidden relative shrink-0`}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
          <ImageWithFallback 
            src={project.image} 
            alt={project.title}
            className={`w-full h-full transition-transform duration-700 hover:scale-110 ${isGraphicDesign ? 'object-contain bg-black/40' : 'object-cover'}`}
          />
          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-['Syne'] font-medium text-white">
            {project.category}
          </div>
        </div>
        
        <div className="p-6 relative bg-black/60 backdrop-blur-md border-t border-white/10 flex-grow flex flex-col">
          <h3 className="font-['Orbitron'] text-xl font-bold text-white mb-2">{project.title}</h3>
          {!isGraphicDesign && (
            <p className="font-['Syne'] text-white/60 text-sm mb-6 flex-grow">{project.description}</p>
          )}
          
          <div className={`flex flex-wrap gap-2 ${isGraphicDesign ? 'mt-2' : 'mt-auto'}`}>
            {project.tools.map(tool => (
              <span key={tool} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-['Syne'] text-white/80">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Highlight effect */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-violet-500/30"
            layoutId={`highlight-${project.id}`}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'UI/UX', 'Graphic Design'];

  let graphicCount = 0;
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') {
      if (project.category === 'Graphic Design') {
        graphicCount++;
        return graphicCount <= 3;
      }
      return true;
    }
    return project.category === activeCategory;
  });

  return (
    <section className="py-32 px-8 md:px-24 bg-black relative min-h-screen" id="work">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div>
            <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold text-white mb-2">Selected Works</h2>
            <p className="font-['Syne'] text-white/50 text-lg">UI/UX & Graphic Design</p>
          </div>
          
          {/* Tabs */}
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm relative z-20">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-['Syne'] font-bold transition-colors relative z-10 ${
                  activeCategory === category ? 'text-black' : 'text-white/70 hover:text-white'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <TiltCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
