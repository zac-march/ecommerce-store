import React from "react";
import style from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={style.home}>
      <video autoPlay muted loop className={style.splashVideo}>
        <source
          src={require("../../resources/video/pyke.mp4")}
          type="video/mp4"
        />
      </video>
      <div className={style.introContainer}>
        <div className={style.intro}>
          <h1>ZMGames</h1>
          <p>
            Welcome to ZMGames, your one-stop destination for all your gaming
            needs. Explore our extensive collection of video games, from the
            latest releases to timeless classics. Let the adventure begin!
          </p>
          <Link to={"/store"}>
            <button className={"btn " + style.introBtn}>Browse</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
