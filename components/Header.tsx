"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ConnectWallet from "@/components/ConnectWallet";

const TOKEN_ADDRESS = "0x8b91b90307608278Db5ad4D8b1b6878C1702a0dE";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // Removed desktop slide-in menu
  const [showToast, setShowToast] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showStaking, setShowStaking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToken = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_ADDRESS);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass border-b border-black/10 shadow-lg' : 'bg-transparent border-b border-black/5'
        }`}
      >
        <div className="container px-6 md:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.img
                src="/assets/ganchologotrans.png"
                alt="Empire of Gancho"
                className="w-9 h-9 transition-transform duration-300 drop-shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <span className="font-[var(--font-orbitron)] text-xl font-bold tracking-wider text-ink group-hover:text-gradient transition-all duration-300">
                $GNCO
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { href: "#lore", label: "About" },
                { href: "#tokenomics", label: "Token" },
                { href: "#gameplay", label: "How It Works" },
                { href: "#roadmap", label: "Roadmap" },
                { href: "#community", label: "Community" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-ink hover:text-primary hover:bg-white/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setShowStaking(true)}
                className="relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 text-ink hover:text-primary hover:bg-white/50"
              >
                Staking
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Copy Token removed from header */}

              <div className="hidden md:block">
                <ConnectWallet />
              </div>

              {/* Desktop menu trigger removed */}

              {/* Mobile Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2.5 rounded-lg hover:bg-white/50 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 space-y-1.5">
                  <motion.div
                    animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="h-0.5 bg-ink rounded-full"
                  />
                  <motion.div
                    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="h-0.5 bg-ink rounded-full"
                  />
                  <motion.div
                    animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="h-0.5 bg-ink rounded-full"
                  />
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
              {[
                { href: "#lore", label: "About" },
                { href: "#tokenomics", label: "Token" },
                { href: "#gameplay", label: "How It Works" },
                { href: "#roadmap", label: "Roadmap" },
                { href: "#community", label: "Community" },
              ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-ink font-semibold hover:bg-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button
                    onClick={() => { setMenuOpen(false); setShowStaking(true); }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-ink font-semibold hover:bg-white/70 transition-colors"
                  >
                    Staking
                  </button>
                  <div className="px-4 py-2">
                    <ConnectWallet />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Desktop slide-in menu removed */}

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
              <span className="text-lg">✓</span>
              Token address copied!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Staking Modal */}
      <AnimatePresence>
        {showStaking && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowStaking(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="staking-title"
              onClick={(e) => e.stopPropagation()}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-xl glass rounded-3xl p-8 border border-black/10 shadow-2xl"
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 id="staking-title" className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold">
                    <span className="text-gradient">Staking — Coming Soon</span>
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#FFB200] to-[#FF6A00] rounded-full mt-2" />
                </div>
                <button
                  onClick={() => setShowStaking(false)}
                  className="p-2 hover:bg-black/5 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-[#1A1C22]/80 leading-relaxed mb-4">
                Stake $GNCO to earn rewards and strengthen the Empire of Gancho economy. Launching soon on Eth.
              </p>
              <ul className="space-y-2 text-[#1A1C22]/80 mb-6">
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Lock or flexible staking options</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Reward epochs and compounding claims</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Non-custodial smart contracts</li>
                <li className="flex gap-2"><span className="text-primary font-bold">•</span> Boosts for guild participation and events</li>
              </ul>

              <div className="flex flex-wrap gap-2 justify-end">
                <button onClick={() => setShowStaking(false)} className="btn btn-ghost">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
