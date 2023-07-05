import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

//import CanvasLoader from "../Loader";

function Model(props) {
  const { nodes, materials } = useGLTF('./planet/Moon_1_3474.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} scale={6.75}/>
    </group>
  )
}

const MoonCanvas = (isMobile) => {
  const moon = useGLTF("./planet/Moon_1_3474.glb");
  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={moon.scene}
        scale={isMobile ? 6.75 : 0.75}
        position={isMobile ? [0, -3, -3.6] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const MoonModel = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect( () => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);
  return (
    <Canvas style={{background: "#171717"}}
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 70 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MoonCanvas isMobile={isMobile}/> 
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MoonModel;
