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
    title: "1 · Build & Conquer",
    short: "Rise from the ruins and forge your stronghold.",
    desc: "Rise from the ashes of the old realm and establish your stronghold in the world of Gancho. Construct your fortress, upgrade your kingdom’s infrastructure, train your armies and expand your territory. Every decision — from resource allocation to city layout — influences your power in the realm and your access to $GNCO rewards.",
    icon: "🏗️",
    bullets: ["Design and upgrade your citadel", "Defend with walls, towers, and traps", "Strategize resource allocation"],
  },
  {
    id: "pvp",
    title: "2 · Epic PvP Wars",
    short: "Challenge rival houses in tactical, real-time battles.",
    desc: "Clash with rival houses in large-scale, strategic real-time battles that determine control over territories. Master formations, plan your timing, command your heroes — victory earns prestige, loot, and $GNCO. Dominate the map, influence global leaderboards, and forge your legacy.",
    icon: "⚔️",
    bullets: ["Territory control and sieges", "$GNCO rewards for victories", "Seasonal leaderboards"],
  },
  {
    id: "heroes",
    title: "3 · Legendary Hero NFTs",
    short: "Recruit champions of myth with unique skills.",
    desc: "Summon, collect and empower legendary heroes—each a unique NFT with distinct abilities, lore and on-chain provenance. From the Radiant Warden to the Shadow Archon, your hero roster is an asset. Upgrade gear, warp the battlefield, trade heroes for profit — all within the $GNCO-powered ecosystem.",
    icon: "🛡️",
    bullets: ["Unique NFT heroes with skills", "Equipment, training, and evolution", "Tradable, ownable, and upgradable"],
  },
  {
    id: "land",
    title: "4 · Territory Ownership & Economy",
    short: "Acquire NFT lands that generate resources and taxes.",
    desc: "Acquire NFT-based lands and domains that generate resources, taxes and strategic benefits for your house. Whether you command coastal strongholds, volcanic fortresses or merchant hubs, your territory is your asset. Build trade routes, extract resources and reinvest in the war effort—all tuned to the economy of Empire of Gancho.",
    icon: "🏝️",
    bullets: ["Land rarities and biomes", "Production and taxation systems", "Trade networks and upgrades"],
  },
  {
    id: "guilds",
    title: "5 · Guild Alliances & Realm Wars",
    short: "Unite to wage massive wars for relics and regions.",
    desc: "Join or forge powerful guild alliances to wage war for relics, map zones and relic control. Coordinate strategy with your house members, redefine global meta, and earn shared rewards in $GNCO. The stronger your guild and the more coordinated, the greater your influence on the world’s narrative.",
    icon: "🤝",
    bullets: ["Alliance mechanics and campaigns", "Sieges, relics, and payouts", "Coordinated large-scale warfare"],
  },
  {
    id: "creator",
    title: "6 · Creator & Marketplace Hub",
    short: "Mint skins, relics, and structures as NFTs.",
    desc: "Empower the community with a built-in Creator Hub where artists, designers and modders can mint skins, relics, and hero variants. Every piece is an NFT, tradeable in the marketplace using $GNCO. Earn royalties from your designs, support your favourite creators and build a thriving meta-economy around Empire of Gancho.",
    icon: "🎨",
    bullets: ["On-chain royalties", "Creator curation and ratings", "Ecosystem marketplace integrations"],
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
            Immerse yourself in strategic battles, build your empire, and forge lasting alliances in the Empire of Gancho.
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
