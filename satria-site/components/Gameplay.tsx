"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

const FeatureModal = dynamic(() => import("./FeatureModal"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.55 } 
  },
};

const features = [
  {
    id: "build",
    title: "Build & Expand",
    short: "Construct your kampung and fortify your warriors.",
    desc: "Forge your kampung into a thriving fortress. Construct legendary forges, train warriors, and expand your dominion across the isles.",
    icon: "🏗️",
    bullets: ["Resource buildings & upgrades", "Training grounds & buffs", "Defensive structures & traps"],
  },
  {
    id: "pvp",
    title: "PvP Battles",
    short: "Challenge rival clans in epic tournaments.",
    desc: "Engage in cross-clan tournaments with real-time strategy. Earn $SATRIA and ascend the global leaderboards of the Archipelago.",
    icon: "⚔️",
    bullets: ["Ranked ladder & seasons", "Wagered duels (custodied)", "Esports-ready lobbies"],
  },
  {
    id: "heroes",
    title: "NFT Heroes",
    short: "Collect legendary Satrias with divine relics.",
    desc: "Summon mythical Satrias — each forged with divine relics and evolving abilities. Fuse, upgrade, and trade them in the open market.",
    icon: "🛡️",
    bullets: ["Evolutions & fusion", "Relic sockets & sets", "Marketplace trading & rental"],
  },
  {
    id: "land",
    title: "Land Ownership",
    short: "Acquire sacred islands to establish dominion.",
    desc: "Acquire sacred islands blessed by the Garuda. Develop them into strongholds generating resources, relics, and influence.",
    icon: "🏝️",
    bullets: ["Island rarities & biomes", "Production modifiers", "Guild taxation zones"],
  },
  {
    id: "guilds",
    title: "Guild Alliances",
    short: "Form alliances and wage epic wars.",
    desc: "Join powerful clans, form alliances, and wage epic wars for the Crown of Garuda. Strategy, unity, and loyalty decide the realm.",
    icon: "🤝",
    bullets: ["Alliance tech tree", "War campaigns & sieges", "Shared treasuries & payouts"],
  },
  {
    id: "creator",
    title: "Creator Hub",
    short: "Design skins and earn royalties.",
    desc: "Design custom skins, items, and experiences. Earn royalties through an on-chain creator economy powered by $SATRIA.",
    icon: "🎨",
    bullets: ["On-chain royalties", "Creator quests & passes", "Community curation & ratings"],
  },
];

export default function Gameplay() {
  const [activeFeature, setActiveFeature] = useState<typeof features[0] | null>(null);

  return (
    <section id="gameplay" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF8] via-[#FFF5EB] to-[#FFF3F6] pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#FFB200]/10 via-[#FF6A00]/5 to-[#FF3D6E]/10 blur-3xl top-[5%] left-[10%]"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#FF3D6E]/8 via-[#FFB200]/5 to-transparent blur-3xl bottom-[10%] right-[5%]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFB200] via-[#FF6A00] to-[#FF3D6E] drop-shadow-[0_2px_12px_rgba(255,178,0,.25)]"
          >
            Gameplay Features
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-subink max-w-3xl mx-auto leading-relaxed"
          >
            Immerse yourself in strategic battles, build your empire, and forge lasting alliances in the world of SATRIA.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              variants={fadeUp}
              onClick={() => setActiveFeature(feature)}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group text-left overflow-hidden rounded-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {/* Base Card */}
              <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/70 border border-[#FFDFA0]/30 shadow-[0_8px_32px_rgba(255,178,0,0.06)]" />

              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#FFB200] via-[#FF6A00] to-[#FF3D6E] bg-clip-border opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

              {/* Top Glow Strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFB200] via-[#FF6A00] to-[#FF3D6E] rounded-t-2xl opacity-70" />

              {/* Hover Energy Pulse */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFB200]/20 via-[#FF6A00]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Icon Orb */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF4D6] to-[#FFDFA0] flex items-center justify-center shadow-inner mb-4 text-2xl">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-orbitron)] text-lg font-semibold bg-gradient-to-r from-[#FFB200] to-[#FF6A00] bg-clip-text text-transparent mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#1A1C22]/80 leading-relaxed text-sm max-w-[28ch]">
                  {feature.short}
                </p>

                {/* CTA */}
                <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 group/cta">
                  Learn More
                  <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Feature Modal */}
      <FeatureModal
        open={!!activeFeature}
        onClose={() => setActiveFeature(null)}
        feature={activeFeature!}
      />
    </section>
  );
}
