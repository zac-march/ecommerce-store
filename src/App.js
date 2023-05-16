import "./App.css";
import uniqid from "uniqid";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import StorePage from "./pages/StorePage/StorePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import productData from "./data/data.json";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
    console.log(filteredData);
    setProducts(filteredData);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  function addToCart(e) {
    const product = products.filter(
      (entry) => entry.id === e.target.dataset.id
    )[0];

    setCart((prevCart) => {
      return [...prevCart, product];
    });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Cart toggleCart={toggleCart} isOpen={isCartOpen} cart={cart} />
        <Navbar toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" exact element={<StorePage data={products} />} />
          <Route
            path="/store/:productId"
            element={<ProductPage data={products} addToCart={addToCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
