"use client";

import React, { createContext, useEffect, useState } from "react";

export const MyClothesGlobal = createContext();

const ClothesContext = ({ children }) => {
  const [clothesData, setClothesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_CLOTHES_API);
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setClothesData(json);
      } catch (err) {
        console.error("Error fetching clothes:", err);
        setError(err.message);
      }
    };

    fetchClothes();
  }, []);

  return (
    <MyClothesGlobal.Provider value={{ clothesData, error }}>
      {children}
    </MyClothesGlobal.Provider>
  );
};

export default ClothesContext;
