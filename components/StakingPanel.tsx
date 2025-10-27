"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TOKEN_ADDRESS = "0x8b91b90307608278Db5ad4D8b1b6878C1702a0dE";

export default function StakingPanel() {
  const [amount, setAmount] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="glass rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-block mb-4"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl shadow-glow-primary">
            🔒
          </div>
        </motion.div>
        
        <h2 className="font-[var(--font-orbitron)] text-4xl font-bold mb-3">
          <span className="text-gradient">Stake $GNCO</span>
        </h2>
        <p className="text-subink text-base leading-relaxed">
          Lock your tokens to earn rewards and support the ecosystem.
        </p>
      </div>

      <div className="space-y-6">
        {/* Amount Input */}
        <div>
          <label htmlFor="amount" className="block text-ink text-sm font-bold mb-3">
            Amount to Stake
          </label>
          <div className="relative">
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full p-4 pr-24 rounded-xl bg-white/60 border-2 border-black/10 focus:border-primary focus:ring-4 focus:ring-primary/20 text-ink font-bold text-lg transition-all outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-subink font-bold">
              $GNCO
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass rounded-xl p-4">
            <div className="text-subink text-xs font-semibold mb-1">Available</div>
            <div className="text-ink font-bold text-lg">1,234.56</div>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="text-subink text-xs font-semibold mb-1">APY</div>
            <div className="text-primary font-bold text-lg">12.5%</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary"
          >
            Stake
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-ghost"
          >
            Unstake
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-ghost w-full"
        >
          <span className="text-lg mr-2">💰</span>
          Claim Rewards
        </motion.button>
      </div>

      {/* Token Address */}
      <div className="mt-8 pt-6 border-t border-black/10">
        <div className="text-xs text-subink font-semibold mb-2 text-center">Token Address</div>
        <div className="glass rounded-lg p-3 break-all text-center">
          <code className="text-primary font-mono text-xs font-bold tracking-tight">
            {TOKEN_ADDRESS}
          </code>
        </div>
      </div>
    </motion.div>
  );
}
