"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Instance, Instances } from "@react-three/drei";
import * as THREE from "three";

// Reusable hook for common hover state passed from parent or managed locally if needed
// Actually, hover state can be managed via events on the parent DOM element, but we can also detect it within R3F if we use pointer events on a transparent plane, or just pass `hovered` as a prop.
// Passing `hovered` prop is cleaner since the DOM element handles the tilt/spotlight.

type SceneProps = {
  hovered: boolean;
};

// 1. Podcast: Equalizer Bars
export function PodcastScene({ hovered }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const instances = Array.from({ length: 7 });
  const time = useRef(0);

  useFrame((state, delta) => {
    const targetTempo = hovered ? 8 : 2;
    const targetAmp = hovered ? 1.5 : 0.5;
    
    // Smooth transition
    time.current += delta * targetTempo;
    
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const offset = i * 0.4;
        const scaleY = 1 + Math.sin(time.current + offset) * targetAmp;
        child.scale.setY(Math.max(0.1, scaleY));
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {instances.map((_, i) => (
        <mesh key={i} position={[(i - 3) * 0.4, 1, 0]}>
          <boxGeometry args={[0.2, 2, 0.2]} />
          <meshStandardMaterial color="#f0b74d" roughness={0.2} metalness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// 2. Magazine: Pages stack riffle
export function MagazineScene({ hovered }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    const speed = hovered ? 4 : 1;
    time.current += delta * speed;

    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        // Simple riffle logic: rotate back and cycle
        const cycle = (time.current + i * 0.5) % 3; // 3 pages
        if (cycle < 1) {
          child.rotation.x = THREE.MathUtils.lerp(0, -Math.PI / 4, cycle);
          child.position.y = THREE.MathUtils.lerp(i * 0.1, i * 0.1 + 0.5, cycle);
          child.position.z = THREE.MathUtils.lerp(0, -0.5, cycle);
          (child.material as THREE.MeshStandardMaterial).opacity = 1 - cycle;
        } else {
          child.rotation.x = 0;
          child.position.y = i * 0.1;
          child.position.z = 0;
          (child.material as THREE.MeshStandardMaterial).opacity = 1;
        }
      });
    }
  });

  return (
    <group ref={groupRef} rotation={[0.4, -0.4, 0]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, i * 0.1, 0]} castShadow>
          <planeGeometry args={[2, 2.5]} />
          <meshStandardMaterial color="#E8E2D2" side={THREE.DoubleSide} transparent />
        </mesh>
      ))}
    </group>
  );
}

// 3. Design: Refractive Polyhedron
export function DesignScene({ hovered }: SceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const speed = hovered ? 2 : 0.5;
    meshRef.current.rotation.x += delta * speed;
    meshRef.current.rotation.y += delta * speed;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 0]} />
      <MeshTransmissionMaterial 
        backside
        samples={4}
        thickness={2}
        chromaticAberration={hovered ? 2 : 0.5}
        anisotropy={0.1}
        distortion={hovered ? 0.5 : 0.1}
        distortionScale={0.3}
        temporalDistortion={0.1}
        color="#f0b74d"
        resolution={512}
      />
    </mesh>
  );
}

// 4. Speed Networking: Connecting Nodes
export function NetworkingScene({ hovered }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  const nodes = [
    new THREE.Vector3(-1, -0.5, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(1, -0.5, 0),
    new THREE.Vector3(0, -1, 1),
  ];

  useFrame((state, delta) => {
    const speed = hovered ? 4 : 1.5;
    time.current += delta * speed;
    
    if (groupRef.current) {
      // Pulse nodes based on sine wave
      groupRef.current.children.forEach((child, i) => {
        if (child.name === "node") {
          const scale = 1 + Math.sin(time.current - i) * 0.3;
          child.scale.setScalar(scale);
          const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
          mat.emissiveIntensity = Math.max(0, Math.sin(time.current - i) * 2);
        }
        if (child.name === "line") {
           const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
           mat.emissiveIntensity = Math.max(0, Math.sin(time.current - i * 0.5) * (hovered ? 2 : 0.5));
        }
      });
      groupRef.current.rotation.y = Math.sin(time.current * 0.2) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={pos} name="node">
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#f0b74d" emissive="#f0b74d" emissiveIntensity={0} toneMapped={false} />
        </mesh>
      ))}
      
      {/* Simple cylinders as lines between nodes */}
      <mesh position={[-0.5, 0.25, 0]} rotation={[0, 0, -Math.PI / 3]} name="line">
        <cylinderGeometry args={[0.02, 0.02, 1.8]} />
        <meshStandardMaterial color="#3a86ff" emissive="#3a86ff" />
      </mesh>
      <mesh position={[0.5, 0.25, 0]} rotation={[0, 0, Math.PI / 3]} name="line">
        <cylinderGeometry args={[0.02, 0.02, 1.8]} />
        <meshStandardMaterial color="#3a86ff" emissive="#3a86ff" />
      </mesh>
      <mesh position={[0, -0.5, 0.5]} rotation={[Math.PI / 4, 0, 0]} name="line">
        <cylinderGeometry args={[0.02, 0.02, 1.4]} />
        <meshStandardMaterial color="#ff0054" emissive="#ff0054" />
      </mesh>
    </group>
  );
}

// 5. Events: Spotlight Stage
export function EventsScene({ hovered }: SceneProps) {
  const beamRef = useRef<THREE.Mesh>(null);
  const platformRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;
    if (beamRef.current) {
      const breathe = Math.sin(time.current * 2) * 0.1 + 0.9;
      beamRef.current.scale.set(breathe, 1, breathe);
      const mat = beamRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = hovered ? 0.6 + Math.sin(time.current * 10) * 0.1 : 0.3 + Math.sin(time.current * 2) * 0.05;
    }
    if (platformRef.current) {
      const mat = platformRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = hovered ? 1 : 0.2;
    }
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* Platform */}
      <mesh ref={platformRef} position={[0, -0.1, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
        <meshStandardMaterial color="#222" emissive="#f0b74d" emissiveIntensity={0.2} roughness={0.1} metalness={0.8} />
      </mesh>
      {/* Beam */}
      <mesh ref={beamRef} position={[0, 1.5, 0]}>
        <coneGeometry args={[1.5, 3.2, 32]} />
        <meshBasicMaterial color="#f0b74d" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

// 6. Web: Resonant Rings
export function WebScene({ hovered }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    const speed = hovered ? 3 : 1;
    time.current += delta * speed;

    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        if (i > 0) { // skip center sphere
          // Rings expand and fade
          const t = (time.current + i * 1.5) % 3;
          const scale = 1 + t * 0.8;
          child.scale.setScalar(scale);
          
          const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
          mat.opacity = (1 - (t / 3)) * (hovered ? 0.8 : 0.3);
        }
      });
      // Rotate entire system slowly
      groupRef.current.rotation.x = Math.sin(time.current * 0.5) * 0.3;
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#3a86ff" />
      </mesh>
      
      {[1, 2, 3].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.02, 16, 64]} />
          <meshBasicMaterial color="#3a86ff" transparent opacity={0} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </group>
  );
}
