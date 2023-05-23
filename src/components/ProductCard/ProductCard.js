import React from "react";
import style from "./ProductCard.module.css";
import uniqid from "uniqid";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

const ProductCard = (props) => {
  const { product, toggleAddToCart, isInCart } = props;

  return (
    <div id={product.id} className={style.card}>
      <img alt="Game cover" src={product.cover_image} />
      <div className={style.bottom}>
        <div className={style.addToCartContainer}>
          <AddToCartBtn
            toggleAddToCart={toggleAddToCart}
            isInCart={isInCart}
            productId={product.id}
          />
          <h4>${product.price / 100}</h4>
        </div>
        <h3>{product.title}</h3>
        <ul className={style.platformList}>
          {product.platforms.map((platform) => (
            <li key={uniqid()}>{platform}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
