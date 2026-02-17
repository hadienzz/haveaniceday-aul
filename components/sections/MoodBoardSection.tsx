'use client'

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  { emoji: "🌅", label: "Senja", reason: "Buat ngingetin: semua hal ada waktunya, termasuk tenang.", color: "bg-peach" },
  { emoji: "☕", label: "Kopi", reason: "Biar pagimu mulai pelan, tapi tetap jalan.", color: "bg-cream" },
  { emoji: "🎵", label: "Satu lagu", reason: "Yang bikin kepala sedikit lebih ringan.", color: "bg-lavender" },
  { emoji: "🌧️", label: "Hujan", reason: "Biar ada suasana adem yang bikin hati enak.", color: "bg-mint" },
  { emoji: "📖", label: "Cerita bagus", reason: "Biar kamu inget hidup itu masih luas.", color: "bg-blush" },
  { emoji: "🌻", label: "Bunga matahari", reason: "Pelan-pelan cari cahaya. Itu juga progress.", color: "bg-peach" },
  { emoji: "🧸", label: "Malam yang cozy", reason: "Buat nutup hari dengan perasaan hangat.", color: "bg-cream" },
  { emoji: "✈️", label: "Tempat baru", reason: "Buat kamu punya sesuatu yang ditunggu.", color: "bg-lavender" },
];

const MoodBoardSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-handwritten text-center text-foreground mb-16"
      >
        moodboard kecil buat kamu!
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(hoveredIndex === i ? null : i)}
            className={`${item.color} rounded-2xl p-5 aspect-square flex flex-col items-center justify-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg relative overflow-hidden`}
          >
            {hoveredIndex !== i ? (
              <>
                <span className="text-4xl mb-2">{item.emoji}</span>
                <span className="font-handwritten text-xl text-foreground">{item.label}</span>
              </>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-body text-foreground text-center leading-relaxed italic"
              >
                "{item.reason}"
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoodBoardSection;
