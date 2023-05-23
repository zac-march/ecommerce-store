import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { toggleCart, cartCount } = props;
  return (
    <div className={style.navbar}>
      <div>
        <Link to={"/"}>
          <button className="btn">ZMGames</button>
        </Link>
        <Link to={"/store"}>
          <button className="btn">Browse</button>
        </Link>
      </div>
      <div>
        <button className="btn">zac-march</button>
        <button className="btn" onClick={toggleCart}>
          Cart{cartCount > 0 && ": " + cartCount}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
