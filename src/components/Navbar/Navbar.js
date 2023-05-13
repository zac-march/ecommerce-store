import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navLeft}>
        <button>ZMGames</button>
        <button>Browse</button>
      </div>
      <div className={style.navRight}>
        <button>zac-march</button>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
