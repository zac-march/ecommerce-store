import React, { useEffect, useState, useContext } from "react";
import style from "./AddToCartBtn.module.css";
import { CartContext } from "../../CartContext";

const AddToCartBtn = (props) => {
  const { productId } = props;
  const [inCart, setInCart] = useState();
  const { toggleAddToCart, isInCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    toggleAddToCart(productId);
  };

  useEffect(() => {
    setInCart(isInCart(productId));
  });

  return (
    <button
      className={`${style.addToCart} btn`}
      data-incart={inCart}
      onClick={(e) => handleAddToCart(e)}
    >
      {inCart ? "✓ Added" : "+ Add to Cart"}
    </button>
  );
};

export default AddToCartBtn;
