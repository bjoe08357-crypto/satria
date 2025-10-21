"use client";

import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("@react-three/fiber").then((m) => m.Canvas), { ssr: false });
const OrbitControls = dynamic(
  () => import("@react-three/drei").then((m) => m.OrbitControls),
  { ssr: false }
);

interface FeatureSceneProps {
  id: string;
}

function BuildMesh() {
  return (
    <group>
      <mesh position={[-1, 0, 0]} scale={0.8}>
        <boxGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial color="#FFB200" metalness={0.15} roughness={0.7} emissive="#FFB200" emissiveIntensity={0.04} />
      </mesh>
      <mesh position={[1, 0, 0]} scale={0.8}>
        <boxGeometry args={[1, 1.5, 1]} />
        <meshStandardMaterial color="#FF6A00" metalness={0.15} roughness={0.7} emissive="#FF6A00" emissiveIntensity={0.04} />
      </mesh>
      <mesh position={[0, 1.5, 0]} scale={0.6}>
        <boxGeometry args={[1.5, 0.8, 1.5]} />
        <meshStandardMaterial color="#FFB200" metalness={0.15} roughness={0.7} emissive="#FFB200" emissiveIntensity={0.04} />
      </mesh>
    </group>
  );
}

function PvpMesh() {
  return (
    <group rotation={[0, 0, 0.3]}>
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, -0.5]}>
        <coneGeometry args={[0.4, 2, 32]} />
        <meshStandardMaterial color="#FF6A00" metalness={0.2} roughness={0.6} emissive="#FF6A00" emissiveIntensity={0.06} />
      </mesh>
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, 0.5]}>
        <coneGeometry args={[0.4, 2, 32]} />
        <meshStandardMaterial color="#FF3D6E" metalness={0.2} roughness={0.6} emissive="#FF3D6E" emissiveIntensity={0.06} />
      </mesh>
    </group>
  );
}

function HeroesMesh() {
  return (
    <mesh>
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial color="#FFB200" metalness={0.2} roughness={0.5} emissive="#FFB200" emissiveIntensity={0.08} />
    </mesh>
  );
}

function LandMesh() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color="#FFD8A8" metalness={0.1} roughness={0.8} />
      </mesh>
      <mesh position={[-0.5, 0.3, -0.5]} scale={0.3}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#FF6A00" metalness={0.15} roughness={0.7} emissive="#FF6A00" emissiveIntensity={0.04} />
      </mesh>
      <mesh position={[0.5, 0.3, 0.5]} scale={0.3}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#FFB200" metalness={0.15} roughness={0.7} emissive="#FFB200" emissiveIntensity={0.04} />
      </mesh>
    </group>
  );
}

function GuildsMesh() {
  return (
    <group>
      <mesh>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial color="#FF6A00" metalness={0.2} roughness={0.6} emissive="#FF6A00" emissiveIntensity={0.05} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.2, 16, 32]} />
        <meshStandardMaterial color="#FFB200" metalness={0.2} roughness={0.6} emissive="#FFB200" emissiveIntensity={0.05} />
      </mesh>
      <mesh rotation={[-Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.2, 16, 32]} />
        <meshStandardMaterial color="#FF3D6E" metalness={0.2} roughness={0.6} emissive="#FF3D6E" emissiveIntensity={0.05} />
      </mesh>
    </group>
  );
}

function CreatorMesh() {
  return (
    <group>
      <mesh scale={1.2}>
        <cylinderGeometry args={[1, 1, 0.3, 32]} />
        <meshStandardMaterial color="#FFD8A8" metalness={0.15} roughness={0.7} emissive="#FFB200" emissiveIntensity={0.03} />
      </mesh>
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        const x = Math.cos(angle) * 1.5;
        const z = Math.sin(angle) * 1.5;
        return (
          <mesh key={i} position={[x, 0, z]} scale={0.4}>
            <octahedronGeometry args={[1, 2]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#FF6A00" : "#FF3D6E"}
              metalness={0.2}
              roughness={0.6}
              emissive={i % 2 === 0 ? "#FF6A00" : "#FF3D6E"}
              emissiveIntensity={0.06}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function SceneContent({ id }: FeatureSceneProps) {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[6, 6, 6]} intensity={0.8} color="#FFD8A8" />

      {id === "build" && <BuildMesh />}
      {id === "pvp" && <PvpMesh />}
      {id === "heroes" && <HeroesMesh />}
      {id === "land" && <LandMesh />}
      {id === "guilds" && <GuildsMesh />}
      {id === "creator" && <CreatorMesh />}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function FeatureScene({ id }: FeatureSceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <SceneContent id={id} />
    </Canvas>
  );
}
