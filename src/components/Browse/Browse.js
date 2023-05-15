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
      ({ name, background_image, parent_platforms }) => ({
        title: name,
        cover_image: background_image,
        platforms: parent_platforms,
      })
    );

    filteredData.forEach((data) => {
      data.platforms = data.platforms.map((item) => item.platform.name);
      data["id"] = "game_" + uniqid();
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
