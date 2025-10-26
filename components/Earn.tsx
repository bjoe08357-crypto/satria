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

const earnMethods = [
  { title: "Battle Rewards", desc: "Earn $GNCO by winning PvP and PvE battles.", icon: "⚔️" },
  { title: "NFT Marketplace", desc: "Trade heroes and items for profit.", icon: "🛒" },
  { title: "Land Yield", desc: "Generate passive income from owned islands.", icon: "🌾" },
  { title: "Guild Rewards", desc: "Share in your guild's conquest victories.", icon: "🏆" },
  { title: "Creator Royalties", desc: "Earn from every sale of your designs.", icon: "💎" },
  { title: "Staking", desc: "Lock tokens to earn APY and support the ecosystem.", icon: "🔒" },
  { title: "Referrals", desc: "Invite friends and earn commission.", icon: "🤝" },
];

export default function Earn() {
  return (
    <section id="earn" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Earn Model
          </h2>
          <p className="text-lg text-subink max-w-3xl mx-auto leading-relaxed">
            Multiple pathways to earn $GNCO tokens and build your wealth in the archipelago.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {earnMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { y: 16, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.05 } },
              }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-glow"
            >
              <div className="text-4xl mb-3">{method.icon}</div>
              <h3 className="font-[var(--font-orbitron)] text-lg font-bold mb-2 text-ink">{method.title}</h3>
              <p className="text-sm text-subink leading-relaxed">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
