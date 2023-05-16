import React from "react";
import style from "./Cart.module.css";

const Cart = (props) => {
  const { isOpen, toggleCart, cart } = props;
  return (
    isOpen && (
      <div className={style.container}>
        <div onClick={toggleCart} className={style.background}></div>
        <div className={style.cart}>
          <h1>
            {cart.length === 0 ? "No" : cart.length} Game
            {(cart.length === 0 || cart.length > 1) && "s"} Added
          </h1>
          <ul>
            {cart.map((product) => (
              <div className={style.cartItem}>
                <p>{product.title}</p>
                <div>
                  <p>$20</p>
                  <button>X</button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Cart;
