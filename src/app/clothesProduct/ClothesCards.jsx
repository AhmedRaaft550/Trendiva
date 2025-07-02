"use client";

import styles from "./clothesProduct.module.css";
import Link from "next/link";
import Image from "next/image";

const ClothesCards = ({ clothesData }) => {
  return (
    <section className={styles.section} aria-label="New arrival clothes">
      <h1 className={styles.title}>NEW ARRIVAL</h1>
      <div className={styles.grid}>
        {clothesData.map((item, i) => (
          <article className={styles.card} key={item.id}>
            <Link
              href={`/clothesProduct/${item.id}`}
              className="block"
              aria-label={`View ${item.title}`}
            >
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
                  aria-label={`Details of ${item.title}`}
                >
                  Details
                </button>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClothesCards;
