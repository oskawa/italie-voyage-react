"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { CustomPlane } from "./../components/map";
import { CustomPointLight } from "./../components/pointLight";
import { Controls } from "./../components/controls";
import { LocationMarkers } from "./../components/locations";
import { InfoBox } from "./../components/location_popup";
import { useRef, useEffect, useState } from "react";
import styles from "./Map.module.scss";

export default function Scene() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    console.log(selectedLocation);
  };

  const handleClosePopup = () => {
    setSelectedLocation(null);
  };

  const handleLocationsLoaded = () => {
    setLoading(false); // Hide the loading screen once data is fetched
  };

  return (
    <>
      {loading && (
        <div id={styles.loading}>
          <img id={styles.img} alt="" />
          <p id={styles.text}>Chargement des destinations...</p>
        </div>
      )}
      <Canvas style={{ height: "100vh" }}>
        <PerspectiveCamera
          makeDefault
          fov={75}
          near={0.1}
          far={100}
          position={[0, -0.1, 1]}
        />
        <color attach="background" args={[0xfefee2]} />
        <CustomPointLight />
        <CustomPlane />;
        <Controls />
        <LocationMarkers
          onClickLocation={handleLocationClick}
          onLoaded={handleLocationsLoaded}
        />
      </Canvas>
      {/* Render InfoBox if a location is selected */}
      {selectedLocation && (
        <InfoBox location={selectedLocation} onClose={handleClosePopup} />
      )}
    </>
  );
}

// export default Scene;
