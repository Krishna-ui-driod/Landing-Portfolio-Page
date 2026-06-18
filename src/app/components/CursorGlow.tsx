import { motion } from 'motion/react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useEffect, useState } from 'react';

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-violet-500 pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: x - 16,
          y: y - 16,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[99] blur-[100px] opacity-20 bg-violet-600 mix-blend-screen"
        animate={{
          x: x - 200,
          y: y - 200,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 35, mass: 1 }}
      />
    </>
  );
}
