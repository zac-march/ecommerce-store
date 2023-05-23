import React, { useEffect, useState } from "react";
import style from "./AddToCartBtn.module.css";

const AddToCartBtn = (props) => {
  const { isInCart, toggleAddToCart, productId } = props;
  const [inCart, setInCart] = useState();

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
      {!inCart ? "+ Add to Cart" : "✓ Added"}
    </button>
  );
};

export default AddToCartBtn;
