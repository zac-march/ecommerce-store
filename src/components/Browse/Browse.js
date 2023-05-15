import React, { useEffect, useState } from "react";
import style from "./Browse.module.css";
import gameData from "../data/data.json";
import uniqid from "uniqid";
import GameCard from "../GameCard/GameCard";

const Browse = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getFilterData();
  }, []);

  const getFilterData = () => {
    console.log(gameData);
    const filteredData = gameData.results.map(
      ({ name, rating, background_image, parent_platforms }) => ({
        name,
        rating,
        background_image,
        parent_platforms,
      })
    );

    filteredData.forEach((data) => {
      data.parent_platforms = data.parent_platforms.map(
        (item) => item.platform.name
      );
    });

    console.log(filteredData);

    setGames(filteredData);
  };

  return (
    <div className={style.browse}>
      <div className={style.header}>
        <h1>Featured and recommended</h1>
        <p>
          Discover an extensive collection of video games, ranging from the
          latest releases to timeless classics.
        </p>
      </div>
      <div className={style.games}>
        {games.map((game) => (
          <GameCard key={uniqid()} data={game} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
