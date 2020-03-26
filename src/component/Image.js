import React, { useState, useContext } from "react";
import { Context } from "../picSomeContext";
function Image({ className, url, onToggle, id, isFavorite }) {
  const [hovered, setHovered] = useState(false);

  const { toggleFavorite } = useContext(Context);

  const heartIcon = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(id)}
    ></i>
  );
  const addIcon = hovered && <i className="ri-add-circle-line cart"></i>;
  const filledHeart = isFavorite && (
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavorite(id)}
    ></i>
  );
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={url} className="image-grid" alt="?" />
      {heartIcon}
      {addIcon}
      {filledHeart}
    </div>
  );
}

export default Image;
