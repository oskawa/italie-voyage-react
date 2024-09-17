"use client"; // Make this a client component

import { Masonry } from "react-plock";
import { div } from "three/webgpu";

const Gallery = ({ items }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-12">
          <Masonry
            items={items}
            config={{
              columns: [1, 2, 3], // Responsive column settings
              gap: [24, 12, 6], // Responsive gap settings
              media: [640, 768, 1024], // Media query breakpoints
            }}
            render={(item, idx) => (
              <img
                key={idx}
                src={item}
                style={{ width: "100%", height: "auto", borderRadius:"20px" }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
