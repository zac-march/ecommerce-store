import React, { useContext } from "react";
import style from "./StorePage.module.css";
import uniqid from "uniqid";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { ProductContext } from "../../ProductContext";

const StorePage = (props) => {
  const { products } = useContext(ProductContext);

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
        {products &&
          products.map((product) => (
            <Link
              key={uniqid()}
              to={`/store/${product.id}`}
              className="routeLink"
            >
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default StorePage;
