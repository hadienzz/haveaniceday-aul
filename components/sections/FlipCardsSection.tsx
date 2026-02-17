"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    front: "Good morning",
    back: "Kalau kamu baca ini pagi-pagi, semoga harimu dimulai dengan hal baik.",
  },
  {
    front: "Hari yang bagus",
    back: "Semoga hari ini banyak yang lancar, banyak yang bikin kamu senyum.",
  },
  {
    front: "Satu kabar baik",
    back: "Semoga ada satu momen yang bikin kamu bilang: 'oh, ternyata oke juga'.",
  },
  {
    front: "I'm here!",
    back: "Kalo nanti ada yang mau diceritain tentang hari ini, just hit me up yea",
  },
  { front: "Have a nice day", back: "Semoga harimu baik dan lancar today." },
];

const colors = ["bg-peach", "bg-lavender", "bg-mint", "bg-blush", "bg-cream"];

const FlipCard = ({
  front,
  back,
  color,
  index,
}: {
  front: string;
  back: string;
  color: string;
  index: number;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="perspective-1000 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-52 md:h-56"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 ${color} rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-3xl mb-3">✨</span>
          <h3 className="text-2xl font-handwritten text-foreground">{front}</h3>
          <p className="text-sm text-muted-foreground mt-2 font-body">
            tap buat buka
          </p>
        </div>
        {/* Back */}
        <div
          className={`absolute inset-0 ${color} rounded-2xl flex items-center justify-center p-6 shadow-lg`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-lg font-body text-foreground text-center leading-relaxed italic">
            "{back}"
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FlipCardsSection = () => (
  <section className="py-24 px-6 relative">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-5xl md:text-6xl font-handwritten text-center text-foreground mb-16"
    >
      little notes
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {cards.map((card, i) => (
        <FlipCard
          key={i}
          {...card}
          color={colors[i % colors.length]}
          index={i}
        />
      ))}
    </div>
  </section>
);

export default FlipCardsSection;
