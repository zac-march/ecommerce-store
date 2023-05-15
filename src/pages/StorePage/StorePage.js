import React, { useEffect, useState } from "react";
import style from "./StorePage.module.css";
import productData from "../../data/data.json";
import uniqid from "uniqid";
import ProductCard from "../../components/ProductCard/ProductCard";

const StorePage = () => {
  const [products, setGames] = useState([]);

  useEffect(() => {
    getFilteredData();
  }, []);

  const getFilteredData = () => {
    console.log(productData);
    const filteredData = productData.results.map(
      ({ name, background_image, parent_platforms }) => ({
        title: name,
        cover_image: background_image,
        platforms: parent_platforms,
      })
    );

    filteredData.forEach((data) => {
      data.platforms = data.platforms.map((item) => item.platform.name);
      data["id"] = "product_" + uniqid();
    });

    console.log(filteredData);

    setGames(filteredData);
  };

  function handleProduct() {}

  return (
    <div className={style.browse}>
      <div className={style.header}>
        <h1>Featured and recommended</h1>
        <p>
          Discover an extensive collection of video games, ranging from the
          latest releases to timeless classics.
        </p>
      </div>
      <div className={style.games}>
        {products.map((game) => (
          <ProductCard key={uniqid()} data={game} onClick={handleProduct} />
        ))}
      </div>
    </div>
  );
};

export default StorePage;
