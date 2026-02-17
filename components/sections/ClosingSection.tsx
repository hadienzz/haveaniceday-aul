"use client";

import { motion } from "framer-motion";

const ClosingSection = () => (
  <section className="py-32 px-6 relative">
    <div className="max-w-xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-handwritten text-foreground mb-8"
      >
        Semoga Harimu Baik
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-6"
      >
        <p className="text-xl font-body text-foreground/80 leading-relaxed">
          May good things follow you.
        </p>
        <p className="text-xl font-body text-foreground/80 leading-relaxed">
          Kalo kamu baca ini di pagi hari, Good morning ya aul.
        </p>
        <p className="text-2xl font-body text-foreground leading-relaxed font-semibold">
          Semoga hari ini baik, rapi, dan ada hal kecil yang bikin kamu senyum.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="mt-12"
      >
        <motion.span
          className="text-5xl inline-block"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        >
          😊
        </motion.span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
        className="mt-8 text-sm text-muted-foreground font-body"
      >
        — had1n
      </motion.p>
    </div>
  </section>
);

export default ClosingSection;
