'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Gem() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    const g = group.current;
    g.rotation.y = state.clock.elapsedTime * 0.3 + state.pointer.x * 0.5;
    const targetX = -state.pointer.y * 0.4;
    g.rotation.x += (targetX - g.rotation.x) * Math.min(1, delta * 4);
  });

  return (
    <group ref={group}>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.4}>
        <mesh>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshBasicMaterial color="#00d4aa" wireframe transparent opacity={0.6} />
        </mesh>
        <mesh scale={0.8}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshBasicMaterial color="#8b7cf6" transparent opacity={0.14} />
        </mesh>
      </Float>
      <Sparkles count={70} scale={[5, 5, 5]} size={2.5} speed={0.35} color="#00d4aa" opacity={0.7} />
    </group>
  );
}

/**
 * Real-time 3D gem (three.js + React Three Fiber + drei): wireframe
 * icosahedron core, iris inner solid, sparkle field. Rotates idly and leans
 * toward the pointer. Decorative — hidden from assistive tech.
 */
export function OrbitGem({ className = '' }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Gem />
      </Canvas>
    </div>
  );
}
