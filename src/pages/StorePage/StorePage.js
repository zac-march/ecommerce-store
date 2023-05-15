import React from "react";
import style from "./StorePage.module.css";
import uniqid from "uniqid";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const StorePage = (props) => {
  const { data } = props;

  function handleProduct() {}

  return (
    <div className={style.store}>
      <div className={style.header}>
        <h1>Featured and recommended</h1>
        <p>
          Discover an extensive collection of video games, ranging from the
          latest releases to timeless classics.
        </p>
      </div>
      <div className={style.products}>
        {data.map((product) => (
          <Link
            key={uniqid()}
            to={`/store/${product.id}`}
            className="routeLink"
          >
            <ProductCard data={product} onClick={handleProduct} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StorePage;
