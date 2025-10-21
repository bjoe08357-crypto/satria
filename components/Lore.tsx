"use client";

import { motion, cubicBezier } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

const tribes = [
  {
    name: "Garuda",
    desc: "Sky warriors wielding divine wind and thunder, soaring above the archipelago with unmatched grace.",
    icon: "🦅",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "Dewi",
    desc: "Mystic guardians blessed with healing and light, protectors of ancient wisdom and sacred temples.",
    icon: "✨",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    name: "Naga",
    desc: "Earth defenders commanding fire and stone, guardians of the underground realms and volcanoes.",
    icon: "🐉",
    gradient: "from-emerald-400 to-teal-500",
  },
];

export default function Lore() {
  return (
    <section id="lore" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-[var(--font-orbitron)] text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="text-gradient">The Awakening of the Satrias</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-subink max-w-3xl mx-auto leading-relaxed"
          >
            When the Isles of Garuda fell into shadow, the gods awakened the Satrias — tribes of Garuda, Dewi, and Naga
            — to reclaim ancient relics and restore the Crown of Garuda.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {tribes.map((tribe) => (
            <motion.div
              key={tribe.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass rounded-2xl overflow-hidden card-hover group relative"
            >
              {/* Top Color Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${tribe.gradient}`} />
              
              {/* Card Content */}
              <div className="p-6 relative z-10">
                <motion.div
                  className="text-5xl mb-4 inline-block"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tribe.icon}
                </motion.div>
                <h3 className="font-[var(--font-orbitron)] text-xl font-bold mb-3 text-ink group-hover:text-gradient transition-all duration-300">
                  {tribe.name}
                </h3>
                <p className="text-sm md:text-base text-subink leading-relaxed">
                  {tribe.desc}
                </p>
              </div>
              
              {/* Hover Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tribe.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
