import React from "react";
import style from "./IconButton.module.css";

const IconButton = (props) => {
  const { icon, title, callback } = props;

  return (
    <button className={`btn ${style.iconBtn}`} onClick={callback}>
      <img alt={`${title} icon`} src={icon} />
      <p>{title}</p>
    </button>
  );
};

export default IconButton;
