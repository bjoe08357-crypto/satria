import StakingPanel from "@/components/StakingPanel";

export default function StakePage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container px-6">
        <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-12 text-center text-glow">
          Stake $GNCO
        </h1>
        <StakingPanel />
      </div>
    </main>
  );
}




