import React, { useContext, useState } from "react";
import { Context } from "../picSomeContext";
import PropTypes from "prop-types";

function CartItems({ item }) {
  const [hovered, setHovered] = useState(false);
  const { removeItemFromCart } = useContext(Context);
  const price = 5.99;
  const dispPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "INR"
  });
  const classname = hovered ? "fill" : "line";
  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${classname}`}
        onClick={() => removeItemFromCart(item)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></i>
      <img src={item.url} width="130px" alt="?" />
      <p>{dispPrice}</p>
    </div>
  );
}
CartItems.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};
export default CartItems;
