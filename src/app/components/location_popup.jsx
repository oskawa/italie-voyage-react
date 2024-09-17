import React from "react";
import Link from "next/link";

export function InfoBox({location, onClose}) {
  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        border: "1px solid black",
        color: "white",
        padding: "10px",
        position: "absolute",
        top: "50px", // Adjust the position as needed
        left: "50px",
        zIndex: 1000,
      }}
    >
      <Link href={`/destinations/${location.slug}`}>
        
          Learn more about {location.ville}
        
      </Link>
    </div>
  );
}
