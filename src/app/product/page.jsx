"use client";

import { useContext } from "react";
import { GlobalContext } from "../../../context/ProductContext";
import ProductCardLanding from "./ProductCardLanding";
import styles from "../../Components/landing/landing.module.css";

const Product = () => {
  const data = useContext(GlobalContext);

  if (!data) {
    return (
      <section
        className={styles.cardContainer}
        aria-label="Loading products"
        role="status"
        aria-live="polite"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`${styles.card} animate-pulse bg-gray-100 h-96`}
            aria-hidden="true"
          />
        ))}
      </section>
    );
  }

  if (data.length === 0) {
    return (
      <p className="text-center py-10">No products available at the moment.</p>
    );
  }

  return <ProductCardLanding data={data} styles={styles} />;
};

export default Product;
