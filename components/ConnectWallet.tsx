"use client";

import { useState } from "react";

export default function ConnectWallet() {
  const [connected, setConnected] = useState(false);

  return (
    <button
      onClick={() => setConnected((v) => !v)}
      className="btn btn-primary text-sm"
      aria-pressed={connected}
    >
      {connected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
}
