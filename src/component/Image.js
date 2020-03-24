import React from "react";

function Image({ className, url }) {
  return (
    <div className={`${className} image-container`}>
      <img src={url} className="image-grid" alt="?" />
    </div>
  );
}

export default Image;
