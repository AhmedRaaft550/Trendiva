"use client";
import React, { useContext } from "react";
import { MyClothesGlobal } from "../../../context/ClothesContext";
import styles from "./clothesProduct.module.css";
import ClothesCards from "./ClothesCards";

const ClothesProduct = () => {
  const { clothesData, error } = useContext(MyClothesGlobal);

  if (error) {
    return <p className="text-red-500 text-center mt-6 font-bold">{error}</p>;
  }

  if (!clothesData || clothesData.length === 0) {
    return (
      <p className="text-red-500 text-center mt-6 font-bold">Loading ...</p>
    );
  }

  return <ClothesCards clothesData={clothesData} />;
};

export default ClothesProduct;
