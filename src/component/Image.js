import React, { useState } from "react";

function Image({ className, url }) {
  const [hovered, setHovered] = useState(false);
  console.log(hovered);
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={url} className="image-grid" alt="?" />
    </div>
  );
}

export default Image;
