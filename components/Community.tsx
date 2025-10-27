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

export default function Community() {
  return (
    <section id="community" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass rounded-2xl p-12 text-center"
        >
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Join the Community
          </h2>
          <p className="text-lg text-subink max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of warriors shaping the future of Gancho. Stay updated on tournaments, NFT mints, and game events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://discord.gg/hmYvw4dX"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn btn-primary"
            >
              💬 Join Discord
            </motion.a>
            <motion.a
              href="https://x.com/SatriaToken"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn btn-ghost"
            >
              🐦 Follow on X
            </motion.a>
            {/* Telegram removed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
