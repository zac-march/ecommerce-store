import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import { CartContext } from "../../CartContext";

const Cart = (props) => {
  const { isOpen, toggleCart, cart, removeFromCart } = useContext(CartContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.price, 0));
  }, [cart]);

  return (
    isOpen && (
      <div className={style.container}>
        <div className={style.cart}>
          <div className={style.cartTop}>
            <h1>
              {cart.length === 0 ? "No" : cart.length} Game
              {(cart.length === 0 || cart.length > 1) && "s"} Added
            </h1>
            <ul>
              {cart.map((product) => (
                <div key={product.id} className={style.cartItem}>
                  <p>{product.title}</p>
                  <div>
                    <p>${product.price / 100}</p>
                    <button
                      className="btn"
                      onClick={() => removeFromCart(product.id)}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className={style.cartBottom}>
            <p>Total: ${total / 100}</p>
            <button className="btn">Checkout -{">"}</button>
          </div>
        </div>
        <div onClick={toggleCart} className={style.background}></div>
      </div>
    )
  );
};

export default Cart;
