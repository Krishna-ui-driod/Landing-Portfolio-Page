import { motion } from "motion/react";

interface FloatingAssetProps {
  src: string;
  alt: string;
  delay: number;
  depth: number;
  rotation: number;
}

export function FloatingAsset({ src, alt, delay, depth, rotation }: FloatingAssetProps) {
  return (
    <motion.div
      className="absolute"
      style={{
        zIndex: depth,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 70 + 10}%`,
      }}
      initial={{ opacity: 0, y: 100, rotateX: -90 }}
      animate={{
        opacity: 1,
        y: [0, -20, 0],
        rotateX: 0,
        rotateY: [rotation, rotation + 10, rotation],
        rotateZ: [0, 3, 0],
      }}
      transition={{
        opacity: { duration: 1, delay },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        rotateX: { duration: 1, delay },
        rotateY: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        rotateZ: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        },
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-48 h-64 object-cover rounded-lg shadow-2xl"
        style={{
          boxShadow: `0 ${depth * 10}px ${depth * 30}px rgba(124, 58, 237, 0.3)`,
          transform: `scale(${1 - depth * 0.1})`,
        }}
      />
    </motion.div>
  );
}
