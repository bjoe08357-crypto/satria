"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 glass">
      <div className="container px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <img src="/assets/ganchologotrans.png" alt="Empire of Gancho" className="w-6 h-6" />
            <div className="text-subink text-sm">
              <div>Empire of Gancho © 2025</div>
              <div>Powered by Ganco Token ($GNCO)</div>
              <div>All rights reserved.</div>
              <div>
                <a href="https://empireofgancho.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">empireofgancho.com</a>
                <span className="mx-2">|</span>
                <a href="https://ganchotoken.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">ganchotoken.com</a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="https://ganchotoken.gitbook.io/gancho-token/" target="_blank" rel="noopener noreferrer" className="text-sm text-subink hover:text-primary transition">
              Whitepaper
            </a>
            <a href="https://discord.gg/TEbecURY" target="_blank" rel="noopener noreferrer" className="text-sm text-subink hover:text-primary transition">
              Discord
            </a>
            <a href="https://x.com/SatriaToken" target="_blank" rel="noopener noreferrer" className="text-sm text-subink hover:text-primary transition">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

