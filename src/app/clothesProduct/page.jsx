"use client";
import React, { useContext } from "react";
import { MyClothesGlobal } from "../../../context/ClothesContext";
import styles from "./clothesProduct.module.css";
import ClothesCards from "./ClothesCards";

const ClothesProduct = () => {
  const { clothesData, error } = useContext(MyClothesGlobal);

  if (error) {
    return (
      <p className="text-red-500 text-center mt-10">
        Error While Laoding 404 ...
      </p>
    );
  }

  if (!Array.isArray(clothesData) || clothesData.length === 0) {
    return (
      <section className={styles.grid}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`${styles.card} animate-pulse bg-gray-100 h-80`}
          />
        ))}
      </section>
    );
  }

  return <ClothesCards clothesData={clothesData} />;
};

export default ClothesProduct;
