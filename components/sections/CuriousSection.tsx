"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const surprises = [
  {
    emoji: "💌",
    message:
      "Good morning (kalau kamu baca ini pagi-pagi). Semoga kamu mulai hari dengan perasaan yang bagus.",
  },
  { emoji: "⭐", message: "Semoga hal-hal baik nemuin kamu hari ini" },
  { emoji: "🫧", message: "Semoga hari ini lancar semua " },
  {
    emoji: "🌙",
    message:
      "Nanti malam semoga kamu nutup hari dengan hati yang tenang & seneng.",
  },
  {
    emoji: "☁️",
    message: "Semoga ada satu hal kecil yang bikin kamu lega hari ini.",
  },
  {
    emoji: "🎈",
    message:
      "Kalau kamu lagi butuh jeda sebentar, anggap ini jedanya. Yang hangat dan singkat.",
  },
];

const CuriousSection = () => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="py-24 px-6 relative">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-handwritten text-center text-foreground mb-4"
      >
        klik kalo lagi pengen
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground font-body mb-16"
      >
        Isinya kecil-kecil, tapi semoga suka yea.
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {surprises.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => toggle(i)}
            className={`cursor-pointer rounded-2xl p-6 min-h-[140px] flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg ${
              revealed.has(i) ? "bg-card" : "bg-lavender hover:scale-105"
            }`}
          >
            <AnimatePresence mode="wait">
              {!revealed.has(i) ? (
                <motion.span
                  key="emoji"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0, rotate: 180 }}
                  className="text-4xl"
                >
                  {item.emoji}
                </motion.span>
              ) : (
                <motion.p
                  key="message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm md:text-base font-body text-foreground text-center leading-relaxed"
                >
                  {item.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CuriousSection;
