import React, { useRef, useEffect, useState  } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { AnimationMixer, LoopRepeat } from 'three';
import './Model.css';

const Model = () => {
  const group = useRef();
  const { scene, animations } = useGLTF('/source/model.gltf');
  const mixer = useRef();

  useEffect(() => {
    if (scene && animations.length > 1) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]); // Play the second animation
      action.setLoop(LoopRepeat, Infinity);
      action.play();
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <group ref={group} scale={[1.1, 1.1, 1.1]} position={[0, -1, 1]} rotation={[0.2, 1.5, 0]}>
      <primitive object={scene} />
    </group>
  );
};

const ModelCanvas = () => {
  const [controlsEnabled, setControlsEnabled] = useState(false);

  const handleMouseDown = () => {
    setControlsEnabled(true);
  };

  const handleMouseUp = () => {
    setControlsEnabled(false);
  };

  return (
    <div
      className="model-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Canvas>
        <ambientLight intensity={1.2} />
        <spotLight position={[10, 10, 10]} angle={1.0} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {controlsEnabled && <OrbitControls />}
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
