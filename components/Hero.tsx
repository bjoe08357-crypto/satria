"use client";

import { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import dynamic from "next/dynamic";

const BackgroundIslands = dynamic(() => import("@/components/BackgroundIslands"), {
  ssr: false,
});

const TOKEN_ADDRESS = "0x8b91b90307608278Db5ad4D8b1b6878C1702a0dE";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  },
};

export default function Hero() {
  const [showToast, setShowToast] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const copyToken = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePlayDemo = () => {
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 3000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <BackgroundIslands />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-surface pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto px-4 py-12 text-center max-w-5xl"
      >
        {/* Emblem with Float Animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.img
            src="/assets/ganchologotrans.png"
            alt="Empire of Gancho Emblem"
            className="w-20 h-20 md:w-28 md:h-28 mx-auto drop-shadow-[0_0_30px_rgba(255,178,0,0.4)] animate-float"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="font-[var(--font-orbitron)] text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          <span className="text-gradient inline-block">
            Step into a world where ambition, warfare, and destiny collide.
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg font-semibold mb-3 text-ink tracking-wide"
          style={{ fontFamily: 'var(--font-grotesk)' }}
        >
          Empire of Gancho is a Web3 strategy RPG where every battle, alliance, and victory reshapes the realm — and your fortune.
        </motion.p>

        {/* Body */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-subink max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Backed by the power of $GNCO, the token that fuels this empire of endless conquest.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <motion.button
            onClick={handlePlayDemo}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-primary"
          >
            🎮 Play Demo
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-ghost"
          >
            🔗 Connect Wallet
          </motion.button>
          
          <motion.a
            href="https://ganchotoken.gitbook.io/gancho-token/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-ghost"
          >
            📄 View Whitepaper
          </motion.a>
          
          <motion.button
            onClick={copyToken}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-ghost"
            title={TOKEN_ADDRESS}
          >
            📋 Copy Token
          </motion.button>
        </motion.div>

        {/* Token Address */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm"
        >
          <span className="text-subink font-medium">Token:</span>
          <code className="text-primary font-mono font-semibold tracking-tight truncate max-w-xs">
            {TOKEN_ADDRESS}
          </code>
        </motion.div>
      </motion.div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setShowComingSoon(false)}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92vw] max-w-md"
            >
              <div className="glass rounded-3xl p-8 md:p-12 text-center shadow-2xl border-2 border-primary/20 max-h-[85vh] overflow-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-6"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary via-accent to-rose flex items-center justify-center shadow-glow-primary">
                    <span className="text-5xl">🎮</span>
                  </div>
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-[var(--font-orbitron)] text-3xl font-bold mb-4"
                >
                  <span className="text-gradient">Coming Soon!</span>
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-subink text-lg leading-relaxed mb-8"
                >
                  The Empire of Gancho game demo is currently in development. Stay tuned for an epic gaming experience!
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setShowComingSoon(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full py-4 font-bold text-lg"
                >
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 rounded-2xl glass text-primary text-sm font-semibold z-50 shadow-glow-primary"
          >
            <div className="flex items-center gap-2">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-lg"
              >
                ✓
              </motion.span>
              Token address copied to clipboard!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
