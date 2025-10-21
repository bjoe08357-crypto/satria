"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 16, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5 } 
  },
};

const techStack = [
  { name: "Solana", desc: "High-speed blockchain with low fees", icon: "◎" },
  { name: "Unity", desc: "Game engine with Solana SDK integration", icon: "🎮" },
  { name: "Arweave", desc: "Permanent decentralized storage", icon: "📦" },
  { name: "IPFS", desc: "Distributed file system for NFT metadata", icon: "🌐" },
  { name: "Magic Eden", desc: "Premier Solana NFT marketplace", icon: "🛍️" },
  { name: "Phantom", desc: "Leading Solana wallet", icon: "👻" },
];

export default function Technology() {
  return (
    <section id="technology" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Technology Stack
          </h2>
          <p className="text-lg text-subink max-w-3xl mx-auto leading-relaxed">
            Built on cutting-edge Web3 infrastructure for seamless gaming and trading experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { y: 16, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.06 } },
              }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-glow"
            >
              <div className="text-5xl mb-4">{tech.icon}</div>
              <h3 className="font-[var(--font-orbitron)] text-xl font-bold mb-2 text-ink">{tech.name}</h3>
              <p className="text-subink leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
