"use client";

import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const ProductContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_API);
      if (!res.ok) throw new Error("Error fetching products");
      const json = await res.json();
      setData(json.products);
    } catch (err) {
      setError("Failed to load products.");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default ProductContext;
