import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
export function CustomPlane() {
  // Load textures using the useLoader hook
  const texture = useLoader(TextureLoader, "/three/texture_HD.jpg");
  const height = useLoader(TextureLoader, "/three/alpha_HD.jpg");
  const alpha = useLoader(TextureLoader, "/three/alphaSquare.png");
  return (
    <mesh>
      <planeGeometry args={[3, 3, 64, 64]} />
      <meshStandardMaterial
        color="white"
        map={texture}
        displacementMap={height}
        displacementScale={0.1}
        alphaMap={alpha}
        transparent={true}
      />
    </mesh>
  );
}
