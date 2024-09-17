import { useRef, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three"; // Import THREE

export function Controls() {
  const controlsRef = useRef();
  const { camera } = useThree(); // Access the camera from the Three.js context
  const [prevDistance, setPrevDistance] = useState(0); // State to track the previous distance

  // Define boundaries for panning (translation limits)
  const panLimits = {
    minX: -0.2, // Limit for left pan
    maxX: 0.2, // Limit for right pan
    minY: -0.8, // Limit for down pan
    maxY: 0.8, // Limit for up pan
  };

  const zoomFactor = -0.5; // Factor for how much to rotate when zooming
  const zoomSensitivity = 1; // Adjust this for sensitivity

  useEffect(() => {
    const controls = controlsRef.current;

    const handleControlChange = () => {
      if (controls) {
        // Get the current camera position
        const { x, y } = camera.position;

        // Clamp camera position within limits
        if (x < panLimits.minX) {
          camera.position.x = panLimits.minX;
        } else if (x > panLimits.maxX) {
          camera.position.x = panLimits.maxX;
        }

        if (y < panLimits.minY) {
          camera.position.y = panLimits.minY;
        } else if (y > panLimits.maxY) {
          camera.position.y = panLimits.maxY;
        }

        const zooming = controls.mouseButtons.MIDDLE === THREE.MOUSE.DOLLY;

        // if (zooming) {
        //   // Get the current distance
        //   const newDistance = controls.getDistance();

        //   // Determine zoom direction based on the previous distance
        //   if (newDistance < prevDistance) {
        //     // Zooming in
        //     camera.rotation.x += zoomFactor ;
        //   } else if (newDistance > prevDistance) {
        //     // Zooming out
        //     camera.rotation.x -= zoomFactor;
        //   }
        //   console.log(camera.rotation.x)

        //   // Update previous distance for the next frame
        //   setPrevDistance(newDistance);
        // }

        // Update the target to focus on the center
        controls.target.set(camera.position.x, camera.position.y, 0);
        // console.lo
      }
    };

    // Listen to control changes
    controls.addEventListener("change", handleControlChange);
    setPrevDistance(controls.getDistance());

    return () => {
      controls.removeEventListener("change", handleControlChange);
    };
  }, [camera, panLimits, zoomFactor, zoomSensitivity, prevDistance]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true} // Enable panning
      minDistance={0.3} // Minimum distance for dolly (zoom)
      maxDistance={1.3} // Maximum distance for dolly (zoom)
      enableRotate={false} // Disable rotation
      // target={[0, 0.5, 0]}
      mouseButtons={{
        LEFT: 2, // Left mouse button for panning
        MIDDLE: 1,
        RIGHT: 3,
      }}
      target={[0, 0, 0]}
    />
  );
}
