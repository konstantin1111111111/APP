import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <Canvas className="canvas-container" camera={{ position: [350, 5, 50], fov:[50]}}>
      <ambientLight intensity={0.5} />
      <directionalLight />
      <Suspense fallback={null}>
      <Model url="/TEN.glb" />

      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}