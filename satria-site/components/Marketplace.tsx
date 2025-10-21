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

export default function Marketplace() {
  return (
    <section id="marketplace" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass rounded-2xl p-12 text-center"
        >
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-5xl font-bold mb-6 text-gradient">
            NFT Marketplace
          </h2>
          <p className="text-lg text-subink max-w-3xl mx-auto mb-8 leading-relaxed">
            Trade legendary Satria NFTs, rare items, and exclusive skins. Guild markets, creator stores, dynamic
            royalties, and 1% burn on trades keep the economy thriving.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="btn btn-primary">
              Enter Marketplace
            </motion.button>
            <motion.a
              href="https://magiceden.io/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="btn btn-ghost"
            >
              Buy on Magic Eden ↗
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
