'use client'

import { motion } from "framer-motion";

const lines = [
  "Semoga hari ini ketemu banyak hal yang baik.",
  "Kalau ada yang nggak sesuai rencana, semoga tetap ada bagian yang bikin kamu seneng.",
  "Semoga kamu dikelilingi hal-hal yang baik.",
  "Have a nice day, ya.",
];

const HonestWordsSection = () => (
  <section className="py-24 px-6 relative">
    <div className="max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-handwritten text-center text-foreground mb-16"
      >
        a little words from me
      </motion.h2>
      <div className="space-y-8">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="text-xl md:text-2xl font-body text-foreground/80 text-center leading-relaxed"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
);

export default HonestWordsSection;
