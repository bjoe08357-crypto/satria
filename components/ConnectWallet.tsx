"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function ConnectWallet() {
  return (
    <div className="inline-flex">
      <WalletMultiButton className="btn btn-primary text-sm" />
    </div>
  );
}
