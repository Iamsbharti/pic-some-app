import React, { useState } from "react";
/*
1. Icon to render for the heart:


2. Icon to render for the plus:

*/
function Image({ className, url }) {
  const [hovered, setHovered] = useState(false);
  console.log(hovered);
  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
  const addIcon = hovered && <i className="ri-add-circle-line cart"></i>;
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={url} className="image-grid" alt="?" />
      {heartIcon}
      {addIcon}
    </div>
  );
}

export default Image;
