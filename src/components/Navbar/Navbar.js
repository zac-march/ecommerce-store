import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";

const Navbar = (props) => {
  const { toggleCart, cart } = useContext(CartContext);
  const [cartCount, setCartCount] = useState();

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

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
        <button className={`btn ${style.ghBtn}`}>zac-march</button>
        <button className="btn" onClick={toggleCart}>
          Cart{cartCount > 0 && ": " + cartCount}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
