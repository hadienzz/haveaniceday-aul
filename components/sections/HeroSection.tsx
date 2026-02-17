"use client";

import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <motion.span
        className="text-6xl inline-block mb-6"
        animate={{ rotate: [0, 20, -15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      >
        👋
      </motion.span>
      <h1 className="text-6xl md:text-8xl font-handwritten text-foreground mb-4">
        Halo, Aul.
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl md:text-2xl font-body text-muted-foreground max-w-md mx-auto"
      >
        Kalo kamu buka ini pas pagi, semoga kamu lagi dalam perasaan yang baik.
        Scroll pelan-pelan ya.
      </motion.p>
      <motion.div
        className="mt-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-3xl opacity-50">↓</span>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
