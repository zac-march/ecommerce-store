import "./App.css";
import uniqid from "uniqid";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import StorePage from "./pages/StorePage/StorePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import productData from "./data/data.json";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    filterData();
  }, []);

  const filterData = () => {
    const filteredData = productData.results.map(
      ({ name, background_image, parent_platforms }) => ({
        title: name,
        cover_image: background_image,
        platforms: parent_platforms,
      })
    );

    filteredData.forEach((entry) => {
      entry.platforms = entry.platforms.map((item) => item.platform.name);
      entry["id"] = uniqid();
    });

    setProducts(filteredData);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" exact element={<StorePage data={products} />} />
          <Route
            path="/store/:productId"
            element={<ProductPage data={products} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
