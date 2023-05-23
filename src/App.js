import "./App.css";
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

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  const addToCart = (productId) => {
    const product = products.filter((entry) => entry.id === productId)[0];

    setCart((prevCart) => {
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart(() => {
      return [...cart.filter((entry) => entry.id !== productId)];
    });
  };

  const toggleAddToCart = (productId) => {
    if (isInCart(productId)) {
      removeFromCart(productId);
    } else {
      addToCart(productId);
    }
  };

  const isInCart = (productId) => {
    const inCart = cart.some((product) => product.id === productId);
    return inCart;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Cart
          toggleCart={toggleCart}
          isOpen={isCartOpen}
          cart={cart}
          removeFromCart={removeFromCart}
        />
        <Navbar toggleCart={toggleCart} cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/store"
            exact
            element={
              <StorePage
                products={products}
                toggleAddToCart={toggleAddToCart}
                isInCart={isInCart}
              />
            }
          />
          <Route
            path="/store/:productId"
            element={
              <ProductPage
                products={products}
                toggleAddToCart={toggleAddToCart}
                isInCart={isInCart}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
