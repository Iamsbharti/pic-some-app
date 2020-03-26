import React, { useState, useContext } from "react";
import { Context } from "../picSomeContext";
import PropTypes from "prop-types";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  const { toggleFavorite, addToCart } = useContext(Context);

  const heartIcon = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
  const addIcon = hovered && (
    <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
  );
  const filledHeart = img.isFavorite && (
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="?" />
      {heartIcon}
      {addIcon}
      {filledHeart}
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
    url: PropTypes.string.isRequired
  })
};
export default Image;
