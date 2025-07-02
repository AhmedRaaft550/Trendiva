"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MyClothesGlobal } from "../../../context/ClothesContext";
import styles from "./clothes.module.css";

const Clothes = () => {
  const { clothesData, error } = useContext(MyClothesGlobal);
  const router = useRouter();

  const handlePath = () => {
    router.push("/clothesProduct");
  };

  if (error) {
    return <h1 className={styles.loading}>Error: {error}</h1>;
  }

  if (!clothesData) {
    return <h1 className={styles.loading}>Loading clothes...</h1>;
  }

  if (clothesData.length === 0) {
    return <h1 className={styles.loading}>No clothes available.</h1>;
  }

  return (
    <section className={styles.newArrival} id="shop">
      <h1>🧥 New Arrivals</h1>

      <div className={styles.cardContainer}>
        {clothesData.slice(0, 5).map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                width={220}
                height={300}
                className={styles.cardImage}
                style={{ objectFit: "contain" }}
              />
              <div className={styles.imageOverlay}>
                <h2 className={styles.cardTitle}>
                  {item.title.length > 20
                    ? item.title.slice(0, 20) + "..."
                    : item.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={styles.btn}
        onClick={handlePath}
        aria-label="Shop all clothes"
      >
        Shop All
      </button>
    </section>
  );
};

export default Clothes;
