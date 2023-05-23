import React, { createContext, useEffect, useState } from "react";
import productData from "./data/data.json";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const filteredData = productData.results.map(
      ({
        name,
        background_image,
        parent_platforms,
        slug,
        short_screenshots,
      }) => ({
        title: name,
        cover_image: background_image,
        platforms: parent_platforms,
        id: slug,
        screenshots: short_screenshots,
      })
    );

    filteredData.forEach((entry) => {
      entry.platforms = entry.platforms.map((item) => item.platform.name);
      entry["price"] =
        Math.round((Math.random() * (10000 - 5000) + 500) / 500) * 500;
    });
    setProducts(filteredData);
  };

  const contextValue = {
    products,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
