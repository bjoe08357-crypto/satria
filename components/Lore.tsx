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

const houses = [
  {
    name: "🜂 Solarin",
    desc: "Lords of Light and Honor. Radiant champions who command the power of the sun. They believe in divine order and justice, restoring the empire through law, discipline, and sacred fire. Their armies march under banners of gold, carrying both faith and flame into battle.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "Dravarn",
    desc: "Warriors of Flame and Steel. Forged in the crucible of war, the Dravarn thrive on conquest. They honor strength above all, believing peace is born only from power. Their forges never cool, their blades never rest — every battle is a chance for glory.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    name: "Noctara",
    desc: "Mystics of Shadow and Fate. Masters of deception and forbidden knowledge. They weave destiny from the unseen corners of the realm, manipulating events to maintain balance — or chaos. Their influence spreads silently through spies, assassins, and ancient sorcery.",
    gradient: "from-indigo-500 to-purple-600",
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
            <span className="text-gradient">The Rise of the Three Great Houses</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-subink max-w-3xl mx-auto leading-relaxed"
          >
            When the Empire of Gancho collapsed, chaos filled the realm. From the ruins emerged three great Houses — each sworn to rebuild the world in their own image. Their eternal struggle for the Throne of Dominion will decide the fate of the empire.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {houses.map((house) => (
            <motion.div
              key={house.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass rounded-2xl overflow-hidden card-hover group relative"
            >
              {/* Top Color Bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${house.gradient}`} />
              
              {/* Card Content */}
              <div className="p-6 relative z-10">
                <h3 className="font-[var(--font-orbitron)] text-xl font-bold mb-3 text-ink group-hover:text-gradient transition-all duration-300">
                  {house.name}
                </h3>
                <p className="text-sm md:text-base text-subink leading-relaxed">
                  {house.desc}
                </p>
              </div>
              
              {/* Hover Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${house.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
