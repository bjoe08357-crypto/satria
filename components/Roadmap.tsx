"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
};

const phases = [
  { quarter: "Q4 2025", title: "Foundation", items: ["Whitepaper v3", "Token Launch", "Community Building"] },
  { quarter: "Q1 2026", title: "NFT Drop", items: ["NFT Mint Event", "Staking Portal", "Magic Eden Listing"] },
  { quarter: "Q2 2026", title: "Beta Launch", items: ["Game Beta Release", "PvP Tournaments", "Land Sales"] },
  { quarter: "Q3 2026", title: "Full Release", items: ["Full Game Launch", "Marketplace Live", "Guild System"] },
  { quarter: "2027+", title: "Expansion", items: ["Cross-chain Bridge", "Esports League", "Mobile Version"] },
];

export default function Roadmap() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#FFF8EE] via-[#FFFDFB] to-[#FFF4F6]"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#FFB200]/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#FF3D6E]/15 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Rotating golden ring behind title */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-48 border-2 border-[#FFB200]/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
            <span className="text-gradient">Roadmap</span>
            <motion.div
              className="absolute -top-8 -left-12 w-32 h-32 border-2 border-[#FFB200]/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base md:text-lg text-subink max-w-3xl mx-auto leading-relaxed opacity-70"
          >
            Our journey from launch to becoming the premier Web3 gaming platform on Solana.
          </motion.p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          {/* Gradient Connector Line */}
          <div className="relative h-1 bg-gradient-to-r from-transparent via-[#FFB200]/20 to-transparent mb-16 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FFB200]/50 via-[#FF6A00]/50 to-[#FF3D6E]/50 rounded-full"
              style={{ width: lineWidth }}
            />
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-6"
          >
            {phases.map((phase, i) => (
              <motion.div
                key={phase.quarter}
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: "0 8px 32px rgba(255,178,0,0.25)" }}
                className="relative group"
              >
                {/* Card */}
                <div className="rounded-2xl backdrop-blur-xl bg-white/60 border border-[#FFDFA0]/30 p-6 shadow-[0_4px_20px_rgba(255,178,0,0.08)] transition-all duration-300 h-full flex flex-col">
                  {/* Badge */}
                  <motion.div
                    className="inline-block mb-4 self-start px-4 py-2 rounded-full bg-gradient-to-r from-[#FFB200] via-[#FF6A00] to-[#FF3D6E] text-white text-xs font-bold tracking-wide"
                    whileHover={{ scale: 1.05 }}
                  >
                    {phase.quarter}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-orbitron text-xl font-bold text-ink mb-4 group-hover:text-gradient transition-all duration-300">
                    {phase.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3 flex-1">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-subink font-grotesk">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFB200]/10 to-[#FF3D6E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Connector dot (hidden on last) */}
                {i < phases.length - 1 && (
                  <div className="absolute -right-3 top-1/2 w-6 h-6 -translate-y-1/2 hidden lg:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FFB200] to-[#FF6A00] shadow-[0_0_12px_rgba(255,178,0,0.5)]" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Timeline - Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-6 w-max"
            >
              {phases.map((phase) => (
                <motion.div
                  key={phase.quarter}
                  variants={itemVariants}
                  className="snap-center flex-shrink-0 w-80"
                  whileHover={{ y: -4 }}
                >
                  {/* Card */}
                  <div className="rounded-2xl backdrop-blur-xl bg-white/60 border border-[#FFDFA0]/30 p-6 shadow-[0_4px_20px_rgba(255,178,0,0.08)] transition-all duration-300 h-full group relative">
                    {/* Badge */}
                    <motion.div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFB200] via-[#FF6A00] to-[#FF3D6E] text-white text-xs font-bold tracking-wide">
                      {phase.quarter}
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-orbitron text-lg font-bold text-ink mb-4 group-hover:text-gradient transition-all">
                      {phase.title}
                    </h3>

                    {/* Items */}
                    <ul className="space-y-3">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-subink font-grotesk">
                          <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFB200]/10 to-[#FF3D6E]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
