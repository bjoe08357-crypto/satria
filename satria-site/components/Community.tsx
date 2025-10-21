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
            Connect with thousands of Satria warriors, share strategies, participate in events, and shape the future of
            the archipelago together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://discord.gg/satria"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn btn-primary"
            >
              💬 Join Discord
            </motion.a>
            <motion.a
              href="https://twitter.com/satriatoken"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn btn-ghost"
            >
              🐦 Follow on X
            </motion.a>
            <motion.a
              href="https://t.me/satriatoken"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn btn-ghost"
            >
              ✈️ Telegram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
