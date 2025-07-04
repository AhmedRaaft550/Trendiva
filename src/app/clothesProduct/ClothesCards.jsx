"use client";

import styles from "./clothesProduct.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ClothesCards = ({ clothesData }) => {
  const router = useRouter();

  const handleDetailsClick = (id) => {
    router.push(`/clothesProduct/${id}`);
  };

  return (
    <section className={styles.section} aria-label="New arrival clothes">
      <h1 className={styles.title}>NEW ARRIVAL</h1>
      <div className={styles.grid}>
        {clothesData.map((item) => (
          <article className={styles.card} key={item.id}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={`Image of ${item.title}`}
                width={200}
                height={200}
                className={styles.image}
                priority={true}
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>

            <div className={styles.info}>
              <h2 className={styles.productTitle}>{item.title}</h2>
              <p className={styles.productDesc}>
                {item.description.length > 60
                  ? item.description.slice(0, 30) + "..."
                  : item.description}
              </p>
              <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
            </div>

            <div className={styles.footer}>
              <button
                className={styles.btn}
                aria-label={`View details of ${item.title}`}
                onClick={() => handleDetailsClick(item.id)}
              >
                Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClothesCards;
