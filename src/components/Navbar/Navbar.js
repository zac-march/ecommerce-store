import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import gamepadIcon from "../../resources/images/game.png";
import githubIcon from "../../resources/images/github.png";
import cartIcon from "../../resources/images/cart.png";
import homeIcon from "../../resources/images/home.png";
import IconButton from "../IconButton/IconButton";

const Navbar = (props) => {
  const { toggleCart, cart } = useContext(CartContext);
  const [cartText, setCartText] = useState();

  useEffect(() => {
    let text = cart.length > 0 ? ": " + cart.length : "";
    setCartText(text);
  }, [cart]);

  return (
    <div className={style.navbar}>
      <div>
        <Link className="routeLink" to={"/"}>
          <IconButton title="Home" icon={homeIcon} />
        </Link>
        <Link className="routeLink" to={"/store"}>
          <IconButton title="Browse" icon={gamepadIcon} />
        </Link>
      </div>
      <div>
        <button className={`btn ${style.ghBtn}`}></button>
        <a
          className="routeLink"
          target="_blank"
          href="https://github.com/zac-march"
          rel="noreferrer"
        >
          <IconButton title="zac-march" icon={githubIcon} />
        </a>
        <IconButton
          title={"Cart" + cartText}
          icon={cartIcon}
          callback={toggleCart}
        />
      </div>
    </div>
  );
};

export default Navbar;
