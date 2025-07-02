"use client"

import { createContext, useState, useEffect } from 'react';

export const GlobalCartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <GlobalCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </GlobalCartContext.Provider>
  );
};

export default CartProvider;
