"use client";

import { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import * as THREE from "three";

function Island({ position = [0, 0, 0] as [number, number, number], scale = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#FFB200"
        metalness={0.15}
        roughness={0.7}
        emissive="#FFB200"
        emissiveIntensity={0.04}
      />
    </mesh>
  );
}

export default function BackgroundIslands() {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.25} />
      <pointLight position={[6, 6, 6]} intensity={0.8} color="#FFD8A8" />

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Island position={[-2.2, -0.5, -1]} scale={1.2} />
      </Float>
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.6}>
        <Island position={[2.1, 0.8, -1.5]} scale={0.9} />
      </Float>
      <Float speed={0.9} rotationIntensity={0.35} floatIntensity={0.5}>
        <Island position={[0, -1.4, -0.8]} scale={1.1} />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}
