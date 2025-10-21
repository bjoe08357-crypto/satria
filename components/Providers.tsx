"use client";

import { SolanaWalletProviders } from "@/hooks/useSolanaWallet";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SolanaWalletProviders>{children}</SolanaWalletProviders>;
}
