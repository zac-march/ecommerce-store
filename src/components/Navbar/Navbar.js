import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={style.navbar}>
      <div>
        <Link to={"/"}>
          <button>ZMGames</button>
        </Link>
        <Link to={"/browse"}>
          <button>Browse</button>
        </Link>
      </div>
      <div>
        <button>zac-march</button>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
