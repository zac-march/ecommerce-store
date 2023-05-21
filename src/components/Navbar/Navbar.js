import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { toggleCart, cartCount } = props;
  return (
    <div className={style.navbar}>
      <div>
        <Link to={"/"}>
          <button>ZMGames</button>
        </Link>
        <Link to={"/store"}>
          <button>Browse</button>
        </Link>
      </div>
      <div>
        <button>zac-march</button>
        <button onClick={toggleCart}>
          Cart{cartCount > 0 && ": " + cartCount}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
