import React from "react";
import style from "./ProductCard.module.css";
import uniqid from "uniqid";

const ProductCard = (props) => {
  const { data } = props;
  return (
    <div id={data.id} className={style.card}>
      <img alt="Game cover" src={data.cover_image} />
      <div className={style.bottom}>
        <h3>{data.title}</h3>
        <ul className={style.platformList}>
          {data.platforms.map((platform) => (
            <li key={uniqid()}>{platform}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
