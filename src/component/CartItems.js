import React, { useContext } from "react";
import { Context } from "../picSomeContext";

function CartItems({ item }) {
  const { removeItemFromCart } = useContext(Context);
  const price = 5.99;
  const dispPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "INR"
  });
  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeItemFromCart(item)}
      ></i>
      <img src={item.url} width="130px" alt="?" />
      <p>{dispPrice}</p>
    </div>
  );
}
export default CartItems;
