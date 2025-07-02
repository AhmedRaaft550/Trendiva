"use client";
import { useContext } from "react";
import styles from "./landing.module.css";
import { GlobalContext } from "../../../context/ProductContext";
import Image from "next/image";
import Link from "next/link";
import { FaShippingFast } from "react-icons/fa";

const NewArrival = () => {
  const data = useContext(GlobalContext);

  if (!data) {
    return <p className={styles.loading}>Loading new arrivals...</p>;
  }

  return (
    <section className={styles.newArrival} aria-label="New arrivals section">
      <h1 className={styles.sectionTitle}>
        <FaShippingFast className={styles.deliveryIcon} aria-hidden="true" />
        30 MINUTES DELIVERY
      </h1>

      <div className={styles.cardContainer}>
        {data.slice(6, 10).map((x) => (
          <div className={styles.card} key={x.id}>
            <div className={styles.imageWrapper}>
              <Image
                src={x.images?.[0]}
                alt={x.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 220px"
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
              <div className={styles.imageOverlay}>
                <h2>{x.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href="/product">
        <button type="button" className={styles.newArrivalBtn}>
          Show More
        </button>
      </Link>
    </section>
  );
};

export default NewArrival;
