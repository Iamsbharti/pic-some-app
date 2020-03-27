import React, { useState, useContext } from "react";
import { Context } from "../picSomeContext";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
function Image({ className, img }) {
  //const [hovered, setHovered] = useState(false);
  const [hovered, element] = useHover();
  const {
    toggleFavorite,
    addToCart,
    isAddedToCart,
    removeItemFromCart
  } = useContext(Context);

  function checkIsFavorite() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }
  function isItemInCart() {
    if (isAddedToCart(img)) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeItemFromCart(img)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={element}>
      <img src={img.url} className="image-grid" alt="?" />
      {checkIsFavorite()}
      {isItemInCart()}
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
