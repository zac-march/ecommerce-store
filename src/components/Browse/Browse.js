import React, { useEffect, useState } from "react";
import style from "./Browse.module.css";
import gameData from "../data/data.json";
import uniqid from "uniqid";

const Browse = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    console.log(gameData);
    const filteredData = gameData.results.map(
      ({ name, rating, background_image }) => ({
        name,
        rating,
        background_image,
      })
    );
    console.log(filteredData);

    setGames(filteredData);
  };

  return (
    <div className={style.browse}>
      <div className={style.header}>
        <h1>Browse</h1>
        <p>
          Discover an extensive collection of video games, ranging from the
          latest releases to timeless classics.
        </p>
      </div>
      <div>
        {games.map((game) => (
          <div>
            <img alt="Game cover" src={game.background_image} />
            <h2 key={uniqid()}>{game.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
