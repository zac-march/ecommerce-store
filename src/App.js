import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import StorePage from "./pages/StorePage/StorePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./CartContext";
import { ProductProvider } from "./ProductContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ProductProvider>
          <CartProvider>
            <Cart />
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/store" exact element={<StorePage />} />
              <Route path="/store/:productId" element={<ProductPage />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
