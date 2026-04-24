import { useRef, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, MeshDistortMaterial, Html } from '@react-three/drei';
import * as THREE from 'three';

/* ═══════════════════════════════════════════
   SUN — Central distorted golden sphere
   ═══════════════════════════════════════════ */

function Sun() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.12;
    meshRef.current.rotation.x = Math.sin(t * 0.08) * 0.15;
  });

  return (
    <group>
      {/* Main sun body */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#FFD700"
          emissive="#FF6B00"
          emissiveIntensity={3}
          distort={0.4}
          speed={2.5}
          roughness={0.15}
        />
      </mesh>

      {/* Core blinding light */}
      <pointLight
        intensity={10}
        color="#FFD700"
        distance={60}
        decay={2}
      />

      {/* Secondary warm glow */}
      <pointLight
        intensity={3}
        color="#FF8C00"
        distance={35}
        decay={2}
      />

      {/* Inner glow halo */}
      <mesh>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Outer corona */}
      <mesh>
        <sphereGeometry args={[3.8, 32, 32]} />
        <meshBasicMaterial
          color="#FF8C00"
          transparent
          opacity={0.025}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Far corona haze */}
      <mesh>
        <sphereGeometry args={[5.5, 16, 16]} />
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={0.01}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

/* ═══════════════════════════════════════════
   ORBIT PATH — Faint ring showing orbit line
   ═══════════════════════════════════════════ */

function OrbitPath({ radius }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.018, radius + 0.018, 256]} />
      <meshBasicMaterial
        color="#FFD700"
        transparent
        opacity={0.055}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ═══════════════════════════════════════════
   PLANET — Interactive orbiting sphere
   ═══════════════════════════════════════════ */

function Planet({ project, onSelect, isSelected }) {
  const groupRef = useRef();
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const active = hovered || isSelected;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * project.orbitSpeed;

    // Circular orbit in XZ plane with subtle Y wobble
    groupRef.current.position.x = Math.cos(t) * project.orbitRadius;
    groupRef.current.position.z = Math.sin(t) * project.orbitRadius;
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.35;

    // Self-rotation
    meshRef.current.rotation.y += 0.012;
    meshRef.current.rotation.x += 0.004;

    // Pulse scale when selected
    if (isSelected) {
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 3) * 0.08;
      meshRef.current.scale.setScalar(pulse);
    } else {
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Planet body */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(project);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = 'default';
        }}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={project.color}
          emissive={project.color}
          emissiveIntensity={active ? 2.5 : 0.5}
          roughness={0.25}
          metalness={0.75}
        />
      </mesh>

      {/* Planet glow light */}
      <pointLight
        color={project.color}
        intensity={active ? 5 : 1.2}
        distance={active ? 6 : 3.5}
        decay={2}
      />

      {/* Glow aura sphere */}
      <mesh>
        <sphereGeometry args={[0.85, 16, 16]} />
        <meshBasicMaterial
          color={project.color}
          transparent
          opacity={active ? 0.14 : 0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Hover label */}
      {hovered && !isSelected && (
        <Html
          position={[0, 1.2, 0]}
          center
          style={{ pointerEvents: 'none' }}
        >
          <div
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              color: project.color,
              textShadow: `0 0 12px ${project.color}60`,
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              padding: '4px 12px',
              background: 'rgba(5, 5, 8, 0.7)',
              borderRadius: '6px',
              border: `1px solid ${project.color}30`,
              backdropFilter: 'blur(8px)',
            }}
          >
            {project.name}
          </div>
        </Html>
      )}
    </group>
  );
}

/* ═══════════════════════════════════════════
   SCENE — Assembles all 3D elements
   ═══════════════════════════════════════════ */

function Scene({ projects, onSelectProject, selectedProject }) {
  return (
    <>
      {/* Minimal ambient so deep-space stays dark */}
      <ambientLight intensity={0.04} />

      {/* Dense star field */}
      <Stars
        radius={150}
        depth={60}
        count={8000}
        factor={5}
        saturation={0.1}
        fade
        speed={0.4}
      />

      {/* Central sun */}
      <Sun />

      {/* Orbiting planets */}
      {projects.map((project) => (
        <group key={project.id}>
          <OrbitPath radius={project.orbitRadius} />
          <Planet
            project={project}
            onSelect={onSelectProject}
            isSelected={selectedProject?.id === project.id}
          />
        </group>
      ))}

      {/* Camera controls */}
      <OrbitControls
        enableZoom
        enableRotate
        enablePan={false}
        minDistance={5}
        maxDistance={40}
        autoRotate
        autoRotateSpeed={0.25}
        zoomSpeed={0.5}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI * 0.85}
        minPolarAngle={Math.PI * 0.1}
      />
    </>
  );
}

/* ═══════════════════════════════════════════
   AURA BACKGROUND — Root canvas export
   ═══════════════════════════════════════════ */

export default function AuraBackground({ projects, onSelectProject, selectedProject }) {
  const handleSelect = useCallback(
    (project) => {
      onSelectProject(project);
    },
    [onSelectProject]
  );

  return (
    <Canvas
      camera={{ position: [0, 7, 16], fov: 55 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      style={{ background: '#050508' }}
      onPointerMissed={() => onSelectProject(null)}
    >
      <Scene
        projects={projects}
        onSelectProject={handleSelect}
        selectedProject={selectedProject}
      />
    </Canvas>
  );
}
