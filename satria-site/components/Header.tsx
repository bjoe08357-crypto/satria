"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ConnectWallet from "@/components/ConnectWallet";

const TOKEN_ADDRESS = "WPiruZHnXFYHekygLU9C55qB1QFy3DNKsXx1bRZv43Y";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                src="/assets/garuda-logo.png"
                alt="SATRIA"
                className="w-9 h-9 transition-transform duration-300 drop-shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <span className="font-[var(--font-orbitron)] text-xl font-bold tracking-wider text-ink group-hover:text-gradient transition-all duration-300">
                SATRIA
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "#lore", label: "Lore" },
                { href: "#gameplay", label: "Gameplay" },
                { href: "/stake", label: "Stake" },
                { href: "https://magiceden.io/", label: "Marketplace", external: true },
                { href: "/whitepaper.md", label: "Whitepaper" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-ink hover:text-primary hover:bg-white/50"
                  }`}
                >
                  {link.label}
                  {link.external && <span className="ml-1 text-xs">↗</span>}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={copyToken}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg btn-ghost text-sm font-semibold"
                title={TOKEN_ADDRESS}
              >
                <span>📋</span>
                <span className="hidden lg:inline">Copy Token</span>
              </motion.button>
              
              <div className="hidden md:block">
                <ConnectWallet />
              </div>

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
                    { href: "/", label: "Home" },
                    { href: "#lore", label: "Lore" },
                    { href: "#gameplay", label: "Gameplay" },
                    { href: "/stake", label: "Stake" },
                    { href: "https://magiceden.io/", label: "Marketplace ↗", external: true },
                    { href: "/whitepaper.md", label: "Whitepaper" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="block px-4 py-3 rounded-lg text-ink font-semibold hover:bg-white/70 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="px-4 py-2">
                    <ConnectWallet />
                  </div>
                  <button
                    onClick={() => {
                      copyToken();
                      setMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 rounded-lg text-left text-ink font-semibold hover:bg-white/70 transition-colors"
                  >
                    📋 Copy Token Address
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

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
    </>
  );
}
