import React from "react";
import style from "./GameCard.module.css";

const GameCard = (props) => {
  const { data } = props;
  return (
    <div className={style.card}>
      <img alt="Game cover" src={data.background_image} />
      <div className={style.bottom}>
        <h3>{data.name}</h3>
        <ul className={style.platformList}>
          {data.parent_platforms.map((platform) => (
            <li>{platform}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameCard;
