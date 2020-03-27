import React, { useContext } from "react";
import { Context } from "../picSomeContext";
import CartItems from "../component/CartItems";

function Cart() {
  const { cartItems } = useContext(Context);
  const picturesInCart = cartItems.map(item => (
    <CartItems key={item.id} item={item} />
  ));
  //`<number>.toLocaleString("en-US", {style: "currency", currency: "USD"})`;
  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "INR"
  });
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {picturesInCart}
      <p className="total-cost">Total Cost:{totalCostDisplay}</p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
