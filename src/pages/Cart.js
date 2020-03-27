import React, { useContext, useState } from "react";
import { Context } from "../picSomeContext";
import CartItems from "../component/CartItems";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [btnText, setBtnTxt] = useState("Place Order");
  //Display CartItems
  const picturesInCart = cartItems.map(item => (
    <CartItems key={item.id} item={item} />
  ));

  //Calculate total cost
  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "INR"
  });

  //PlaceOrder
  function handleClick() {
    setBtnTxt("Ordering...");
    setTimeout(() => {
      console.log("Order Placed!");
      setBtnTxt("Place Order");
      emptyCart();
      alert("Order Placed");
    }, 3000);
  }
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {picturesInCart}
      <p className="total-cost">Total Cost:{totalCostDisplay}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={handleClick}>{btnText}</button>
        </div>
      ) : (
        <div className="no-item">
          <p>No Items In Cart</p>
        </div>
      )}
    </main>
  );
}

export default Cart;
