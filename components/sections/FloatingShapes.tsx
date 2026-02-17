'use client'

import { motion } from "framer-motion";

const shapes = [
  { color: "bg-peach", size: "w-16 h-16", top: "10%", left: "5%", delay: 0 },
  { color: "bg-lavender", size: "w-12 h-12", top: "20%", left: "85%", delay: 1 },
  { color: "bg-mint", size: "w-20 h-20", top: "60%", left: "90%", delay: 2 },
  { color: "bg-blush", size: "w-10 h-10", top: "75%", left: "10%", delay: 0.5 },
  { color: "bg-cream", size: "w-14 h-14", top: "40%", left: "80%", delay: 1.5 },
  { color: "bg-lavender", size: "w-8 h-8", top: "85%", left: "50%", delay: 2.5 },
];

const FloatingShapes = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {shapes.map((shape, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full ${shape.color} ${shape.size} opacity-40`}
        style={{ top: shape.top, left: shape.left }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          delay: shape.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default FloatingShapes;
