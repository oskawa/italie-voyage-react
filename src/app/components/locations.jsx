import { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import http from "../../app/axios/http";
import { Html } from "@react-three/drei";
import { InfoBox } from "./../components/location_popup";

export function LocationMarkers({ onClickLocation, onLoaded }) {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  async function getLocations() {
    try {
      const response = await http.get("list-travel");
      setLocations(response.data);
      console.log(response.data);
    } catch (error) {
    } finally {
      setLoading(false); // Set loading to false after fetching
      if (onLoaded) onLoaded(); // Call the onLoaded callback
    }
  }

  useEffect(() => {
    getLocations();
  }, []);
  if (locations?.[0]) {
    return (
      <>
        {locations.map((location) => (
          <Html
            key={location.slug}
            position={[location.coordonnees_x, location.coordonnees_y, 0]}
          >
            <div
              onClick={() => onClickLocation(location)} // Call the handler here
              className="content"
              style={{
                backgroundImage: `url(/three/photos.png)`,
                backgroundSize: "cover", // Ensures the image covers the entire div
                transform: "translate(-50%, -50%)",
                width: "30px", // Adjust width and height as needed
                height: "30px",
                borderRadius: "50%", // Makes the div circular
                cursor: "pointer",
              }}
            ></div>
          </Html>
        ))}
      </>
    );
  }
}
