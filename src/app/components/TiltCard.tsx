import { motion } from "motion/react";
import { useState, useRef, MouseEvent } from "react";

interface TiltCardProps {
  src: string;
  title: string;
  category: string;
}

export function TiltCard({ src, title, category }: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      <div className="relative overflow-hidden rounded-xl shadow-2xl h-80">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-violet-400 text-sm mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {category}
            </p>
            <h3 className="text-2xl text-white">{title}</h3>
          </div>
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124, 58, 237, 0.3) 0%, transparent 50%)",
          }}
        />
      </div>
    </motion.div>
  );
}
