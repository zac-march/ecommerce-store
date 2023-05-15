import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductPage.module.css";
import { Link } from "react-router-dom";

const ProductPage = (props) => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  const { data } = props;

  useEffect(() => {
    setProduct(data.filter((entry) => entry.id === productId)[0]);
  }, []);

  return (
    <div className={style.page}>
      <div class={style.header}>
        <Link to="/store">
          <button className={style.returnBtn}>← Store</button>
        </Link>
        <h1>{product && product.title}</h1>
      </div>
      {product && (
        <div className={style.product}>
          <div className={style.images}>
            <img src={product.cover_image}></img>
          </div>
          <div className={style.info}>
            <h3>About</h3>
            <p>
              Mauris placerat dolor in neque mattis luctus. Pellentesque
              dignissim dui nisi, vel laoreet massa semper vitae. Maecenas id
              dignissim metus. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Quisque aliquam purus
              magna, varius faucibus sem placerat maximus. Nam dictum sit amet
              quam vel vulputate. Cras imperdiet, risus non tempor consectetur,
              arcu velit cursus nulla, at condimentum metus diam ac nisi. Morbi
              massa neque, ornare sed eros vel, posuere consectetur velit.
            </p>

            <div>
              <p>$70</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
