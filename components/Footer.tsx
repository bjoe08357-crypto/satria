"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 glass">
      <div className="container px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <img src="/assets/garuda-logo.png" alt="SATRIA" className="w-6 h-6" />
            <span className="text-subink text-sm">© 2025 SATRIA Token. All rights reserved.</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/privacy" className="text-sm text-subink hover:text-primary transition">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-subink hover:text-primary transition">
              Terms of Service
            </a>
            <a href="/whitepaper.md" className="text-sm text-subink hover:text-primary transition">
              Whitepaper
            </a>
            {/* GitHub link removed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
