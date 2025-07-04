"use client";

import React, { createContext, useEffect, useState } from "react";

export const MyClothesGlobal = createContext();

const ClothesContext = ({ children }) => {
  const [clothesData, setClothesData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        setLoading(true);
        const res = await fetch(process.env.NEXT_PUBLIC_CLOTHES_API);
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setClothesData(json);
      } catch (err) {
        setError("Error 404, Please try again ...");
      } finally {
        setLoading(false);
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
