import React, { createContext, useContext, useState } from "react";
import { ProductContext } from "./ProductContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsCartOpen] = useState(false);
  const { products } = useContext(ProductContext);

  const addToCart = (productId) => {
    const product = products.filter((item) => item.id === productId)[0];
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((entry) => entry.id !== productId));
  };

  const toggleCart = () => {
    console.log("Hello");
    setIsCartOpen(!isOpen);
  };

  const isInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const toggleAddToCart = (productId) => {
    if (isInCart(productId)) {
      removeFromCart(productId);
    } else {
      addToCart(productId);
    }
  };

  const contextValue = {
    cart,
    isOpen,
    toggleCart,
    isInCart,
    removeFromCart,
    toggleAddToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
