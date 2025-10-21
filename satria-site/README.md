# 🦅 SATRIA TOKEN — Rise of the Archipelago Warriors

A premium, light-themed, cinematic Web3 gaming website built with Next.js 14, inspired by Axie Infinity, Illuvium, and Star Atlas.

## ✨ Features

- **Light Theme Design**: Clean ivory background with warm golden gradients
- **Glass Morphism UI**: Translucent white cards with soft shadows
- **Cinematic Animations**: Framer Motion powered smooth transitions
- **3D Background**: Subtle floating islands with warm gold emissive materials
- **Solana Integration**: Phantom & Solflare wallet support
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Tokenomics Charts**: Interactive Recharts visualization
- **Staking Interface**: Mock staking panel with APY display

## 🎨 Theme Colors

- **Surface**: `#F6F7FB` (main background)
- **Surface Alt**: `#FFFFFF` (cards, header)
- **Ink**: `#1A1C22` (primary text)
- **Subink**: `#4B5563` (secondary text)
- **Primary**: `#FFB200` (gold)
- **Accent**: `#FF6A00` (orange)
- **Rose**: `#FF3D6E` (crimson)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
cd satria-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3021` to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
satria-site/
├── app/
│   ├── globals.css          # Global styles with light theme
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Homepage
│   └── stake/
│       └── page.tsx          # Staking page
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section with CTAs
│   ├── Lore.tsx              # Tribe lore section
│   ├── Gameplay.tsx          # Game features
│   ├── Tokenomics.tsx        # Token distribution chart
│   ├── Marketplace.tsx       # NFT marketplace info
│   ├── Earn.tsx              # Earning methods
│   ├── Technology.tsx        # Tech stack
│   ├── Roadmap.tsx           # Development timeline
│   ├── Community.tsx         # Social links
│   ├── Footer.tsx            # Site footer
│   ├── BackgroundIslands.tsx # 3D background
│   ├── ConnectWallet.tsx     # Wallet button
│   ├── StakingPanel.tsx      # Staking interface
│   └── wallet/
│       └── WalletProvider.tsx
├── hooks/
│   └── usePrefersReducedMotion.ts
├── public/
│   └── assets/
│       └── garuda-logo.png   # SATRIA logo
├── tailwind.config.ts        # Light theme config
└── package.json
```

## 🎯 Key Components

### Header
- Sticky glass navigation bar
- Logo, nav links, wallet connect, copy token button
- Mobile hamburger menu

### Hero
- Large centered layout (70-85vh)
- Animated gradient title
- 4 CTAs in a single row (responsive)
- Token address display
- 3D floating islands background

### Tokenomics
- Interactive donut chart with Recharts
- Distribution breakdown
- Token supply information

### Staking Panel
- Mock staking interface
- Input for amount
- Stake/Unstake/Claim buttons
- APY display

## 🔧 Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D Graphics**: React Three Fiber + Drei
- **Charts**: Recharts
- **Blockchain**: Solana Web3.js
- **Wallets**: Solana Wallet Adapter

## 📦 Key Dependencies

```json
{
  "dependencies": {
    "@react-three/drei": "^9.108.1",
    "@react-three/fiber": "^8.16.8",
    "@solana/wallet-adapter-react": "^0.15.35",
    "@solana/wallet-adapter-wallets": "^0.19.24",
    "@solana/web3.js": "^1.91.1",
    "framer-motion": "^11.2.12",
    "next": "14.2.4",
    "recharts": "^2.12.7",
    "three": "^0.165.0"
  }
}
```

## 🎨 Customization

### Updating Logo

Replace `/public/assets/garuda-logo.png` with your own logo (recommended: 512x512 or 768x768 PNG).

### Changing Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  surface: "#F6F7FB",
  primary: "#FFB200",
  // ... your colors
}
```

### Adding Sections

1. Create a new component in `/components/`
2. Import and add to `/app/page.tsx`
3. Add navigation link to `Header.tsx`

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Manual Build

```bash
npm run build
# Upload .next/ and public/ to your hosting
```

## 📝 Token Information

- **Token Address**: `WPiruZHnXFYHekygLU9C55qB1QFy3DNKsXx1bRZv43Y`
- **Network**: Solana (SPL)
- **Total Supply**: 100,000,000 $SATRIA
- **Initial Price**: $0.10

## ✅ Acceptance Checklist

- ✅ Light ivory background with golden/rose mists
- ✅ Glass white header and cards
- ✅ Gradient gold→orange→rose titles
- ✅ Consistent button styling with hover effects
- ✅ Tokenomics chart with warm color palette
- ✅ 3D background with subtle gold emissive material
- ✅ `/stake` page functional
- ✅ Mobile responsive
- ✅ No build errors

## 🐛 Troubleshooting

**Port already in use:**
```bash
lsof -ti:3021 | xargs kill -9
npm run dev
```

**Build errors:**
```bash
rm -rf .next
npm run dev
```

**Wallet not connecting:**
Ensure you have Phantom or Solflare extension installed in your browser.

## 📄 License

MIT License - feel free to use this project as a template.

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

---

**Built with ❤️ for the SATRIA community** 🛡️⚔️✨
